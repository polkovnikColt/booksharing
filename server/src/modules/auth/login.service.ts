import {CommonUser} from "../../entity/user.entity";
import {LoginResponseType, UserInterface} from "../../types/types";
import {getManager} from "typeorm/index";
import {JwtService} from "@nestjs/jwt";
import {BadRequestException, ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import {jwtconst} from "./constant/jwt.constant";
import {Preference} from "../../entity/preference.entity";

@Injectable()
export class LoginService {
    private readonly manager;

    constructor(private readonly jwtService: JwtService) {
        this.manager = getManager();
    }

    private async validateUser(user: UserInterface): Promise<UserInterface | null> {
        const candidate = await this.manager.findOne(CommonUser, {email: user.email});
        if (!candidate) {
            return null;
        }
        const isMatch = await bcrypt.compare(user.password, candidate.password);
        if (isMatch) {
            return candidate;
        }
        return null;
    }

    async login(body: UserInterface): Promise<LoginResponseType> {
        const user: UserInterface = await this.validateUser(body);
        if (user) {
            return {
                token: this.jwtService.sign({user: user.id}),
                user: user
            }
        } else {
            throw new UnauthorizedException();
        }
    }

    async registration(user: UserInterface): Promise<LoginResponseType> {
        const candidate = await this.manager.findOne(CommonUser, {email: user.email});
        if (!candidate) {
            const hash = await bcrypt.hash(user.password, jwtconst.salt)
            user.password = hash;
            await this.manager.insert(CommonUser, user);
            const current = await this.manager.findOne(CommonUser, {where: {email: user.email}});
            await this.manager.insert(Preference, {author: [], genre: [], user: current.id});
            return {
                token: this.jwtService.sign({user: user.id}),
                user: user
            }
        } else {
            throw new BadRequestException();
        }
    }

}
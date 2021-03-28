import {CommonUser} from "../entity/user.entity";
import {LoginResponseType, UserInterface} from "../types/types";
import {getManager} from "typeorm/index";
import {JwtService} from "@nestjs/jwt";
import {ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
    private readonly manager;

    constructor(private readonly jwtService: JwtService) {
        this.manager = getManager();
    }

    private async validateUser(user: UserInterface): Promise<UserInterface | null> {
       const candidate = await this.manager.findOne(CommonUser,{email: user.email});
       if(!candidate){
           return null;
       }
       if(candidate.password === user.password){
           return candidate;
       }
       return null;
    }

    async login(body: UserInterface): Promise<LoginResponseType> {
        const user:UserInterface = await this.validateUser(body);
        if(user){
            return {
                token: this.jwtService.sign({user:user.id}),
                user:user
            }
        }
        else{
            throw new UnauthorizedException();
        }
    }

    async registration(user: UserInterface): Promise<LoginResponseType> {
        const candidate = await this.manager.findOne(CommonUser, {email: user.email});
        if(candidate){
            throw new ForbiddenException();
        }
        else{
            await this.manager.insert(CommonUser,user);
            return{
                token: this.jwtService.sign({user:user.id}),
                user: user
            }
        }
    }

}
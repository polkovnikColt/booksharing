import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { LoginService} from '../login.service';
import { ConfigService } from '@nestjs/config';
import {jwtconst} from "../constant/jwt.constant";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: LoginService,
        private configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtconst.secret,
        });

    }
    async validate(payload: any): Promise<any> {
        const {iat, exp, ...res} = payload;
        return res;
    }

}
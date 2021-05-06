import { Module } from '@nestjs/common';
import {JwtShared} from "../auth/jwt/jwt.module";
import {PreferenceController} from "./preference.controller";
import {PreferenceService} from "./preference.service";


@Module({
    imports: [JwtShared],
    controllers: [PreferenceController],
    providers: [PreferenceService],
})
export class PreferenceModule {}
import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {PreferenceService} from "./preference.service";
import {PreferenceInterface} from "../../types/types";

@Controller('preference')
export class PreferenceController {
    constructor(private readonly preferenceService: PreferenceService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUserPreference(@Param("id") id): Promise<PreferenceInterface> {
        return this.preferenceService.getUserPreference(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    addToPreference(@Param("id") id,@Req() req) {

    }

}
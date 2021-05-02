import {Controller, Get, HttpCode, HttpStatus, Post, Redirect, Req} from "@nestjs/common";
import {LoginResponseType} from "../../types/types";
import {LoginService} from "./login.service";

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) {
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    login(@Req() req): Promise<LoginResponseType> {
        return this.loginService.login(req.body);
    }

    @Get('load')
    @HttpCode(HttpStatus.OK)
    loginOnLoad(@Req() req):Promise<LoginResponseType>{
        return this.loginService.login(req.body);
    }

    @Post('registration')
    @HttpCode(HttpStatus.CREATED)
    @Redirect('http://localhost:3000/',301)
    registration(@Req() req): Promise<LoginResponseType> {
        return this.loginService.registration(req.body);
    }

}
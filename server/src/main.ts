import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {init} from "./config/init";
import {urlencoded,json} from 'express'

async function bootstrap() {
    try {
        await init();
        const app = await NestFactory.create(AppModule);
        app.use(json({ limit: '50mb' }));
        app.use(urlencoded({ extended: true, limit: '50mb' }));
        await app.listen(4000);
    } catch (e) {
        console.log(e);
    }
}

bootstrap();

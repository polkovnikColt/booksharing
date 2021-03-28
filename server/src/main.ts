import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {init} from "./config/init";

async function bootstrap() {
    try {
        await init();
        const app = await NestFactory.create(AppModule);
        await app.listen(4000);
    } catch (e) {
        console.log(e);
    }
}

bootstrap();

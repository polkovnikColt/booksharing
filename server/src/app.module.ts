import {Module} from '@nestjs/common';
import {BookModule} from "./modules/book/book.module";
import {UserModule} from "./modules/user/user.module";
import {LoginModule} from "./modules/auth/login.module";
import {AdminModule} from "./modules/admin/admin.module";


@Module({
    imports: [
        BookModule,
        UserModule,
        LoginModule,
        AdminModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}

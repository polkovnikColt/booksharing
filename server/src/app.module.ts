import {Module} from '@nestjs/common';
import {BookModule} from "./book/book.module";
import {UserModule} from "./user/user.module";
import {LoginModule} from "./auth/login.module";
import {AdminModule} from "./admin/admin.module";


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

import {Module} from '@nestjs/common';
import {BookModule} from "./modules/book/book.module";
import {UserModule} from "./modules/user/user.module";
import {LoginModule} from "./modules/auth/login.module";
import {AdminModule} from "./modules/admin/admin.module";
import {PreferenceModule} from "./modules/preference/preferece.module";
import {MessageModule} from "./modules/messages/message.module";
import {CommentModule} from "./modules/comment/comment.module";


@Module({
    imports: [
        BookModule,
        UserModule,
        LoginModule,
        AdminModule,
        PreferenceModule,
        MessageModule,
        CommentModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}

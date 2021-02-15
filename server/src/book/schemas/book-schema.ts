import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    photo: string;

    @Prop()
    title: string;

    @Prop()
    body: string;

    @Prop()
    dateOfReturn: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
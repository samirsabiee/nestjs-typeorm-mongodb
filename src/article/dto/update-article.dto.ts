import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import {IsString} from "class-validator";

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @IsString()
    title: string;

    @IsString()
    description: string;
}

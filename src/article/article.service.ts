import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Article} from "./entities/article.entity";
import {ArticleRepository} from "./repositories/article.repository";
import {UpdateResult} from "typeorm";

@Injectable()
export class ArticleService {
  constructor(
      @InjectRepository(ArticleRepository)
      private articleRepository: ArticleRepository
  ) {}
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.save(createArticleDto);
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleRepository.findOne(id);
  }

  update(id: string, updateArticleDto: UpdateArticleDto): Promise<UpdateResult> {
    return this.articleRepository.update(id,updateArticleDto);
  }

  async remove(id: string) {
    return this.articleRepository.delete(id);
  }
}

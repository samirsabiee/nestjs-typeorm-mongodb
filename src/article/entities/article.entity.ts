import {Column, Entity, ObjectIdColumn} from "typeorm";

@Entity('articles')
export class Article {
    @ObjectIdColumn()
    _id:string;

    @Column()
    title: string;

    @Column()
    description: string;

    constructor(article?: Partial<Article>) {
        Object.assign(this, article);
    }
}

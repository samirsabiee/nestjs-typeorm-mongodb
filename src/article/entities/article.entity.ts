import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('articles')
export class Article {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;

    @Column()
    description: string;

    constructor(article?: Partial<Article>) {
        Object.assign(this, article);
    }
}

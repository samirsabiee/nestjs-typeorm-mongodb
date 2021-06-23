import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {join} from 'path';

export const mongodbConfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'nestJs-typeOrm-mongodb',
    useNewUrlParser: true,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    entities: [join(__dirname , '**/**/**.entity{.ts,.js}')]
}

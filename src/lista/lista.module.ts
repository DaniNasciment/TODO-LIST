import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lista } from "./entities/lista.entity";
 
 
@Module({
   
    imports:[TypeOrmModule.forFeature([Lista])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
 
})
export class ListaModule {}
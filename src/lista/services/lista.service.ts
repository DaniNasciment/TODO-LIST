import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lista } from "../entities/lista.entity";
 
 
@Injectable()
export class ListaService {
    constructor(
        @InjectRepository(Lista)
        private listaRepository: Repository<Lista>
 
    ){}
 
    async findAll(): Promise<Lista[]> {
       return await this.listaRepository.find();
    }
}

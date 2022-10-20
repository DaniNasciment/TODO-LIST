import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
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

    async create (lista: Lista): Promise<Lista>{
        return await this.listaRepository.save(lista);
    }

    async findById(id:number): Promise<Lista>{
        let lista = await this.listaRepository.findOne({
            where:{
                id
            },
        });

        if(!lista)
            throw new HttpException ('lista não encontrada!', HttpStatus.NOT_FOUND);

        return lista;
    }

    async update (lista: Lista): Promise<Lista>{
        let buscaLista: Lista = await this.findById(lista.id);
        
        if (!buscaLista || !lista.id)
             throw new HttpException('lista não encontrada!', HttpStatus.NOT_FOUND);
         
        return await this.listaRepository.save(lista);
 
     }
     
    async delete(id:number): Promise<DeleteResult>{

        let buscaLista = await this.findById(id);

        if(!buscaLista)
            throw new HttpException('Lista não encontrada!', HttpStatus.NOT_FOUND);

        return await this.listaRepository.delete(id);
    }
    
}



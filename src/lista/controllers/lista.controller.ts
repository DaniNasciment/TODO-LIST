import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Lista } from "../entities/lista.entity";
import { ListaService } from "../services/lista.service";
 
 
@Controller("/lista")
export class ListaController {
    constructor (private readonly listaService: ListaService) {}
 
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Lista[]>{
        return this.listaService.findAll();
    }
}

import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_lista"})
export class Lista {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length:255, nullable: false})
    fazer: string

    @IsNotEmpty()
    @Column({nullable: false})
    feito:boolean
    
    }


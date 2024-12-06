import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Genero")
export class Genero {
  @PrimaryGeneratedColumn({ type: "int", name: "idGenero" })
  idGenero!: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
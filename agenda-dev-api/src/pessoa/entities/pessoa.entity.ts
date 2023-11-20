/*
    Registre informações detalhadas sobre as pessoas, 
    incluindo nome, e-mail, data de nascimento, sexo, 
    profissão, empresa em que trabalha (se aplicável), 
    números de contato (WhatsApp e celular), endereço e foto.
*/
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pessoa extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')    
    id: string;

    @Column({ name: 'id_usuario', type: 'varchar', nullable: true, length: 100 })
    idUsuario: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'nome', type: 'varchar', nullable: true, length: 100 })
    nome: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'data_nascimento', type: 'timestamptz' })
    dataNascimento: Date;

    @Column({ name: 'sexo', type: 'varchar', length: 100 })
    sexo: string;

    @Column({ name: 'profissao', type: 'varchar', length: 100 })
    profissao: string;

    @Column({ name: 'empresa', type: 'varchar', length: 100 })
    empresa?: string;

    @Column({ name: 'whatsApp', type: 'varchar', length: 100 })
    whatsApp?: string;

    @Column({ name: 'celular', type: 'varchar', length: 100 })
    celular?: string;

    @Column({ name: 'cep', type: 'varchar', length: 100 })
    cep?: string;

    @Column({ name: 'logradouro', type: 'varchar', length: 100 })
    logradouro?: string;

    @Column({ name: 'bairro', type: 'varchar', length: 100 })
    bairro?: string;

    @Column({ name: 'cidade', type: 'varchar', length: 100 })
    cidade?: string;

    @Column({ name: 'uf', type: 'varchar', length: 100 })
    uf?: string;

    @Column({ name: 'numero', type: 'varchar', length: 100 })
    numero?: string;

    @Column({ name: 'complemento', type: 'varchar', length: 500 })
    complemento?: string;

    @Column({ name: 'foto', type: 'varchar', length: 100 })
    foto?: string;    
}
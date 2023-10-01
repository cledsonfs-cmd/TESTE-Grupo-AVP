import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePessoaDto {
 @IsString()
 @IsNotEmpty()
 nome: string;

 @IsEmail()
 @IsNotEmpty()
 email: string;

 @IsDate()
 @IsNotEmpty()
 dataNascimento: Date;

 @IsString()
 @IsNotEmpty()
 sexo: string;

 @IsString()
 @IsNotEmpty()
 profissao: string;

 @IsOptional()
 @IsString()
 empresa: string;

 @IsOptional()
 @IsString()
 whatsApp: string;

 @IsOptional()
 @IsString()
 celular: string;

 @IsOptional()
 @IsString()
 cep?: string;

 @IsOptional()
 @IsString()
 logradouro: string;

 @IsOptional()
 @IsString()
 bairro: string;

 @IsOptional()
 @IsString()
 cidade: string;

 @IsOptional()
 @IsString()
 uf: string;

 @IsOptional()
 @IsString()
 numero: string;

 @IsOptional()
 @IsString()
 complemento: string;

 @IsOptional()
 @IsString()
 foto: string;

}










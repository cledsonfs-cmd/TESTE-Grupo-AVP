import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDto {
 @IsString()
 @IsNotEmpty()
 razaoSocial: string;

 @IsString()
 @IsNotEmpty()
 nomeFantasia: string;

 @IsEmail()
 @IsNotEmpty()
 email: string;

 @IsString()
 @IsNotEmpty()
 cnpj: string;

 @IsString()
 @IsNotEmpty()
 responsavel: string;

 @IsOptional()
 @IsString()
 whatsApp: string;

 @IsOptional()
 @IsString()
 celular: string;

 @IsOptional()
 @IsString()
 telefoneFixo: string;

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
 logo: string;

}
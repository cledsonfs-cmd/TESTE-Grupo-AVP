import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private pessoaService: PessoaService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const pessoa = await this.pessoaService.findByUser(user.id);

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload)

    return {
      uid: user.id,
      email: user.email,
      nome: pessoa.nome,
      token,
      provedor: '',
      imagemUrl: pessoa.foto
    };
  }
}
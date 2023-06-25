import { Injectable } from '@nestjs/common';
import { Usuarioru } from 'src/usuarioru/entities/usuarioru.entity';
import { UsuarioruService } from 'src/usuarioru/usuarioru.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(private readonly usuarioruService: UsuarioruService){}

  async validateUser(email: string, password: string): Promise<Usuarioru> {
    const user = await this.usuarioruService.findEmail(email) 

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.senha);

      if (isPasswordValid) {
        return {
          ...user,
          senha: undefined,
        };
      }
    }
    throw new Error("Email ou senha incorretos");
  }
}
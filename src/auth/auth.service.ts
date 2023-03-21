import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Costumer } from 'src/costumers/entities/costumer.entity';
import { UnauthorizedException } from 'src/utils/custom-http-error.util';
import { Ok } from 'src/utils/custom-http-success';
import { errorHandlingUtil } from 'src/utils/error-handling.util';
import { compare } from 'src/utils/hash.util';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(Costumer)
        private costumerRepository: Repository<Costumer>,
    ) {}

    async login({ email, password }) {
        try {
          const user = await this.costumerRepository.findOneBy({ email });
        
          if (!user && !user.password !== password) {
            throw new UnauthorizedException('Credenciais inválidas ou o usuário não existe.');
          }
          
          const validCredentials = await compare({
            password,
            hashedPassword: user.password,
          });
    
          if (!validCredentials) {
            throw new UnauthorizedException('Credenciais inválidas ou o usuário não existe.');
          }

          const token =  this.jwtService.sign({ user })
          return Ok({
            message: 'Login efetuado com sucesso!',
            data: { token },
          });
        } catch (error) {
          return errorHandlingUtil(error);
        }
      
    } 
}
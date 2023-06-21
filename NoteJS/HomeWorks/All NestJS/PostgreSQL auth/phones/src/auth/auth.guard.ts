import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private jwtService: JwtService,
    private usersService: UserService,
    private configService: ConfigService,) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.extractToken(request);
      console.log('Secret', this.configService.get('ACCESS_TOKEN_SECRET'));
      console.log('Token', token);
    } catch (error) {
      
    }
    return true;
  }

  private extractToken(request:Request){
    const token = request.json();
    return token;
    }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { GLOBALS } from '../constants/globals';

@Injectable()
export class LanguageInterceptors implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const lang = context.switchToHttp().getRequest().headers.lang;
    if (!lang) {
      context.switchToHttp().getRequest().lang = GLOBALS.DEFAULT_LANGUAGE;
    } else {
      context.switchToHttp().getRequest().lang = lang;
    }
    return next.handle();
  }
}

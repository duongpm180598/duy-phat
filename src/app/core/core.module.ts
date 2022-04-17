import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixApiInterceptor } from './interceptors/prefix.interceptor';
import { TokenApiInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PrefixApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}

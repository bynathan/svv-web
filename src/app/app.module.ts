import { LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import localept from '@angular/common/locales/pt'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PublicModule } from './modules/public/public.module'
import { PrivateModule } from './modules/private/private.module'

/** Setando configuração local para pt-br */
registerLocaleData(localept, 'pt')

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule, BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, PublicModule, PrivateModule, FormsModule ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

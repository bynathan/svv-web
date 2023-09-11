import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicRoutingModule } from './public-routing.module'
import { PublicComponent } from './public.component'
import { LoginComponent } from './pages/login/login.component'
import { RecoverPasswordComponent } from './pages/login/components/recover-password/recover-password.component'
import { ModalModule } from 'ngx-bootstrap/modal'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PublicRoutingModule, ModalModule.forRoot(), FormsModule],
  declarations: [PublicComponent, LoginComponent, RecoverPasswordComponent],
})
export class PublicModule {}

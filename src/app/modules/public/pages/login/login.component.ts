import { Component, OnInit } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** Condição para ver ou não a senha */
  public passwordMode = true

  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
  ) {}

  ngOnInit(): void {}

  /**
   * Abrir modal
   *
   * @author Nathan da Silva Lira
   */
  public openRecoverPasswordModal(): void {
    this.modalRef = this.modalService.show(
      RecoverPasswordComponent,
      Object.assign({}, { class: 'recover-modal' }),
    )
  }

  /**
   * Mascara CPF.
   *
   * @author Nathan da Silva Lira
   */

  cpfMask(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 6) {
      value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length <= 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    }

    event.target.value = value;
  }
}

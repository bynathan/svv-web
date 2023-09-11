import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  ngOnInit(): void {
    this.topPage
  }

  constructor() {
    this.pttForm = new FormGroup({
      ptt: new FormControl('')
    });
  }

  /**
  * @description Inputs select.
  *
  * @author Nathan da Silva Lira
  */

  /*FORM KEY*/
  pttForm: FormGroup;

  ptt = [
    'Administrativo',
    'Guarda 2ª classe',
    'Guarda 1ª classe',
    'Subinspetor',
    'Inspetor 2ª classe',
    'Inspetor 1ª classe',
    'Inspetor especial'
  ];

  public onClearPttForm(event: any): void {
    this.pttForm.patchValue({ key: event });
  };

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

  /**
  * @description Mover para o topo da pagina.
  *
  * @author Nathan da Silva Lira
  */

  public topPage(): void{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}

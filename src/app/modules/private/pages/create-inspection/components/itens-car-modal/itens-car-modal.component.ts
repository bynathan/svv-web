import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-itens-car-modal',
  templateUrl: './itens-car-modal.component.html',
  styleUrls: ['./itens-car-modal.component.scss']
})
export class ItensCarModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}

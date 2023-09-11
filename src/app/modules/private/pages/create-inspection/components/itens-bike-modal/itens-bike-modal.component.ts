import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-itens-bike-modal',
  templateUrl: './itens-bike-modal.component.html',
  styleUrls: ['./itens-bike-modal.component.scss']
})
export class ItensBikeModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}

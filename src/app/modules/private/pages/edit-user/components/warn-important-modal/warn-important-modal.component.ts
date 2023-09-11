import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-warn-important-modal',
  templateUrl: './warn-important-modal.component.html',
  styleUrls: ['./warn-important-modal.component.scss']
})
export class WarnImportantModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}

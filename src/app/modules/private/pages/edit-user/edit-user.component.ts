import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { WarnImportantModalComponent } from './components/warn-important-modal/warn-important-modal.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    public modalRef: BsModalRef,
  ) {}

  ngOnInit(): void{
    this.topPage();
  }

  /**
  * @description Mover para o topo da pagina.
  *
  * @author Nathan da Silva Lira
  */

  public topPage(): void{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  /** Condição para ver ou não a senha */
  public passwordMode = true

  /**
  * Abrir modal
  *
  * @author Nathan da Silva Lira
  */
  public openWarningImportantModal(): void {
    this.modalRef = this.modalService.show(
      WarnImportantModalComponent,
      Object.assign({}, { class: 'warn-important-modal' }),
    )
  }
}

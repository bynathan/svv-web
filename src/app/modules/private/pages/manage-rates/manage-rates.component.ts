import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmDeleteModalComponent } from '../../shared/components/confirm-delete-modal/confirm-delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

@Component({
  selector: 'app-manage-rates',
  templateUrl: './manage-rates.component.html',
  styleUrls: ['./manage-rates.component.scss']
})
export class ManageRatesComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

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

  /**
  * @description Abrir modal itens.
  *
  * @author Nathan da Silva Lira
  */

  modalRef?: BsModalRef;

  public openDeleteConfirmModal(): void {
    this.modalRef = this.modalService.show(
      ConfirmDeleteModalComponent,
      Object.assign({}, { class: 'confirm-delete-modal' })
    );
  }

  public openEditModal(): void {
    this.modalRef = this.modalService.show(
      EditModalComponent,
      Object.assign({}, { class: 'edit-modal' })
    );
  }
}

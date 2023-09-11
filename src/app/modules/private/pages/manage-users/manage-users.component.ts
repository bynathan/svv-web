import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmDeleteModalComponent } from '../../shared/components/confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  ngOnInit(): void{
    this.topPage();
  }

  constructor(private modalService: BsModalService) {
    this.situationForm = new FormGroup({
      situation: new FormControl('')
    });

    this.conductorForm = new FormGroup({
      conductor: new FormControl('')
    });
  }

  /*FORM SITUATION*/
  situationForm: FormGroup;

  situation = [
    'Opções de situações'
  ];

  public onClearSituationForm(event: any): void {
    this.situationForm.patchValue({ situation: event });
  };

  /*FORM CONDUCTOR*/
  conductorForm: FormGroup;

  conductor = [
    'Opções de condutores'
  ];
  
  public onClearConductorForm(event: any): void{
    this.conductorForm.patchValue({ conductor: event });
  };


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

  public openConfirmDeleteModal(): void {
    this.modalRef = this.modalService.show(
      ConfirmDeleteModalComponent,
      Object.assign({}, { class: 'confirm-delete-modal' })
    );
  }
}

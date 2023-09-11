import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmDeleteModalComponent } from '../../shared/components/confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-manage-inspections',
  templateUrl: './manage-inspections.component.html',
  styleUrls: ['./manage-inspections.component.scss']
})
export class ManageInspectionsComponent implements OnInit {
  ngOnInit(): void{
    this.topPage();
  }

  constructor(private modalService: BsModalService) {
    this.veihcleForm = new FormGroup({
      veihcle: new FormControl('')
    });

    this.situationForm = new FormGroup({
      situation: new FormControl('')
    });

    this.agentForm = new FormGroup({
      agent: new FormControl('')
    });

    this.sinisterForm = new FormGroup({
      sinister: new FormControl('')
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
  veihcleForm: FormGroup;

  veihcle = [
    'Opções de veiculos'
  ];
  
  public onClearVeihcleForm(event: any): void{
    this.veihcleForm.patchValue({ veihcle: event });
  };

  /*FORM AGENT*/
  agentForm: FormGroup;

  agent = [
    'Opções de agentes'
  ];
    
  public onClearAgentForm(event: any): void{
    this.agentForm.patchValue({ agent: event });
  };

  /*FORM SINISTER*/
  sinisterForm: FormGroup;

  sinister = [
    'Opções de sinistro'
  ];
      
  public onClearSinisterForm(event: any): void{
    this.sinisterForm.patchValue({ sinister: event });
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

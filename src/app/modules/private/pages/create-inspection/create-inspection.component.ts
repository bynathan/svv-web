import { Component, OnInit} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ItensCarModalComponent } from './components/itens-car-modal/itens-car-modal.component';
import { ItensBikeModalComponent } from './components/itens-bike-modal/itens-bike-modal.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-create-inspection',
  templateUrl: './create-inspection.component.html',
  styleUrls: ['./create-inspection.component.scss']
})
export class CreateInspectionComponent implements OnInit{

  ngOnInit(): void{
    this.topPage();
  }

  constructor(private modalService: BsModalService) {
    this.keyForm = new FormGroup({
      key: new FormControl('')
    });

    this.cityForm = new FormGroup({
      city: new FormControl('')
    });

    this.stateForm = new FormGroup({
      state: new FormControl('')
    });

    this.accidentForm = new FormGroup({
      accident: new FormControl('')
    });

    this.victimsForm = new FormGroup({
      victims: new FormControl('')
    });

    this.victimsQuantityForm = new FormGroup({
      victimsQuantity: new FormControl('')
    });

    this.victimsFatalitiesForm = new FormGroup({
      victimsFatalities: new FormControl('')
    });

  }

  /**
  * @description Abrir modal itens.
  *
  * @author Nathan da Silva Lira
  */

  modalRef?: BsModalRef;

  public veichle:string = '';

  public alternateVeichle(veichle:string) :void{
    this.veichle = veichle;
  }

  public openItensModal(): void {
    if(this.veichle === 'car'){
      this.modalRef = this.modalService.show(
        ItensCarModalComponent,
        Object.assign({}, { class: 'itens-modal' })
      );
    }else if(this.veichle === 'bike'){
      this.modalRef = this.modalService.show(
        ItensBikeModalComponent,
        Object.assign({}, { class: 'itens-modal' })
      );
    }
  }

  public openAnddressModal(): void {
    this.modalRef = this.modalService.show(
      AddressModalComponent,
      Object.assign({}, { class: 'address-modal' })
    );
  }

  public openConfirmModal(): void {
    this.modalRef = this.modalService.show(
      ConfirmModalComponent,
      Object.assign({}, { class: 'confirm-modal' })
    );
  }

  /**
  * @description Condição e função do estagio do formulário.
  *
  * @author Nathan da Silva Lira
  */

  public formStage:number = 0; 

  public nextStage(stage:number): void{
    this.formStage = stage;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  /**
  * @description Limitar input em 17 caracteres e atualizar 0/17 para 17/17.
  *
  * @author Nathan da Silva Lira
  */

  inputText1: string = '';
  inputText2: string = '';

  public updateCounter(input:number): void{
    if(input == 1){
      this.inputText1 = this.inputText1.slice(0, 17);
    }else{
      this.inputText2 = this.inputText2.slice(0, 17);
    }
  }

  /**
  * @description Inputs select.
  *
  * @author Nathan da Silva Lira
  */

  /*FORM KEY*/
  keyForm: FormGroup;

  key = [
    'Sim',
    'Não'
  ];

  public onClearKeyForm(event: any): void {
    this.keyForm.patchValue({ key: event });
  };

  /*FORM STATE*/
  stateForm: FormGroup;

  state = [
    'Ceará'
  ];
  
  public onClearStateForm(event: any): void{
    this.stateForm.patchValue({ key: event });
  };

  /*FORM CITY*/
  cityForm: FormGroup;

  city = [
    'Canindé'
  ];
    
  public onClearCityForm(event: any): void{
    this.cityForm.patchValue({ key: event });
  };

  /*FORM ACIDDENT*/
  accidentForm: FormGroup;

  accident = [
    'Colisão',
    'Colisão em imóvel',
    'Atropelamento',
    'Colisão entre carros',
    'Colisão entre carro e moto',
    'Colisão entre motos'
  ];
    
  public onClearAccidentForm(event: any): void{
    this.accidentForm.patchValue({ key: event });
  };

  /*FORM VICTIMS*/
  victimsForm: FormGroup;

  victims = [
    'Sim',
    'Não'
  ];
      
  public onClearVictimsForm(event: any): void{
    this.victimsForm.patchValue({ key: event });
  };

  /*FORM VICTIMS*/
  victimsQuantityForm: FormGroup;

  victimsQuantity = [
    '1 pessoa',
    '2 pessoas',
    '3 pessoas',
    '4 pessoas',
    '5 pessoas ou mais',
    '10 pessoas ou mais',
    '20 pessoas ou mais',
    '50 pessoas ou mais',
    '100 pessoas ou mais',
    '200 pessoas ou mais',
    '500 pessoas ou mais',
    '1000 pessoa ou mais',
  ];
      
  public onClearVictimsQuantityForm(event: any): void{
    this.victimsQuantityForm.patchValue({ key: event });
  };

  /*FORM VICTIMS FATALITIES*/
  victimsFatalitiesForm: FormGroup;

  victimsFatalities = [
    'Não',
    '1 pessoa',
    '2 pessoas',
    '3 pessoas',
    '4 pessoas',
    '5 pessoas ou mais',
    '10 pessoas ou mais',
    '20 pessoas ou mais',
    '50 pessoas ou mais',
    '100 pessoas ou mais',
    '200 pessoas ou mais',
    '500 pessoas ou mais',
    '1000 pessoa ou mais',
  ];
      
  public onClearVictimsFatalitiesForm(event: any): void{
    this.victimsFatalitiesForm.patchValue({ key: event });
  };

  /**
  * @description Condições de exibição.
  *
  * @author Nathan da Silva Lira
  */

  public onAccident:boolean = false;

  public changeOnAccident(accident:boolean): void{
    this.onAccident = accident;
  }

  public onVictims:boolean = false;

  inputValue: string = '';

  public changeOnVictims(): void{
    if (this.inputValue === 'Sim') {
      this.onVictims = true;
    } else {
      this.onVictims = false;
    }
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

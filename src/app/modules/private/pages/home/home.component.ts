import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

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
  * @description Abrir e fechar o menu.
  *
  * @author Nathan da Silva Lira
  */

  public panelCollected:boolean = false;
  public panelCar:boolean = false;
  public panelBike:boolean = false;
  public panelRecurrent:boolean = false;
  public panelRelease:boolean = false;
  public panelMovement:boolean = false;
  public panelUpdate:boolean = false;
  public panelSeizure:boolean = false;

  public openPanel(panelName: string): void {
    if (panelName == 'Collected') {
      this.panelCollected = !this.panelCollected;
    } 
    else if (panelName == 'Car') {
      this.panelCar = !this.panelCar;
    } 
    else if (panelName == 'Bike') {
      this.panelBike = !this.panelBike;
    } 
    else if (panelName == 'Recurrent') {
      this.panelRecurrent = !this.panelRecurrent;
    } 
    else if (panelName == 'Release') {
      this.panelRelease = !this.panelRelease;
    } 
    else if (panelName == 'Movement') {
      this.panelMovement = !this.panelMovement;
    } 
    else if (panelName == 'Update') {
      this.panelUpdate = !this.panelUpdate;
    } 
    else if (panelName == 'Seizure') {
      this.panelSeizure = !this.panelSeizure;
    }
    this.clearOtherPanels(panelName);
  }

  private clearOtherPanels(currentPanelName: string): void {
    if (currentPanelName != 'Collected') {
      this.panelCollected = false;
    }
    if (currentPanelName != 'Car') {
      this.panelCar = false;
    }
    if (currentPanelName != 'Bike') {
      this.panelBike = false;
    }
    if (currentPanelName != 'Recurrent') {
      this.panelRecurrent = false;
    }
    if (currentPanelName != 'Release') {
      this.panelRelease = false;
    }
    if (currentPanelName != 'Movement') {
      this.panelMovement = false;
    }
    if (currentPanelName != 'Update') {
      this.panelUpdate = false;
    }
    if (currentPanelName != 'Seizure') {
      this.panelSeizure = false;
    }
  }
}

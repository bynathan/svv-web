import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrivateComponent } from './private.component'
import { PrivateRoutingModule } from './private-routing.module'
import { SharedModule } from './shared/shared.module'
import { FormsModule } from '@angular/forms'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateInspectionComponent } from './pages/create-inspection/create-inspection.component';
import { InpectionCreatedComponent } from './pages/create-inspection/components/inpection-created/inpection-created.component';
import { ItensCarModalComponent } from './pages/create-inspection/components/itens-car-modal/itens-car-modal.component';
import { ItensBikeModalComponent } from './pages/create-inspection/components/itens-bike-modal/itens-bike-modal.component';
import { AddressModalComponent } from './pages/create-inspection/components/address-modal/address-modal.component';
import { ConfirmModalComponent } from './pages/create-inspection/components/confirm-modal/confirm-modal.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ManageRatesComponent } from './pages/manage-rates/manage-rates.component';
import { EditModalComponent } from './pages/manage-rates/components/edit-modal/edit-modal.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { WarnImportantModalComponent } from './pages/edit-user/components/warn-important-modal/warn-important-modal.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ManageInspectionsComponent } from './pages/manage-inspections/manage-inspections.component';
import { MetricsComponent } from './pages/metrics/metrics.component';

@NgModule({
  imports: [RouterModule, CommonModule, PrivateRoutingModule, SharedModule, FormsModule, ModalModule.forRoot(), TypeaheadModule.forRoot(), ReactiveFormsModule],
  declarations: [PrivateComponent, HomeComponent, CreateInspectionComponent, InpectionCreatedComponent, ItensCarModalComponent, ItensBikeModalComponent, AddressModalComponent, ConfirmModalComponent, RegisterUserComponent, ManageRatesComponent, EditModalComponent, EditUserComponent, WarnImportantModalComponent, ManageUsersComponent, ManageInspectionsComponent, MetricsComponent],
})
export class PrivateModule {}

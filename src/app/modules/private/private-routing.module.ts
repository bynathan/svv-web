import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CreateInspectionComponent } from './pages/create-inspection/create-inspection.component'
import { InpectionCreatedComponent } from './pages/create-inspection/components/inpection-created/inpection-created.component'
import { RegisterUserComponent } from './pages/register-user/register-user.component'
import { ManageRatesComponent } from './pages/manage-rates/manage-rates.component'
import { EditUserComponent } from './pages/edit-user/edit-user.component'
import { PrivateComponent } from './private.component'
import { ManageUsersComponent } from './pages/manage-users/manage-users.component'
import { ManageInspectionsComponent } from './pages/manage-inspections/manage-inspections.component'
import { MetricsComponent } from './pages/metrics/metrics.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, },
      { path: 'create-inspection', component: CreateInspectionComponent },
      { path: 'created', component: InpectionCreatedComponent },
      { path: 'register-user', component: RegisterUserComponent },
      { path: 'manage-rates', component: ManageRatesComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-inspections', component: ManageInspectionsComponent },
      { path: 'metrics', component: MetricsComponent },
    ],
    component: PrivateComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

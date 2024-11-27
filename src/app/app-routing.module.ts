import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewsComponent } from './crews/crews.component';
import { CertificateTypeCreateComponent } from './crews/certificates/certificate-type-create/certificate-type-create.component';
import { CrewCardModalComponent } from './crews/crew-card-modal/crew-card-modal.component';

const routes: Routes = [
  { path: '', component: CrewsComponent },
  { path: 'certificate-type-create', component: CertificateTypeCreateComponent },
  { path: 'crew-card/:id', component: CrewCardModalComponent } // Assuming you pass an ID to view specific crew details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

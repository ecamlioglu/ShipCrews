import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewsComponent } from './crews/crews.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CrewCardModalComponent } from './crews/crew-card-modal/crew-card-modal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CrewAddModalComponent } from './crews/crew-add-modal/crew-add-modal.component';
import { FormsModule } from '@angular/forms';
import { CertificateTypeCreateComponent } from './crews/certificates/certificate-type-create/certificate-type-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CertificateViewComponent } from './crews/certificates/certificate-view/certificate-view.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    CrewsComponent,
    CrewCardModalComponent,
    CrewAddModalComponent,
    CertificateTypeCreateComponent,
    CertificateViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [provideClientHydration(), provideAnimationsAsync(),provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

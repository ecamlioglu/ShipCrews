import { Component } from '@angular/core';
import { CertificateService } from '../../../services/certificate.service';
import { CertificateType } from '../../../models/certificateType.modal';
@Component({
  selector: 'app-certificate-type-create',
  templateUrl: './certificate-type-create.component.html',
  styleUrls: ['./certificate-type-create.component.css'],
  standalone: false
})
export class CertificateTypeCreateComponent {
  newCertType: CertificateType;

  constructor(private certificateTypeService: CertificateService) {
    this.newCertType =  new CertificateType(0,'','');
  }

  saveCertificateType() {
    this.certificateTypeService.addCertificateType(this.newCertType);
    console.log('Certificate Type Saved:', this.newCertType);
  }
}
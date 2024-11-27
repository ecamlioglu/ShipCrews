import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Certificate } from '../models/certificate.model';
import { CertificateType } from '../models/certificateType.modal';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private certificatesSubject = new BehaviorSubject<Certificate[]>([]);
  certificates$ = this.certificatesSubject.asObservable();

  private certificateTypes: CertificateType[] = [
    new CertificateType(1, 'Safety Training', 'Basic safety training certificate'),
    new CertificateType(2, 'First Aid', 'First aid training certificate'),
    new CertificateType(3, 'Engineering Basics', 'Basic engineering certificate'),
    new CertificateType(4, 'Advanced Mechanics', 'Advanced mechanics certificate'),
    new CertificateType(5, 'Navigation Basics', 'Basic navigation certificate'),
    new CertificateType(6, 'Advanced Navigation', 'Advanced navigation certificate'),
    new CertificateType(7, 'Culinary Arts', 'Culinary arts certificate'),
    new CertificateType(8, 'Food Safety', 'Food safety certificate'),
    new CertificateType(9, 'Deck Operations', 'Deck operations certificate'),
    new CertificateType(10, 'Safety at Sea', 'Safety at sea certificate'),
    new CertificateType(11, 'Hospitality Management', 'Hospitality management certificate'),
    new CertificateType(12, 'Customer Service', 'Customer service certificate')
  ];

  getCertificateTypes(): Observable<CertificateType[]> {
    return of(this.certificateTypes);
  }

  getCertificates() {
    return this.certificatesSubject.value;
  }

  addCertificate(certificate: Certificate) {
    const currentCertificates = this.certificatesSubject.value;
    this.certificatesSubject.next([...currentCertificates, certificate]);
  }
  addCertificateType(input: CertificateType) {
    const newCertificateType: CertificateType = {
      id: Math.floor(Math.random() * 1000000),
      name: input.name,
      description: input.description
    };

    this.certificateTypes.push(newCertificateType);
  }
}
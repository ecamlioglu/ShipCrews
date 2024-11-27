import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Certificate } from '../../../models/certificate.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-certificate-view',
  standalone: false,
  
  templateUrl: './certificate-view.component.html',
  styleUrl: './certificate-view.component.css'
})
export class CertificateViewComponent {
  certificates: Certificate[] | undefined;
  dataSource: MatTableDataSource<Certificate>;
  displayedColumns: string[] = ['name', 'description', 'issuedDate', 'expiryDate'];

  @ViewChild('certificateModal')
  certificateModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.certificates);
  }

  openCertificateModal(input: Certificate[]) {
    this.certificates = input;
    this.dataSource = new MatTableDataSource(this.certificates);
    this.dialog.open(this.certificateModal);
  }

  closeModal() {
    this.dialog.closeAll();
  }
}

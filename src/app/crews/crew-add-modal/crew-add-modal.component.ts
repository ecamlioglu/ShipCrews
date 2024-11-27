import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrewService } from '../../services/crew.service';
import { Crew } from '../../models/crew.model';
import { CertificateService } from '../../services/certificate.service';
import { CertificateType } from '../../models/certificateType.modal';


@Component({
  selector: 'app-crew-add-modal',
  templateUrl: './crew-add-modal.component.html',
  styleUrls: ['./crew-add-modal.component.css'],
  standalone: false
})
export class CrewAddModalComponent implements OnInit {
  crew: Crew = {
    id: 0,
    firstName: '',
    lastName: '',
    nationality: '',
    title: '',
    daysOnBoard: 0,
    dailyRate: 0,
    currency: 'USD',
    totalIncome: 0,
    certificates: []
  };
  certificateTypes: CertificateType[] = [];

  certificates: any[] = [];

  titles: string[] = ['Captain', 'First Officer', 'Engineer', 'Deckhand'];
  nationalities = ['American', 'British', 'Canadian', 'Australian'];
  currencies = ['USD', 'EUR', 'GBP']; // Example currencies

  constructor(public dialogRef: MatDialogRef<CrewAddModalComponent>,
    private crewService: CrewService,
    private certificateService: CertificateService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadCertificateTypes();
  }

  bindAddOrEdit(){
    if (this.data && this.data.crew) {
      this.crew = { ...this.data.crew };
      console.log(this.crew);
      this.cdr.detectChanges();
    } else {
      this.addCertificate();
    }
  }

  loadCertificateTypes(): void {
    this.certificateService.getCertificateTypes().subscribe({
      next: (types: CertificateType[]) => {
        this.certificateTypes = types;
        this.bindAddOrEdit();
      },
      error: (error) => {
        console.error('Error loading certificate types', error);
      }
    });
  }
  addCertificate() {
    if (this.certificateTypes.length > 0) {
      this.crew.certificates.push({
        id: Math.random(),
        type: this.certificateTypes[0],
        issueDate: new Date(),
        expiryDate: new Date()
      });
    } else {
      console.error('No certificate types available to assign.');
    }
  }
  removeCertificate(index: number) {
    this.crew.certificates.splice(index, 1);
  }

  saveCrew() {
    this.crew.totalIncome = this.crew.daysOnBoard * this.crew.dailyRate;
    if (this.crew.id) {
      // Update existing crew
      this.crewService.updateCrew(this.crew).subscribe({
        next: (updatedCrew: any) => {
          this.dialogRef.close(updatedCrew);
        },
        error: (error: any) => {
          console.error('Error updating crew', error);
        }
      });
    } else {
      // Add new crew
      this.crewService.addCrew(this.crew).subscribe({
        next: (newCrew: any) => {
          this.dialogRef.close(newCrew);
        },
        error: (error: any) => {
          console.error('Error adding crew', error);
        }
      });
    }
  }
}
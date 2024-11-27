import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CrewAddModalComponent } from './crew-add-modal/crew-add-modal.component';
import { Crew } from '../models/crew.model';
import { CrewService } from '../services/crew.service';
import { CertificateViewComponent } from './certificates/certificate-view/certificate-view.component';
import { CrewCardModalComponent } from './crew-card-modal/crew-card-modal.component';

@Component({
  selector: 'app-crews',
  standalone: false,
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css']
})
export class CrewsComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome', 'certificates', 'actions'];
  crews: Crew[] = [];

  totalIncomesByCurrency = this.calculateTotalIncomesByCurrency();

  @ViewChild('certificateView') certificateViewModal!: CertificateViewComponent;

  constructor(private translate: TranslateService,
    private dialog: MatDialog,
    private crewService: CrewService
  ) {
    this.translate.setDefaultLang('en');
    this.crews = this.crewService.getCrews();
  }
  ngOnInit(): void {
    this.totalIncomesByCurrency = this.calculateTotalIncomesByCurrency();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  openAddCrewModal() {
    const dialogRef = this.dialog.open(CrewAddModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.crews.push(result);
        this.reloadCrews();
        this.totalIncomesByCurrency = this.calculateTotalIncomesByCurrency();
      }
    });
  }

  openCertificatesModal(crew: Crew) {
    this.certificateViewModal.openCertificateModal(crew.certificates);
  }

  editCrew(crew: any) {
    const dialogRef = this.dialog.open(CrewAddModalComponent, {
      data: { crew }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the result if needed
      }
    });
  }
  viewCrew(crew: Crew) {
    this.dialog.open(CrewCardModalComponent, {
      data: { crew }
    });
  }

  deleteCrew(crew: Crew) {
    // Logic to delete the crew member
    this.crews = this.crews.filter(c => c !== crew);
    this.totalIncomesByCurrency = this.calculateTotalIncomesByCurrency();
    console.log(`Deleted crew member: ${crew.firstName} ${crew.lastName}`);
  }

  private reloadCrews() {
    this.crews = this.crewService.getCrews();
    this.totalIncomesByCurrency = this.calculateTotalIncomesByCurrency();
  }

  private calculateTotalIncomesByCurrency() {
    const totals: { [key: string]: number } = {};
    this.crews.forEach(crew => {
      if (!totals[crew.currency]) {
        totals[crew.currency] = 0;
      }
      totals[crew.currency] += crew.totalIncome;
    });
    return Object.keys(totals).map(currency => ({
      currency,
      amount: totals[currency]
    }));
  }
}
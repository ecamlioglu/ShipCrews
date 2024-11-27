import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crew } from '../../models/crew.model';
import { MatTableDataSource } from '@angular/material/table';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card-modal.component.html',
  styleUrls: ['./crew-card-modal.component.css'],
  standalone: false
})
export class CrewCardModalComponent implements OnInit {
  crew: Crew;
  dataSource: MatTableDataSource<Certificate>;
  displayedColumns: string[] = ['name', 'description', 'issuedDate', 'expiryDate'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { crew: Crew }) {
    this.crew = data.crew;
    this.dataSource = new MatTableDataSource(this.crew.certificates);
  }

  ngOnInit() {
    if (!this.crew) {
      console.error('Crew data not provided');
    }
  }
}
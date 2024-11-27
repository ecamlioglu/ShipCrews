import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Crew } from '../models/crew.model';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private exampleCrews: Crew[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 100,
      dailyRate: 500,
      currency: 'USD',
      totalIncome: 50000,
      certificates: [
        { id: 1, type: { id: 1, name: 'Safety Training', description: 'Basic safety training certificate' }, issueDate: new Date('2022-01-01'), expiryDate: new Date('2024-01-01') },
        { id: 2, type: { id: 2, name: 'First Aid', description: 'First aid training certificate' }, issueDate: new Date('2022-02-01'), expiryDate: new Date('2024-02-01') }
      ]
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 150,
      dailyRate: 450,
      currency: 'GBP',
      totalIncome: 67500,
      certificates: [
        { id: 3, type: { id: 3, name: 'Engineering Basics', description: 'Basic engineering certificate' }, issueDate: new Date('2021-05-01'), expiryDate: new Date('2023-05-01') },
        { id: 4, type: { id: 4, name: 'Advanced Mechanics', description: 'Advanced mechanics certificate' }, issueDate: new Date('2021-06-01'), expiryDate: new Date('2023-06-01') }
      ]
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      nationality: 'Canadian',
      title: 'Navigator',
      daysOnBoard: 200,
      dailyRate: 400,
      currency: 'CAD',
      totalIncome: 80000,
      certificates: [
        { id: 5, type: { id: 5, name: 'Navigation Basics', description: 'Basic navigation certificate' }, issueDate: new Date('2020-03-01'), expiryDate: new Date('2022-03-01') },
        { id: 6, type: { id: 6, name: 'Advanced Navigation', description: 'Advanced navigation certificate' }, issueDate: new Date('2020-04-01'), expiryDate: new Date('2022-04-01') }
      ]
    },
    {
      id: 4,
      firstName: 'Bob',
      lastName: 'Brown',
      nationality: 'Australian',
      title: 'Cook',
      daysOnBoard: 120,
      dailyRate: 350,
      currency: 'AUD',
      totalIncome: 42000,
      certificates: [
        { id: 7, type: { id: 7, name: 'Culinary Arts', description: 'Culinary arts certificate' }, issueDate: new Date('2021-07-01'), expiryDate: new Date('2023-07-01') },
        { id: 8, type: { id: 8, name: 'Food Safety', description: 'Food safety certificate' }, issueDate: new Date('2021-08-01'), expiryDate: new Date('2023-08-01') }
      ]
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Davis',
      nationality: 'New Zealander',
      title: 'Deckhand',
      daysOnBoard: 180,
      dailyRate: 300,
      currency: 'NZD',
      totalIncome: 54000,
      certificates: [
        { id: 9, type: { id: 9, name: 'Deck Operations', description: 'Deck operations certificate' }, issueDate: new Date('2020-09-01'), expiryDate: new Date('2022-09-01') },
        { id: 10, type: { id: 10, name: 'Safety at Sea', description: 'Safety at sea certificate' }, issueDate: new Date('2020-10-01'), expiryDate: new Date('2022-10-01') }
      ]
    },
    {
      id: 6,
      firstName: 'Diana',
      lastName: 'Evans',
      nationality: 'South African',
      title: 'Steward',
      daysOnBoard: 90,
      dailyRate: 320,
      currency: 'ZAR',
      totalIncome: 28800,
      certificates: [
        { id: 11, type: { id: 11, name: 'Hospitality Management', description: 'Hospitality management certificate' }, issueDate: new Date('2021-11-01'), expiryDate: new Date('2023-11-01') },
        { id: 12, type: { id: 12, name: 'Customer Service', description: 'Customer service certificate' }, issueDate: new Date('2021-12-01'), expiryDate: new Date('2023-12-01') }
      ]
    }
  ];

  private crewsSubject = new BehaviorSubject<Crew[]>(this.exampleCrews);
  crews$ = this.crewsSubject.asObservable();

  getCrews(): Crew[] {
    return this.crewsSubject.value;
  }

  addCrew(crew: Crew): Observable<Crew> {
    const currentCrews = this.crewsSubject.value;
    this.crewsSubject.next([...currentCrews, crew]);
    return new BehaviorSubject(crew).asObservable();
  }
  
  updateCrew(updatedCrew: Crew): Observable<Crew> {
    const crews = this.crewsSubject.value.map(crew => 
      crew.id === updatedCrew.id ? updatedCrew : crew
    );
    this.crewsSubject.next(crews);
    return new BehaviorSubject(updatedCrew).asObservable();
  }
  
  deleteCrew(crewToDelete: Crew): void {
    const crews = this.crewsSubject.value.filter(crew => 
      crew.id !== crewToDelete.id
    );
    this.crewsSubject.next(crews);
  }
}
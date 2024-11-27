import { Certificate } from "./certificate.model";

export class Crew {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  totalIncome: number;
  certificates: Certificate[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    nationality: string,
    title: string,
    daysOnBoard: number,
    dailyRate: number,
    currency: string,
    totalIncome: number,
    certificates: Certificate[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.title = title;
    this.daysOnBoard = daysOnBoard;
    this.dailyRate = dailyRate;
    this.currency = currency;
    this.totalIncome = totalIncome;
    this.certificates = certificates;
  }
}
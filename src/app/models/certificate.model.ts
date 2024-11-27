import { CertificateType } from "./certificateType.modal";

export class Certificate {
  id: number;
  type: CertificateType;
  issueDate: Date;
  expiryDate: Date;

  constructor(id: number, type: CertificateType, issueDate: Date, expiryDate: Date) {
    this.id = id;
    this.type = type;
    this.issueDate = issueDate;
    this.expiryDate = expiryDate;
  }
}

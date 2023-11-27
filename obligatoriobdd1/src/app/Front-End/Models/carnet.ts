export class Carnet {
  ci?: number = 0;
  fchEmision?: Date = new Date("2022-01-01");
  fchVencimiento?: Date;
  comprobante?: string | null;

  constructor( fchVencimiento?: Date, comprobante?: string | null) {
    this.fchVencimiento = fchVencimiento;
    this.comprobante = comprobante;
  }
}

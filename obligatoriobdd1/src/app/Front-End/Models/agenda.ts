export class Agenda {
  nro?: number;
  ci?: number;
  fchAgenda?: Date;
  constructor(nro?: number, ci?: number, fchAgenda?: Date) {
    this.nro = nro;
    this.ci = ci;
    this.fchAgenda = fchAgenda;
  }
}

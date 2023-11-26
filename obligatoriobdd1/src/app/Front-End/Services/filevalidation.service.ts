import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileValidationService {
  isValidFile(showInputs: boolean, fileName: string | null | undefined): boolean {
    if (!showInputs || !fileName) {
      return true;
    }

    const fileExtension = this.getFileExtension(fileName);
    return fileExtension === 'pdf' || this.isImageExtension(fileExtension);
  }

  alertInvalidFileType(): void {
    alert('Por favor, seleccione un archivo válido (PDF o JPG).');
  }

  private getFileExtension(filename: string): string {
    const parts = filename.split('.');
    return parts[parts.length - 1].toLowerCase();
  }

  private isImageExtension(extension: string): boolean {
    return ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
  }
}
import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class ReferencesComponent {
  translate = inject(TranslateService);
  
  currentReference = signal(0);
  
  referenceImages = [
    "assets/images/references/schuster.png",
    "assets/images/references/eichinger.png",
    "assets/images/references/nuber.png"
  ];

  previousReference(): void {
    if (this.currentReference() === 0) {
      this.currentReference.set(this.referenceImages.length - 1);
      return;
    }
    this.currentReference.update(value => value - 1);
  }

  nextReference(): void {
    if (this.currentReference() === this.referenceImages.length - 1) {
      this.currentReference.set(0);
      return;
    }
    this.currentReference.update(value => value + 1);
  }

  setCurrentReference(index: number): void {
    this.currentReference.set(index);
  }

  getReferenceLabel(index: number): string {
    return `Reference ${index + 1}`;
  }
}
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class ReferencesComponent {
  currentReference = signal(0);
  references = signal([
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: "V. Schuster - Team Partner",
      image: "assets/images/references/schuster.png"
    },
    {
      text: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
      author: "E. Eichinger - Team Partner",
      image: "assets/images/references/eichinger.png"
    },
    {
      text: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
      author: "I. Nuber - Frontend Engineer",
      image: "assets/images/references/nuber.png"
    }
  ]);

  previousReference(): void {
    if (this.currentReference() === 0) {
      this.currentReference.set(this.references().length - 1);
      return;
    }
    this.currentReference.update(value => value - 1);
  }

  nextReference(): void {
    if (this.currentReference() === this.references().length - 1) {
      this.currentReference.set(0);
      return;
    }
    this.currentReference.update(value => value + 1);
  }
  setCurrentReference(index: number): void {
    this.currentReference.set(index);
  }
}

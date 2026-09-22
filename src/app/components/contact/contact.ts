import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);
  
  isSubmitted = false;

  get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = {
      access_key: '3fa1a7a9-9bbe-451f-9c6a-9d259ac69fe6', 
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.http.post('https://api.web3forms.com/submit', formData).subscribe({
      next: (response) => {
        console.log('Successfully sent!', response);
        this.isSubmitted = true;
        this.contactForm.reset();
        
        setTimeout(() => this.isSubmitted = false, 3000);
      },
      error: (error) => {
        console.error('Error sending:', error);
        alert(this.translate.instant('CONTACT.ERROR_ALERT'));
      }
    });
  }
}
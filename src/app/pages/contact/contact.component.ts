import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgIf],
})
export class ContactComponent {
  successMessage: string = '';
  errorMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_w5mjf8t', // Service ID EmailJS
        'template_ltthxkc', // Template ID EmailJS (Contact Us)
        event.target as HTMLFormElement,
        '13kADPC_nLL6--0Co'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.successMessage =
            'Merci, votre message a bien été reçu. Notre équipe veille à vous répondre rapidement.';
          this.errorMessage = '';
          (event.target as HTMLFormElement).reset();
        },
        error => {
          this.errorMessage = "Erreur d'envoi, veuillez réessayer.";
          this.successMessage = '';
        }
      );
  }
}

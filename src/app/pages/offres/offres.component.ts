import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class OffresComponent implements OnInit {
  isMobile = false;

  // --- Popup / Formulaire Contact ---
  showPopup = false;
  selectedOffreName = '';
  contactForm = {
    name: '',
    company: '',
    email: '',
    message: '',
  };

  successMessage: string = '';
  errorMessage: string = '';
  envoiEnCours = false; // Pour bloquer le bouton pendant l'envoi

  ngOnInit() {
    this.updateScreenMode();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenMode();
  }

  private updateScreenMode() {
    this.isMobile = window.innerWidth < 768;
  }

  openPopup(offreName: string) {
    this.selectedOffreName = offreName;
    this.showPopup = true;
    this.contactForm = { name: '', company: '', email: '', message: '' };
    this.successMessage = '';
    this.errorMessage = '';
  }

  closePopup() {
    this.showPopup = false;
    this.envoiEnCours = false;
    this.successMessage = '';
    this.errorMessage = '';
  }

  sendForm(event: Event) {
    event.preventDefault();
    if (this.envoiEnCours) return;
    this.envoiEnCours = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .sendForm(
        'service_w5mjf8t', // Remplace par ton Service ID
        'template_ltthxkc', // Remplace par ton Template ID
        event.target as HTMLFormElement,
        '13kADPC_nLL6--0Co' // Remplace par ta clé publique EmailJS
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.successMessage =
            'Merci, votre message a bien été reçu. Notre équipe veille à vous répondre rapidement.';
          this.errorMessage = '';
          this.envoiEnCours = false;
          (event.target as HTMLFormElement).reset();
        },
        error => {
          this.errorMessage = "Erreur d'envoi, veuillez réessayer.";
          this.successMessage = '';
          this.envoiEnCours = false;
        }
      );
  }
}

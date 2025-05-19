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

  // Messages de feedback
  successMessage: string = '';
  errorMessage: string = '';

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
    this.successMessage = '';
    this.errorMessage = '';
    this.contactForm = { name: '', company: '', email: '', message: '' };
  }

  closePopup() {
    this.showPopup = false;
  }

  sendForm(event: Event) {
    event.preventDefault();

    // Validation stricte côté JS
    if (
      !this.contactForm.name.trim() ||
      !this.contactForm.company.trim() ||
      !this.contactForm.email.trim() ||
      !this.contactForm.message.trim()
    ) {
      this.errorMessage = 'Merci de remplir tous les champs obligatoires.';
      this.successMessage = '';
      return;
    }

    const form = event.target as HTMLFormElement;

    // Ajout manuel du champ offre si besoin
    const formData = new FormData(form);
    formData.set('offre', this.selectedOffreName);

    emailjs
      .sendForm(
        'service_w5mjf8t', // Remplace par ton Service ID
        'template_ltthxkc', // Remplace par ton Template ID
        form,
        '13kADPC_nLL6--0Co' // Remplace par ta clé publique
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.successMessage =
            'Merci, votre demande a bien été envoyée. Nous vous contacterons rapidement !';
          this.errorMessage = '';
          form.reset();
        },
        error => {
          this.errorMessage = "Erreur d'envoi, veuillez réessayer.";
          this.successMessage = '';
        }
      );
  }
}

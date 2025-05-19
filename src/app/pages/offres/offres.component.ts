import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
})
export class OffresComponent implements OnInit {
  isMobile = false;

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
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ← à ajouter
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // ← pluriel et tableau
})
export class AppComponent {
  title = 'watchmann';
  menuOpen = false;
}

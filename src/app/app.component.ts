import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent],
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css',
  template: `
  <div>
    <h1>Welcome to My App</h1>
    <app-content-card></app-content-card>
  </div>
`,
})
export class AppComponent {
  title = 'Dhruvi_Patel_WEB601Assignments_ArtGallery';
}



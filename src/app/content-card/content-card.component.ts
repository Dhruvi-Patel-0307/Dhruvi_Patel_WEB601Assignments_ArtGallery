
import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [NgForOf],
  //templateUrl: './content-card.component.html',
  //styleUrl: './content-card.component.css',
  template: `
    <div class="content-card">
      <ul>
      <li *ngFor="let item of contentList.getItems()">{{ item }}</li>
      </ul>
      <img url='' alt='logog'>
      <h1> Hello, Dhruvi Patel</h1>
    </div>
  `,
  
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add('First item');
    this.contentList.add('Second item');
    this.contentList.add('Third item');
  }
}

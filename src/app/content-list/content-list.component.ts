import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypefilteroutPipe } from '../typefilterout.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypefilteroutPipe, FormsModule, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
    ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Oil Painting",
        description:"A classic kind of painting called oil painting uses pigments suspended in oil as the painting medium.",
        creator:"My hobby",
        imgURL:"",
        type:"",
        tags: ["oil", "art"]
      },
      {
        id: 1,
        title: "Pop Art painting",
        description:"Pop art painting became a well-known art movement in the middle of the 1950s, particularly in  Britain and  the United States. By fusing elements of comic books, advertising, celebrities, and common objects into artwork,   it honored mass media, consumerism, and popular culture.",
        creator:"My hobby",
        imgURL:"https://i.etsystatic.com/36088288/r/il/44c26d/3976744653/il_570xN.3976744653_8urw.jpg",
        type:"Abstract",
        tags: ["pop", "paint"]
      },
      {
        id: 2,
        title: "Abstract",
        description:"Description : The primary focus of abstract art is on forms, colors, lines, and shapes rather than on identifiable subject matter.",
        creator:"My Hobby",
        imgURL:"https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.jpg?b=1&s=612x612&w=0&k=20&c=2v0jth_-61MZhZlt8EECpe5FLAZRhQxYRbXsc6VQuRo=",
        type:"Abstract",
        tags: ["Abstract", "art"]
      },
      {
        id: 3,
        title: "Arcylic",
        description: "a type of art which is one of them I like.",
        creator: "Mr. jack",
        imgURL: "https://th.bing.com/th/id/OIP.fbPly8ZfqnziTgJAEE4FAAAAAA?rs=1&pid=ImgDetMain",
        type: "Art",
        tags: ["favourite", "arcylicart"]
      },
      {
        id: 4,
        title: "Watercolor",
        description: "Type of art which I like the most while painting.",
        creator: "Sohaib",
        imgURL: "https://mymodernmet.com/wp/wp-content/uploads/2020/03/watercolor-paintings-gunnel-moheim-15.jpg",
        type: "Art",
        tags: ["water", "paint"]
      },
      {
        id: 5,
        title: "Fresco",
        description: "A fresco painting is a work of wall or ceiling art created by applying pigment onto intonaco, or a thin layer of plaster. Its title translates to “fresh” in Italian, as a true fresco's intonaco is wet when the paint is applied.",
        creator: "Devaughn jones",
        imgURL: "https://th.bing.com/th/id/OIP.5o0FGCUAS_MauYQ7lXssjAAAAA?rs=1&pid=ImgDetMain",
        type: "Abstract",
        tags: ["Fresco", "art"]
      },
      {
        id: 6,
        title: "Digital",
        description: "Digital art refers to any artistic work or practice that uses digital technology as part of the creative or presentation process.",
        creator: "Utsav",
        imgURL: "https://th.bing.com/th/id/OIP.Rkatou4m8cjLp6tAYq2ZgAAAAA?rs=1&pid=ImgDetMain",
        type: "Art",
        tags: ["digital", "skill"]
      }
      
    ];
  }
 
}
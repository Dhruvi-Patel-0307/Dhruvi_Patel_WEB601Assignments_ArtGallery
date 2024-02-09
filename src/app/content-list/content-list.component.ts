import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Oil Painting",
        description:"A classic kind of painting called oil painting uses pigments suspended in oil as the painting medium.",
        creator:"My hobby",
        imgURL:"https://m.media-amazon.com/images/I/71ogALVKNnL._AC_UF894,1000_QL80_.jpg",
        type:"Art",
        tags: ["oil", "art"]
      },
      {
        id: 1,
        title: "Pop Art painting",
        description:"Pop art painting became a well-known art movement in the middle of the 1950s, particularly in  Britain and  the United States. By fusing elements of comic books, advertising, celebrities, and common objects into artwork,   it honored mass media, consumerism, and popular culture.",
        creator:"My hobby",
        imgURL:"https://i.etsystatic.com/36088288/r/il/44c26d/3976744653/il_570xN.3976744653_8urw.jpg",
        type:"Art",
        tags: ["pop", "paint"]
      },
      {
        id: 2,
        title: "Abstract",
        description:"Description : The primary focus of abstract art is on forms, colors, lines, and shapes rather than on identifiable subject matter.",
        creator:"My Hobby",
        imgURL:"https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.jpg?b=1&s=612x612&w=0&k=20&c=2v0jth_-61MZhZlt8EECpe5FLAZRhQxYRbXsc6VQuRo=",
        type:"Art",
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
      }
      
    ];
  }
 
}
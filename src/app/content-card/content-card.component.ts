import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Oil Painting",
      description:"A classic kind of painting called oil painting uses pigments suspended in oil as the painting medium.",
      creator:"My hobby",
      imgURL:"https://m.media-amazon.com/images/I/71ogALVKNnL._AC_UF894,1000_QL80_.jpg",
      type:"Art"
    });
    this.contentList.addContent({
      id: 1,
      title: "Pop Art painting",
      description:"Pop art painting became a well-known art movement in the middle of the 1950s, particularly in  Britain and  the United States. By fusing elements of comic books, advertising, celebrities, and common objects into artwork,   it honored mass media, consumerism, and popular culture.",
      creator:"My hobby",
      imgURL:"https://i.etsystatic.com/36088288/r/il/44c26d/3976744653/il_570xN.3976744653_8urw.jpg",
      type:"Art"
    });
    this.contentList.addContent({
      id: 2,
      title: "Abstract",
      description:"Description : The primary focus of abstract art is on forms, colors, lines, and shapes rather than on identifiable subject matter.",
      creator:"My Hobby",
      imgURL:"https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.jpg?b=1&s=612x612&w=0&k=20&c=2v0jth_-61MZhZlt8EECpe5FLAZRhQxYRbXsc6VQuRo=",
      type:"Art"
    });
  }
}
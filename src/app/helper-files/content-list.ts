import Content from './content-interface';

export class  ContentList {
  
    private items: string[] = [];

    add(item: string) {
      this.items.push(item);
    }
  
    getItems(): string[] {
      return this.items;
    }
}


  
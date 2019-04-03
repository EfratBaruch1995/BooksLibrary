import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  public books: Book[];
  lastId:number;
  constructor() {

    this.books =  [
      {
        author: 'Suzanne Collins',
        date: new Date('4/5/1813'),
        title: 'the Hunger Games',
        id: '1'
      },
      {
        author: 'jane Austen',
        date: new Date('4/5/1981'),
        title: 'pride and Prejudice',
        id: '2'
      },
      {
        author: 'George Orwell',
        date: new Date('4/5/1991'),
        title: 'animal Farm',
        id: '3'
      }
      ];
      this.lastId=3;
  }
 getBooks()
 {
   return this.books;
 }
  SaveBook(Mybook : Book)
  {
    const itemIndex = this.books.findIndex(item => item.id === Mybook.id);
    if (itemIndex== -1)
    {
      Mybook.id=(++this.lastId).toString();
     this.books.push(Mybook);
    }
    else
    {
      this.books[itemIndex] = Mybook;
    }

  }
  addBook(Mybook)
  {

  }
}

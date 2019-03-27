import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

 public books :Book[];
  public editMode = false;
  public editBook: Book[];
  ngOnInit()
  {}

constructor(private srv : BookServiceService){
  this.books= srv.getBooks();
}

  editEmit(item) {
    this.editMode = !this.editMode;
    this.editBook = item;
  }

  saveEmit(book) {
    this.editMode = !this.editMode;

  }

}

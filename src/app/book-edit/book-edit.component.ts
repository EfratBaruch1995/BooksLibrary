import { Book } from './../Book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() book: Book;
  @Output() saveBook: EventEmitter<any> = new EventEmitter();

  constructor(private srv : BookServiceService) { }

  ngOnInit() {
  }

  saveButton(book) {
   this.srv.SaveBook(book);

  }
}

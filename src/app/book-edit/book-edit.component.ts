import { Book } from './../Book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() book: Book = new Book();
  @Output() saveBook: EventEmitter<any> = new EventEmitter();

  constructor(private srv : BookServiceService ) {
  console.log('id')
  }

  ngOnInit() {

  }

  saveButton(book) {
   this.srv.SaveBook(book);

  }
  addBook(book)
  {

  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

}

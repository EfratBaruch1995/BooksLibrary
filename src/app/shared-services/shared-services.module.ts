import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../book-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BookServiceService],
})
export class SharedServicesModule { }

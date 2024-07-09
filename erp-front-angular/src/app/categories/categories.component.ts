import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: any = [
    {    
      Name: 'Name',
      Description: 'Description'
    },
    {    
      Name: 'Name 2',
      Description: 'Description 3'
    },
    {    
      Name: 'Name 3',
      Description: 'Description 3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

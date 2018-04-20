import { Component, OnInit } from '@angular/core';

// Importing from the Info class

import { Info } from '../info';

//Component for it

@Component({

  selector: 'app-info',

  templateUrl: './info.component.html',

  styleUrls: ['./info.component.css']

})

export class InfoComponent implements OnInit {

// Instance for the Info Class

  newInfo= new Info(" ",new Date());

  value: boolean= false;

// Submit function for the click event

  onSubmit2(){

  this.value= true;

  {{this.newInfo.title}};

  {{this.newInfo.date}};

  }

  constructor() { }

  ngOnInit() {

  }

}

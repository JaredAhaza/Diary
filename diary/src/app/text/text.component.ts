// importing from the angular core

import { Component, OnInit } from '@angular/core';

// Importing the Constructor from the hum class

import { Detail } from '../hum'

// Component

@Component({
// name of the component

  selector: 'app-text',

// Template for the component

  templateUrl: './text.component.html',

// Styling for the component

  styleUrls: ['./text.component.css']

})

export class TextComponent implements OnInit {

// Instance for our class Detail

  newDetail=new Detail("", "");

// Value for our if Statement

  value: boolean= false;

// Function for our click Event

  onSubmit(){

  this.value= true;

  {{this.newDetail.name}};

  {{this.newDetail.email}};

}

//Not very Important

  constructor() {

 }

  ngOnInit() {

  }

}

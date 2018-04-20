import { Component, OnInit } from '@angular/core';

//Importing the Description class

import { Description } from '../Description';

//Component

@Component({

  selector: 'app-description',

  templateUrl: './description.component.html',

  styleUrls: ['./description.component.css']

})

export class DescriptionComponent implements OnInit {

// Instance for the Description class

  newDescription= new Description("");

//Function for the the click function

  onClick(){

    alert("Your Entry has been received Mate !!");

    console.log(this.newDescription.description);

  }

  constructor() { }

  ngOnInit() {
  }

}

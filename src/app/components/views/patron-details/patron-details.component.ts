import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patron-details',
  templateUrl: './patron-details.component.html',
  styleUrls: ['./patron-details.component.css']
})
export class PatronDetailsComponent{

  constructor() { }

  firstName = 'Patrick';
  lastName = 'Gonzalez';
  email = 'pgonzalez@gmail.com';
  username = 'pgonzalez';


}

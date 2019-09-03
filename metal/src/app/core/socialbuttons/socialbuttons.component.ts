import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json'

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

	constructor() { }
	
	socialButtons: object;

  ngOnInit() {
		this.socialButtons = data.socialButtons;
  }

}

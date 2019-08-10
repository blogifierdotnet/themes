import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standard';
  public socialButtons: object;
  
  ngOnInit(): void {
    this.socialButtons = data.socialButtons;
    // console.log("Json data : ", JSON.stringify(data));
  }

  onSubmit(f: NgForm) {
    if(f.value && f.value.term){
      window.location.href = '?term=' + f.value.term;
    }
  }
}
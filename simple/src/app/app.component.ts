import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple';
}

export function formatDate(date) {
  var monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  var d = new Date(date);
  var day = d.getDate();
  var monthIndex = d.getMonth();
  var year = d.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}
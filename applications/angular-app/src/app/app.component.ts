import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  data = {
    rows1: JSON.stringify([
      ["one", "two"],
      ["three", "four"],
    ]),
    headers1: JSON.stringify(["header1", "header2"]),
    rows2: JSON.stringify([
      [1, 5],
      [8, 14],
    ]),
    headers2: JSON.stringify(["header1", "header2"]),
  };

  public showAlert() {
    alert('Hi, I\'m a button alert!');
  }
}

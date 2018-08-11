import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  newItem = 'test';
  number = 0;
  newItemChanged(event: KeyboardEvent): void {
    const target = <HTMLInputElement> event.target;
    this.newItem = target.value;
    console.log(this.newItem);
  }
  Increase() {
    this.number = this.number + 1;
  }
}

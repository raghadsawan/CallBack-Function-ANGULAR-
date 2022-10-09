import { Component, VERSION } from '@angular/core';
import { CallBackComponent } from './callBack.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends CallBackComponent {
  ngOnInit() {
    this.print2();
  }
  print2() {
    this.print((result) => {
      console.log(result);
    });
  }
}

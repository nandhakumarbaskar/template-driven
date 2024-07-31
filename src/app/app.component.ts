import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-app';

  onSubmit(f:NgForm){
    console.log("f:", f.value)
  }

  getValue(fullName:NgModel){
    console.log("fullName:", fullName)
  }
}

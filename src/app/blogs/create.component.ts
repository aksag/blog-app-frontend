import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})


export class CreateComponent {
  onCreateBlog(formCreate:NgForm){
    console.log(formCreate?.form?.value);

  }
}

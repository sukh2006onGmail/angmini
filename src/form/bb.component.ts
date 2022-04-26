import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
  <form [formGroup]='form' (ngSubmit)="submit()">
    <input  type='text' formControlName="uname">
    <div *ngIf=  "form.get('uname').touched && form.get('uname').invalid " >error
        <div *ngIf=  "form.get('uname').errors.required" >required</div>
        <div *ngIf=  "form.get('uname').errors.maxlength" >maxlength</div>
    
    </div>

    <input type="submit" value="submit" />
  </form>
      
  `
})
export class ReactiveForm {
    form = new FormGroup({
        uname: new FormControl('', [Validators.required, Validators.maxLength(3)]),
        pass: new FormControl(),
    })



  log(x){

      console.log('log',x)
  }

  submit(){

    console.log('submit',this.form)
}


}
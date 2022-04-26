import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
  <form #f="ngForm" (ngSubmit)="submit(f)">
  <input name="fname" ngModel #fname="ngModel" (change)=log(fname) required minlength=2 /><br>
  <div *ngIf="fname.touched && !fname.valid">error
    <div *ngIf="fname.errors.required">required  </div>
    <div *ngIf="fname.errors.minlength">minlength is {{fname.errors.minlength.requiredLength}}  </div>
  </div>
  <input type="submit" value="submit" [disabled]="!f.valid"/>
  <input type="checkbox" name="cb" ngModel #cb="ngModel" /><br>
  <p>{{f.value | json }}</p>
</form>
      
  `
})
export class TemplateDrivenForm {
  // favoriteColorControl = new FormControl('');
  favoriteColor = '';
  log(x){

      console.log('log',x)
  }

  submit(x){

    console.log('submit',x.value.fname)
}


}
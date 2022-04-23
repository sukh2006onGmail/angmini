import {Component} from '@angular/core';

interface IGame {
    name: string;
    // getvalue(): string;
}



@Component({
    selector: 'demo',
    template: `
    <div>



  <input type="radio" name="colors" (click)="myobj.color='lightgreen'">Green
  <input type="radio" name="colors" (click)="myobj.color='green'">Yellow
  <input type="radio" name="colors" (click)="myobj.color='cyan'">Cyan
  <button (click)="condition = !condition"> {{condition}}</button>
</div>
    <p [defaultColor123]="myobj" [appCustomstyle]='defcolor' > bbb </p>
    <p *appUnless="!condition">ccc</p>
    `
    ,styles:['.error { color: red }']
})
export class DemoComp{
    clickMessage = ""
    // obj = {name: "bat"}
    myobj = {color: 'red'}
    color = 'orange'
    defcolor = 'violet'   //violet
    isactive = true
    classExpression = ['foo', 'bar']
    aa = true
    bb = false
    cc = true
    classes = false;
    deleteHero(e){
        
        console.log('hi', e.target.textContent)
    }
    
    obj :IGame ;
    false234 = 10
    hasError = false
    condition = true
    isaa(){
        return "adfs    ";
    }

}
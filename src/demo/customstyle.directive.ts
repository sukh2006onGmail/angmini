import { Directive, ElementRef, HostListener, Input , OnChanges, DoCheck  } from '@angular/core';


@Directive({ 
    selector: '[appCustomstyle]' 
 }) 
export class CustomStyle implements OnChanges, DoCheck {
    @Input() set appCustomstyle(color:string){
        console.log(color)
        this.highlight(color);
    }
    @Input() defaultColor123 = '';
    // @Input() defaultColor1234 = '';
    constructor(private el: ElementRef) { 
        // el.nativeElement.style.fontSize = '78px'; 
        // this.el.nativeElement.style.backgroundColor = this.defaultColor1234 //'green'//this.appCustomstyle;
        console.log('const')
        
     } 

     ngOnChanges(changes) {
       console.log('changes', changes)
       this.highlight(changes.defaultColor123.currentValue);
    }

    ngDoCheck() {
      console.log('ngDoCheck', this.defaultColor123)
    }

     private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
      }
     @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appCustomstyle || this.defaultColor123 || 'red');
        // this.highlight(this.appCustomstyle || 'red');
        // this.highlight('yellow');
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
      }

      @HostListener('dblclick') onMouseDblClick() {
        this.highlight(this.appCustomstyle);
      }
}
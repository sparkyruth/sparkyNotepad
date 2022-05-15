import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  faXmark = faXmark;
  @ViewChild('truncator') truncator!:ElementRef<HTMLElement>
  @ViewChild('bodyText') bodyText!:ElementRef<HTMLElement>

  @Input() cardTitle!:string ;
  @Input()cardBody!: string;


  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    //work out if we have a text overflow, and if not, then hide the truncator
    if(this.bodyText !== undefined){
      let style= window.getComputedStyle(this.bodyText.nativeElement, null)//here we are getting all the styles of the element under the template reference of bodyText
      let viewableHeight=parseInt(style.getPropertyValue("height"), 10) //to base 10. Now we are getting a specific style of height
      if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
        //if there is overflow , show truncator, else, dont show
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
        //the renderer(check constructor and import from angular core) here will show the style under the truncator template refernce
      }else{
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none')
      }
    }

   
  }

}

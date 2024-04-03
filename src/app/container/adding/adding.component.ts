import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-adding',
  standalone: true,
  imports: [NgIf],
  templateUrl: './adding.component.html',
  styleUrl: './adding.component.scss'
})
export class AddingComponent {
  @Output() newActEvent = new EventEmitter<string>();
  
  isAddClick :boolean = false
  adding()
  {
    this.isAddClick = true
  }
  outAdding()
  {
    this.isAddClick = false;
  }


}

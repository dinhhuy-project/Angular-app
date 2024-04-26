import { Component } from '@angular/core';

@Component({
  selector: 'app-vanbanden-lists',
  templateUrl: './vanbanden-lists.component.html',
  styleUrl: './vanbanden-lists.component.css'
})
export class VanbandenListsComponent {
  public show = false

  AddingButton() {
    this.show = !this.show
  }

  turnOff() {
    this.show = false
  }
}
 
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  time:string = '';
  constructor() {

  }

  ngOnInit():void {
    this.updateTime();
    // setInterval(() => this.updateTime(), 1000);
  }



  updateTime():void {
    const now = new Date();
    const hours = this.pad_hour(now.getHours());
    const minutes = this.pad_minute(now.getMinutes());
    const AM_PM = this.AM_PM(now.getHours());
    this.time = `${hours}:${minutes} ${AM_PM}`;
    // console.log(this.time);
  }

  AM_PM(num: number):string {
    if(num <= 12)
    {
      return 'AM';
    }
    else
    {
      return 'PM';
    }
  }

  pad_hour(num: number):string {
    if(num>12)
    {
      return (num-12).toString();
    }
    else
    {
      return num.toString();
    }
  }
  pad_minute(num: number):string {
    return num < 10 ? '0' + num : num.toString();
  }
}

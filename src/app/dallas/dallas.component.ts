import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  currCity: object
  constructor(private _interlink: InterlinkService) { 
    this.currCity = {}
  }
  getCurrent(){
    this.currCity = this._interlink.getCurrent()
    console.log('currCity:', this.currCity)
  }
  setCity(){
      console.log("firing")
      this._interlink.setCity("dallas", ()=>{
        this.getCurrent()
        console.log("working")
      })
  }
  ngOnInit() {
    this.setCity()
  }
}
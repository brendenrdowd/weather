import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
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
      this._interlink.setCity("seattle", ()=>{
        this.getCurrent()
        console.log("working")
      })
  }
  ngOnInit() {
    this.setCity()
  }
}

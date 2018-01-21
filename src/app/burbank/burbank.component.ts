import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
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
      this._interlink.setCity("burbank", ()=>{
        this.getCurrent()
        console.log("working")
      })
  }
  ngOnInit() {
    this.setCity()
  }
}
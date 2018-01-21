import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
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
      this._interlink.setCity("chicago", ()=>{
        this.getCurrent()
        console.log("working")
      })
  }
  ngOnInit() {
    this.setCity()
  }
}
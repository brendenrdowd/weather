import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
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
      this._interlink.setCity("san%20francisco", ()=>{
        this.getCurrent()
        console.log("working")
      })
  }
  ngOnInit() {
    this.setCity()
  }
}

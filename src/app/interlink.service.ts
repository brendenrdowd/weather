import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterlinkService {
  currCity: object
  constructor(private _http: Http) { 
    this.currCity = {}
  }
  getCurrent(){
    return this.currCity
  }
  setCity(city:string,cb){ 
    console.log("in interlink")
    this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=154345ca28fea3b2ce2203e5de9f7c7e`).subscribe((res)=>{
      this.currCity = res.json()
      console.log('res: ', res.json())
      cb();
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI = '';
  apiKey = '7623fcf6c90f00b8b38b0d9a0825846b';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }
  getWeather(cityName: string, countryCode: string ){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
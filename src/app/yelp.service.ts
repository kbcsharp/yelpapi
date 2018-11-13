import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    // "Content-Type": "application/json",
    Authorization:
      "Bearer cB1Ozco238D7b5IqPJkkrTmU0wP3_Hz3OVOAVzhmfMle0AVgcewr0HEnq3Icu3CqjqcsOkCMJwQY-JEjl8mvj8P1-zRFYoaDyHxScY_6MPlrofYKO4798f_fWDTrW3Yx"
  })
};

@Injectable({
  providedIn: "root"
})
export class YelpService {
  constructor(private http: HttpClient) {}

  getYelp(city, state, prices) {
    console.log(city);
    console.log(state);
    console.log(prices);
    let _prices = prices.toString();
    return this.http.get<any>(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city},${state}&price=${_prices}`,
      httpOptions
    );
  }
}

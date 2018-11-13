import { Component, OnInit } from "@angular/core";
import { YelpService } from "../yelp.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-yelp",
  templateUrl: "./yelp.component.html",
  styleUrls: ["./yelp.component.css"]
})
export class YelpComponent implements OnInit {
  createForm: FormGroup;
  city: string = "";
  state: string = "";
  price: string = "";
  apiReturn = {};

  constructor(private _yelp: YelpService, private _fb: FormBuilder) {}

  ngOnInit() {
    this.createForm = this._fb.group({
      city: new FormControl(),
      state: new FormControl(),
      price: new FormControl()
    });
  }

  handleSubmit = () => {
    // console.log(searchTerm);
    this._yelp.getYelp(this.city, this.state, this.price).subscribe(data => {
      this.apiReturn = data;
      console.log(this.apiReturn);
    });
  };
}

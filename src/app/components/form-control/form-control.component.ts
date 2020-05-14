import { Component } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  selectedCountry:boolean;
  countryNames:any;
  checkedCountries:any;

  constructor(){
      this.selectedCountry = false;
      this.countryNames = [
        {id:1,value:'Australia',isSelected:false},
        {id:2,value:'Bermuda',isSelected:false},
        {id:3,value:'Canada',isSelected:false},
        {id:4,value:'Cameroon',isSelected:false},
        {id:5,value:'Denmark',isSelected:false},
        {id:6,value:'China',isSelected:false},
        {id:7,value:'France',isSelected:false},
        {id:8,value:'Finland',isSelected:false},
        {id:9,value:'Germany',isSelected:false},
        {id:10,value:'Greenland',isSelected:false},
        {id:11,value:'Hong Kong',isSelected:false},
        {id:12,value:'India',isSelected:false}
      ];
      this.getCheckedCountryNames();

  }

  checkUncheckAll() {
    for (let i in this.countryNames) {
      this.countryNames[i].isSelected = this.selectedCountry;
    }
    this.getCheckedCountryNames();
  }
  
  isAllSelected() {
    this.selectedCountry = this.countryNames.every(country => country.isSelected == true)
    this.getCheckedCountryNames();
  }

  getCheckedCountryNames() {

    this.checkedCountries = [];

    for (let i in this.countryNames) {
      if(this.countryNames[i].isSelected)
      this.checkedCountries.push(this.countryNames[i]);
    }
    this.checkedCountries = JSON.stringify(this.checkedCountries);
  
  }

}

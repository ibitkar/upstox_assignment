import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryCode: any;
  countryData: any;
  borderCountries = [];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.countryCode = params.id;
    });
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      // do your task for before route
     
      return false;
    }
   
    this.getCountryDetails();
  }


  getCountryDetails() {
    this.httpService.getData(environment.getCountryByCode.replace('{code}', this.countryCode)).subscribe((data: any) => {
      this.countryData = data;
      this.getBorderCountries();
    });

  }

  getBorderCountries() {
    this.borderCountries = [];
    this.countryData.borders.forEach(element => {
      this.httpService.getData(environment.getCountryByCode.replace('{code}', element)).subscribe((data: any) => {
        this.borderCountries.push({ name: data.name, code: data.alpha3Code })
      });
    });
  }

  backToPage() {
    window.history.back();
  }

  goToBorderCountry(countryCode) {
    this.router.navigate(['/countries/', countryCode])
  }
}

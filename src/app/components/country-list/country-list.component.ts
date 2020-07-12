import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries = [];
  dropdownClicked = false;
  selectedRegion = "Filter By Region";
  public searchText: string;
  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.getAllCountries()
  }

  getAllCountries() {
    this.httpService.getData(environment.getAllCountries).subscribe((data: any) => {
      this.countries = data;
    });

  }

  getCountriesByRegion(region) {
    this.httpService.getData(environment.getCountriesByRegion.replace('{region}', region)).subscribe((data: any) => {
      this.countries = data;
    });

  }

  showRegions() {
    this.dropdownClicked = !this.dropdownClicked;
  }

  selectRegion(region) {
    this.searchText=""
    this.selectedRegion = region;
    this.dropdownClicked = !this.dropdownClicked;
    if (region == "All") {
      this.getAllCountries();
    } else {
      this.getCountriesByRegion(region)
    }
  }

  goToDetails(countryCode) {
    this.router.navigate(['/countries/', countryCode]);
  }
}

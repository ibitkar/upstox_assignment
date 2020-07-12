// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseurl = 'https://restcountries.eu/rest/v2/';
export const environment = {
  production: false,
  getAllCountries: baseurl + 'all',
  getCountriesByRegion: baseurl + 'region/{region}',
  getCountryByCode: baseurl + 'alpha/{code}',
  getCountryByName: baseurl + 'name/{name}'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

const baseurl = 'https://restcountries.eu/rest/v2/';
export const environment = {
  production: true,
  getAllCountries: baseurl + 'all',
  getCountriesByRegion: baseurl + 'region/{region}',
  getCountryByCode: baseurl + 'alpha/{code}'
};

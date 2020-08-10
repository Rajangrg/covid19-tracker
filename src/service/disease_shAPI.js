import axios from "axios";

export const getAllCountriesAPI = async () => {
  const response = await axios
    .get("https://disease.sh/v3/covid-19/all")
    .then(({ data: { updated, cases, deaths, recovered } }) => ({
      updated,
      cases,
      deaths,
      recovered,
    }))
    .catch((error) => {
      console.error(error);
    });
  return response;
};

export const getCountriesInfoAPI = async () => {
  const response = await axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then(({ data }) =>
      data.map((country) => ({
        key: country.countryInfo._id,
        text: country.country,
        value: country.country,
        image: {
          src: country.countryInfo.flag,
        },
      }))
    )
    .catch((error) => {
      console.error(error);
    });
  return response;
};

export const getCountryInfoAPI = async (countryName) => {
  const response = await axios
    .get(`https://disease.sh/v3/covid-19/countries/${countryName}`)
    .then(
      ({
        data: {
          updated,
          country,
          cases,
          deaths,
          recovered,
          countryInfo,
          active,
        },
      }) => ({
        updated,
        country,
        cases,
        deaths,
        recovered,
        countryInfo,
        active,
      })
    )
    .catch((error) => {
      console.error(error);
    });
  return response;
};

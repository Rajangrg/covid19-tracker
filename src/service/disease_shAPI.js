import axios from "axios";

export const getAllCountriesAPI = async () => {
  const response = await axios
    .get("https://disease.sh/v3/covid-19/all")
    .then(
      ({
        data: {
          updated,
          cases,
          deaths,
          recovered,
          active,
          todayCases,
          todayDeaths,
          todayRecovered,
        },
      }) => ({
        updated,
        cases,
        deaths,
        recovered,
        active,
        todayCases,
        todayDeaths,
        todayRecovered,
      })
    )
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
          todayCases,
          todayDeaths,
          todayRecovered,
        },
      }) => ({
        updated,
        country,
        cases,
        deaths,
        recovered,
        countryInfo,
        active,
        todayCases,
        todayDeaths,
        todayRecovered,
      })
    )
    .catch((error) => {
      console.error(error);
    });
  //console.log(response.countryInfo.lat)
  return response;
};

export const getTopHeadlineAPI = async () => {
  const response = axios
    .get(
      `https://gnews.io/api/v3/search?q=covid&token=3e7b2626610d316dc8d5c09416d49c84&max=6`
    )
    .then(({ data: { articles } }) =>
      articles.map((article) => ({
        description: article.description,
        title: article.title,
        source: article.source.name,
        websiteUrl: article.source.url,
        url: article.url,
      }))
    )
    .catch((error) => {
      console.log(error);
    });

  return response;
};

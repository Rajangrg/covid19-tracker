import axios from "axios";

export const getAllCountriesAPI = async () => {
  const response = await axios
    .get("https://disease.sh/v3/covid-19/all")
    .then(({ data: { updated, cases, deaths, recovered, active } }) => ({
      updated,
      cases,
      deaths,
      recovered,
      active,
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
  //console.log(response.countryInfo.lat)
  return response;
};

export const getTopHeadlineAPI = async () => {
  const response = axios
    .get(
      `https://newsapi.org/v2/top-headlines?q=covid&apiKey=9a70bf20717142c58adbcb8f2f1edfdc&pageSize=3`
    )
    .then(({ data: { articles } }) =>
      articles.map((article) => ({
        author: article.author,
        description: article.description,
        title: article.title,
        publishedAt: article.publishedAt,
        url: article.url,
      }))
    )
    .catch((error) => {
      console.log(error);
    });

  return response;
};

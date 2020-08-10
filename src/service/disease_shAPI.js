import axios from "axios";

export const getAllCountriesAPI = async () => {
  const response = await axios
    .get("https://disease.sh/v3/covid-19/all")
    .then(({data}) => data)
    .catch((error) => {
      console.error(error);
    });
  return response;
};

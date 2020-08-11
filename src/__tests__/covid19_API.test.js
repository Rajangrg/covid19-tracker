import axios from "axios";
import {
  getAllCountriesAPI,
  getCountryInfoAPI,
} from "../service/disease_shAPI";
import {
  getWorldwideInfo,
  getCountryNameInfo,
  emptyCountryNameInfo,
} from "../Fixtures/index";

jest.mock("axios");

describe("COVID-19 API", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("worldwide covid-19 information", () => {
    it("request and get all worldwide total death, cases & recovered", async () => {
      //setup
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: getWorldwideInfo })
      );
      //act
      const entity = await getAllCountriesAPI();
      //assertion/expects
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://disease.sh/v3/covid-19/all"
      );
      expect(entity).toEqual(getWorldwideInfo);
    });
  });

  describe("country information", () => {
    it("request and get all country information", async () => {
      //setup
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: getCountryNameInfo })
      );
      //act
      const entity = await getCountryInfoAPI("New Zealand");
      //assertion/expects
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `https://disease.sh/v3/covid-19/countries/New Zealand`
      );
      expect(entity).toEqual(getCountryNameInfo);
    });

    it("request and get empty information if country can't be found", async () => {
      //setup
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptyCountryNameInfo })
      );
      //act
      const entity = await getCountryInfoAPI("N Zealand");
      //assertion/expects
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `https://disease.sh/v3/covid-19/countries/N Zealand`
      );
      expect(entity).toEqual(emptyCountryNameInfo);
    });
  });
});

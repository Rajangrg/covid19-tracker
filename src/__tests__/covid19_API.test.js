import axios from "axios";
import { getAllCountriesAPI } from "../service/disease_shAPI";
import { getWorldwideInfo } from "../Fixtures/index";

jest.mock("axios");

describe("COVID-19 API", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("worldwide covid-19 info", () => {
    it("request and get all worldwide total death, cases & recovered", async () => {
      //setup
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: getWorldwideInfo })
      );
      //work
      const entity = await getAllCountriesAPI();
      //assertion/expects
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://disease.sh/v3/covid-19/all"
      );
      expect(entity).toEqual(getWorldwideInfo);
    });
  });
});

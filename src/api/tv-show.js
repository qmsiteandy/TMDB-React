import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { API_host } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    // // perform request
    // const response = await axios.get(
    //   API_host + `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`
    // );
    // // return the response
    // return response.data.results;
    return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    // // perform request
    const response = await axios.get(
      API_host +
        `/tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // // return the response
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    // perform request
    const response = await axios.get(
      API_host +
        `/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`
    );
    // return the response
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }
}

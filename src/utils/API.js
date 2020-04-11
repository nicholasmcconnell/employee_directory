
import axios from "axios";

export const search = () => {
    return axios.get(
      "https://randomuser.me/api/?results=200"
    );
  };

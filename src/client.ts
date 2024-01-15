import axios from "axios";
import { Axios } from "node_modules/axios/index";

export const client = (url: string): Axios => {
  const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json",
  };

  return axios.create({
    url,
    headers,
  });
};
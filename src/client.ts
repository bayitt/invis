import axios from "axios";

export const client = (url: string) => {
  const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json",
  };

  return axios.create({
    url,
    headers,
  });
};
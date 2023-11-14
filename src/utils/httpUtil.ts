import axios from "axios";

export const getData = async (url: string) => {
  const result = await axios.get(url);
  return result.data;
};

export const postData = async (url: string, data: any) => {
  const result = await axios.post(url, data);
  return result.data;
};

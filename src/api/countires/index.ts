// import { AxiosRequestConfig } from "axios";
import { httpClient } from "..";

export const getCoutnries = async () => {
  const res = await httpClient.get("/countries");
  return res.data;
};

export const updateCountriesLike = async ({
  id,
  payload,
}: {
  id: string;
  payload: { like: number };
}) => {
  const res = await httpClient.patch(`/countries/${id}`, payload);
  return res.data;
};

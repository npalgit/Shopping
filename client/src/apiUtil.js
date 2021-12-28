import fetch from "isomorphic-fetch";
import { API_ERROR_MESSAGE } from "./constants";

const STANDARD_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  pragma: "no-cache",
  "cache-control": "no-cache",
};

export const get = (url) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "GET",
    mode: "cors",
    cache: "no-store",
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const post = (url, payload) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "POST",
    mode: "cors",
    cache: "no-store",
    body: JSON.stringify(payload),
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const put = (url, payload) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "PUT",
    mode: "cors",
    cache: "no-store",
    body: JSON.stringify(payload),
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const deleteItem = (url) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "DELETE",
    mode: "cors",
    cache: "no-store",
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });



const handleHttpResponse = (response) => {
  return response.json();
};

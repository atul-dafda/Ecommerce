import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2RjM2RiNjkxYTBjN2I4YjYzNzMyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTM2OTY0MSwiZXhwIjoxNjY5NjI4ODQxfQ.QtFm-qK6oksjzK-xRVmKDce38dB_gXQbb5N_fEJ_aEw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

import axios from "axios";
import { apiEndpoint, isAxiosMock } from "../utils/configs";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create({
  baseURL: apiEndpoint,
});

const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, {
  delayResponse: 0,
});

const axiosInstance = isAxiosMock ? axiosMockInstance : axiosLiveInstance;

export { axiosInstance, axiosMockAdapterInstance };

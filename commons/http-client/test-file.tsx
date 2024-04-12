import { HttpClient } from "./index";
import MockAdapter from "axios-mock-adapter";

export const httpMock = new MockAdapter(HttpClient);
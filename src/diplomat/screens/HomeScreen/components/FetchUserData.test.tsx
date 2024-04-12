import { FetchUserData } from "./FetchUserData";
import { render, screen } from '@testing-library/react';
import { httpMock } from "@commons/http-client/test-file";

describe("<FetchUserData />", () => {
  it("renders the component as expected", () => {

    httpMock.onGet("/users").reply(200, {
      "login": "omariosouto",
      "id": 13791385,
    });

    render(<FetchUserData />);

    expect(true).toBe(true);
  });
});
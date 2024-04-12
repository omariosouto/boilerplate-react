import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// ---------------
import { httpMock } from "@commons/http-client/test-file";
// ---------------
import { FetchUserData } from "./FetchUserData";

describe("<FetchUserData />", () => {
  it("renders the component as expected", async () => {

    httpMock.onGet("https://api.github.com/users/omariosouto").reply(200, {
      "login": "omariosouto",
      "id": 13791385,
    });

    render(<FetchUserData />);

    const $btn = await screen.findByRole("button");

    await userEvent.click($btn);
    
    const $fetchContainer = await screen.findByText(/omariosouto/i);

    expect($fetchContainer).toBeInTheDocument();
  });
});
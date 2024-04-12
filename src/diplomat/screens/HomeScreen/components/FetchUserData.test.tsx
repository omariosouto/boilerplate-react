import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// ---------------
import { generate } from "@commons/schema/test-file";
import { httpMock } from "@commons/http-client/test-file";
// ---------------
import { FetchUserData } from "./FetchUserData";
import { CustomerLoginWireIn } from "src/wire/in/customer";

describe("<FetchUserData />", () => {
  it("renders the component as expected", async () => {
    // Setup
    httpMock.onGet("https://api.github.com/users/omariosouto").reply(200, generate(CustomerLoginWireIn, {
      login: "omariosouto",
    }));
    render(<FetchUserData />);

    // Flow
    const $btn = await screen.findByRole("button");
    await userEvent.click($btn);
    const $fetchContainer = await screen.findByText(/omariosouto/i);

    // Expectations
    expect($fetchContainer).toBeInTheDocument();
  });
});
import { customRender, screen, userEvent } from "@commons/testing-library";
import { generate } from "@commons/schema/test-file";
import { httpMock } from "@commons/http-client/test-file";
// ---------------
import { FetchUserData } from "./FetchUserData";
import { CustomerLoginWireIn } from "../../../../wire/in/customer";
import { HandlerContextProvider } from "@commons/handler-context";

// Global Setup - Base Render
const render = customRender((props) => (
  <HandlerContextProvider
    {...props}
  />
));

describe("<FetchUserData />", () => {
  it("renders the component as expected", async () => {
    // Setup
    httpMock.onGet("https://api.github.com/users/omariosouto").reply(
      200,
      generate(CustomerLoginWireIn, {
        login: "omariosouto",
      })
    );
    render(<FetchUserData />);

    // Flow
    const $btn = await screen.findByRole("button");
    await userEvent.click($btn);
    const $fetchContainer = await screen.findByText(/omariosouto/i);

    // Expectations
    expect($fetchContainer).toBeInTheDocument();
  });
});
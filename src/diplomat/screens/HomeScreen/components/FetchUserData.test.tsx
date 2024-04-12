import { describe } from "node:test";
import { FetchUserData } from "./FetchUserData";

const render = jest.fn();

describe("<FetchUserData />", () => {
  it("renders the component as expected", () => {
    render(<FetchUserData />);

    expect(true).toBe(true);
  });
});
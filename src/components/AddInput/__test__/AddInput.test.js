import {fireEvent, render, screen} from "@testing-library/react";
import AddInput from "../AddInput";

describe("AddInput", () => {
  //should render input element
  it("renders input element matching placeholder", async () => {
    render(<AddInput setTodos={() => {}} todos={""} />);

    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(input).toBeInTheDocument();
  });

  it("should be able to type into input", async () => {
    render(<AddInput setTodos={() => {}} todos={""} />);

    const input = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(input, {target: {value: "Go grocery shopping"}});

    // assert that the input value has changed
    expect(input.value).toBe("Go grocery shopping");
  });

  it("should have empty input when ADD button is clicked", async () => {
    render(<AddInput setTodos={() => {}} todos={""} />);

    const input = screen.getByPlaceholderText(/Add a new task here.../i);

    const button = screen.getByRole("button", {name: /Add/i});
    fireEvent.change(input, {target: {value: "Go grocery shopping"}});
    fireEvent.click(button);

    // assert that the input value becomes empty after clicking button and submitting the value
    expect(input.value).toBe("");
  });
});

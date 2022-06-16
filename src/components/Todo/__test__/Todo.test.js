import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Todo from "../Todo";

const addTasks = (tasks) => {
  const input = screen.getByPlaceholderText(/Add a new task here/i);
  const button = screen.getByRole("button", {name: /Add/i});

  tasks.forEach((task) => {
    fireEvent.change(input, {target: {value: task}});
    fireEvent.click(button);
  });
};
describe("TODO", () => {
  it("renders the same text passed into input", async () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
    addTasks(["Go grocery shopping"]);

    const divElementText = screen.getByText(/Go grocery shopping/i);
    expect(divElementText).toBeInTheDocument();
  });

  it("renders the same number of items in list after submitting them", async () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
    const items = ["Go grocery shopping", "Go to the gym"];
    addTasks(items);

    const divElementText = screen.getAllByTestId("todo-item");
    expect(divElementText.length).toBe(items.length);
  });

  it("tasks should not have completed class when initially rendered", async () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
    const items = ["Go grocery shopping", "Go to the gym"];
    addTasks(items);

    const divElementText = screen.getByText("Go grocery shopping");
    expect(divElementText).not.toHaveClass("todo-item-active");
  });

  //   it("tasks should have completed class when clicked", async () => {
  //     render(
  //       <BrowserRouter>
  //         <Todo />
  //       </BrowserRouter>
  //     );
  //     const items = ["good"];
  //     addTasks(items);

  //     const divElement = screen.getByText(/good/i);
  //     fireEvent.click(divElement);
  //     expect(divElement).toHaveTextContent("good");
  //     expect(divElement).toHaveClass("todo-item-active");
  //   });
});

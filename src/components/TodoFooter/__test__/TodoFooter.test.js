import {render, screen} from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import {BrowserRouter} from "react-router-dom";

describe("TodoFooter", () => {
  it("renders correct amount of incomplete tasks", async () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={5} />
      </BrowserRouter>
    );
    const incompleteTasks = screen.getByText(/5 tasks left/i);
    expect(incompleteTasks).toBeInTheDocument();
  });

  it("renders correct amount of incomplete tasks for singlular vs plural", async () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </BrowserRouter>
    );
    const incompleteTasks = screen.getByText(/1 task left/i);
    expect(incompleteTasks).toBeInTheDocument();
  });

  it("if element is visible to user", async () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </BrowserRouter>
    );
    const incompleteTasks = screen.getByText(/1 task left/i);
    expect(incompleteTasks).toBeVisible();
  });

  it("element contains html element", async () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </BrowserRouter>
    );
    const incompleteTasks = screen.getByText(/1 task left/i);
    expect(incompleteTasks).toContainHTML("p");
  });
  it("element contains text content", async () => {
    render(
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={1} />
      </BrowserRouter>
    );
    const incompleteTasks = screen.getByText(/1 task left/i);
    expect(incompleteTasks).toHaveTextContent("1 task left");
  });
});

import {render, screen} from "@testing-library/react";
import Header from "../Header";

test("renders header with title passed as prop", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should have a heading matching a text Dogs", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByRole("heading", {name: /Dogs/i});
  expect(headingElement).toBeInTheDocument();
});

test("should have a heading with specific title prop", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

test("should have a data-testid", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByTestId("header-title");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY PROP
test("renders header with text async", async () => {
  render(<Header title="My Header" />);

  const headingElement = await screen.findByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

//  QUERY BY
test("query element with specific title is not found", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.queryByText(/cats/i);
  // opposite condition, if it's not found, it will return null
  expect(headingElement).not.toBeInTheDocument();
});
test("query element with specific title is found", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.queryByText(/dogs/i);
  // opposite condition, if it's not found, it will return null
  expect(headingElement).toBeInTheDocument();
});
test("check number of elements based on query set", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getAllByRole("heading");
  // to return an array of all the elements that match the query
  expect(headingElement.length).toBe(2);
});

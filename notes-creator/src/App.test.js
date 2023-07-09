import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CreateNote from "./views/components/createnote.component";

test("renders the navbar", () => {
  render(<CreateNote />);

  expect(screen.getByText(/enter note details/i)).toBeInTheDocument();
  expect(screen.findByRole("input")).toBeInTheDocument();
  expect(screen.findByRole("textbox")).toBeInTheDocument();
  expect(screen.findByRole("button", { name: "create" })).toBeInTheDocument();

  // expect(screen.getByText(/register/i)).toBeInTheDocument();
  // expect(screen.getByText(/login/i)).toBeInTheDocument();
  expect(screen.getAllByRole("Link").toHaveLength(3));
});

import React from "react";
import { render, screen, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", /My Awesome Todo List/i)
  ).toBeInTheDocument();
});

test("can add a task", async () => {
  render(<App />);
  const taskName = "My first task";
  const inputBox = screen.getByRole("textbox");
  await userEvent.type(inputBox, taskName);
  expect(inputBox).toHaveValue(taskName);

  await userEvent.click(screen.getByText(/save/i));

  await waitForElement(() => screen.getByRole("listitem"));
  expect(inputBox).toHaveValue("");
  expect(screen.getByText(taskName)).toBeInTheDocument();
});

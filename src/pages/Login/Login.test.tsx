import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("email input should be rendered", () => {
  render(<Login />);
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(<Login />);
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("loading should not be visible", () => {
  render(<Login />);
  const loader = screen.queryByTestId("loader");
  expect(loader).not.toBeInTheDocument();
});

test("email input should change", () => {
  render(<Login />);
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  const testValue = "test@test.test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  const testValue = "test54";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  const testValue = "test@test.test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const loader = screen.queryByTestId("loader");
  expect(loader).toBeInTheDocument();
});

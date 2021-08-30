import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

it("Doesn't break on the first test", () => {
  render(<Button>Test Me</Button>);
  const buttonElement = screen.getByText(/Test Me/i);
  expect(buttonElement).toBeInTheDocument();
});

it("contains the Button--active class when passed active prop", () => {
  render(<Button active>Test Me</Button>);
  const buttonElement = screen.getByText(/Test Me/i);
  expect(buttonElement).toHaveClass("Button--active");
});

it("contains the Button--large class when passed large prop", () => {
  render(<Button large>Test Me</Button>);
  const buttonElement = screen.getByText(/Test Me/i);
  expect(buttonElement).toHaveClass("Button--large");
});

it("disables the Button when passed disabled prop", () => {
  render(<Button disabled>Test Me</Button>);
  const buttonElement = screen.getByText(/Test Me/i);
  expect(buttonElement).toBeDisabled();
});

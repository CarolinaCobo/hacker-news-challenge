import fetch from "node-fetch";

import { expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

global.fetch = fetch;

it("filter buttons become active on clicking", async () => {
  render(<App />);
  const filterButton = screen.getByText(/New Stories/i);
  fireEvent.click(filterButton);
  expect(filterButton).toHaveClass("Button--active");
});

it("filter renders the posts from the API", async () => {
  render(<App />);

  const cards = await screen.findAllByTestId("card-container");
  expect(cards.length).toBe(10);
});

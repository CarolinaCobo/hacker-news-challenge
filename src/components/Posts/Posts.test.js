import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Posts from "./Posts";

const mockData = new Array(10)
  .fill({
    by: "7402",
    descendants: 54,
    id: 28356638,
    kids: [
      28359825, 28357377, 28357474, 28357312, 28357051, 28357237, 28356977,
    ],
    score: 136,
    time: 1630337497,
    title:
      "FCC Temporary Waiver Permits Higher Symbol Rate Data for Hurricane Ida Traffic",
    type: "story",
    url: "http://www.arrl.org/news/view/fcc-grants-temporary-waiver-to-permit-higher-symbol-rate-data-transmissions-for-hurricane-ida-traffi",
  })
  .map((item, index) => ({ ...item, id: index }));

it("renders the correct amount of cards", () => {
  render(<Posts postsData={mockData} />);

  const cards = screen.getAllByTestId("card-container");
  expect(cards.length).toBe(10);
});

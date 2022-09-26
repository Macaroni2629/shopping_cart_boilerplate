/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import CartLayout from "./CartLayout";

test("Shows empty cart", () => {
  render(<CartLayout cart={[]}/>)
  const empty = screen.getByText("Your cart is empty");

  expect(empty).toBeInTheDocument();
})

const cart = [
  {
    "_id":"632dfc7ceb97b02be813d57f",
    "title":"candy",
    "price":6,
    "quantity":1,
    "createdAt":"2022-09-23T18:35:40.513Z",
    "updatedAt":"2022-09-23T18:35:49.957Z",
    "__v":0
  },
  {
    "_id":"632dfc7ceb97b02be813d57h",
    "title":"stuff",
    "price":2,
    "quantity":4,
    "createdAt":"2022-09-23T18:35:40.513Z",
    "updatedAt":"2022-09-23T18:35:49.957Z",
    "__v":0
  }
]

// test("Show a product in cart", () => {
//   render(<CartLayout cart={cart} />)
//   // check the tbody's number of tr children to match the number we expect
//   // const tbody =
// })

test("The total is accurate", () => {
  render(<CartLayout cart={cart} />)
  // check that total is 14 dollars
  const total = screen.getByText("Total: $14");

  expect(total).toBeInTheDocument();
})
/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditableProduct from "./EditableProduct";

const product = {
  "id":"632dfc7ceb97b02be813d57f",
  "name":"candy",
  "price":6,
  "quantity":1,
}

test("Add to cart button gets grey'd out", async () => {
  // { id, name, price, quantity, onAddToCart, onEdit, onDelete }
  const onAddToCart = jest.fn(() => product.quantity-- )

  // Why use `rerender` and not `render` a 2nd time?
  const { rerender } = render(<EditableProduct {...product} onAddToCart={onAddToCart} />)
  // const link = screen.getByRole("link", {name: "Add to Cart"})
  const link = screen.getByText("Add to Cart")
  expect(link).not.toHaveClass("disabled")

  const user = userEvent.setup();
  await user.click(link)

  rerender(<EditableProduct {...product} onAddToCart={onAddToCart} />)

  expect(link).toHaveClass("disabled")
})

// test("The form appears when edit is clicked", () => {
//   render(<EditableProduct {...product} />)
//   const form = screen.getByRole("form");

//   expect(form).not.toBeInDocument();

//   // const editButton = screen.getByText("Edit")
// })
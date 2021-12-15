import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";

it("renders game headings", () => {
  const { getByText } = render(<Game />);
  getByText("TIC-TAC-LIVEN");
});

it("renders board and check for step counter update", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Expect "Current step: 0" to be found
  getByText("Current step: 0");

  const square0 = getByTestId(`square-0`);
  fireEvent.click(square0);

  // Expect "Current step: 1" to be found
  getByText("Current step: 1");
});

it("check if X is winner", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 3, 2, 5];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: X" to be found
  getByText("Winner: X");
});

it("check if X is winner, after reset", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 3, 2, 5];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: X" to be found
  getByText("Winner: X");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);
});

it("check if O is winner ", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 2, 0, 5, 3, 8];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: O" to be found
  getByText("Winner: O");
});

it("check if O is winner, after reset", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 2, 0, 5, 3, 8];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: O" to be found
  getByText("Winner: O");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);
});

it("check if is game over", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 2, 6, 3, 5, 1, 7, 8];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Draw: Game over" to be found
  getByText("Draw: Game over");
});

it("check if is game over, after reset", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 2, 6, 3, 5, 1, 7, 8];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Draw: Game over" to be found
  getByText("Draw: Game over");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);
});

it("check if X is winner, after check if O is winner", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 3, 2, 5];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: X" to be found
  getByText("Winner: X");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: O" to be found
  getByText("Winner: O");
});

it("check if X is winner, after check if O is winner and reset", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Board positions
  const boardClickPositions = [4, 0, 3, 2, 5];

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: X" to be found
  getByText("Winner: X");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);

  // Scroll board and click on array positions
  playBoard(boardClickPositions, getByTestId);

  // Expect "Winner: O" to be found
  getByText("Winner: O");

  // Reset board after finish game
  resetBoard(getByText, getByTestId);
});

function resetBoard(getByText: Function, getByTestId: Function) {
  const reset = getByTestId("resetButton");

  fireEvent.click(reset);

  getByText("Current step: 0");
}

function playBoard(positionBoard: Array<number>, getByTestId: Function) {
  for (let position in positionBoard) {
    const idTest = positionBoard[position];

    const element = getByTestId(`square-${idTest}`);

    fireEvent.click(element);
  }
}
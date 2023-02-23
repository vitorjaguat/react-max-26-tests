import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText('Hello World', {
      exact: false,
    }); //select an element by Text
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders Its good to see you as text if the button was NOT clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("It's good to see you!", {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('render Changed! if button WAS clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button'); //select element by its role
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('NOT render "Its good to see you" if button WAS clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("It's good to see you"); //when expecting something NOT to be found, use query, not get
    // expect(outputElement).not.toBeInTheDocument(); //this way also works
    expect(outputElement).toBeNull();
  });
});

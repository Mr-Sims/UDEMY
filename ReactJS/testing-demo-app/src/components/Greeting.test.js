import { render, screen, fireEvent } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

// The three 'A's
// 1. Arrange - Set up the test data, test conditions and test environment
// 2. Act - Run logic that should be tested(e.g. execute function)
// 3. Assert - Compare execution results with expected results


describe('Greeting component', () => {
    test('Hello World', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing in this example as there is hardly any logic in this component that just renders strings.

        // Assert

        // screen.get - they will throw an error if an element is not found 
        // screen.querry - they will NOT throw an error if an element is not found
        // screen.find - they will return a Promise. They will check if an element is eventually on the screen.
        const helloWorldElement = screen.getByText('hello world', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('text before change', () => {
        render(<Greeting />);
        const textToChange = screen.getByText(`It's good to see you!`, { exact: false });
        expect(textToChange).toBeInTheDocument();
    });

    test('Change text', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const button = screen.getByRole('button');
        // fireEvent.click(button);
        userEvent.click(button)

        // Assert
        const changedText = screen.getByText('Changed!');
        expect(changedText).toBeInTheDocument();

    });

    test('old text to be gone', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const button = screen.getByRole('button');
        // fireEvent.click(button);
        userEvent.click(button)

        // Assert
        const textToChange = screen.queryByText(`good to see you`, { exact: false });
        expect(textToChange).not.toBeInTheDocument();

    });
});



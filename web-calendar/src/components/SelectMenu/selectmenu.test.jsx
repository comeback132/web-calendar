import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SelectMenu from './SelectMenu';

describe('SelectMenu', () => {
  test('renders with default selected option', () => {
    render(<SelectMenu title="Select Time" />);

    const defaultOption = screen.getByText('12:30 pm');
    expect(defaultOption).toBeInTheDocument();
  });

  test('opens dropdown when clicked', () => {
    render(<SelectMenu title="Select Time" />);

    const dropdownHeader = screen.getByText('12:30 pm');
    fireEvent.click(dropdownHeader);

    const dropdownList = screen.getByRole('list');
    expect(dropdownList).toBeInTheDocument();
  });

  test('closes dropdown when option is clicked', () => {
    render(<SelectMenu title="Select Time" />);

    const dropdownHeader = screen.getByText('12:30 pm');
    fireEvent.click(dropdownHeader);

    const option = screen.getByText('12:00 am');
    fireEvent.click(option);

    const dropdownList = screen.queryByRole('list');
    expect(dropdownList).not.toBeInTheDocument();
  });

  test('displays correct options', () => {
    render(<SelectMenu title="Select Time" />);

    const dropdownHeader = screen.getByText('12:30 pm');
    fireEvent.click(dropdownHeader);

    const options = screen.getAllByTestId('select-option');
    const timeOptions = options.map(option => option.textContent);

    const expectedOptions = generateTimeOptions();

    expect(timeOptions).toEqual(expectedOptions);
  });
});

const generateTimeOptions = () => {
  const options = [];
  const startTime = 0;
  const interval = 15;

  for (let i = startTime; i < 24 * 60; i += interval) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60 === 0 ? "0" : i % 60;
    const amOrPm = hours < 12 ? "am" : "pm";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${
      formattedHours < 10 ? "0" + formattedHours : formattedHours
    }:${minutes < 10 ? "0" + minutes : minutes} ${amOrPm}`;
    options.push(timeString);
  }

  return options;
};

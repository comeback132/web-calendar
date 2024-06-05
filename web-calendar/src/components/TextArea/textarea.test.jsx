import React from 'react';
import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  test('renders title and text content', () => {
    render(<TextArea title="Description">This is the text content.</TextArea>);

    const titleElement = screen.getByText('Description');
    const textElement = screen.getByText('This is the text content.');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

 });

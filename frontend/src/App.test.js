import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

// Mock axios
jest.mock('axios');

// Mock environment variable
process.env.REACT_APP_BACKEND_URL = 'http://localhost:3001';

describe('App Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the initial state correctly', () => {
    render(<App />);
    // Check if main elements are present
    expect(screen.getByText('Marco Polo y Chinos')).toBeInTheDocument();
  });

});

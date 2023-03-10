import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainComponent from './MainComponent';
import * as ReactRouter from 'react-router';
import { MemoryRouter } from "react-router-dom"; 

describe('<MainComponent />', () => {
  test('it should mount', () => {
    const mockLocation = {
      pathname: '/',
      state: {},
      key: '',
      search: '',
      hash: ''
  };
    const useLocationSpy =  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue(mockLocation)
    render(
      <MemoryRouter> 
      <MainComponent />
    </MemoryRouter>
    );

    const mainComponent = screen.getByTestId('main_component');

    expect(mainComponent).toBeInTheDocument();
  });
});
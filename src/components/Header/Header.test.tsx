import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Header } from '.';

describe('<Header />', () => {
   window.scrollTo = () => {};
   beforeEach(() => {
      window.location.hash = '#/';
   });

   test('Renders correctly', () => {
      const view = render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      expect(view.container).toBeInTheDocument();
   });

   /////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Static info', () => {
      render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      const logo = screen.getByAltText('logo');
      expect(logo).toBeInTheDocument();

      const moviesLi = screen.getByText('Movies');
      const tvLi = screen.getByText('TV Shows');
      expect(moviesLi).toBeInTheDocument();
      expect(tvLi).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-node-access
      expect(tvLi.nextSibling).toBeInTheDocument();

      const mobileMenu = screen.queryByRole('article');
      expect(mobileMenu).toBeInTheDocument();
      expect(mobileMenu?.childNodes).toHaveLength(2);
   });

   /////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: handleClicks Menu > 768px', () => {
      render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      //Menu Container >768px
      const logo = screen.getByAltText('logo');
      fireEvent.click(logo);
      expect(window.location.hash).toBe('#/');

      const moviesLi = screen.getByText('Movies');
      fireEvent.click(moviesLi);
      expect(window.location.hash).toBe('#/explore/movie');

      const tvLi = screen.getByText('TV Shows');
      fireEvent.click(tvLi);
      expect(window.location.hash).toBe('#/explore/tv');

      // eslint-disable-next-line testing-library/no-node-access
      const svgSearch = screen.getByTestId('menuContainerSearch');
      fireEvent.click(svgSearch);
      const inputSearch = screen.getByPlaceholderText(/Search for a movie/);
      expect(inputSearch).toBeInTheDocument();
      fireEvent.click(svgSearch);
      expect(inputSearch).not.toBeInTheDocument();
   });

   /////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: handleClicks Menu Mobile < 768px', () => {
      render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      //Opening search Bar and closing with Search Icon
      const searchSvg = screen.getByTestId('menuMobileSearch');
      fireEvent.click(searchSvg);
      let inputSearch = screen.queryByPlaceholderText(/Search for a movie/);
      expect(inputSearch).toBeInTheDocument();
      fireEvent.click(searchSvg);
      expect(inputSearch).not.toBeInTheDocument();

      //Opening search Bar and closing with Close icon
      fireEvent.click(searchSvg);
      inputSearch = screen.queryByPlaceholderText(/Search for a movie/);
      expect(inputSearch).toBeInTheDocument();
      const searchClose = screen.getByTestId('searchClose');
      fireEvent.click(searchClose);
      expect(inputSearch).not.toBeInTheDocument();

      //Opening Menu Mobile showing Movies and TV and closing with close Icon
      const barsSvg = screen.getByTestId('menuMobileBars');
      const moviesLi = screen.getByText('Movies');
      // eslint-disable-next-line testing-library/no-node-access
      expect(moviesLi.parentElement).toHaveStyle('display: none');
      fireEvent.click(barsSvg);
      // eslint-disable-next-line testing-library/no-node-access
      expect(moviesLi.parentElement).toHaveStyle('display: flex');
      const closeSvg = screen.getByTestId('menuMobileClose');
      fireEvent.click(closeSvg);
      // eslint-disable-next-line testing-library/no-node-access
      expect(moviesLi.parentElement).toHaveStyle('display: none');
   });

   ///////////////////////////////////////////////////////////////////////////////
   test('Renders: handleInputSearch', () => {
      render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      //Opening search Bar
      const searchSvg = screen.getByTestId('menuMobileSearch');
      fireEvent.click(searchSvg);
      const inputSearch = screen.getByPlaceholderText(/Search for a movie/);

      //Making a search with value = ''
      window.location.hash = '#/';
      fireEvent.change(inputSearch, { target: { value: '' } });
      fireEvent.keyUp(inputSearch, { key: 'Enter' });
      expect(window.location.hash).toBe('#/');

      //Making a Search
      fireEvent.change(inputSearch, { target: { value: 'test' } });
      fireEvent.keyUp(inputSearch, { key: 'Enter' });
      expect(window.location.hash).toBe('#/search/test');

   });

   ////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Scrolling', () => {
      render(
         <HashRouter>
            <Header />
         </HashRouter>
      );

      const header = screen.getByRole('banner');

      //Scroll Y = 0
      expect(header).toHaveStyle('background-color: rgba(0, 0, 0, 0.25)');

      //Scroll Y < 200
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      console.log(window.scrollY);
      expect(header).toHaveStyle('background-color: var(--black3)');

      //Scroll Y > 200
      fireEvent.scroll(window, { target: { scrollY: 300 } });
      expect(header).toHaveStyle('transform: translateY(-60px);');

      //Scroll Y > 200 (do nothing)
      fireEvent.scroll(window, { target: { scrollY: 250 } });
      expect(header).toHaveStyle('transform: translateY(-60px);');

      //Scroll Y = 0
      fireEvent.scroll(window, { target: { scrollY: 0 } });
      expect(header).toHaveStyle('background-color: rgba(0, 0, 0, 0.25)');
   });
});

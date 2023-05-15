import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { checkProps } from './checkProps';

describe('CheckProps()', () => {
   test('Case 1: Trending', () => {
      expect(checkProps(null, 'trending')).toEqual({loading: false, error: true});
      expect(checkProps('tv', 'trending')).toEqual({loading: false, error: true});
      expect(checkProps('movie', 'trending')).toEqual({loading: false, error: true});
   });

   test('Case 2: Popular, Top Rated and Upcoming', () => {
      expect(checkProps(null, 'popular')).toEqual({loading: false, error: true});
      expect(checkProps('day', 'popular')).toEqual({loading: false, error: true});
      expect(checkProps('week', 'popular')).toEqual({loading: false, error: true});
      expect(checkProps(null, 'top-rated')).toEqual({loading: false, error: true});
      expect(checkProps('day', 'top-rated')).toEqual({loading: false, error: true});
      expect(checkProps('week', 'top-rated')).toEqual({loading: false, error: true});
      expect(checkProps(null, 'upcoming-movies')).toEqual({loading: false, error: true});
      expect(checkProps('day', 'upcoming-movies')).toEqual({loading: false, error: true});
      expect(checkProps('week', 'upcoming-movies')).toEqual({loading: false, error: true});
   });

   test('Case 3: Upcoming Movies and Recommendations', () => {
      expect(checkProps('tv', 'recommendations')).toEqual({loading: false, error: true});
   });

   test('Case 4: Right Ones', () => {
      expect(checkProps('day', 'trending')).toEqual({loading: true, error: false});
      expect(checkProps('week', 'trending')).toEqual({loading: true, error: false});
      expect(checkProps('movie', 'popular')).toEqual({loading: true, error: false});
      expect(checkProps('tv', 'popular')).toEqual({loading: true, error: false});
      expect(checkProps('movie', 'top-rated')).toEqual({loading: true, error: false});
      expect(checkProps('tv', 'top-rated')).toEqual({loading: true, error: false});
      expect(checkProps('movie', 'upcoming-movies')).toEqual({loading: true, error: false});
      expect(checkProps('tv', 'upcoming-movies')).toEqual({loading: true, error: false});
      expect(checkProps(null, 'recommendations')).toEqual({loading: true, error: false});
   });
})
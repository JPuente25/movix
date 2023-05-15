import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { OfficialVideos } from '.';

describe('<OfficialVideos />', () => {
   const mockVideo = [{
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'A Conversation with Danai Gurira & Simone Manuel',
      key: 'OdDdcf8iWkI',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2023-02-10T21:00:15.000Z',
      id: '63eaf86e813cb6007941a617'
    }];

   ////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders correctly', () => {
      const view = render(<OfficialVideos data={mockVideo} />);
      expect(view.container).toBeInTheDocument();
   });

   ////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Video Card and Info, handleClick', () => {
      render(<OfficialVideos data={mockVideo} />);

      const container = screen.getByRole('article');
      expect(container).toBeInTheDocument();

      const videoImage = screen.getByAltText('movie/cast-picture');
      expect(videoImage).toBeInTheDocument();

      const icon = screen.getByRole('contentinfo');
      expect(icon).toBeInTheDocument();
      fireEvent.click(icon);
      const openVideoView = screen.queryByRole('group');
      expect(openVideoView).toBeInTheDocument();
      const close = screen.getByRole('figure');
      fireEvent.click(close);
      expect(openVideoView).not.toBeInTheDocument();

      const title = screen.getByText('A Conversation with Danai Gurira & Simone Manuel');
      expect(title).toBeInTheDocument();
   });

   ////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Missing key', () => {
      const mockVideo2 = [{
         iso_639_1: 'en',
         iso_3166_1: 'US',
         name: 'A Conversation with Danai Gurira & Simone Manuel',
         key: '',
         site: 'YouTube',
         size: 1080,
         type: 'Featurette',
         official: true,
         published_at: '2023-02-10T21:00:15.000Z',
         id: '63eaf86e813cb6007941a617'
       }];

      render(<OfficialVideos data={mockVideo2} />);

      const container = screen.getByRole('article');
      expect(container).toBeInTheDocument();

      const videoImage = screen.getByAltText('no-image-found');
      expect(videoImage).toBeInTheDocument();

      const icon = screen.getByRole('contentinfo');
      expect(icon).toBeInTheDocument();
      fireEvent.click(icon);
      const openVideoView = screen.queryByRole('group');
      expect(openVideoView).not.toBeInTheDocument();

      const title = screen.getByText('A Conversation with Danai Gurira & Simone Manuel');
      expect(title).toBeInTheDocument();
   });

   ////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: No content', () => {
      render(<OfficialVideos data={[]} />);

      const noContent = screen.getByText('There is not content to show!');
      expect(noContent).toBeInTheDocument();
   });
})
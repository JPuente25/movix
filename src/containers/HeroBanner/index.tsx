import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Img } from '../../components/Img';
import { BASE_IMG_URL } from '../../utils/api/api';
import { isArrayEmpty } from '../../utils/functions/isArrayEmpty';
import {
   BackdropImg,
   ContentContainer,
   OpacityLayer,
   SearchField,
   StyledHeroBanner,
   Subtitle,
   Title,
} from './index.styled';

const HeroBanner = () => {
   const [background, setBackground] = useState<string>('');
   const [query, setQuery] = useState<string>('');
   const [queryWarning, setQueryWarning] = useState<boolean>(false);
   const navigate = useNavigate();
   const { popularMovies, loadingPopular } = useAppSelector((state) => state.home);

   useEffect(() => {
      if (popularMovies.results) {
         if (!isArrayEmpty(popularMovies.results)){
            const bgPath =
               popularMovies.results[Math.floor(Math.random() * popularMovies.results.length)]
                  .backdrop_path;
   
            setBackground(BASE_IMG_URL + bgPath);
         }
      }
   }, [popularMovies]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
   };

   const handleSearch = () => {
      if (!query) {
         setQueryWarning(true);
         setTimeout(() => {
            setQueryWarning(false);
         }, 3000);
      } else {
         navigate(`/search/${query}`);
      }
   };

   return (
      <StyledHeroBanner>
         {!loadingPopular && background && (
            <BackdropImg className="backdrop">
               <Img src={background} />
            </BackdropImg>
         )}

         <OpacityLayer />

         <ContentWrapper>
            <ContentContainer>
               <Title>Welcome.</Title>

               <Subtitle>
                  Millions of movies, TV shows and people to discover. Explore now.
               </Subtitle>

               <SearchField
                  onSubmit={(e) => e.preventDefault()}
                  queryWarning={queryWarning.toString()}>
                  <input
                     type="text"
                     placeholder={
                        queryWarning
                           ? 'Come on! Give me some information'
                           : 'Search for a movie o TV show...'
                     }
                     onChange={handleChange}
                     value={query}
                  />
                  <button onClick={handleSearch}>Search</button>
               </SearchField>
            </ContentContainer>
         </ContentWrapper>
      </StyledHeroBanner>
   );
};

export { HeroBanner };

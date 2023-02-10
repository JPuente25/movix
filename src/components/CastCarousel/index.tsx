import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CreditsProps } from '../../types';
import { BASE_IMG_URL } from '../../utils/api/api';
import { NoContent } from '../NoContent';
import { Img } from '../Img';
import { CrewInfo, CrewCard, Picture, Container, Section } from './index.styled';

interface Props {
   data: CreditsProps
}

const CastCarousel = ({data}: Props) => {
   return (
      <Section className="topCast">
         <h1 className="title">Top Cast</h1>

         <Container className="crewContainer">

            {data.cast.length !== 0 
               ? data.cast.map((person) => (
               <CrewCard key={uuidv4()} className="crew">
                  <Picture className="picture">
                     <Img src={person.profile_path 
                        ? BASE_IMG_URL + person.profile_path
                        : null} />
                  </Picture>

                  <CrewInfo className="info">
                     <span className='name'>{person.name}</span>
                     <span className='character'>{person.character}</span>
                  </CrewInfo>
               </CrewCard>
            ))
         : <NoContent />}

         </Container>
      </Section>
   );
};

export { CastCarousel };

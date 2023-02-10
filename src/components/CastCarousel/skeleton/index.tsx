import React from 'react';
import { CrewInfo, CrewCard, Picture, Container, Section } from './index.styled';


const SkeletonCastCarousel = () => {
   return (
      <Section className="topCast">
         <div className="title"></div>

         <Container className="crewContainer">

            {new Array(8).fill(1).map((person, i) => (
               <CrewCard key={i} className="crew">
                  <Picture className="picture"></Picture>
                  
                  <CrewInfo className="info">
                     <span className='name'></span>
                     <span className='character'></span>
                  </CrewInfo>
               </CrewCard>
            ))}

         </Container>
      </Section>
   );
};

export { SkeletonCastCarousel };
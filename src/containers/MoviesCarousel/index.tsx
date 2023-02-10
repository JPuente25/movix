import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Carousel } from '../../components/Carousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import {
   CarouselSection,
   ContentWrapper,
   Notch,
   SwitchContainer,
   Tab,
   Title,
} from './index.styled';

interface Props {
   title: string;
   dataType: string;
   selectedTab?: number;
   setSelectedTab?: React.Dispatch<React.SetStateAction<number>>;
   options?: Array<{
      label: string,
      value: string
   }>
   fixedMedia?: string;
   className?: string
}

const MoviesCarousel = ({ title, selectedTab, setSelectedTab, options, fixedMedia, dataType, className}: Props) => {
   const container = useRef(null);
   const carouselSection = useRef(null);
   const selectedOption: string | null = fixedMedia ? fixedMedia : options ? options![selectedTab!].value : null;

   const handleSwitch = (optionIndex: number) => {
      if (selectedTab !== optionIndex) {
         setSelectedTab!(optionIndex);
      }
   };

   const handleScroll = (dir: string) => {
      const element = container.current;
      const availableWidth = (carouselSection.current as any).clientWidth;
      
      if (element) {
         const scrollAmmount: number = (dir === 'right') 
         ? (element as any).scrollLeft + availableWidth - 20  
         : (element as any).scrollLeft - availableWidth + 20;
         
         (element as any).scrollTo({
            left: scrollAmmount,
            behavior: 'smooth',
         });
      }
   };

   return (
      <CarouselSection ref={carouselSection} className={className}>
         <ContentWrapper>
            <BsFillArrowLeftCircleFill
               onClick={() => handleScroll('left')}
               className="arrow arrowLeft"/>
            <BsFillArrowRightCircleFill
               onClick={() => handleScroll('right')}
               className="arrow arrowRight"/>

            <Title>{title}</Title>

            
            {options && <SwitchContainer>
               {options.map((option, i) => (
                  <Tab
                     key={uuidv4()}
                     selectedTab={selectedTab!}
                     tab={i}
                     onClick={() => handleSwitch(i)}>
                     {option.label}
                  </Tab> ))}

               <Notch selectedTab={selectedTab!}></Notch>
            </SwitchContainer>}

         </ContentWrapper>

         <Carousel
            sectionRef={carouselSection}
            reference={container}
            dataType={dataType}
            selectedOption={selectedOption} />
      </CarouselSection>
   );
};

export { MoviesCarousel };

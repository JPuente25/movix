import React, { useRef, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { Carousel } from '../../components/Carousel';
import {
   CarouselSection,
   ContentWrapper,
   Notch,
   SwitchContainer,
   Tab,
   Title
} from './index.styled';

interface Props {
   title: string;
   dataType: string; //trending | popular | top-rated | upcoming-movies | recommendations
   options?: Array<{
      // [{
      label: string; //  label: 'Day' | label: 'Week' | label: 'Movie' | label: 'TV Shows'
      value: string; //   value: 'day' | value: 'week' | value: 'movie' | value: 'tv'
   }>; // }]
   fixedMedia?: string; // movie | tv
   className?: string;
}

interface MoviesCarouselStates {
   selectedTab: number;
}

/*
1. title, dataType, options, className?
2. title, dataType, fixedMedia, className?
*/

const MoviesCarousel = ({
   title,
   options,
   fixedMedia,
   dataType,
   className,
}: Props) => {

   const container = useRef<HTMLDivElement>(null);
   const carouselSection = useRef<HTMLElement>(null);
   const [selectedTab, setSelectedTab] = useState<MoviesCarouselStates['selectedTab']>(0);
   const selectedOption: string | null = fixedMedia
      ? fixedMedia
      : options
         ? options[selectedTab].value
         : null;

   const selectedLabel: string = options ? options[selectedTab].label : '';

   const handleSwitch = (optionIndex: number) => {
      if (selectedTab !== optionIndex) {
         setSelectedTab(optionIndex);
      }
   };

   const handleScroll = (dir: string) => {
      const element = container.current;
      const availableWidth = carouselSection.current!.clientWidth;

      if(element) {
         const scrollAmmount: number =
            dir === 'right'
               ? element.scrollLeft + availableWidth - 20 //right
               : element.scrollLeft - availableWidth + 20; //left
   
         element.scrollTo({
            left: scrollAmmount,
            behavior: 'smooth',
         });
      }
   };

   return (
      <CarouselSection
         ref={carouselSection}
         className={className}>
         <ContentWrapper>
               <React.Fragment>
                  <BsFillArrowLeftCircleFill
                     data-testid="arrowIcon"
                     onClick={() => handleScroll('left')}
                     className="arrow arrowLeft"
                  />
                  <BsFillArrowRightCircleFill
                     data-testid="arrowIcon"
                     onClick={() => handleScroll('right')}
                     className="arrow arrowRight"
                  />
               </React.Fragment>

            <Title>{title}{selectedLabel ? `: ${selectedLabel}` : ''}</Title>

            {options && (
               <SwitchContainer>
                  {options.map((option, i) => (
                     <Tab
                        key={uuidv4()}
                        selectedTab={selectedTab!}
                        tab={i}
                        onClick={() => handleSwitch(i)}>
                        {option.label}
                     </Tab>
                  ))}

                  <Notch selectedTab={selectedTab!}></Notch>
               </SwitchContainer>
            )}
         </ContentWrapper>

         <Carousel
            sectionWidth={carouselSection.current?.clientWidth}
            reference={container}
            dataType={dataType}
            selectedOption={selectedOption}
         />
      </CarouselSection>
   );
};

export { MoviesCarousel };


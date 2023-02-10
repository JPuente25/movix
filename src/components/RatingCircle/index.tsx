import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { Container } from './index.styled';

const RatingCircle = ({rating}: {rating: string}) => {
   const ratingNumber = Number(rating);
   return (
      <Container className="ratingCircle">
         <CircularProgressbar
            value={rating as any}
            maxValue={10}
            text={rating.toString()}
            styles={
               buildStyles({
                  pathColor: ratingNumber < 5
                     ? "red"
                     : ratingNumber < 7
                        ? "orange"
                        : "green"
               })
            }
         />
      </Container>
   );
};

export { RatingCircle };

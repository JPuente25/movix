import React from 'react';

interface Props {
   src: string | undefined;
}

const VideoPlayer = ({ src }: Props) => {

   return (
      <iframe
         src={src}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen></iframe>
   );
};

export { VideoPlayer };

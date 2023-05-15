export const checkProps = (selectedOption: string | null, dataType: string): {loading: boolean, error: any} => {
   if ((dataType === 'trending') && (selectedOption === null || selectedOption === 'tv' || selectedOption === 'movie')) {
      return {loading: false, error: true};
   } else if ((dataType === 'popular' || dataType === 'top-rated' || dataType === 'upcoming-movies') && (selectedOption === null || selectedOption === 'day' || selectedOption === 'week')) {
      return {loading: false, error: true};
   } else if (( dataType === 'recommendations') && selectedOption !== null) {
      return {loading: false, error: true};
   } else {
      return {loading: true, error: false};
   }
};
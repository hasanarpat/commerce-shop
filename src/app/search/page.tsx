import React from 'react';

const SearchResultsPage = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const params = searchParams.searchParams && searchParams.searchParams['item'];
  return (
    <div>
      SearchResultsPage:<h2>Key:{params}</h2>
    </div>
  );
};

export default SearchResultsPage;

const SearchResultsPage = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const item = searchParams["item"];
  const latest = searchParams["latest"];
  const cheapest = searchParams["cheapest"];
  const inOffer = searchParams["inOffer"];
  // ...existing code...
};

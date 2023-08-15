import { useQuery } from '@tanstack/react-query';

function useShortenLink(longLink) {
  return useQuery(
    ['linkData', longLink],
    () => fetch('/.netlify/functions/shortenLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: longLink }),
    }).then((res) => res.json()),
    {
      enabled: !!longLink, // only run the query if longLink is defined
      staleTime: Infinity, // prevent automatic refetching when the data is stale
      cacheTime: Infinity, // keep the data in the cache indefinitely
    }
  );
}

export default useShortenLink;

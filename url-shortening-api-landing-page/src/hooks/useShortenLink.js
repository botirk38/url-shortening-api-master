import { useQuery } from '@tanstack/react-query';

function useShortenLink(longLink) {
  return useQuery(
    ['linkData', longLink], // queryKey is now an array including longLink
    () => fetch('/.netlify/functions/shortenLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: longLink }),
    }).then((res) => res.json()),
    { enabled: !!longLink } // only run the query if longLink is defined
  );
}

export default useShortenLink;

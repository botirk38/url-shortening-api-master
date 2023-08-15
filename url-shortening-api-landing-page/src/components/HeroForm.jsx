import { useMutation, useQueryClient } from 'react-query';
import Hero from './Hero';
import ShortenedLinks from './ShortenedLinks';

function HeroForm() {

  const shortenLink = (longLink) =>
  fetch('/.netlify/functions/shortenLink', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: longLink }),
  }).then((res) => res.json());


  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: shortenLink,
    onSuccess: (data) => {
      // Update the query data with the new short link
      queryClient.setQueryData(['linkData'], data);
    },
  });

  const handleShortenLink = (longLink) => {
    mutation.mutate(longLink);
  };

  // Retrieve the linkData from query cache
  const linkData = queryClient.getQueryData(['linkData']);

  return (
    <>
      <Hero setLinkData={handleShortenLink} />
      <ShortenedLinks linkData={linkData} />
    </>
  );
}

export default HeroForm;

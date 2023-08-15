import Hero from './Hero';
import ShortenedLinks from './ShortenedLinks';
import { useState } from 'react';
import useShortenLink from '../hooks/useShortenLink';

function HeroForm() {
  const [longLink, setLongLink] = useState('');
  const { data: linkResponse } = useShortenLink(longLink);
  const shortLink = linkResponse?.result?.short_link; // Extract short link from response

  const handleShortenLink = (newLongLink) => {
    setLongLink(newLongLink);
    console.log(newLongLink);
  };

  const linkData = {
    longLink: longLink, // Pass the long link from state
    short_link: shortLink, // Pass the extracted short link
  };

  return (
    <>
      <Hero setLinkData={handleShortenLink} />
      <ShortenedLinks linkData={linkData} />
    </>
  );
}


export default HeroForm;

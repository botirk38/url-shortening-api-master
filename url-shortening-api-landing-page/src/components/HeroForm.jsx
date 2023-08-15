import Hero from './Hero';
import ShortenedLinks from './ShortenedLinks';
import { useState, useEffect } from 'react';
import useShortenLink from '../hooks/useShortenLink';

function HeroForm() {
  const [longLink, setLongLink] = useState('');
  const [links, setLinks] = useState([]);
  const { data: linkResponse } = useShortenLink(longLink);
  const shortLink = linkResponse?.result?.short_link;

  useEffect(() => {
    if (longLink && shortLink && !links.some(link => link.longLink === longLink && link.short_link === shortLink)) {
      setLinks(prevLinks => [...prevLinks, { longLink, short_link: shortLink }]);
    }
  }, [shortLink, longLink, links]);

  const handleShortenLink = (newLongLink) => {
    setLongLink(newLongLink);
    console.log(newLongLink);
  };

  return (
    <>
      <Hero setLinkData={handleShortenLink} />
      <ShortenedLinks links={links} />
    </>
  );
}

export default HeroForm;

import PropTypes from 'prop-types';
import { useState } from 'react';

function ShortenedLinks({ links = [] }) {
  const [copySuccess, setCopySuccess] = useState('');

  

  return (
    <section className="grid grid-cols-1 gap-6 mt-40 grid-rows-auto place-items-center text-center w-full sm:w-screen sm:py-0 h-auto sm:grid-rows-1 sm:px-10 ">
      {links.map((linkData, index) => {
        console.log(linkData)

        const handleCopyClick = () => {
          navigator.clipboard.writeText(linkData.short_link)
            .then(() => {
              setCopySuccess('Copied!');
            })
            .catch(err => {
              setCopySuccess('Failed to copy!');
              console.error('Failed to copy text: ', err);
            });
        };

        return (
          <div key={index} className='flex bg-white flex-col rounded-lg w-80 sm:w-2/3 sm:min-h-full justify-center items-start text-start p-6 border-b-2 border-neutral-gray sm:p-0 sm:items-center sm:border-0 sm:flex-row lg:mr-6 '>
            <div className='flex flex-col w-full sm:min-h-full justify-center items-start text-start max-w-sm sm:max-w-md py-6 border-b-2 border-neutral-gray sm:p-3 sm:items-center sm:border-0'>
              <p className='text-sm sm:px-3 '>{linkData.longLink}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-start text-start max-w-sm sm:max-w-md sm:space-x-2 py-6 sm:flex-row sm:items-center sm:p-3'>
              <p className='text-primary-cyan text-sm '>{linkData.short_link}</p>
              <button onClick={handleCopyClick} className={`rounded-lg p-4 mt-6 w-full text-white sm:p-2 sm:mt-0  bg-primary-cyan ${copySuccess ? "bg-neutral-very-dark-violet" : "bg-primary-cyan"}`}>{copySuccess ? "Copied" : "Copy"}</button>
            </div>
          </div>
        );
      })}
    </section>
    
  );

  
}

ShortenedLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      longLink: PropTypes.string.isRequired,
      short_link: PropTypes.string.isRequired,
    })
  ),
};

export default ShortenedLinks;

import PropTypes from 'prop-types';
import { useState } from 'react';

function ShortenedLinks({ linkData }) {
    const [copySuccess, setCopySuccess] = useState('');
  
    const handleCopyClick = () => {
      navigator.clipboard.writeText(linkData.shortLink)
        .then(() => {
          setCopySuccess('Copied!');
        })
        .catch(err => {
          setCopySuccess('Failed to copy!');
          console.error('Failed to copy text: ', err);
        });
    };
  
    if (linkData.longLink && linkData.shortLink) {
      return (
        <section className="grid grid-cols-1 mt-40 grid-rows-auto place-items-center text-center w-full  sm:w-screen sm:py-0 h-auto sm:grid-rows-1 sm:px-10 ">

        <div className='flex bg-white flex-col rounded-lg w-80 sm:w-auto sm:min-h-full justify-center items-start text-start  p-6 border-b-2 border-neutral-gray sm:p-0 sm:items-center sm:border-0 sm:flex-row '>
          <div className='flex  flex-col w-full sm:min-h-full justify-center items-start text-start max-w-sm  sm:max-w-md py-6 border-b-2 border-neutral-gray sm:p-3 sm:items-center sm:border-0 '>
            <p className='text-sm sm:px-3'>{linkData.longLink}</p>
          </div>
  
          <div className='flex flex-col  w-full justify-center items-start text-start max-w-sm sm:max-w-md sm:space-x-2 py-6 sm:flex-row sm:items-center  sm:p-3'>
            <p className='text-primary-cyan text-sm '>{linkData.shortLink}</p>
            <button onClick={handleCopyClick} className={`rounded-lg p-4 mt-6 w-full text-white sm:p-2 sm:mt-0  bg-primary-cyan ${copySuccess ? "bg-neutral-very-dark-violet" :"bg-primary-cyan"}`}>{copySuccess ? "Copied" : "Copy"}</button>
          </div>
        </div>
  
        </section>
      );
    }
  
    return null; // Render nothing if linkData does not have both longLink and shortLink
  }
  
  ShortenedLinks.propTypes = {
    linkData: PropTypes.object.isRequired
  };
  
  export default ShortenedLinks;
  
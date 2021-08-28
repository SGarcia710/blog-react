import React from 'react';
import cx from 'classnames';

const LINKS = [
  'Blog',
  'Guides',
  'Newsletter',
  'RSS',
  'Donate',
  'Patreon',
  'OnlyFans',
];

const Footer = () => {
  const logoClasses = cx('w-12 h-12 cursor-pointer mx-4');
  return (
    <div className="w-full flex items-center flex-col py-10 ">
      <div className="flex ">
        {React.Children.toArray(
          LINKS.map((link) => (
            <p className="text-xl hover:bg-yellow-500 hover:text-white py-4 px-7 cursor-pointer">
              {link}
            </p>
          ))
        )}
      </div>
      <div className="flex mt-6">
        <img
          alt="Netlify"
          className={logoClasses}
          src="https://www.taniarascia.com/static/netlify-33bca343cbbd80d8da58eae4d7adc926.png"
        />
        <img
          alt="React"
          className={logoClasses}
          src="https://cdn-images-1.medium.com/max/800/1*6kK9j74vyOmXYm1gN6ARhQ.png"
        />
        <img
          alt="Tailwindcss"
          className={logoClasses}
          src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
        />
      </div>
    </div>
  );
};

export default Footer;

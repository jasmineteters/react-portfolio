import React from 'react';
    

function Footer(){
  return(
    <footer
      className="bg-oxfordBlue text-center text-white w-full justify-center py-5 mt-20"
    >
      <div className="flex flex-row bg-oxfordBlue justify-center">
        <a
          className="fa fa-github m-2 text-white animate-bounce"
          href="https://github.com/jasmineteters"
        ></a>
        <a
          className="fa fa-linkedin m-2 text-white animate-bounce"
          href="https://linkedin.com/in/jasmine-teters"
        ></a>
        <a
          className="fa fa-envelope m-2 text-white animate-bounce"
          href="mailto:jasmineteters2020@gmail.com"
        ></a>
        <a
          className="fa fa-phone m-2 text-white animate-bounce"
          href="tel:5034607641"
        ></a>
      </div>
      <div className="flex text-white justify-center">
        <p className="font-cabin">&copy; Copyright JT Web Development</p>
      </div>
    </footer>
  );
}

export default Footer;
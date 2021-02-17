import React from 'react';
const buttonstyle = {
  'font-size': '16px',
};
function Resume() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col tablet:w-4/5 tablet:mx-auto laptop:w-1/2 m-5 p-5 shadow-2xl rounded-2xl mx-3 desktop:mx-10 transition duration-500 ease-in-out hover:bg-silverSand hover:bg-opacity-50 '>
        <iframe
          className='h-4/5 mb-3'
          src='https://docs.google.com/document/d/e/2PACX-1vSeUTIAk5lH9hK9VIiWa_OV95l0j3j6I1nNkB3ij803Z7WU-4IWRruwACzXqhDxdCpjQPEA7Hj62uHr/pub?embedded=true'
        ></iframe>

        <div className=''>
          <h5 className='text-3xl font-light font-bioRhyme text-center mb-2 border-b '>
            Full-Stack Web Development Resume
          </h5>
          <p className='font-cabin italic text-lg'>
            This is a live document that is evolving as I go through my bootcamp
          </p>
          <div className='flex flex-inline justify-evenly py-5'>
            <a
              style={{ buttonstyle }}
              className='bg-oxfordBlue text-white float-left py-2 px-3 rounded-lg mx-1 flex m-1'
              href='https://docs.google.com/document/d/1B7D8pCwM9PoA9CeQSc0fH5sHD7xB2K_ZEtIPP5UQ0rA/edit?usp=sharing'
            >
              Resume
              <svg
                className='ml-1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='24'
                height='24'
                viewBox='0 0 172 172'
                style={{ fill: '#000000' }}
              >
                <g transform='translate(4.73,4.73) scale(0.945,0.945)'>
                  <g
                    fill='none'
                    fill-rule='nonzero'
                    stroke='none'
                    strokeWidth='none'
                    strokeLinecap='butt'
                    strokeLinejoin='none'
                    strokeMiterlimit='10'
                    strokeDasharray=''
                    strokeDashoffset='0'
                    fontFamily='none'
                    fontWeight='none'
                    fontSize='none'
                    textAnchor='none'
                    style={{ 'mix-blend-mode': 'normal' }}
                  >
                    <g
                      fill='#000000'
                      stroke='#000000'
                      strokeWidth='10'
                      strokeLinejoin='round'
                    >
                      <path d='M159.53,100.33333h-48.4825l-47.58667,-82.41667h40.20858c5.12058,0 9.85058,2.7305 12.41267,7.16667zM158.81333,111.08333l-20.6615,35.82617c-2.5585,4.43975 -7.29208,7.17383 -12.41625,7.17383h-83.77475l24.8325,-43zM79.58583,67.36667l-46.79833,81.055l-20.6615,-35.7975c-2.5585,-4.43617 -2.5585,-9.89717 0,-14.33333l42.66317,-73.88833z'></path>
                    </g>
                    <path
                      d='M0,172v-172h172v172z'
                      fill='none'
                      stroke='none'
                      strokeWidth='1'
                      strokeLinejoin='miter'
                    ></path>
                    <g
                      fill='#ffffff'
                      stroke='none'
                      strokeWidth='1'
                      strokeLinejoin='miter'
                    >
                      <path d='M159.53,100.33333h-48.4825l-47.58667,-82.41667h40.20858c5.12058,0 9.85058,2.7305 12.41267,7.16667zM158.81333,111.08333l-20.6615,35.82617c-2.5585,4.43975 -7.29208,7.17383 -12.41625,7.17383h-83.77475l24.8325,-43zM79.58583,67.36667l-46.79833,81.055l-20.6615,-35.7975c-2.5585,-4.43617 -2.5585,-9.89717 0,-14.33333l42.66317,-73.88833z'></path>
                    </g>
                    <path
                      d=''
                      fill='none'
                      stroke='none'
                      strokeWidth='1'
                      strokeLinejoin='miter'
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

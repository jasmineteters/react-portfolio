import React, { Component } from 'react';
import data from '../portfolio/data.json';
import Resume from './resume';



  let buttonstyle = {
    'font-size': '16px',
  };
  const newdata = data.reverse().map((data) => {
    return (
      <>
        <div className='flex flex-col tablet:w-4/5 tablet:mx-auto laptop:w-2/5 desktop:w-1/5 m-5 p-5 shadow-2xl rounded-2xl mx-3 laptop:mx-5 desktop:mx-10 h-1/2 my-auto transition duration-500 ease-in-out hover:bg-silverSand hover:bg-opacity-50 '>
          <a href={data.deploymentLink} target='_blank'>
            <img src={data.img} className='w-full my-3' alt='...' />
          </a>

          <div className='' key={data.id}>
            <h5 className='text-3xl mb-2 border-b font-light font-bioRhyme text-center'>
              {data.projectName}
            </h5>
            <p className='font-cabin italic text-lg'>{data.description}</p>
            <div className='flex flex-row justify-evenly py-5'>
              <a
                style={{ buttonstyle }}
                className='bg-oxfordBlue text-white float-left py-2 px-3 rounded-lg mx-1'
                href={data.repoLink}
                target='_blank'
              >
                Github Repo <i className='fa fa-github'></i>
              </a>
              <a
                style={{ buttonstyle }}
                className='bg-oxfordBlue text-white float-left py-2 px-3 rounded-lg mx-1'
                href={data.deploymentLink}
                target='_blank'
              >
                Live Deployment <i className='fa fa-rocket'></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });


export default class PortfolioContent extends Component {
  render() {
    
    return (
      <>
      <div className='flex flex-col laptop:flex-row justify-center p-5 laptop:flex-wrap w-screen'> {newdata} </div>
                <Resume />
                </>
    )
  }
}


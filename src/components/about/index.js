import React from 'react'

export default function About() {
  return (
    <section className='flex flex-col tablet:flex-row max-w-full justify-center'>
      <div className='flex w-full h-screen flex-shrink'>
        <div className='phone:max-h-96 tablet:h-5/6'>
          <img
            className='phone:hidden tablet:block w-screen h-screen object-contain object-middle object-right tablet:p-10'
            src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613248507/portfolio-sq_copy_z1wuns.jpg'
            alt=''
          />
          <img
            className='tablet:hidden w-screen h-screen object-contain object-middle '
            src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613238151/portfolio_u8woqj.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='phone:container phone:w-full phone:justify-center mx-auto flex mb-10'>
        <div className='phone:w-full tablet:max-w-lg flex flex-col justify-center phone:p-0 tablet:p-10'>
          <h1 className='text-3xl uppercase font-bioRhyme font-light'>
            Jasmine Teters
          </h1>
          <p className='text-xl mb-5 font-cabin font-thin'>Web Developer</p>
          <p className='font-cabin'>
            My name is Jasmine Teters, I'm from Portland, Oregon. I moved to
            Utah to play for the{' '}
            <a className='underline' href='https://www.utahfalconz.com'>
              Utah Falconz
            </a>
            , Women's Semi-Pro tackle football team. I play offensive line, I
            serve on the Board of Directors as well as lead the Recruiting
            Committee.
            <br />
            <br />
            I just turned 30, which was an eye opening experience as far as how
            I want to spend the rest of my career. My passion for creating and
            expressing that create part of myself, along with my knack for
            technology is what eventually lead me to coding. I am truly excited
            to spend time doing what I love and to make a living at the same
            time.
            <br />
            <br />
            One of my favorite hobbies is riding bikes, whether it's a road bike
            or a mountain bike, I like being on it! My favorite place to ride is
            up Emigration Canyon, which is about 7.6 miles to the top, with
            1200+ ft elevation gain! It's a challenge, but I love it every
            single time!
          </p>
          <button className='bg-oxfordBlue w-1/3 rounded-md py-3 px-2 mt-6 text-white place-self-center font-bioRhyme font-thin'>
            <a href='mailto:jasmineteters2020@gmail.com'>Email Me</a>
          </button>
        </div>
      </div>
    </section>
  );
}

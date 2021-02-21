import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    burgerMenu: '',
    navMenu: 'hidden',
  };

  hamburger = () => {
    console.log(this.state)
    if (this.state.navMenu == 'hidden') {
      this.setState({
        navMenu: '',
        burgerMenu: 'hidden',
      });
    } else if(this.state.burgerMenu == 'hidden'){
      this.setState({
        navMenu: 'hidden',
        burgerMenu: '',
      });
    }
  };

  render() {
    return (
      <header className='bg-oxfordBlue text-mintCream p-4 pt-2 shadow-2xl'>
        <nav className='flex justify-between'>
          <div className=''>
            <Link to="/">
              <img
                src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613235278/JTWebDevLogo_vudnkh.png'
                className='h-52 object-contain object-right transform origin-bottom-left hover:-rotate-12 transition duration-300'
                alt='JT Web Dev Logo'
              />
            </Link>
          </div>
          <div className='flex'>
            <div className='flex flex-col justify-start my-auto '>
              <svg
                id='burger'
                className={`w-10 transform hover:-rotate-180 transition duration-300 ${this.state.burgerMenu}`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={() => this.hamburger()}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='{2}'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
            <div
              id='menu'
              className={`flex flex-col text-right ${this.state.navMenu}`}
            >
              <div className='text-2xl font-thin'>
                <p className='flex'>
                  <Link to='/' className='p-1'>
                    Home
                  </Link>
                  <svg
                    className='w-5 phone:hidden tablet:block'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='{2}'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                </p>
              </div>
              <div className='text-2xl font-thin'>
                <p className='flex'>
                  <Link to='/portfolio' className='p-1'>
                    Portfolio
                  </Link>
                  <svg
                    className='w-5 phone:hidden tablet:block'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='{2}'
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </p>
              </div>
              <div className='text-2xl font-thin'>
                <div className='flex'>
                  <Link to='/contact' className='p-1'>
                    Contact
                  </Link>
                  <svg
                    className='w-5 phone:hidden tablet:block'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='{2}'
                      d='M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start my-auto'>
              <svg
                id='x'
                className={`w-10 flex transform hover:-rotate-90 transition duration-300  ${this.state.navMenu}`}
                onClick={() => this.hamburger()}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='{2}'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;

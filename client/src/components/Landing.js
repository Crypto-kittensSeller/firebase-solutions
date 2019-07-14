import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Accounts in Firebase</h1>
          <p className='lead'>
            Create your account and look through already created accounts
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Create account
            </Link>
            <Link to='/accounts' className='btn btn-light'>
              View accounts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

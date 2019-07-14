import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { controller } from '../firebase.service';

const Accounts = () => {
  const [accountsData, setAccountsData] = useState({
    accounts: []
  });

  controller.getAccounts('accounts').then(querySnapshot => {
    setAccountsData({
      accounts: [...querySnapshot.docs].map(doc => ({
        id: doc.id,
        data: doc.data()
      }))
    });
  });

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Firebase developers</h1>
        <p className='lead'>
          <i className='fab fa-connectdevelop'>All created accounts</i>
        </p>
        <div className='profiles'>
          {accountsData.accounts.length > 0 ? (
            accountsData.accounts.map(account => (
              <div className='accounts bg-light' key={account.id}>
                <div>
                  <p>{`Username: ${account.data.username}`}</p>
                  <p>{`Email: ${account.data.email}`}</p>
                  <p>{`Hashed password: ${account.data.password}`}</p>
                </div>
              </div>
            ))
          ) : (
            <h4> No accounts found...</h4>
          )}
        </div>
        <Link to={`/`} className='btn btn-primary'>
          Go Back
        </Link>
      </section>
    </Fragment>
  );
};

export default Accounts;

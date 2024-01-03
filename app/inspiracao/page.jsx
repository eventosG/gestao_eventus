import React from 'react';
import Profile from '../../components/ProfilePage';
import Nav from '../../components/Nav';

function page() {
  return (
    <>
      <main className='app'>
        <Nav />
        <Profile>
            <div>Inspiração</div>
        </Profile>
      </main>
    </>
  )
}

export default page
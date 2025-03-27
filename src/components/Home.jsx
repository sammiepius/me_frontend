import React from 'react';
import { Row, Col } from 'reactstrap';
// import Books from '.././assets/Books.svg';
// import './home.css';
import Card from './Card';
import Profile from './Profile';

function Home() {
  return (
    <>
      <Profile />
      <hr />
      <p className="text-center font-bold">INTEREST</p>

      <section className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        <div className="w-full px-[2.5rem]">
          <div className="about-cards flex gap-10 flex-col md:flex-row">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

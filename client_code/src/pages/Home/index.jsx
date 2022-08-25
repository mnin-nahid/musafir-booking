import React from 'react';
import Header from '../../components/Header';
import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";
import Property from "../../components/Property";
import './index.scss';

export default function Home() {
  return (
    <div>
      < Navbar />
      < Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        < Property />
      </div>
    </div>
  )
}

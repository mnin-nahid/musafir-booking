import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import './index.scss';
import { DateRange } from 'react-date-range';
import SearchItems from "../../components/SearchItems"

const Index = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  //to open and close date dialogbox
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="hotels" />

      <div className="hotelsContainer">
        <div className="hotelsWrapper">
          <div className="hotelsSearch">
            <h1 className="isTitle">Search</h1>
            <div className="isItems">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="isItems">
              <label htmlFor="">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
              {
                openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="rangeCalender"
                  minDate={new Date()}
                />
              }
            </div>
            <div className="isItems">
              <label htmlFor="">Options</label>
              <div className="isOptions">


                <div className="isOptionItems">
                  <span className='isOptionText'>
                    Min price <small>per night.</small>
                  </span>
                  <input type="number" className='isOptionItemInput' />
                </div>
                <div className="isOptionItems">
                  <span className='isOptionText'>
                    Max price <small>per night.</small>
                  </span>
                  <input type="number" className='isOptionItemInput' />
                </div>
                <div className="isOptionItems">
                  <span className='isOptionText'>
                    Adult
                  </span>
                  <input type="number" min={1} className='isOptionItemInput' placeholder={options.adult} />
                </div>
                <div className="isOptionItems">
                  <span className='isOptionText'>
                    Children
                  </span>
                  <input type="number" min={0} className='isOptionItemInput' placeholder={options.children} />
                </div>
                <div className="isOptionItems">
                  <span className='isOptionText'>
                    Room
                  </span>
                  <input type="number" min={1} className='isOptionItemInput' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button className='searchButton'>Search</button>
          </div>
          <div className="hotelsSearchResult">

            < SearchItems />
            < SearchItems />
            < SearchItems />
            < SearchItems />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;

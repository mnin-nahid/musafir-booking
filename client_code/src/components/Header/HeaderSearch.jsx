import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDay, faPerson } from '@fortawesome/free-solid-svg-icons';


export default function HeaderSearch() {
    //to open and close date dialogbox
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]); 

    //to heandel number of need
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOPtions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    //heandle number of requerement
    const handleOption = (name, operation) => {
        setOPtions(previous => {
            return {
                ...previous, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        });
    };

    return (
        <div className="headerSearch">

            <div className="headerSearchItem headerSearchInput">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='Where are you going?' className='headerSearchPlaceInput' />
            </div>

            {/* place input */}
            <div className="headerSearchItem headerSearchInput">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                <span className='headerSearchDate' onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                }}>{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                {
                    openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="rangeCalender"
                    />
                }
            </div>
            <div className="headerSearchItem headerSearchInput">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <p>

                    <span className='headerSearchNumber'
                        onClick={() => {
                            setOpenOptions(!openOptions);
                            setOpenDate(false);
                        }}>
                        {`${options.adult} adult . ${options.children}  children . ${options.room} room`}
                    </span>
                </p>
                {
                    openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">

                                <button className="optionCounterBtn" onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">

                                <button className="optionCounterBtn" onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">

                                <button className="optionCounterBtn" onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className="headerSearchItem">
                <button className="headerSearchBtn">
                    Search
                </button>
            </div>
        </div>
    )
}

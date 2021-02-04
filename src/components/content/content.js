import React, { Component } from 'react';
import simpleRooms from './simpleRoom.jpg';
import grandRooms from './grandRoom.jpg';
import luxaryRoom from './luxaryRoom.jpg';
import './content.css';
class Content extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="content1">
                    <div className="content">
                        <h1 className="content-head">
                            Simple Rooms<hr/>
                        </h1>

                        <p className="content-para">The quick, brown fox jumps over a lazy dog. DJs flock<br />
                         by when MTV ax quiz prog. Junk MTV quiz graced by<br />
                          fox whelps. Bawds jog, flick quartz.</p>
                        <button className="content-button">EXPLORE</button>
                    </div>
                         <img className="content-image" alt="image-content" src={simpleRooms} />                    
                </div>

                {/* second content  */}

                <div className="content2">
                         <img className="content-image" alt="image-content" src={grandRooms} />                    
                    <div className="content-left">
                        <h1 className="content-head">
                            Deluxe Rooms<hr/>
                        </h1>
                        <p className="content-para">The quick, brown fox jumps over a lazy dog. DJs flock<br />
                         by when MTV ax quiz prog. Junk MTV quiz graced by<br />
                          fox whelps. Bawds jog, flick quartz.</p>
                        <button className="content-button">EXPLORE</button>
                    </div>
                </div>

                {/* third content  */}

                <div className="content3">
                    <div className="content-left">
                        <h1 className="content-head">
                            Presidental Rooms<hr/>
                        </h1>
                        <p className="content-para">The quick, brown fox jumps over a lazy dog. DJs flock<br />
                         by when MTV ax quiz prog. Junk MTV quiz graced by<br />
                          fox whelps. Bawds jog, flick quartz.</p>
                        <button className="content-button">EXPLORE</button>
                    </div>
                         <img className="content-image" alt="image-content" src={luxaryRoom} />                    
                </div>
            </>
        );
    }
}

export default Content;
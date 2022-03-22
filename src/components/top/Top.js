import React from 'react';
import './Top.css'
import TVimage from '../../tv.webp'
import Icon from '../icon/Icon'
import YellowButton from '../yellowButton/YellowButton'
import ClearButton from '../clearButton/ClearButton';

import Preview1 from '../../images/tvimages/s166.htm'
import Preview2 from '../../images/tvimages/s1662.htm'
import Preview3 from '../../images/tvimages/s1663.htm'
import Preview4 from '../../images/tvimages/s1664.htm'
import Preview5 from '../../images/tvimages/s1665.htm'
import Preview7 from '../../images/tvimages/s1667.htm'
import Preview8 from '../../images/tvimages/s1668.htm'
import Preview9 from '../../images/tvimages/s1669.htm'
import Preview10 from '../../images/tvimages/s16610.htm'
import Preview11 from '../../images/tvimages/s16611.htm'

import iconList from '../../iconlist';

function Top() {
    return (

        <div className="top">
            <div className="left">
                <h1>All your streaming services in one app  </h1>
                <p>Get personal recommendations for movies and TV shows available on Netflix, Amazon Prime Video, Disney Plus and many more</p>

                <div className='buttons'>
                    <YellowButton /><ClearButton />
                </div>
                <div>
                    Streaming services on JustWatch
                </div>
                <div className="iconsArea">
                    {iconList.map((item) => <Icon iconName={item} key={item} />)}
                    And many more.
                </div>
            </div>

            <div className='right'>
                <img src={TVimage} height="830px" width="1100px" className="tvImage" alt="tvimage" />
                <div className="overlayedTop">
                    <img src={Preview1} alt="preview1" />
                    <img src={Preview2} alt="preview2" />
                    <img src={Preview3} alt="preview3" />
                    <img src={Preview4} alt="preview4" />
                    <img src={Preview5} alt="preview5" />
                </div>
                <div className="overlayedBottom">
                    <img src={Preview7} alt="preview7" />
                    <img src={Preview8} alt="preview1" />
                    <img src={Preview9} alt="preview1" />
                    <img src={Preview10} alt="preview1" />
                    <img src={Preview11} alt="preview1" />
                </div>
            </div>
        </div>

    );
}

export default Top;
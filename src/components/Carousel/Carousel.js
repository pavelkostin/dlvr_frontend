
import React, { useEffect, useState } from 'react';


function Carousel({ children }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);


    useEffect(() => {
        setLength(children.length);
    }, [children, currentIndex])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(a => a + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(a => a - 1)
        }
    }

    return (


        <div className='carousel-container'>
            {currentIndex > 0 && <button onClick={prev}
                className='arrow-btn arrow-btn_left'
            >
            </button>}
            <div className='carousel-wrapper'>
                <div className='carousel-content-wrapper'>
                    <div className='carousel-content'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
            </div>
            {currentIndex < (length - 1) && <button onClick={next}
                className='arrow-btn arrow-btn_right'>
            </button>}
        </div>
    )
}

export default Carousel;
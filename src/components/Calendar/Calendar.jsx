import React, { useEffect } from 'react';
import styles from './Calendar.css';
import { Link } from 'react-scroll';


const Calendar = () => {

  useEffect(() => {

    const script = document.createElement('script');
    //<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;

    const section = document.getElementById('calendar-container');
    section.appendChild(script);
    //might need to include removing the script
  }, []);


  return (
    <section id='calendar-container'>
      <div
        className='calendly-inline-widget'
        data-url='https://calendly.com/bishop7'
        id={styles.calendly}
      >
        {' '}
      <h3 className={styles.top2}>
        {' '}
        <Link
          activeClass='active'
          to='nav'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          >
        Back To Top
        </Link>
      </h3>
          </div>
    </section>
  );
};

export default Calendar;

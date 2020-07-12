import React, { useEffect } from 'react';
import styles from './Calendar.css';

const Calendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    //<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    script.setAttribute('type', 'text/javascript');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    script.async = true;

    const section = document.getElementById('calendar-container');
    section.appendChild(script);
    //might need to include removing the script
  }, []);

  return (
    <>
      <section id='calendar-container' className={styles.cal}>
        <h1 className={styles.calTitle}>
          Please schedule an available appointment below, I look forward to
          speaking with you.
        </h1>
        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/j-a-ojeda/30min'
          id={styles.calendly}
        >
        </div>
      </section>
    </>
  );
};

export default Calendar;

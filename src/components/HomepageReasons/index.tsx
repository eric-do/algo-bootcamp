import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ReasonItem {
  title: string;
  bullets: string[]
}

const Reasons: ReasonItem[] = [
  {
    title: 'instruction',
    bullets: [
      'World class lectures',
      'Daily interactive lectures',
      'Focus on mental models and problem solving',
      'FAANG success background'
    ]
  },
  {
    title: 'pair programming',
    bullets: [
      'Collaborate and improve technical communnication',
      'Overcome interview anxiety',
    ]
  }
]

const HomepageReasons = () => {
  const [reasonIdx, setReason] = useState<number>(0);

  const handleReasonClick = (idx: number) => {
    setReason(idx)
  };

  return (
    <section className={clsx(styles.sectionAlt)}>
      <div className="container">
        <h2 className={clsx("text--center margin-bottom--lg", styles.sectionTitle)}>
          Why Algo Bootcamp?
        </h2>
        <div className='row'>
          <div className="col col--4">
            {
              Reasons.map((reason, index) => (
                <div
                  key={reason.title}
                >
                  <button
                    className={clsx(
                      "button",
                      `button--${index === reasonIdx ? 'primary' : 'secondary'}`,
                      styles.sectionButton
                    )}
                    onClick={() => handleReasonClick(index)}
                  >
                    {reason.title}
                  </button>
                </div>
              ))
            }
          </div>
          <div className="col col--8 row">
            <div className="col col--6">
              Test
            </div>
            <div className="col col--6">
              Test2
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomepageReasons;
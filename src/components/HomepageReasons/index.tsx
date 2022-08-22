import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
      'World class interactive lectures',
      'Daily guided whiteboarding',
      'Successful bootcamp track record',
      'Proven FAANG outcomes'
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
    <section className={clsx(
      'section',
      styles.sectionAlt
    )}>
      <div className="section--inner section--center">
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
              {
                Reasons[reasonIdx].bullets.slice(0, 3).map((bullet, idx) => (
                  <div
                    key={idx}
                    className={clsx(styles.bullet)}
                  >
                    <span
                      className={clsx(styles.bulletIcon)}
                    >
                      <FontAwesomeIcon icon={solid('circle-check')} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))
              }
              <button
              className={clsx(
                'button',
                'button--primary',
                styles.buttonCTA
                )}
              >
                {`Apply >`}
              </button>
            </div>
            <div className="col col--6">
              {
                Reasons[reasonIdx].bullets.slice(3).map((bullet, idx) => (
                  <div
                    key={idx}
                    className={clsx(styles.bullet)}
                  >
                    <span
                      className={clsx(styles.bulletIcon)}
                    >
                      <FontAwesomeIcon icon={solid('circle-check')} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomepageReasons;
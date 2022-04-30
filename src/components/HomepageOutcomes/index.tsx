import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type OutcomeItem = {
  company: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
}

const OutcomeList: OutcomeItem[] = [
  {
    company: 'Google',
    Svg: require('@site/static/img/google_logo.svg').default
  },
  {
    company: 'Facebook',
    Svg: require('@site/static/img/facebook_logo.svg').default
  },
  {
    company: 'Apple',
    Svg: require('@site/static/img/apple_logo.svg').default
  },
  {
    company: 'LinkedIn',
    Svg: require('@site/static/img/linkedin_logo.svg').default
  },
]

const Outcome = ({ company, Svg }: OutcomeItem) => {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg
          className={styles.outcomeSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{company}</h3>
      </div>
    </div>
  )
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={styles.outcomes}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Outcomes</h2>
        </div>
        <div className="row">
          {
            OutcomeList.map((props, idx) => (
              <Outcome key={idx} {...props} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures;
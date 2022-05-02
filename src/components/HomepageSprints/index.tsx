import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type SprintTaskItem = {
  label: string;
  title: string;
  bullets: string[];
}

const SprintTasks = [
  {
    label: 'Lecture',
    title: `Group discussion and whiteboarding`,
    bullets: [
      'Visuals focused lecture',
      'Live solving of example problems',
      'Thoughtful discussion with all students'
    ]
  },
  {
    label: 'Solo time',
    title: `Practice implementing concepts on your own`,
    bullets: [
      'Solo coding in a group setting',
      'Receive instructor and student support',
    ]
  },
  {
    label: 'Pair programming',
    title: `Solve complex prolems in pairs`,
    bullets: [
      'Pair programming session similar to interiews',
      'Practice whiteboarding and verbalization with your partner',
      'Adjust mental models and practices through constant feedback and discussion'
    ]
  },
  {
    label: 'Mock interview',
    title: `Interview your partner`,
    bullets: [
      'Simulate technical interviews with a complex problem',
      'Receive feedback afterwards from partner and instructor observation',
      'Grow comfortable in an uncomfortable environment'
    ]
  }
]

const SprintTask = ({
  label,
  title,
  bullets,
}: SprintTaskItem) => {

  return (
    <div className="col col--3  margin-top--lg">
      <div className={clsx('card', styles.cardContent, styles.sprintTask)}>
        <div className="card__header">
          <small className={clsx(styles.cardLabel)}>{label}</small>
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          {
            bullets.map((bullet, idx) => (
              <li className={clsx(styles.cardBullet)} key={idx}>{bullet}</li>
            ))
          }
        </div>
        <div className="card__footer">
          <a href={'/docs/curriculum'} className="button button--primary button--block">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

const HomepageSprints = () => {
  return (
    <section className={clsx(styles.sprintTasks, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionTitle}>
        <h2 className={clsx("text--center margin-bottom--lg", styles.sectionTitle)}>
          Sprint structure
        </h2>
        </div>
        <div className="row">
          {
            SprintTasks.map((props, idx) => (
              <SprintTask key={idx} {...props} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomepageSprints
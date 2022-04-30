import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ReviewItem = {
  name: string;
  linkedIn?: string;
  avatar: string;
  employer?: string;
  review: string;
}

const ReviewList: ReviewItem[] = [
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Eric delivers such an awesome service'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Eric delivers such an awesome service'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Eric delivers such an awesome service'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Eric delivers such an awesome service'
  },
]

const Review = ({ name, linkedIn, avatar, employer, review }: ReviewItem) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="card">
        <div className="padding-horiz--md">
          <div className="avatar">
            <img
              className="avatar__photo-link avatar__photo avatar__photo--lg"
              alt={`${name} profile image`}
              src={avatar} />
            <div className="avatar__intro">
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">
                {review}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HomepageReviews = (): JSX.Element => {
  return (
    <section className={clsx(styles.reviews, styles.sectionAlt)}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h2>Reviews</h2>
        </div>
        <div className="row">
          {
            ReviewList.map((props, idx) => (
              <Review key={idx} {...props} />
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default HomepageReviews;
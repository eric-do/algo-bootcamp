import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ReviewItem = {
  name: string;
  linkedIn?: string;
  avatar: string;
  employer?: string;
  role?: string;
  review: string;
}

const ReviewList: ReviewItem[] = [
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    role: 'Instructor',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    role: 'Instructor',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    role: 'Instructor',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.'
  },
  {
    name: 'Eric',
    linkedIn: 'ericdo1',
    avatar: 'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg',
    employer: 'Galvanize',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.'
  },
]

const Review = ({
  name,
  linkedIn,
  avatar,
  employer,
  review,
  role
}: ReviewItem) => {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx("card", "margin-top--lg")}>
        <div className="card__header">
          <div className="avatar">
            <img
              className="avatar__photo-link avatar__photo avatar__photo--lg"
              alt={`${name} profile image`}
              src={avatar} />
            <div className={clsx("avatar__intro", styles.cardContent)}>
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">
                {`${role}, ${employer}`}
              </small>
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
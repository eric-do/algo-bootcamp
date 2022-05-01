import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type ReviewItem = {
  name: string;
  linkedIn?: string;
  avatar: string;
  employer?: string;
  role?: string;
  review: string;
};

const ReviewList: ReviewItem[] = [
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  },
];

const ReviewListCol1: ReviewItem[] = [
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc",
  }
];

const ReviewListCol2: ReviewItem[] = [
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  }
];

const ReviewListCol3: ReviewItem[] = [
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare.",
  },
  {
    name: "Eric",
    linkedIn: "ericdo1",
    avatar:
      "https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg",
    employer: "Galvanize",
    role: "Instructor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue tellus lectus, sit amet iaculis neque efficitur et. Aliquam pulvinar lobortis nunc, eget aliquam velit molestie vel. Donec ornare, ipsum in sagittis bibendum, tortor nulla dictum odio, nec efficitur eros eros vitae metus. Praesent non facilisis tellus.",
  }
];

const Review = ({
  name,
  linkedIn,
  avatar,
  employer,
  review,
  role,
}: ReviewItem) => {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("card", "margin-top--lg", styles.cardContent)}>
        <div className="card__header">
          <div className="avatar">
            <img
              className="avatar__photo-link avatar__photo avatar__photo--lg"
              alt={`${name} profile image`}
              src={avatar}
            />
            <div className="avatar__intro">
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">
                {`${role}, ${employer}`}
              </small>
            </div>
          </div>
        </div>
        <div className="card__body">
          <small className="avatar__subtitle">{review}</small>
        </div>
      </div>
    </div>
  );
};

const HomepageReviews = (): JSX.Element => {
  return (
    <section className={clsx(styles.reviews, styles.sectionAlt)}>
      <div className="container">
        <h2 className={clsx("text--center margin-bottom--lg", styles.sectionTitle)}>
          Reviews
        </h2>
        <p className={clsx("text--center margin-bottom--lg", styles.sectionTagline)}>
          We've personally taught and guided hundreds of students to successful careers as software engineers.
        </p>
        <div className="row">
          {ReviewList.map((props, idx) => (
            <Review key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageReviews;

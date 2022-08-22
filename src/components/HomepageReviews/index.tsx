import React from "react";
import { faker } from '@faker-js/faker';
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

const ReviewListCol1: ReviewItem[] = [
  {
    name: 'Keegan Leery',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "👏 Eric Do is really good at the Q&A sessions after lecture. He brings fresh examples to test our knowledge. I really appreciate this. Without the fresh examples, I think my learning would be degraded as opposed to recorded lectures.",
  },
  {
    name: 'Donna Szeto',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "I think Eric's additional code and whiteboarding and always SO helpful to understanding the material more. I appreciate the extra examples he provides whenever we have the Q&A sessions.",
  },
  {
    name: 'Anonymous',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "Eric Do was so kind, patient, and compassionate enough to host a last minute office hour. He saw that I was struggling greatly with my inner demons that made learning one-on-one extremely stressful and difficult. He was so accommodating to my ADHD made sure to follow my suggestion for how he could help me learn more effectively. I am truly so so grateful because I knew that despite how frustrating it might have been to see me not understand something seemingly simple, he maintained his empathetic and patient tone with me that prevented me from breaking out into tears from frustration and anxiety.",
  }
];

const ReviewListCol2: ReviewItem[] = [
  {
    name: 'Fan Zhang',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "Eric prepares well for the Q&A and always moves our understanding to the next level.",
  },
  {
    name: 'Neil Johnson',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "I think the sessions are great and I love the whiteboarding that Eric does, so we have a better mental model of how things work.",
  },
  {
    name: 'Andy Luu',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "I'd like to give a high five to Eric for all the extra workshops, Q&A, and whiteboarding. They have been a wonderful learning experience and has helped me a lot!",
  },
  {
    name: 'Stephen Ho',
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "I always appreciate Eric's extra lectures. His lectures are very clear and helps a lot in understanding the concepts.",
  },
];

const ReviewListCol3: ReviewItem[] = [
  {
    name: "Jessie Zhao",
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "Live lectures were great and so engaging!! I really appreciated the open conversation when lecturers would ask us questions and then have us solve problems live. There was one lecture in particular, with Eric walking us through the problem solving process, where I had to work thru the process with him during lecture. I had a lot of fun doing that (also felt some amt of pressure, but the good kind). I also felt like the live lectures were useful for answering questions in real time. ",
  },
  {
    name: "Shawn Oh",
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "Eric! His review of my self assessment and the optional recursion workshop actually helped me understand recursion on a deeper level. Super patient with me and an absolute saint.",
  },
  {
    name: "Quargs Greene",
    linkedIn: "ericdo1",
    avatar: faker.image.avatar(),
    employer: faker.company.companyName(),
    role: "Software Engineer",
    review:
      "Eric Do. He helped me reach some lightbulb moments which gave me some insight I had never fully had before about why I've had so many issues with tests and following directions in educational settings my whole life.",
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
  );
};

const ReviewColumn = ({reviews}: { reviews: ReviewItem[]}) => {
  return (
    <div className={clsx("col col--4")}>
      {
        reviews.map((props, idx) => (
          <Review key={idx} {...props} />
        ))
      }
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
          I've <strong>personally taught</strong> and guided hundreds of students to successful careers as <strong>software engineers</strong>.
        </p>
        <div className="row">
          <ReviewColumn reviews={ReviewListCol1} />
          <ReviewColumn reviews={ReviewListCol2} />
          <ReviewColumn reviews={ReviewListCol3} />
        </div>
      </div>
    </section>
  );
};

export default HomepageReviews;

import Image from 'next/image';
import React from 'react';
import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ image, title, address, description }) => (
  <section className={classes.detail}>
    <Image src={image} alt={title} width={640} height={300} objectFit='cover' />
    <h1>{title}</h1>
    <address>{address}</address>
    <p>{description}</p>
  </section>
);

export default MeetupDetail;

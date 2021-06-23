import Image from 'next/image';
import React from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ image, title, address }) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={image} alt={title} width={640} height={300} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

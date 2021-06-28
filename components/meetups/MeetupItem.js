import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ id, image, title, address }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

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
          {/* <Link /> is better here */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

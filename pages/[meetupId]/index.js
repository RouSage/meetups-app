import Image from 'next/image';
import React from 'react';

const MeetupDetail = () => {
  return (
    <>
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Venezia_Palazzo_Ducale_01.jpg/800px-Venezia_Palazzo_Ducale_01.jpg'
        alt='A First Meetup'
        width={640}
        height={300}
        objectFit='cover'
      />
      <h1>A First Meetup</h1>
      <address>Some Street 5, 12345 Some City</address>
      <p>The meetup description</p>
    </>
  );
};

export default MeetupDetail;

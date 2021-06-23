import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Venezia_Palazzo_Ducale_01.jpg/800px-Venezia_Palazzo_Ducale_01.jpg'
      address='Some Street 5, 12345 Some City'
      description='The meetup description'
      title='A First Meetup'
    />
  );
};

export default MeetupDetailPage;

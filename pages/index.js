import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Venezia_Palazzo_Ducale_01.jpg/800px-Venezia_Palazzo_Ducale_01.jpg',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Venezia_Palazzo_Ducale_01.jpg/800px-Venezia_Palazzo_Ducale_01.jpg',
    address: 'Some Address 20, 12653 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: MEETUPS,
    },
  };
};

export default HomePage;

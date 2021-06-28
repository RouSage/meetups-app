import { MongoClient } from 'mongodb';
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

  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:sRZy0FvVPoNaRP69@cluster0.qw4dx.mongodb.net/meetupsDB?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;

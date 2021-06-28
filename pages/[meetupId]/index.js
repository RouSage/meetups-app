import { MongoClient, ObjectId } from 'mongodb';
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = ({ meetup }) => {
  return <MeetupDetail {...meetup} />;
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:sRZy0FvVPoNaRP69@cluster0.qw4dx.mongodb.net/meetupsDB?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:sRZy0FvVPoNaRP69@cluster0.qw4dx.mongodb.net/meetupsDB?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetailPage;

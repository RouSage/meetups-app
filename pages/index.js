import Head from 'next/head';
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { getMeetupsCollection } from '../utils';

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a list of highly active React Meetups!'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  // fetch data from an API

  const { client, meetupsCollection } = await getMeetupsCollection();

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

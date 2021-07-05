import { ObjectId } from 'mongodb';
import Head from 'next/head';
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { getMeetupsCollection } from '../../utils';

const MeetupDetailPage = ({ meetup }) => (
  <>
    <Head>
      <title>{meetup.title}</title>
      <meta name='description' content={meetup.description} />
    </Head>
    <MeetupDetail {...meetup} />
  </>
);

export const getStaticPaths = async () => {
  const { client, meetupsCollection } = await getMeetupsCollection();
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const { meetupId } = context.params;

  const { client, meetupsCollection } = await getMeetupsCollection();

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

import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = ({ meetup }) => {
  return <MeetupDetail {...meetup} />;
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetup: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Venezia_Palazzo_Ducale_01.jpg/800px-Venezia_Palazzo_Ducale_01.jpg',
        title: 'A First Meetup',
        address: 'Some Street 5, 12345 Some City',
        description: 'The meetup description',
      },
    },
  };
};

export default MeetupDetailPage;

import { MongoClient } from 'mongodb';

export const getMeetupsCollection = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:sRZy0FvVPoNaRP69@cluster0.qw4dx.mongodb.net/meetupsDB?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  return { client, meetupsCollection };
};

import { MongoClient } from 'mongodb';

export const getMeetupsCollection = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qw4dx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  return { client, meetupsCollection };
};

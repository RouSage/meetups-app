import { getMeetupsCollection } from '../../utils';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const { client, meetupsCollection } = await getMeetupsCollection();
    await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;

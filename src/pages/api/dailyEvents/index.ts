import { doc, setDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IEvents } from 'types';

import { createCollection } from '../../../lib/firebaseConfig';

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eventName, eventMemo } = req.body;

  const dateApi = Date.now();

  if (req.method === 'POST') {
    // POST document to Firestore.
    // Giftwrap Collection from Firestore
    const eventsCol = createCollection<IEvents>(eventName);

    // Get Giftwrap documents from Firestore
    const eventsDocs = doc(eventsCol, `${dateApi}`);
    await setDoc(eventsDocs, {
      eventName: eventName,
      eventMemo: eventMemo,
    });

    // POST document to Firestore.
    await setDoc(eventsDocs, {
      eventName: eventName,
      eventMemo: eventMemo,
    });

    try {
      res.status(201).json({ eventName, eventMemo });
    } catch (err) {
      res.status(500).send({ error: 'failed fetch' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

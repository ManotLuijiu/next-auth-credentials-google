import { hash } from 'bcryptjs';
import { getToken } from 'next-auth/jwt';

import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';

const secret = process.env.NEXTAUTH_SECRET;

// if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
// const token = await getToken({ req })

export default async function handler(req, res) {
  const token = await getToken({ req, secret });
  console.log('JSON Web Token', token);
  res.end();

  connectMongo().catch((error) =>
    res.json({ error: `{Connection Failed because ${error}}` }),
  );

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body) {
      return res.status(404).json({ error: "Don't have form data" });
    }
    const { username, email, password } = req.body;

    // check duplicate users
    const checkExisting = await Users.findOne({ email });
    if (checkExisting) {
      return res.status(422).json({ message: 'User already exists' });
    }

    // hash password
    Users.create(
      { username, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) {
          return res
            .status(404)
            .json({ message: `Can't log in because ${err}` });
        }
        res.status(201).json({ status: true, user: data });
      },
    );
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}

import express from 'express';
import { compareSync } from 'bcrypt';

import User from '../models/user.js';

const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const { email, pass } = req.body;
        User.findOne({ email }, (err, user) => {
            if ((user) && (pass == user.pass)) {
                res.send({ message: 'Login Success', user });
            }
            else {
                res.send({ message: `Incorrect, failed` });
            }
        });
    });

export default router;
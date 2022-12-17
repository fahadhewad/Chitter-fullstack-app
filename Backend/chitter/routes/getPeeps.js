import express from 'express';
import Peep from '../models/peep.js';
const router = express.Router();

router.route("/").get((req, res) => {
    Peep.find((err, peeps) => {
        if (err) {
            res.status(500).json({ message: err })
            return;
        }
        res.status(200).json(peeps);
    }).sort({_id: -1});
});

export default router;
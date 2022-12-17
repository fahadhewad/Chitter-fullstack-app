import express from 'express';
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";

import Peep from '../models/peep.js';

const router = express.Router();
router.use(bodyParser.json());

const addPeep = (req, res) => {
    const peep = req.body.peepInfo.peep;
    const email = req.body.peepInfo.email;
    const dateCreated = req.body.peepInfo.dateCreated;
    const newPeep = new Peep({ peep, email, dateCreated });
    
    newPeep.save((err, peep) => {

        if (err) {
            res.status(500).send({ message: "err" });
            return;
        }

        peep.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(201).send({ message: `Peep submitted successfully`, peep });
        });
    });
};

router.route("/").post(
    [  
    body("peep").exists(),
    ],
  addPeep);    

export default router;
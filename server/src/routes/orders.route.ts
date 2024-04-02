import express from 'express'
import { Request, Response } from 'express';
import orders from 'controllers/orders.controller.js';

const router = express.Router()

router.route('/:date')
    .get(async (req: Request, res: Response) => {
        try {
            const { date } = req.params
            const data = await orders.getOrders({ date })
            res.status(200).json(data)
        } catch (err: any) {
            console.log(err)
            const error = new Error(err)
        
            res.status(500).json({ error })
            throw error
        }
    })

export default router;
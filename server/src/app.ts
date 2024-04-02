import express from 'express'
import cors from 'cors'

export default class App {
    public express: express.Application;
    private port: number;
    
    constructor(port: number) {
        this.port = port;
        this.express = express();
        this.initMiddleware()
        this.listen()
    }

    private initMiddleware() {
        this.express.use(express.json())
    
        const corsOptions = {
            origin: '*',
            credentials: true
        }
        this.express.use(cors(corsOptions))
    }

    private listen() {
        this.express.listen(this.port, () => {
            console.log(`\n=== listening on port ${this.port} ===\n`)
        })
    }
}
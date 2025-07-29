import express, { Request, Response, NextFunction } from 'express';

interface MessageRequest extends Request {
    body: {
        message: string,
    }
}
const app = express();
app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('hello');
    throw new Error()
    next();
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello</h1>')
});

app.post('/', (req: MessageRequest, res: Response, next: NextFunction) => {
    console.log(req.body);
    res.send(`<h1>${req.body.message}</h1>`)
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    next();
});

app.listen(3000);

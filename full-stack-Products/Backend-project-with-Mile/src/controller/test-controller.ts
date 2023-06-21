import { Request, Response } from 'express';

export class TestController {
    static test(req: Request, res: Response) {
        const message: string = "Hello, world!";
        return res.json({ message });
    }
}

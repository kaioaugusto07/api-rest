import express, { NextFunction } from 'express';
import { router } from './routes/routes';
import { Request, Response } from 'express';
import { AppError } from './utils/AppError';
import { ZodError} from 'zod';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(router);
app.use((error: any, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof ZodError) {
        return res.status(400).json({ message: 'Validation error', issues: error.format() });
    }

    res.status(500).json({ message: error.message });
})


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
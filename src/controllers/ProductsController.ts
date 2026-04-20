import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';
import { z } from 'zod';

class ProductsController {
    /**
     * Index - GET para exibir uma lista de produtos
     * Show - GET para exibir um produto específico
     * Create - POST para criar um novo produto
     * Update - PUT para atualizar um produto existente
     * Delete - DELETE para remover um produto
     */

    index (req: Request, res: Response) {
        const {itens, limite} = req.query;
        res.send(`itens: ${itens}, limite: ${limite}`);
    }
    
    create (req: Request, res: Response) {

        const bodySchema = z.object({
            name: z.string({message: "Name is required"}).trim().min(6),
            price: z.number({message: "Price is required"}).positive({message: "Price must be a positive number"}),
        })
        const { name, price } = bodySchema.parse(req.body);

        res.status(201).send(`Produto: ${name} Preço: ${price}`);
    }
}

export { ProductsController };
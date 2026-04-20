import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsController = new ProductsController();

const productRoutes = Router();

productRoutes.use(myMiddleware);

productRoutes.get('/', productsController.index);


productRoutes.post('/' , productsController.create);

export { productRoutes };
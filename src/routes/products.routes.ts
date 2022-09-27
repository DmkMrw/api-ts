import express from 'express';
import ProductsController from '../controllers/products.controller';
import { ProductsMockRepository } from '../repositories/products-mock-repository';

const repository = new ProductsMockRepository();
const controller = new ProductsController(repository);

const router = express.Router();

router.post('', (req, res) => {
  try {
      return res.json(controller.addItem(req.body));
  } catch (error) {
      res.status(500).json(error);
  }
});

export default router;
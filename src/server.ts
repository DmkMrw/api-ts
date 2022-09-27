import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
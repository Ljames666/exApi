import express from 'express';
import cors from 'cors';
import { userRoutes, taskRoutes } from './routes';

const api = express();
const port = process.env.PORT || 8081;

api.use(express.json());
api.use(cors());
api.use(userRoutes, taskRoutes);

api.listen(port, () => console.log(`server is running on ${port}`));

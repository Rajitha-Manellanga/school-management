import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

// const app = express();
// const port = 3000;

// app.get('/',(req,res) => {
//     res.send('Home');
// });

// app.listen(port).on('error',()=>{
//     console.error('error');
// });

//npm i -D ts-node-dev

if (!process.env.PORT) {
    process.exit(1);
 }
 
const PORT: number = parseInt(process.env.PORT as string, 10);
 
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});


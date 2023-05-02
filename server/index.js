import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req,res) => {
	console.log(req.body)
})

app.post('/login', (req,res) => {
	console.log(req.body);
})

app.listen(8000, (req,res) => {

})
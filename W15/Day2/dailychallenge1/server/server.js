import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/hello', (req, res) => {
    res.json({message: `I have received your Post request. This is what you sent me ${req.body.post}`});
    console.log(req.body); // Log the entire request body
  });
 
app.listen(3001, () => console.log('Server is running on port 3001'));


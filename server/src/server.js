import express from 'express'
import api from './api.js'
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// enable CORS
app.use(cors({
  origin: '*',
  "Access-Control-Allow-Origin": "*",
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
  methods: ['PUT, POST, PATCH, DELETE, GET']
}));

// GET /contacts - get all contacts
app.get('/contacts', api.get);

// POST /contacts - create a new contact
app.post('/contacts', api.post);

// PUT /contacts - update a contact
app.put('/contacts', api.put);

// DELETE /contacts/:id - delete a contact
app.delete('/contacts/:id', api.del);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

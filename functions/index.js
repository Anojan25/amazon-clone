const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Ll5Y6SJ7JhEK3EeAqdRGm1O8TGH0MThVXlRGAXw53uNq2X19WhQA0siM3yNdsb07RwQ2YwJhAWK69AtNDEqpTRB00DmVUTEqU'
);

//api

//api config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('payment request received BOOM!!! for this amount >>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen commands
exports.api = functions.https.onRequest(app);

//example end point

// http://localhost:5001/clone-78361/us-central1/api
// http://localhost:5001/clone-78361/us-central1/api

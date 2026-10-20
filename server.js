const express = require('express');

const app = express();

const leads = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '9876543210'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya@example.com',
    phone: '9876543211'
  }
];

app.get('/leads', (req, res) => {
  res.json(leads);
});

app.listen(3000, () => {
  console.log('port 3000');
});
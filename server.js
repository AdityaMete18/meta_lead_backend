const express = require('express');
const app = express();

app.use(express.json());

const leads = [
  {
    id: '1',
    name: 'Aditya Mete',
    email: 'adityamete@gmail.com',
    phone: '9876543210'
  },
  {
    id: '2',
    name: 'Pratima Shinde',
    email: 'pratimashinde@gmail.com',
    phone: '9123456780'
  }
];

app.get('/leads', (req, res) => {
  res.json(leads);
});

app.post('/leads', (req, res) => {
  const { name, email, phone } = req.body;


  const newLead = {
    id: Date.now().toString(),
    name: name,
    email: email,
    phone: phone
  };

  leads.unshift(newLead);

  res.status(201).json({
    message: 'Lead added successfully',
    lead: newLead
  });
});

app.listen(3000, () => {
  console.log('port 3000');
});
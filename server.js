const express = require('express');
const app = express();

app.use(express.json());

const VERIFY_TOKEN = 'metalead_verify_2026';

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

// Existing routes
app.get('/leads', (req, res) => {
  res.json(leads);
});

app.post('/leads', (req, res) => {
  const { name, email, phone } = req.body;

  const newLead = {
    id: Date.now().toString(),
    name,
    email,
    phone
  };

  leads.unshift(newLead);

  res.status(201).json({
    message: 'Lead added successfully',
    lead: newLead
  });
});

// Meta webhook verification
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }

  res.sendStatus(403);
});

// Receive Meta webhook notifications
app.post('/webhook', (req, res) => {
  console.log('Meta webhook received:', JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
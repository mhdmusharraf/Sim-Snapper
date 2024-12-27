const express = require('express');
const router = express.Router();

router.post('/card-payment', async (req, res) => {
  try {
    const { cardHolderName, cardNumber, expiryDate, cvv, amount } = req.body;

    // Basic Validations
    if (!cardHolderName || !cardNumber || !expiryDate || !cvv || !amount) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!/^[a-zA-Z ]+$/.test(cardHolderName)) {
      return res.status(400).json({ error: 'Invalid cardholder name' });
    }
    if (!/^[0-9]{16}$/.test(cardNumber)) {
      return res.status(400).json({ error: 'Invalid card number' });
    }
    if (!/^[0-9]{2}\/[0-9]{2}$/.test(expiryDate)) {
      return res.status(400).json({ error: 'Invalid expiry date' });
    }
    const [month, year] = expiryDate.split('/').map(Number);
    const currentDate = new Date();
    const expiry = new Date(`20${year}`, month - 1);
    if (expiry < currentDate) {
      return res.status(400).json({ error: 'Card is expired' });
    }
    if (!/^[0-9]{3}$/.test(cvv)) {
      return res.status(400).json({ error: 'Invalid CVV' });
    }
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Simulate payment processing (replace with actual payment gateway integration)
    res.status(200).json({ message: `Successfully charged ${amount} from your card.` });
  } catch (error) {
    console.error('Error during payment:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

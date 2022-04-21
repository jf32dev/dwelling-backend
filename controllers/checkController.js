exports.check = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    var cardNumber = req.body.cardNumber, balance = 0;

    console.log(cardNumber);
    if (Number(cardNumber) % 10 == 2 || Number(cardNumber) % 10 == 5)
      Array.from(new String(cardNumber)).map((item, index) => ((index < 12) ? balance += Number(item) : balance += 0));

    res.send({
      status: "success",
      balance: balance
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: "error",
      balance: err
    });
  }
};
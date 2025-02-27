const app = require("express")();

app.get("/getRandomQuotesByAuthor", async (req, res) => {
  const authorName = req.query.author;
  if (!authorName) {
    return res.status(400).json({ error: true, quote: {} });
  }

  const getQuoteByAuthorUrl = `https://api.quotable.io/quotes?author=${authorName}&limit=10`;
  const res = await axios.get(getQuoteByAuthorUrl);
  return res.status(200).json({ error: false, quotes: res.data });
});

module.exports = app;

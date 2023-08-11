import express from 'express'
import path from 'path';
import cors from 'cors';
const __dirname = path.resolve();

const app = express()


app.get('/')
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
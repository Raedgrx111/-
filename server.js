const bodyParser = require('body-parser');
const path = require('path');
const discord = require('./utils/discord');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API لإرسال الاستبيان لديسكورد
app.post('/api/survey', async (req, res) => {
  try {
    await discord.sendToDiscord(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const WEBHOOK_URL = "ضع هنا رابط Webhook كامل";

async function sendToDiscord(data) {
  await axios.post(WEBHOOK_URL, {
    content: `استبيان جديد:\n${JSON.stringify(data, null, 2)}`
  });
}

module.exports = { sendToDiscord };

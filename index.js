const axios = require("axios");

require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/dsb-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/dsb-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/dsb-ping - Check bot latency
/dsb-help - Show this list
/dsb-catfact - Get a cat fact
/dsb-about - About this bot
/dsb-nasa - NASA space picture of the day`
  });
});

app.command("/dsb-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/dsb-about", async ({ ack, respond}) => {
  await ack();
  await respond({text: "Hey! I'm yushi's bot. Commands: /dsb-ping, /dsb-help, dsb-catfact, /dsb-about, /dsb nasa"});
});

app.command("/dsb-nasa", async ({ ack, respond}) => {
  await ack();
  try {
    const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    await respond({text: `🚀 ${response.data.title}\n${response.data.url}\n\n${response.data.explanation}` });
  } catch (err) {
    await respond({text: "Couldn't find NASA picture right now :("});
  }
});

(async () => {
  
  await app.start();
  console.log("bot is running!");
})();

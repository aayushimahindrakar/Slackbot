**Demo Slack Bot**
  A Slack bot that responds to custom slash commands, built with Node.js and Slack Bolt over Socket Mode. 

**Demo**
  Watch the bot in action: https://canva.link/ao8ds5qmalqus6f

**What it does**
  The bot listens for slash commands in Slack and replies:
  /dsb-ping — replies with "Pong!" and how fast the bot responded
  /dsb-help — lists the available commands
  /dsb-catfact — fetches a random cat fact from an API and posts it

  <!-- If you also added the joke command, uncomment the line below: -->
  <!-- - `/dsb-joke` — fetches a random joke from an API and posts it -->
  
**Built with**
  Node.js
  Slack Bolt (using Socket Mode, so no public server is needed)
  axios (for the commands that call APIs)

**Run it yourself**
Clone the repo:
  git clone PASTE_YOUR_REPO_CLONE_URL_HERE
  cd YOUR_REPO_NAME
Install the dependencies:
  npm install
Create a .env file in the project folder with your two Slack tokens:
  SLACK_BOT_TOKEN=xoxb-your-bot-token
  SLACK_APP_TOKEN=xapp-your-app-token
  You get these from your Slack app at api.slack.com — the bot token (xoxb-) is under
  OAuth & Permissions, and the app token (xapp-) is under Basic Information → App-Level Tokens.
Start the bot:
  node index.js
  When it prints bot is running!, type a command like /dsb-ping in your Slack workspace
  and the bot will reply.

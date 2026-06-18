**Stardance Slack Bot**
A Slack bot that responds to custom slash commands, built for the Hack Club Stardance challenge. Built with Node.js and Slack Bolt over Socket Mode, and hosted 24/7 on Hack Club Nest.

**Try it**
Join the test workspace and run the commands in any channel:

➡️ https://join.slack.com/t/3d-iga5409/shared_invite/zt-3zmfq50ea-c1F9sixNJ2CUGV~afsIMLA

The bot runs 24/7, so it should respond right away.

**Commands**
/dsb-ping — check the bot's response speed
/dsb-help — list all the commands
/dsb-catfact — a random cat fact (from an API)
/dsb-nasa — NASA's space picture of the day (from NASA's API)
/dsb-about — about this bot

**Permissions / scopes**
The bot uses these Slack bot scopes (no admin access):
chat:write
commands
app_mentions:read
channels:history

**Built with**
Node.js
Slack Bolt (Socket Mode)
axios (for the API-based commands)
Hosted on Hack Club Nest as a systemd service (runs 24/7)

**Run it yourself**
1. Clone the repo and install dependencies:
  git clone https://github.com/aayushimahindrakar/Slackbot.git
  cd Slackbot
  npm install

2. Create a .env file in the folder with your two Slack tokens:
  SLACK_BOT_TOKEN=xoxb-your-bot-token
  SLACK_APP_TOKEN=xapp-your-app-token

3. Start it:
  node index.js
  When it prints "bot is running!", try /dsb-ping in your workspace.

**What I learned**
This is my first time doing a projects like this so I learned how to use github, do repos, and host on nest.

*Partially written with AI*

# Reddit Streak Upvote Bot

This is a simple Reddit bot that upvotes a random post and removes the vote after a timeout. It's useful for keeping your interaction streak on Reddit.

---



## Setup
>[!WARNING]
> You must create an app on Reddit to be able to utilise Reddit's API.

### 1. **Set Up Reddit API Credentials**:
- Create a Reddit **script** app at [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) and make note of your `clientId` (*personal use script id*), `clientSecret`, `username`, and `password`.
  
![image](https://github.com/user-attachments/assets/96d07c74-f20f-46f7-874b-13313798886e)

*clientID / clientSecret have been created to show location, these aren't real*

>[!NOTE]
> Your redirect uri can be: http://localhost:8080

---

### 2. **Install Node.js**:
- Download and install Node.js from [nodejs.org](https://nodejs.org/).

### 3. **Clone or Download this Repository**:
- Download the files or clone the repository to your local machine.

### 4. **Install Dependencies**:
- Open a terminal in the project folder and run: `npm i`

### 5. **Update config.json**:
- Update the `config.json` file with your Reddit API credentials (`clientId`, `clientSecret`), and your personal reddit username and password. You can also choose your subreddits here.. if you care.

>[!NOTE]
> Your clientId is known as `personal use script id`


### 6. **Run the Bot**:
- In the terminal, run the following command: `npm start`

You should see a terminal log of action:
```txt
> reddit-bot@1.0.0 start
> node reddit-bot.js

Successfully logged in as: -UnicornsArentReal-
Upvoted post: Former OpenAI Staffer Says the Company Is Braking Copyright Law and Destroying the Internet from subreddit: r/technology
Upvote removed (vote cleared).
```

### 7. **Customisation**:
- You can change the timeout duration in the `reddit-bot.js` file. (*In case you want to have a longer time of it being upvoted*)
- You can change the list of subreddits in the `config.json` file.    
- Currently, it fetches a random post from - `'funny', 'pics', 'pcmasterrace', 'technology', 'gaming'` you can decrease or increase to whatever you wish.


---
## Automating the Script to run on your Local Machine [WINDOWS]


**Open Task Scheduler:**
- Press Win + R, type taskschd.msc, and press Enter to open Task Scheduler.

>[!NOTE]
> Alternatively, just search for Task Scheduler in windows search


**Create a New Task:**
- Click on "Create Task" on the far right sidebar (**Not Basic Task**)


### Configuration:

**General Tab:**
- Give your task a name like "Reddit Bot Automation"
- Choose "Run whether user is logged on or not" (if you want it to run without you being logged in)
- Check "Run with highest privileges"

**Triggers Tab:**
- Click "New"
- Set up the schedule (***e.g., run the bot daily at a certain time***)
- Click "OK"

**Actions Tab:**
- Click "New"
- In the Program/script field, enter the path to your Node.js executable. You can find it by running where node in your command prompt. It should look something like `C:\Program Files\nodejs\node.exe`
- In the Add arguments field, enter the path to your bot script (**e.g., C:\Users\cosmicjellyfish\Desktop\Reddit Bot\reddit-bot.js**)
- Click "OK"

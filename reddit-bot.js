const snoowrap = require('snoowrap');
const fs = require('fs');

// Read config.json file
const config = JSON.parse(fs.readFileSync('config.json'));

// Function to handle bot logic
const runBot = async () => {
  try {
    // Fetch Reddit credentials from config.json
    const r = new snoowrap({
      userAgent: config.userAgent,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      username: config.username,
      password: config.password
    });

    // Test the credentials by fetching some user data (e.g., yourself)
    await r.getMe();  // This will throw an error if the credentials are wrong

    console.log('Successfully logged in as:', config.username);

    // Use the subreddits from the config file
    const subreddits = config.subreddits || ['funny', 'pics', 'aww']; // Fallback if none are provided

    // Choose a random subreddit from the list
    const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

    // Fetch posts from the chosen subreddit
    const posts = await r.getSubreddit(randomSubreddit).getHot({ limit: 20 }); //Only fetches 20 hot posts
    const randomPost = posts[Math.floor(Math.random() * posts.length)];

    // Upvote the post
    randomPost.upvote();
    console.log(`Upvoted post: ${randomPost.title} from subreddit: r/${randomSubreddit}`);

    // Timeout before removing the upvote
    setTimeout(() => {
      randomPost.unvote();
      console.log('Upvote removed (vote cleared).');
    }, 10000); // Wait 10 seconds before removing the upvote (change to desired)

  } catch (error) {
    // If there’s an error, tell the user
    if (error.message.includes('403')) {
      console.error('Authentication failed: Please check your Reddit username and password.');
    } else if (error.message.includes('invalid_grant')) {
      console.error('Invalid credentials: Please check your Reddit client ID, client secret, username, or password.');
    } else {
      console.error('An error occurred:', error.message);
    }
  }
};

// Run the bot
runBot();

# r-bot
simple reddit response bot - nodejs

git clone https://github.com/AImissq/r-bot.git


register your app in reddit developer https://www.reddit.com/prefs/apps  (register as script type app)

leave the first URL submission box empty on the register app form

in URL redirect on the register app form use http://localhost:80

make a note of the credentials produced (note app ID is top left of form)

edit the .env file with these credentials and save

make sure your file explorer has "show hidden" enabled if you can't see the .env file

edit the app.js file for subreddit/trigger keyword/bot response 

Finally run "node app.js" (without quotes) from a console session launched from within the repo

working OK with node v 10.11.0 on r/testingground4bots. Users implementing new accts may have probs with rate limits - build some Karma!

that's it!

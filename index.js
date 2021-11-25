require("dotenv").config();
const { Composer } = require("micro-bot");

const bot = new Composer();

const date = new Date();
const day = date.getDay();
const time = date.getTime();
const trigger = date.setHours(21, 39, 10);

const allDayNames = new Array(7);
allDayNames[0] = "Sunday";
allDayNames[1] = "Monday";
allDayNames[2] = "Tuesday";
allDayNames[3] = "Wednesday";
allDayNames[4] = "Thursday";
allDayNames[5] = "Friday";
allDayNames[6] = "Saturday";

let dayName = allDayNames[date.getDay()];

if (day === 1 || (day === 3 && time >= trigger)) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        `${dayName}'s Subject: \n\n7:10 : 8:10 : *Fiqh*`,
        {
            parse_mode: "MarkdownV2",
        }
    );
} else if (day === 2 || (day === 5 && time >= trigger)) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        `${dayName}'s Subjects: \n\n6:00 : 7:00 : *Hadith*\n7:00 : 8:00 : *Tafseer*\n8:00 : 8:30 : *TQ*`,
        {
            parse_mode: "MarkdownV2",
        }
    );
} else if (day === 4 && time >= trigger) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        `${dayName}'s Subjects: \n\n6:00 : 7:00 : *An-Nahw*\n7:00 : 8:00 : *Qasas*\n8:00 : 8:30 : *Arabic Speaking*`,
        {
            parse_mode: "MarkdownV2",
        }
    );
}

module.exports = bot;

/*
git add .
git commit -m 'commit message'
git push heroku master
*/

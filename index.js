require("dotenv").config();
const { Telegraf } = require("telegraf");
const cron = require("node-cron");

const API_TOKEN = process.env.API_TOKEN || "";
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

const date = new Date();
const day = date.getDay();

const allDayNames = new Array(7);
allDayNames[0] = "Sunday";
allDayNames[1] = "Monday";
allDayNames[2] = "Tuesday";
allDayNames[3] = "Wednesday";
allDayNames[4] = "Thursday";
allDayNames[5] = "Friday";
allDayNames[6] = "Saturday";

let dayName = allDayNames[date.getDay()];

cron.schedule(
    "49 23 * * *",
    () => {
        if (day === 1 || day === 3) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subject: \n\n7:10 : 8:10 : *Fiqh*`,
                    {
                        parse_mode: "MarkdownV2",
                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        } else if (day === 2 || day === 5) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subjects: \n\n6:00 : 7:00 : *Hadith*\n7:00 : 8:00 : *Tafseer*\n8:00 : 8:30 : *TQ*`,
                    {
                        parse_mode: "MarkdownV2",
                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        } else if (day === 4) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subjects: \n\n6:00 : 7:00 : *An-Nahw*\n7:00 : 8:00 : *Qasas*\n8:00 : 8:30 : *Arabic Speaking*`,
                    {
                        parse_mode: "MarkdownV2",
                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        }
    },
    {
        scheduled: true,
        timezone: "America/Toronto",
    }
);

bot.launch();

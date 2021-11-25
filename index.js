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
    "5 17 * * *",
    () => {
        if (day === 1 || day === 3) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subject: \n\n7:10 : 8:10 : <b>Fiqh</b>`,
                    {
                        parse_mode: "HTML",
                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        } else if (day === 2 || day === 5) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subjects: \n\n6:00 : 7:00 : <b>Hadith</b>\n7:00 : 8:00 : <b>Tafseer</b>\n8:00 : 8:30 : <b>TQ</b>`,
                    {
                        parse_mode: "HTML",
                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        } else if (day === 4) {
            bot.telegram
                .sendMessage(
                    process.env.CHAT_ID,
                    `${dayName}'s Subjects: \n\n6:00 : 7:00 : <b>An-Nahw</b>\n7:00 : 8:00 : <b>Qasas</b>\n8:00 : 8:30 : <b>Arabic Speaking</b>`,
                    {
                        parse_mode: "HTML",
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

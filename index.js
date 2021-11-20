require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);

const date = new Date();
const day = date.getDay();
const time = date.getTime();
const trigger = date.setHours(22, 6, 11);

if (day === 1 || day === 3) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        "Subject Today: \n7:10 - 8:10 -> *Fiqh*",
        {
            parse_mode: "MarkdownV2",
        }
    );
} else if (day === 2 || (day === 5 && time >= trigger)) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        "Subjects Today: \n6:00 : 7:00 : *Hadith*\n7:00 : 8:00 : *Tafseer*\n8:00 : 8:30 : *TQ*",
        {
            parse_mode: "MarkdownV2",
        }
    );
} else if (day === 4) {
    bot.telegram.sendMessage(
        process.env.CHAT_ID,
        "Subjects Today: \n6:00 - 7:00 -> *An-Nahw*\n7:00 - 8:00 -> *Qasas*\n8:00 - 8:30 -> *Arabic Speaking*",
        {
            parse_mode: "MarkdownV2",
        }
    );
}

bot.launch();

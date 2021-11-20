require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);

bot.use("message", (ctx) => {
    const date = new Date();
    let day = date.getDay();
    let time =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if (day === 1 || day === 3) {
        ctx.telegram.sendMessage(
            process.env.CHAT_ID,
            "Subject Today: \n7:10 - 8:10 -> Fiqh"
        );
    } else if (
        day === 2 ||
        (day === 5 &&
            date.getTime() === new Date().setHours(21, 40, 15).getTime())
    ) {
        ctx.telegram.sendMessage(
            process.env.CHAT_ID,
            "Subjects Today: \n6:00 - 7:00 -> Hadith\n7:00 - 8:00 -> Tafseer\n8:00 - 8:30 -> T.Q."
        );
    } else if (day === 4) {
        ctx.telegram.sendMessage(
            process.env.CHAT_ID,
            "Subjects Today: \n6:00 - 7:00 -> An-Nahw\n7:00 - 8:00 -> Qasas\n8:00 - 8:30 -> Arabic Speaking"
        );
    }
});

bot.launch();

import express from "express";
import bodyParser from "body-parser";
import { Client } from "discord.js";

import { Users } from "./handler/users";

const app = express();
const bot = new Client();

app.get("/:id/users", (req, res) => Users(bot, req, res));

bot.login("token")
    .then(function(e) {
        app.listen(8080, function() {
            console.log(`Server listening on port 8080`);
        })        
    })
    .catch(({ message }) => console.log(`[Client Error]: ${message}`));
import { Request, Response } from "express";
import { Client, Guild, GuildMember } from "discord.js";

import { Diff } from "../functions/diff";
import { getDayInCurrentMonth } from "../functions/getDayInCurrentMonth";
import { TimeToString } from "../functions/TimeToString";

let stats: any[] = [];
const dayNumber = 1000 * 60 * 60 * 24;

export function Users(bot: Client, req: Request, res: Response) {
    let id = req.params["id"];
    let guild = <Guild>bot.guilds.cache.get(id);
    let users = guild.members.cache;

    let Member = (e: GuildMember) => <GuildMember>guild.member(e.user);

    let day = new Date().getDate()
    for(var i = day - getDayInCurrentMonth(); i <= day; i++) {
        let { data, startTime } = TimeToString(i);

        const endTime = startTime + dayNumber;

        let user = users.filter(e => <number>Member(e).joinedTimestamp >= startTime && <number>Member(e).joinedTimestamp < endTime).size
        stats.push({
            t: data,
            y: user
        })
    }

    res.json(stats);
}
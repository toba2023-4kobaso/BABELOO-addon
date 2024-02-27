import {world} from "@minecraft/server"

world.events.beforeChat.subscribe(event => {
    event.cancel = true;
    event.sender.runCommand("title @s times 0 0 0");

    let string;
    if(event.sender.hasTag("japanese")) string = "ja";
    if(event.sender.hasTag("english")) string = "en";

    let obj ={
        message: event.messege,
        language: string
    }

    let strobj = JSON.stringify(obj);

    event.sender.runCommand(`title @s title ${strobj}`);
});
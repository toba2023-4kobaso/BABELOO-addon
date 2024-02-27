import {world} from "@minecraft/server"

world.beforeEvents.chatSend.subscribe(event => {
    event.cancel = true;
    event.sender.runCommandAsync("title @s times 0 0 0");

    let string;
    if(event.sender.hasTag("japanese")) string = "ja";
    if(event.sender.hasTag("english")) string = "en";

    let obj ={
        message: event.message,
        language: string
    }

    let strobj = JSON.stringify(obj);

    event.sender.runCommandAsync(`title @s title ${strobj}`);
});
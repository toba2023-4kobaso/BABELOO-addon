import {world} from "@minecraft/server"

world.events.beforeChat.subscribe(event => {
    event.cancel = true;
    event.sender.runCommand("title @s times 0 0 0");

    
    const obj ={
        message: [event.messege],
        language: ["ja" , "en"]
    }

    event.sender.runCommand("title @s title ");
});
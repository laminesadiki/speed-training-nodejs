const { EventEmitter } = require("events");

const event = new EventEmitter();
event.on("speed-training", (name) => {
    console.log(name+" eat cousous avec pizza");
    console.log(name+ " learn")
})

event.once("data", (name, company) => {
    console.log(name);
    console.log(company);
})

event.emit("speed-training", "achraf");
event.emit("data", "med", "vector.ma");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");
event.emit("data", "ayoub", "zenika");

const Command = require('./command.js');
const Message = require('./message.js');


class Rover {
   // Write code here!
   
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position; 
      this.mode = mode; 
      this.generatorWatts = generatorWatts; 
   }
   
   receiveMessage(newMessage) {    
      let newMessageCommands = [];
      for (let i = 0; i < newMessage.commands.length; i++) {
         newMessageCommands.push(newMessage.commands[i])
      }


      return {
         message: newMessage.name,
         results: newMessageCommands
      }
   }
}

// let rover = new Rover(98382);
// console.log(rover); 

module.exports = Rover;
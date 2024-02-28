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
      let resultsArray = [];
      //let status = {resultsArray["roverStatus"] = {this.position, this.mode, this.generatorWatts}}

      let roverResponse = {
         message: newMessage.name,
         results: resultsArray,
         completed: true
      };

      let test;
      //let commandsArray = [];
      for (let i = 0; i < newMessage.commands.length; i++) {
         
         let result = {};

         if (newMessage.commands[i].commandType === 'STATUS_CHECK') {
            result = { completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position} };
        
         } else if (newMessage.commands[i].commandType === 'MOVE') {
            result = { completed: true };
         
         } else if (newMessage.commands[i].commandType === 'MODE_CHANGE') {
            if (newMessage.commands[i].value === 'LOW_POWER' || newMessage.commands[i].value === 'NORMAL') {
               this.mode = newMessage.commands[i].value;
            }
            result = { completed: true };
         
         } else {
            throw Error("Invalid command type");
         }
         resultsArray.push(result);
      }
      
      return roverResponse;
   }
}

module.exports = Rover;
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  {
    let commandsArray = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let newMessage = new Message('Carl', commandsArray);
    let rover = new Rover(98382);
    let roverResponse = rover.receiveMessage(newMessage);
  
    test("constructor sets position and default values for mode and generatorWatts", function() {
        expect(rover.position).toEqual(98382);
        expect(rover.mode).toEqual('NORMAL');
        expect(rover.generatorWatts).toEqual(110);
    });
    
    test("response returned by receiveMessage contains the name of the message", function() {
        //roverResponse is an object {message: Message.name, results:[ {command1}, {command2}] }, 
        expect(roverResponse.message).toEqual(newMessage.name);
    });
    
     test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        //receiveMessage returns an object with 2 results if 2 commands are sent {message: Message.name, results: [ {command1}, {command2} ]}
        expect(roverResponse.results).toHaveLength(2);
      });

/*10test("responds correctly to the status check command", function() {
        //if commandsArray [ {command1}, {command2} ] includes 'STATUS_CHECK', receiveMessage returns an object { mode: X, generatorWatts: 110, position: 98382} at commandArray position for 'STATUS_CHECK'
        expect(commandsArray).toContain('STATUS_CHECK');
        expect(roverResponse.results).toHaveProperty(['roverStatus', rover]);          
      });
      
/*11test("responds correctly to the mode change command", function () { 
        //if commandsArray includes 'MODE_CHANGE' receiveMessage returns an object containing 'MODE_CHANGE' value at {mode: X}
        expect(commandsArray).toContain('MODE_CHANGE'); 
        expect(roverResponse.results).toHaveProperty('mode', 'LOW_POWER');
      }); 

/*12test("responds with false completed value when attempting to move in LOW_POWER mode", function() {
        //if rover includes {mode: LOW_POWER} will return {completed: false} and position remains the same
        expect(rover.mode).toContain('LOW_POWER');
        expect(rover.mode).toContain('MOVE', 0);
        expect(roverResponse.results).toHaveProperty('completed', false); 
        expect(roverResponse.results).toHaveProperty('position', 98382);
      });

/*13test("responds with the position for the move command", function() {
        //MOVE command will update the rover's position with the position value in the command
        expect(rover.mode).toContain('MOVE', 0); 
        expect(roverResponse.results).toEqual(0)
      });*/
  }
});
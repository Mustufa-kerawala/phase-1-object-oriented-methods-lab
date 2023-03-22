// Writing a constructor function for BoardMember
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// Adding a method to the constructor function
BoardMember.prototype.veto = function() {
  return "No, I must disagree";
}

// Adding a method to the constructor function
BoardMember.prototype.approve = function() {
    return 'You can do that!';
}

// Adding a method to the constructor function
BoardMember.prototype.doCharity = function() {
    return 'I like to help people.';
}

// Adding a method to the constructor function
BoardMember.prototype.releasePressStatement = function() {
    return 'You will see great things from Scuber.';
}

// Adding a method to the constructor function
BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}

//Exercise 7: Multi-Level Prototype Chain
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function (name) {
this.team.push(name);
};

manager.addTeamMember('Akeylah');
manager.addTeamMember('Tiana');


// Prototype chain: manager - employee -person -Object.prototype - null
console.log(manager.department);
console.log(manager.company);
console.log(manager.species);
console.log(manager.breathe());
console.log(manager.team);

function outer(a) {
  return function inner(b) {
    return a + b;
  };
}
outer(5)(5);
console.log('outer(5)(5): ', outer(5)(5));

// Using Closures for private variables

function counter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}

const counter1 = counter();
console.log('counter1(): ', counter1());
console.log('counter1(): ', counter1());
const counter2 = counter();
console.log('counter2(): ', counter2());
console.log('counter2(): ', counter2());
console.log('counter1(): ', counter1());

console.log('');

function classroom() {
  const instructors = ['Colt', 'Elie'];
  return {
    getInstructors() {
      return instructors;
    },
    addInstructor(name) {
      instructors.push(name);
      return instructors;
    },
  };
}

const course1 = classroom();
console.log('course1.getInstructors(): ', course1.getInstructors());
console.log("course1.addInstructor('Mike'): ", course1.addInstructor('Mike'));
console.log('course1.getInstructors(): ', course1.getInstructors());
const course2 = classroom();
console.log('course2.getInstructors(): ', course2.getInstructors());
console.log("course2.addInstructor('Julia'): ", course2.addInstructor('Julia'));
console.log('course2.getInstructors(): ', course2.getInstructors());

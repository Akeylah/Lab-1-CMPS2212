//Exercise 4: Creating and Modifying Object Literals
const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

    getFullName() {
        return student.firstName + ' ' + student.lastName;
    },

    enrollCourse(courseName) {
        student.courses.push(courseName);
    },

    getCourseCount() {
        return student.courses.length;
    }
};

console.log(student.getFullName());
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount()); 

//Creates a student object that stores personal details and a list of courses.
//The methods are then called to get student’s full name, adding courses, and counting how many courses the student is enrolled in.
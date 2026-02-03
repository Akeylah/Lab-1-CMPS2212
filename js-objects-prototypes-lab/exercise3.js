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

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }

// }

// console.log(pow(5, 2));


const students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }

    }    
};


// function getTotalProgressByLoop(data) {
//     let total = 0;
//     let students = 0;

//     // let jsStudents = Object.values(data.js);
//     // let htmlBasicStudents = Object.values(data.html.basic);
//     // let htmlProStudents = Object.values(data.html.pro)

//     // function eachStudentProgress(data) {
//     //     data.forEach(item => {
//     //         total += item.progress;
//     //         students += 1;
//     //      })
//     // }

//     // eachStudentProgress(jsStudents);
//     // eachStudentProgress(htmlBasicStudents);
//     // eachStudentProgress(htmlProStudents);

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//          }
//     }


//     return total / students;
// }

// console.log(getTotalProgressByLoop(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);



function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(5));




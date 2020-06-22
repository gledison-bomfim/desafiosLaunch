const studentsclassA = [
    {
        name: "Glédison",
        grade: 9.8
    },

    {
        name: "Darlan",
        grade: 1.0
    },


    {
        name: "Alex",
        grade: 9.0
    },
    {
        name: "n sei",
        grade: 2.0
    }
]

const studentsclassB = [
    {
        name: "Luana",
        grade: 9.8
    },

    {
        name: "Nelson",
        grade: 8.0
    },


    {
        name: "Lisiane",
        grade: 9.0
    },

    {
        name: "Novo Aluno",
        grade: 1.0
    }


]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }
    average = sum / students.length;
    return average;
}


function sendMenssage(average, class) {

    if (average > 5) {
        console.log(`A average of ${class} is ${average} congrulations.`)
    } else {
        console.log(`Your's , the average is: ${class}. is not good`)
    }

}


function markAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true
    }

}


function sendFlunkedMenssage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsFlunked(student) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMenssage(student)
    }
}


const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);


sendMenssage(average1, 'class A')
sendMenssage(average2, 'class B')


studentsFlunked(classA)
studentsFlunked(classB)
class Academy {
    constructor(name, students, subjects, start, end) {
      this.name = name;
      this.students = students;
      this.subjects = subjects;
      this.start = start;
      this.end = end;
      this.numberOfClasses = subjects.length * 10;
    }
  
    printStudents() {
      console.log(this.students);
    }
  
    printSubjects() {
      console.log(this.subjects);
    }
  }

  class Subject {
    constructor(title, isElective, academy) {
      this.title = title;
      this.numberOfClasses = 10;
      this.isElective = isElective;
      this.academy = academy;
      this.students = [];
    }
  
    overrideClasses(number) {
      if (number < 3) {
        console.error("Number of classes can't be less than 3");
      } else {
        this.numberOfClasses = number;
      }
    }
  }

  class Student {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.completedSubjects = [];
      this.academy = null;
      this.currentSubject = null;
    }
  
    startAcademy(academy) {
      this.academy = academy;
    }
  
    startSubject(subject) {
      if (this.academy === null) {
        console.error("Student is not enrolled in an academy");
      } else if (!this.academy.subjects.includes(subject)) {
        console.error("Subject is not offered by the student's academy");
      } else {
        this.currentSubject = subject;
      }
    }
  }
    

  // Create an Academy
const academy = new Academy(
    "Academy of Science",
    [],
    [],
    new Date("2023-03-01"),
    new Date("2023-06-30")
  );
  
  // Create a Subject
  const subject = new Subject("Math", false, academy);
  
  // Add the Subject to the Academy
  academy.subjects.push(subject);
  
  // Create a Student
  const student = new Student("John", "Doe", 18);
  
  // Enroll the Student in the Academy
  student.startAcademy(academy);
  
  // Enroll the Student in the Subject
  student.startSubject(subject);
  
  // Print the Student's current subject
  console.log(student.currentSubject.title);
  
  // Override the number of classes for the Subject
  subject.overrideClasses(15);
  
  // Print the number of classes for the Subject
  console.log(subject.numberOfClasses);
  
  // Print all the Subjects in the Academy
  academy.printSubjects();
  
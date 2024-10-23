const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

const employees = [
  {
    id: 101,
    email: "employee1@example.com",
    password: "123",
    name: "Arjun Sharma",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newTasks: 1, // Changed from accepted to newTasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement OAuth for user authentication",
        description: "Complete the OAuth integration for user login and registration.",
        taskDate: "2024-10-21",
        category: "Authentication",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix bugs in the payment module",
        description: "Identify and resolve bugs in the payment processing system.",
        taskDate: "2024-10-19",
        category: "Development",
      },
    ],
  },
  {
    id: 102,
    email: "employee2@example.com",
    password: "123",
    name: "Priya Kapoor",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTasks: 1, // Changed from accepted to newTasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop RESTful API for client services",
        description: "Create a RESTful API to handle client data and requests.",
        taskDate: "2024-10-22",
        category: "API Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor front-end code for better performance",
        description: "Improve the performance of the front-end code by refactoring components.",
        taskDate: "2024-10-18",
        category: "Front-End",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix security vulnerabilities in the login system",
        description: "Resolve the security vulnerabilities in the login module.",
        taskDate: "2024-10-20",
        category: "Security",
      },
    ],
  },
  {
    id: 103,
    email: "employee3@example.com",
    password: "123",
    name: "Ravi Singh",
    taskCount: {
      active: 1,
      completed: 0,
      failed: 1,
      newTasks: 1, // Changed from accepted to newTasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement caching for better application performance",
        description: "Use caching mechanisms to enhance performance for heavy data requests.",
        taskDate: "2024-10-23",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test the new module for cross-browser compatibility",
        description: "Ensure the new module works seamlessly across all major browsers.",
        taskDate: "2024-10-17",
        category: "Testing",
      },
    ],
  },
  {
    id: 104,
    email: "employee4@example.com",
    password: "123",
    name: "Anjali Verma",
    taskCount: {
      active: 1,
      completed: 2,
      failed: 1,
      newTasks: 1, // Changed from accepted to newTasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update the database schema for new features",
        description: "Modify the database schema to support newly added features.",
        taskDate: "2024-10-21",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize the SQL queries for faster performance",
        description: "Optimize slow-running SQL queries to improve database performance.",
        taskDate: "2024-10-20",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review code for the microservices architecture",
        description: "Conduct a code review for the newly implemented microservices.",
        taskDate: "2024-10-19",
        category: "Review",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Finalize the API documentation for new endpoints",
        description: "Complete the API documentation for newly introduced endpoints.",
        taskDate: "2024-10-18",
        category: "Documentation",
      },
    ],
  },
  {
    id: 105,
    email: "employee5@example.com",
    password: "123",
    name: "Karthik Iyer",
    taskCount: {
      active: 1,
      completed: 2,
      failed: 1,
      newTasks: 1, // Changed from accepted to newTasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Coordinate with team for software release planning",
        description: "Work with the development team to plan the next software release.",
        taskDate: "2024-10-21",
        category: "Coordination",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Audit the code for technical debt",
        description: "Identify and document areas of technical debt in the codebase.",
        taskDate: "2024-10-16",
        category: "Audit",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Organize code review sessions for junior developers",
        description: "Conduct code reviews and mentor junior developers on best practices.",
        taskDate: "2024-10-15",
        category: "Event",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Refactor the legacy codebase to improve scalability",
        description: "Refactor the older codebase to improve scalability for future development.",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
];



export const setLocalStorage=()=>{
    localStorage.setItem("admin", JSON.stringify(admin))
    localStorage.setItem("employees", JSON.stringify(employees))
}

export const getLocalStorage=()=>{
    const admin=JSON.parse(localStorage.getItem("admin"))
    const employees=JSON.parse(localStorage.getItem("employees"))

    return {admin , employees}
}
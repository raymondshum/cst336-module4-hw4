# CST 336 - Internet Programming

- Professor: Dr. Miguel Lara
- TA: James Campbell

**Course Description:**

> Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting. Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs.
> <br>

---

---

## _Assignment 4: Express_
[![Run on Repl.it](https://repl.it/badge/github/raymondshum/cst336-module4-hw4)](https://cst336-module4-hw4.raymondshum.repl.co/)

### **Objective:**

> To demonstrate knowledge in the use of Web APIs & asynchronous functions. To utilize Node.js and Express.js to design a website.

### **Project Description:**

> This website provides an overview of the economic and environmental impact of the Bitcoin mining boom. The goal of this assignment was to redesign our first webpage using our knowledge of Node and Express. The website was redesigned using Node's MVC pattern, with Express handling client GET requests. Express was also used as a template engine in rendering header and footer partials for each webpage. The Faker API was used on the backend to dynamically create a fictional employee.

---

### **How was Faker Used?**

---
> Faker was used to create a fictional employee in the About page.

## /index.js:

    function generateFake(){
    let fakeEmp = {
        "firstName" : faker.name.firstName(),
        "lastName" : faker.name.lastName(),
        "image" : faker.image.people(),
        "joinDate" : faker.date.past().toDateString(),
        "department" : faker.commerce.department(),
        "product" : faker.commerce.product(),
        "catchPhrase" : faker.company.catchPhrase().toLowerCase(),
        "car" : faker.fake("{{vehicle.vehicle}}")
    };
    return fakeEmp;
    }

    app.get('/about', (req, res) => {
        res.render('about',{"title":"About", ...generateFake()});
    });

> generateFake() creates an object holding information associated with the fake employee. It is included in the callback function associated with handling GET requests for the about page.

## /views/about.ejs
    <img src="<%= image %>" alt="Image of <%= firstName %> <%= lastName %>" />
    <br /><br />
    <h2>
      <strong><%= firstName %> <%= lastName %>: <br /></strong>
    </h2>
    <%= firstName %> joined innovaTree on <%= joinDate %> as director of our
    <%= department %> department in charge of our <%= product %> sales. <%=
    firstName %>'s personal focus is on directing research towards  
    <em>"<%= catchPhrase %>"</em>. <%= firstName %> is a huge fan of the <%=
    car %>, driving it to the office everyday.

> EJS variables are injected into the body of the preformatted page.

---

### **Rubric:**
![rubric](/documentation/rubric.JPG)

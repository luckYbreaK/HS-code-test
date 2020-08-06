## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the client (React) app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

Runs the API (Node) server.<br />
The API server runs on port 3030 and I configured the React app to proxy any unknown requests to the API server.

## Write-Up

### Client App

#### React UI Library

* I have had limited exposure to and experience with Vue. I opted to implement React because I felt I could more adeptly demonstrate my skills.
* Earlier versions of React used class-based components to manage local state. I opted to utilize the useState Hook, a feature implemented in more recent versions, for state management. In my opinion, useState simplifies and reduces code making it more readable. Of note, class-based components contain state within one object whereas useState allows for individual state variables. The advantage to the latter is that it reduces the number of re-renderings, which are triggered by a change in state, precisely because the state isn't encompassed within one object.
* I created 3 components, each representing different sections of the app, i.e. the web form, the business card, and the salary adjustments. The Form component is a parent component to the Card and Salary components. Because of React's unidirectional data flow approach, I felt it more logical to make the API request in the Form component and pass the resulting data to the child components. I'll mention here that I feel, time allowing, it would have been beneficial to create a fourth component that encapsulated each form input to better adhere to the DRY concept.

#### Design & Layout

* To achieve the page layout I used Flexbox. I find it to be a quick and efficient way of creating the layout. Flexbox also lays the foundation to incorporate responsive design in the future. Had I been designing a publicly hosted application I would have begun with a mobile-first design approach.
* To make things more fun I added a touch of color. The darker blue is the same blue that is part of the Henry Schein logo and the other blues are variations of it.
* The business card template doesn't show any information originally doesn't include any information about the employee's employment status. To make more dynamic use of this boolean value I designed the business card to show 'former employee of' or 'current employee of' depending on whether the checkbox is checked or not. Because of that decision, I also chose to only render that data if a user provides a company name. 

#### Other Future Considerations

* Other considerations include validation (especially of the phone field) and normalization for the other form fields as well as determining which fields are optional and which are required. It would also be nice to see live validation. I only provided validation upon form submission. 

### API Server

#### Express

* I used the express framework for node.js. It's one of the more popular frameworks and it is the framework I'm most familiar with.

#### RESTful API

* Commonly used and I appreciate its HTTP request methods. Express makes setting up the routing endpoints simple and I also implemented the use of controllers. I wans't really necessary for an application of this size but it certainly helps with larger and more complex applications.
* I've come across differing opinions regarding naming conventions regarding enpoints, most often kebab case vs snake case. I opted to use kebab case as it seems to be more commonly recommended. 

#### Security, Databases, & Other Considerations

* Data security and privacy would need to be addressed. Common practices of authorizing and granting privileges to certain users should be implemented in this application. The employee's data is sensitive and needs to be protected. 
* Other security considerations would come of the database choice, NoSQL vs SQL, as well as DBMS. SQL injection is often a security concern though the ORMs that I've worked with have measures is place to protect against it.
* Backend validation is another process that could be implemented to increase security.

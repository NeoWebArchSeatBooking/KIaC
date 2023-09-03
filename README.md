# Seatbooking App
## Stakeholders
Stack route (Product Owners), Developers, Quality Assurance team, DevOps, Infrastructure & maintenance team, and Users
## Business Goals
Company facilitates their employee to search and book a seat in office premises through online web application. The web application has two user roles: Employee and Admin. 
#### As an employee,
1.	login to app via company credentials or email for now.
2.	have ability to select the day they want to book seat.
3.	Will get option of booking a seat as we get in any app or else shows as list kind of option with seat type /its available numbers.
4.	After selecting a seat, clicks on Book the seat and confirm the booking.
5.	Can be allowed to select and book for more than one day.
#### As an admin,
1.	View an analytic report on how many seats are booked on specific day.
2.	View which user books seats more frequently.
## Requirement Consideration:
### Main Objective:
a.	User search for the day and book a seat. 
b.	Users keep preference and can use while booking a seat.
c.	User can view the booked seats.
d.	Admin can view the booked seats for specific day.

### Good to have:
a.	User can select multiple days to select and book a seat.
b.	System sends email notification about booked confirmation.
c.	Admin can view the most frequent user of seat booking.
### Non-Functional Requirements
1.	The application must run 24 * 7.
2.	There will be 10k-20k DAU.
3.	The app has to be always up and running w/o any downtime in case of disaster.
4.	Any search operation on the app should take less than 2 secs.
5.	The app has to globally serve the customers across the globe.
6.	Seat booking should take less than 2 secs.
7.	Any search operation on UI based on date, location and other types should not take more than 2 secs.
8.	There will be some integration required soon with the company cost center so design your code in such way that its extendable and maintainable.
9.	Data for seat booking should be governed properly.
10.	There should be an analytics report that should be generated each day and sent to SME’s
## Architecturally Significant Requirements
### Constraints
|Constrains| Type| Origin| Comments| Impacts|
| :-------- | :------- | :------- |:------- |:------- |
|Should use React|	Technical|	Product Owner/ Stakeholders|	Stakeholder decision to use react UI libs|	Skill up required for Team|
|Should use Docker for API|	Technical|	Product Owner/ Stakeholders|	Stakeholder decision to use containerized application| 	Limit towards container-based architecture |
System should be ready by August’2023|	Business|	Product Owner/ Stakeholders|	Stakeholder schedule to complete by Q3|	Influencing to limit scope of the primary objective of system|
System should available across globe| 	Business & Technical|	Product Owner/ Stakeholders|	Part of NFR |	With the given VM platform, decided to go with containerized app which does not support the NFR| 
System should support 20K DAU|	Business & Technical|	Product Owner/ Stakeholders|	Part of NFR|	With the given VM platform, decided to go with dockerized app which does not support the NFR|
System should be available even in case of disaster|	Technical|	Product Owner/ Stakeholders|	Part of NFR|	Given VM platform does not support the NFR|

### Quality Attributes
|Quality Attribute|	Scenario|	Priority|	Comments|
| :-------- | :------- | :------- |:------- |
|Portability|	System should be designed to support any platform so that it can be moved into other platform like Azure, GCP| 	Low|	Not in NFR, but nice to have, so keep it low priority.|
|Performance|	User can see the search result Quickly.(refer appendix A)|	High|	Part of NFR (5,7,8)|
|Reliability|	90% of request should be served without failures. (Percentile for week)|	High|	Part of NFR (6)|
|Scalability|	System should scale up API server when traffic reaches 80% above and should scale down when 40% below|	Medium|	Scale based on incoming traffic. Part of NFR (2) |
|Supportability|	System should provide monitoring tool to identify traffics, performance & system failures and analyzing tool to debug failures| 	Medium|	Part of NFR (9)|
|Usability|	System’s UI facilitates user 1. to see seating views precisely to select and book a ticket.2. to view the seats availability by using preference set by user.|	Medium|	Good to have user experience.|

 ### Influential Functional Requirements
 |Functional Requirements|	IFR|	Comments|
 |:----------------------|:---------|:-----------|
 |System facilitates user to view the seating/floor structure to select the seat.|	Rendering the seating structure in web app influences need of image store system.| 	Facilitates user to select seat from the list of available seats avoids the image store system need.  | 
|User authentication and authorization as part of system|	Influence an additional data source and system to handle IAM functionality.|	Utilizing existing Identity provider of an organization can avoid additional system functionality.  |
## C4 Model   
### Context Diagram
![image](https://github.com/NeoWebArchSeatBooking/KIaC/assets/11704304/06525a65-4650-4b6f-a20d-1cb3683871ea)
### Container Diagram  
![image](https://github.com/NeoWebArchSeatBooking/KIaC/assets/11704304/35d71c48-d68a-4db7-bd82-a11b6da07f14)
### Component Diagram:
Below diagram depicts components involved in Seating booking Application
1. Login Component:  handles the user authentication and authorization using existing Identity Provider.
2. Infra Component: Provides Infrastructure information like locations, blocks within location, floors in block and seating details (Its static details).
3. Seat Search Component: handles 
	a. Seat search by user: fetch total seats for the specific day, fetch booked seats from local DS, apply preferences if any and return available seats to user.
	b. Booked seats by user: fetch booked seats information of the user.
	c. Booked seats by Admin: fetch booked seats information for the given day
4. Seat Booking Component handles the seat booking confirmation of the user, verify & book the seat if available or return appropriate response.
5. Preference Component handles the functionality of updating and fetching user preference.
### Code Diagram
## Deployment View
Deployment Pattern: Service instance per container
Orchestration: Kubernetes  
Deployment Strategy: Rolling update (address 0 downtime)
Container based design:
![image](https://github.com/NeoWebArchSeatBooking/KIaC/assets/11704304/5c561575-c363-4b1b-800b-1e7b38f48aca)

## Delivery View
### GitLab Flow Branching Strategy 
1.	Developers allowed to cut feature/ task branch from main branch.
2.	Bug freed completed feature branch merged back into main branch.
a.		Pull request to main branch approved only if pre-condition (linting & Automated unit testing) satisfied.
3.	Main branch always should have bugs free code base. 
4.	Main branch merged into staging branch for UAT (optional)
5.	Main branch merged into production branch for deploy.
a.		Pull request to production branch approved only if pre-condition (linting & auto integration testing) satisfied.
b.		2 approvals.
6.	Production branch always should be deployable. 
### CICD Pipeline
![image](https://github.com/NeoWebArchSeatBooking/KIaC/assets/11704304/d76e7677-9040-4ee7-b942-da8e90ecab04)

## Appendix A: Glossary
|Glossary| Desc |
|:----------------------|:---------|
|API Response: Quick|	1 seconds/request|
|API Response: Optimal|	3 seconds/request|
|API Response: Non-Acceptable|	More than 3 |seconds/request|
|Business Constraint|	Constraint that limits decisions about people, process, costs, and schedule|
|Constraints|	Immutable design decision either given by choice or forced to take|
|Influential Business Requirements|	Functional requirement that derives architectural decision making|
|Priority: High	Must be available |
|Priority: Medium|	Good to be available|
|Priority: Low	|Nice to be available|
|Technical Constraint|	Constraint that limits decision about technology |
|UI Rendering Response: Quick	|2 seconds/request|
|UI Rendering Response: Optimal|	5 seconds/request|
|UI Rendering Response: Non-Acceptable|	More than 5 seconds/request|
## Appendix B: Quality Attribute Taxonomy
|Glossary| Desc |
|:----------------------|:---------|
|Availability|	Percentage of time that the system remains functional under normal circumstances.|
|Maintainability|	ability of a system to maintain easily and support changes cost-effectively|
|Portability|	Ability of a system to be moved/ deployed into different environment/platform |
|Performance|	ability of a system to respond for the request within a certain period.|
|Reliability|	Degree to which system serves its purpose without failures|
|Scalability|	ability of a system to handle the demand without decreasing performance|
|Supportability| ability of a system that facilitates necessary requirements to identifying and solving problems|
|Testability|	Degree to which system can be tested.|
|Usability|	Degree to which user can use system efficiently and effectively.|


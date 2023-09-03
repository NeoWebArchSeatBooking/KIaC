# Seatbooking App
## Stakeholders
Stack route (Product Owners), Developers, Quality Assurance team, DevOps, Infrastructure & maintenance team, and Users
## Business Goals
	Company facilitates their employee to search and book a seat in office premises through online web application. The web application has two user roles: Employee and Admin. 
	As an employee,
1.	login to app via company credentials or email for now.
2.	have ability to select the day they want to book seat.
3.	Will get option of booking a seat as we get in any app or else shows as list kind of option with seat type /its available numbers.
4.	After selecting a seat, clicks on Book the seat and confirm the booking.
5.	Can be allowed to select and book for more than one day.
   As an admin,
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
|Constrains	Type|	Origin|	Comments|	Impacts

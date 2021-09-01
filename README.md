# Angular Movie App

In this app user can CRUD operations on movies data that is recieving from an in memory data service.
Also I added an logging service for logging every action of user and display them in the page.

User can view  details of the movies on 'dashboard' section and view the all movies as a list in the 'movies' component.
user can  update the movies by clickng them on the movies or dashboard section. So they route to the movie details component.
User can add new movie from bottom of the movies section and The added movie is instantly shown in the movies component.
User can remove a movie by clicking the cross sign near to them on the movies component so they can instantly disappear from movies component thank to both side binding.
Navbar and logging component always shown in the page. Navbar componenet includes movies and dashbord routing buttons. Logging component displays actions of users.

## Dependencies
-NodeJs v14.17.5
-npm 6.14.14
-angular 12.2.0
-angular/cli 12.2.2

You should install NodeJs from its official web site. Then run this script from command line:
npm install -g @angular/cli

Run the app by typing to command line : ng serve

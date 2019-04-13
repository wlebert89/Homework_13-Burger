# Chug Yer Potions

### Overview

This is a one-page full-stack website that demonstrates use of GET, POST, and PUT routes. A number of pre-existing potion names are stored in a MySQL database. The index page calls a GET request for all potions in the database and renders their names to the page using Express-Handelbars. The user can add a potion using the form at the bottom of the page, which calls a POST request and stores the newly added potion to the database. If a user clicks on a potion's name, it calls a PUT request and changes the potion's "devoured" value from FALSE to TRUE. Handlebars then renders the devoured potions to the opposite side of the page.

### Technologies

    * Express
    * Handlebars
    * MySQL
    * Custom ORM
    * HTML, CSS, Javascript & jQuery

### Background Image

I created the background image from scratch by modeling, texturing, and lighting the potion in Maxon Cinema 4D and rendering it with Octane render. I did some color correction / compositing in Adobe After effects.
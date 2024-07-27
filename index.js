/**
 * Form handling
 * ---------------
 * Handle backend process of forms, and making sure that data coming form the front-end will be ahdnled here again.
 * 
 * Cookies
 * ---------
 * When a req is sent to a server, it checks if the user is authenticated and authorized. If not then the server will ask you to login or
 * signup. This used to happend every time. But nowerdays thanks to cookies we can store a specific id that will be stored in the browser
 * where it is called as cookie. The id will be the same in both server and frontend. When we send any req the id will be attached to it 
 * and when it is received by the server it will match the id to see who the user is and allow him to perform certain actions.
 * Cookie is mainly used for auth purposes, but has no restrictions from being used else-where.
 *  
 * Session
 * ---------
 * A session typically refers to the duration of an interaction between a client and a server, encompassing all the
 * communications and activities that occur during that connection. This concept is often used in web development to manage user
 * interactions and state over multiple requests.
 */ 

const express = require("express");
const app = express();

app.use(express.json());
/**
 * This middleware function is used to parse incoming requests with JSON payloads.
 * What it does: It reads the body of the incoming request, parses it as JSON, and then makes the parsed data available on req.body.
 * When to use: Use this middleware when you expect the incoming requests to have JSON data in the body. This is common for APIs that
 * accept JSON payloads.
*/

app.use(express.urlencoded({extended: true}));
/**
 * This middleware function is used to parse incoming requests with URL-encoded payloads.
 * What it does: It reads the body of the incoming request, parses it as URL-encoded data (typically from form submissions), and then makes
 * the parsed data available on req.body.
 * When to use: Use this middleware when you expect the incoming requests to have URL-encoded data, such as from HTML form submissions.
 * extended option: The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format using the qs
 * library. If set to false, the querystring library is used, which does not support nested objects.
*/

app.listen(3001, () => {
    console.log("Server running at port 3001");
});
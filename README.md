# Node-Insecure-Deserialization
Nodejs server for insecure deserialization, crafting payload and passing via cookie header allows RCE. Please be careful with this as is severly insecure.

Serialization learning

sources:

https://sking7.github.io/articles/1601216121.html


Main Process -

Run the server -

  - the server will check for a profile cookie with a encoded json object with 3 properties: username, country and city
  - if no profile cookie is found then server will return no user logged in

Craft your payload and pass the payload to the application to gain RCE.

 goal:

   - to learn more about insecure deserialization in node but also gain transferable knowledge for deserialization in other languages such as PHP and Java.
   - will add to this and create a simple PHP server which utilises their magic methods in the near future.

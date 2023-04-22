# Software Design and Diagrams

## Input and Output
Each saved email and password is saved in the format -> email:pass
These entires are seperated onto seperate lines. The application then accepts this file, once the application has read the data it will seperate each email and password from one another by using a split on (:). From each one of these passwords that were split it encrypts them with sha256 and spits them back out on individual lines following the original format replacing the original password with the new hashed password.

## How information is generated and modified
This application takes in a email:password file as it's input. It check to make sure the file it gets as an input exists. If it does it continues, if not it throws an error. Once the application has read the data it will seperate each email and password from one another by using a split on (:). From each one of these passwords that were split it encrypts them with sha256 and spits them back out on individual lines following the original format replacing the original password with the new hashed password.

## UML
![image](https://user-images.githubusercontent.com/98577171/233810948-1dd83202-b7e5-4d2e-ae1c-f60d44a0e2e8.png)

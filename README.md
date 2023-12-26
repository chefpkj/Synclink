# Synclink                                  
It is a browser extension to sync links, clipboard text,etc across devices and browsers.   

## App Demo
<img src="https://github.com/chefpkj/Synclink/blob/main/Synclink.gif" height="450"/>

[Link to video](https://youtu.be/Sa2HwuwP0Cc)

## To Run App In Your Local Machine
You need to write the following commands on the terminal screen so that you can run this project locally.

```bash
  git clone "https://github.com/chefpkj/Synclink.git"
```
Go to the project's directory
```bash
  cd Synclink
```
### To setup backend
Go to the project's directory
```bash
  cd node-backend
```
Install dependencies
```bash
  sudo npm i
```
Start the backend server
```bash
  nodemon index.js
```
Now we have started our backend server successfully. We need to start our frontend server now.

### To setup frontend
Go to the project's directory
```bash
  cd react-frontend
```
Install dependencies
```bash
  sudo npm i
```
Start the backend server
```bash
  npm start
```
This application should now be running on `localhost`. But If you'll try to run it, it won't show you anything because of CORS (browser security feature). To bypass this you need to write the following commands on the terminal screen.
```bash
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
It will open a new window of chrome with disabled CORS. Now you can explore Synclink!! 

## Problems I Faced
I had some issues in order to implement fetch api in useEffect hooks in some components, I tried axios as well but got some errors during installing it after reading its documentations the issue was resolved. So that was a bummer for me, but I overcame that problem shortly and dropped the idea of using axios instead of fetch api as I want my application to be performant but adding an extra is not a wise choice. 

## Technologies Used
- React.js
- Parcel
- Redux-toolkit
- Node.js
- Bcypt
- Json Web Token
- Formik
- Joi
- Tailwind-CSS
- Shimmer-UI

//added something
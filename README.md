# 3rd Year Main Project
# Design Document
Check out the [Wiki](https://github.com/ianburkeixiv/ThirdYearProject/wiki) for the design document

# Video
Click [here](https://youtu.be/jd0N7RG_bnA) to check out the video I uploaded on Youtube showing how to run the application.


# Installation and Configuration Manual
Download the [Install&ConfigManual](https://github.com/ianburkeixiv/ThirdYearProject/raw/master/Install%26ConfigManual.docx) word document above to install the various technologies used in this project.

# User Guide
Once the installation and configuration is done. Here are the following steps on how to run the the database, server and the ionic app together. Download [MyApp2/](https://github.com/ianburkeixiv/ThirdYearProject/tree/master/myApp2) folder and [Server folder](https://github.com/ianburkeixiv/ThirdYearProject/tree/master/server) above.

### Step 1: Launch MongoDB server
To launch the MongoDB server, we must locate the executable files in the MongoDB Server binary folder. Open a command terminal and enter the following:

```sh
$ cd/
```

![](https://cloud.githubusercontent.com/assets/22341150/25337063/212c8628-28f2-11e7-962a-9c059f93e79c.PNG) 


Cd/ will change back to the root directory.
Once in the root directory, we need to go into the Program Files directory

```sh
$ cd "Program Files" 
```

![](https://cloud.githubusercontent.com/assets/22341150/25337079/332561f6-28f2-11e7-87e6-18631152e20e.PNG)

*A shortcut to this is typing the first few words like "pro" and then press the tab button to bring up the full word*. Once in the Program Files directory, we must go into the MongoDB directory.

```sh
$ cd MongoDB 
```

![](https://cloud.githubusercontent.com/assets/22341150/25337082/3b1766b6-28f2-11e7-9ad9-79dc5891b573.PNG)

Then cd into the server directory..

```sh
$ cd server 
```

Use version 3.4..

```sh
$ cd 3.4 
```

cd into the bin folder which contains all the executable files.

```sh
$ cd bin
```

![](https://cloud.githubusercontent.com/assets/22341150/25337087/40f7ad0c-28f2-11e7-9a68-6b90a57805c6.PNG)

Once you are inside the bin folder, enter mongod command to launch the server.

```sh
$ mongod
```

![](https://cloud.githubusercontent.com/assets/22341150/25337073/2a85d936-28f2-11e7-928a-14e1e75f4b88.PNG)

### Step 2: Launch the Node Server
In the [Server](https://github.com/ianburkeixiv/ThirdYearProject/tree/master/server) folder there are two files. The package.json file is used to specify dependencies to be installed by NPM (Node Package Manager). Server.js is the actual server file. To launch the server, open up another command terminal and locate the server directory using the cd (change directory) command. Once you are in the server directory, enter the following command to launch the server:

```sh
$ node server.js
```

![](https://cloud.githubusercontent.com/assets/22341150/25339672/597db4ee-28fb-11e7-936a-90813a85b947.PNG)

Once the MongoDB server and the Node server are running, we can now launch the Ionic 2 app.

### Step 3: Launh Ionic 2
First you must locate the MyApp2 directory containing the Ionic 2 project. Open up another (No.3) command terminal and cd into MyApp2 directory. Once you are inside the directory, enter the following command to run the Ionic app:

- *Note: 'ionic serve' command will run the app on your local browser*
- We will be using 'ionic lab'. This feature makes it easy to run the app in a phone frame and with iOS and Android platforms side by side.

```sh
$ ionic lab
```

![](https://cloud.githubusercontent.com/assets/22341150/25341218/0d8f87a6-2900-11e7-9cc2-2de0ce364e6a.PNG)


'Once the Ionic app is running, you can test it out!'

![](https://cloud.githubusercontent.com/assets/22341150/25342669/9d58dd02-2904-11e7-9af2-092630a6def2.PNG)

![](https://cloud.githubusercontent.com/assets/22341150/25342685/a46b6b46-2904-11e7-9325-7f7d3b0559ec.PNG)




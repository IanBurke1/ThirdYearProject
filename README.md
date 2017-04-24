# Design Document
Check out the [Wiki](https://github.com/ianburkeixiv/ThirdYearProject/wiki) for the design document

# Installation and Configuration Manual
Download the [Install&ConfigManual](https://github.com/ianburkeixiv/ThirdYearProject/raw/master/Install%26ConfigManual.docx) word document above to install the various technologies used in this project.

# User Guide
Once the installation and configuration is done. Here are the following steps on how to run the the database, server and the ionic app together.

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

Then cd into the server directory 
```sh
$ cd server 
```
Use version 3.4 
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

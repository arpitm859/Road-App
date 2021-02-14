# BMC Complaints Management App

A MERN Stack application which aims to improve the communication between citizens, agenices and government officials and also increasing the public involvement. This project was created as a submission for Hackoverflow event in [Cepheus 2021 IIT Goa](https://www.iitgoa.ac.in/Cepheus/). The team went on to secure a place in the top 6 over all of India </br></br>

**Team Name:** F Society</br>
**Team Members:** [Arpit Maurya](https://github.com/arpitm859), [Namami Shanker](https://github.com/NamamiShanker), [Khushboo Gupta](https://github.com/khushboogupta13),  [Kartikey Sharma](https://github.com/KartikeySharma).</br>

## Project Information

A user can register as a Public Member if he is a general citizen, or Agency Member if he works in an agency recognized by GOI, or he can Register as a Government Official incharge of administration. 

Any member can register a complaint, view all the existing comaplaints and his/her own specific comaplaints.

Government Officials are tasked with overall administration and provision of funds required to resolve an issue whereas Agency Members are Companies which with the help of their funds actually work on resolving the complaints. These agecies can be of different types such as Road Repair, Plumbing, Electrical, Water etc.

Our application has divided the entire process of resolving a public issue into various steps, where each step is a sub problem which needs to be resolved by either the government or agency. Our methodology focusses on breaking a big public issue into simpler sub problems and distribute it to different members involved. 

|<img src="https://i.imgur.com/ShBduq0.png"> |<img src="https://i.imgur.com/zmaWo3F.png">|
| ------------------------------------------ | ----------------------------------------- |

* ### Walkthough of the application as a general citizen

Your Home page will give you an overview of the successfully sovled complaints and a pie chart displaying registered, under progress and solved complaints. You can register your own complaints in the provided form which will then be saved and displayed to Agency and Government Members who can work on your issues and resolve them.

|<img src="https://i.imgur.com/PJXR1K3.png"> |<img src="https://i.imgur.com/PSc6Qr0.png">|
| ------------------------------------------ | ----------------------------------------- |

The general citizen can view all the complaints under **Existing Complaints** section registered by other citizens, and he has the choice to upvote their issues if he finds them relevant. He can also view the status of his own complaints under **My Complaints** section. You also have the option to search for any existing complaint.

|<img src="https://i.imgur.com/r84f2xQ.png"> |<img src="https://i.imgur.com/BR6ltwK.png">|
| ------------------------------------------ | ----------------------------------------- |

By clicking on any complaint you can view its details such as its location on Google Maps which is obtained using **Geocoding using Puppeteer** and its status on its way to being resolved.

|<img src="https://i.imgur.com/3v6mXhP.png">|
| ----------------------------------------- |

* ### Walkthrough as a Government Official or Agency Member

As a Government Official or Agency Member, the style of your homepage, complaints registration page, existing complaints remain the same.

However, you are presented with a new Tab in Navigation Panel - **Issues Assigned** which shows what Issues are pending to be resolved from your side. The complaints in the tab depend on whether you are a Government Official or Agency Member. The issues which require clearance from Government are shown to Government Officials under their tab. Same goes for Agency Members too. If you want more information on which steps reuire clearance from which side, you are free to play with the Deployed Project : ) Link will be at the end.

|<img src="https://i.imgur.com/QKu67Wh.png"> |
| ------------------------------------------ | 

Clicking on resolve with change the status of complaint. Moving it on the next stage to being fully solved.

|<img src="https://i.imgur.com/eIVOxeW.png"> |<img src="https://i.imgur.com/TurnzE1.png">|
| ------------------------------------------ | ----------------------------------------- |

Once an issue has been finally resolved. Its will be displayed in the successfully solved panel on the Home Page.

## Project Setup

1. Clone the Github repository. </br> 
2. On your local machine, start two terminals: </br>
    > In the first terminal, run the following commands:
    ```
      npm install
      npm start 
    ``` 
  
    > In the second terminal, first go to the client folder and then run the commands: 
    ```
       cd client
       npm install
       npm start
    ```
    
    
    


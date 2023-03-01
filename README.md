# bigelow-team-profile-generator

## Description

This app generates a page which displays cards containing pertinent information about a team of employees. Using the integrated terminal, the user is able to enter which sort of employee they want to add to their team, input their information, and transfer that information to an HTML file which they can view in their browser. The primary perk of this app is the ease with which the user can input and display information about their team. As for why I created this, it was so I could better learn and implement the principles of object-oriented programming. Specifically, I learned that a relatively complex application can be built with a relatively simple code base by adhering to the DRY principle. 

## Installation 
To install this application, simply clone the repo to your device. 

## Usage
To use this application, first open it in VS Code on your device. Right click on "index.js" and open it in the integrated terminal. 

![Team-generator-terminal](https://user-images.githubusercontent.com/115512219/222023247-24038ccc-b2a6-4ae5-8c17-019a6fa8ceae.jpg)

You will need to install Inquirer before you can run the application. Type "npm i inquirer@8.2.4" and press Enter to install Inquirer. 

![Screenshot 2023-02-28 174500](https://user-images.githubusercontent.com/115512219/222023496-4548cbf1-35f8-4600-b163-f86c16902c9c.jpg)

Now you are ready to use the application. To iniate the application, type "node index.js" into the terminal and press Enter. 

![Screenshot 2023-02-28 174500](https://user-images.githubusercontent.com/115512219/222023625-d777c6bf-452d-4256-b69c-197c7e0c9c3a.jpg)

This will initiate the prompt. You will first have the option to select which type of employee you will be adding to your team. This question determines which prompt you receive, as different employees require different information. 

![image](https://user-images.githubusercontent.com/115512219/222031989-557aaedd-3703-48a9-9aaf-f97b7742823c.png)

When you have finished adding information for a single employee, you will see the option to either add another employee or generate the HTML. If you choose to add another employee, the application will return you to the prompt to select which type of employee you want to choose. 

![image](https://user-images.githubusercontent.com/115512219/222033342-eb4ff23a-d122-4211-9180-c84a5a2e9c6f.png)

If you select the option to generate the HTML, a new file will be created in the repo, index.html. If you click on it, you should see the information of the employees you entered. Right-click the HTML file in the explorer panel and select "view in default browser" to see what the page displays. 

![image](https://user-images.githubusercontent.com/115512219/222033657-45e296c6-24b8-403a-b809-4a569487d1b1.png)

## Credits
Tutor Jili Jiang and TA Roman Senin helped a lot with the index.js file. As for the basic outline of the project, these demos were very helpful: https://www.youtube.com/watch?v=31LhQkLcZvE, https://www.youtube.com/watch?v=bJY3KfM77pc

## License 
MIT License

Copyright (c) 2023 Ibigelow92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests
You can do fifteen tests in an instant using jest. Install jest using "npm i jest". Open "employee.test.js" in the integrated terminal. 

![image](https://user-images.githubusercontent.com/115512219/222033830-47b2570b-de28-4306-bb40-ec40fa0050a5.png)

Type "npm test #" in the terminal and press Enter. Jest will run a series of tests based on the parameters set in the test.js files. 

![image](https://user-images.githubusercontent.com/115512219/222034069-8f7ad02a-9693-4652-8f60-c0c188cd506c.png)

To test the basic functionality of the app, navigate to "index.js" in the integrated terminal. Type "node index.js" into the terminal and press Enter. This will initiate the prompt. First, you should see a set of options as to which kind of employee you wish to add. Regardless of which kind of employee you select, the first three questions should be the same. They will ask you the employee's name, ID and email. However, the last option should be different, depending on which kind of employee you selected. For the final question, the manager prompt should ask for their office number. 

![image](https://user-images.githubusercontent.com/115512219/222034262-e95eae7c-63e2-423f-9515-6ec8fc66b86b.png)

For the engineer, their final question should be the name of their GitHub. For the intern, their final question should be their school. Once you click "genetate HTML", this should end the prompt and produce a series of employee cards which show up in the newly created "index.html" file. Each card should display the information you entered for each employee. When you right-click "index.html" and select "display in default browser", the browser should display the cards, complete with styling.

![image](https://user-images.githubusercontent.com/115512219/222034386-9a2004ba-466b-4b70-8c4f-c37a50a7a743.png)

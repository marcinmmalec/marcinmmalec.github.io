/*************************************************************************
*
*   Assignment 3: JavaScript Library Using JavaScript Libraries
*   ICT 443 013
*   Student: Marcin M. Malec
*   Implementations:
*       - Uses jQuery UI, HTML and CSS for user interface
*           - HTML (Created in javascript and appended to HTML)
*           - CSS (Created in javascript and appended to HTML)
*           - jQuery (failed to implement)
*       - Information entered by user is saved and can be retrieved later
*           - Local Storage (Implemented)
*       - User Interface Incorporates Animation and Transition
*           - Animation inplemented at the bottom of the page
*       - Uses Google Visualization
*           - Uses graphics from lecture
*       - javaScript custom objects, prototypal inheritance and JSON
*           - Data for graphics uses custom objects and inheritance
*           - Data for animation uses JSON
*       - xtend javaScript object with custom method
*           - Implement shuffle() in Array idea is ffrom Kirupa at
*             https://www.kirupa.com/html5/extending_built_in_objects_javascript.htm
**************************************************************************/
(function(window) {

    function myLibrary(){
    
        var myLibraryObject = {};
        /*************************************** 
        * 
        * HEAD
        * 
        ****************************************/
        /* Add styling to the head element */
        myLibraryObject.createHead = function()
        {
            var headNode = document.head;
            /* Create styles */
            var styleNode = document.createElement("style");
            styleNode.innerHTML = 
                '.inputs {' +
                    'padding: 12px 20px;' +
                    'margin: 8px 0;' +
                    'display: block;' +
                    'border: 1px solid #ccc;' +
                    'box-sizing: border-box;' +
                '}' +
                '.addBtn {' +
                    'padding: 10px 60px 10px 60px;' +
                    'width: 25%;' +
                    'background: #d9d9d9;' +
                    'color: #555;' +
                    'text-align: center;' +
                    'font-size: 16px;' +
                    'cursor: pointer;' +
                    'transition: 0.3s;' +
                    'border-radius: 0;' +
                    'margin: 0 5px 0 0;' +
                '}' +
                '.addBtn:hover {' +
                    'background-color: #bbb;' +
                '}' +
                '#animationContainer {' +
                    'width: 400px;' +
                    'height: 400px;' +
                    'position: relative;' +
                    'background: yellow;' +
                '}' +
                '#animate {' +
                    'width: 50px;' +
                    'height: 50px;' +
                    'position: absolute;' +
                    'background-color: red;' +
                '}';
            /* Add style to the head */
            headNode.appendChild(styleNode);
            /* Attempted to implement jQuery inside the library, but it didn't work */
            /* var linkNode = document.createElement("link");
            linkNode.setAttribute('rel', 'stylesheet');
            linkNode.setAttribute('href', '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
            headNode.appendChild(linkNode);
            var linkNode2 = document.createElement("link");
            linkNode2.setAttribute('rel', 'stylesheet');
            linkNode2.setAttribute('href', '/resources/demos/style.css');
            headNode.appendChild(linkNode2); */

            /* var scriptNode = document.createElement("script");
            scriptNode.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.js');
            headNode.appendChild(scriptNode);
            var scriptNode2 = document.createElement("script");
            scriptNode2.setAttribute('src','https://code.jquery.com/ui/1.12.1/jquery-ui.js');
            headNode.appendChild(scriptNode2); */
            /* Call next function */
            myLibraryObject.createDiv();
        }
        /*************************************** 
        * 
        * BODY
        * 
        ****************************************/
        /* Add body elements */
        myLibraryObject.createDiv = function ()
        {
            var bodyNode = document.body;

            /* Add main div */
            var dashboardDiv = document.createElement("DIV");
            dashboardDiv.setAttribute("id", "dashboard_div");
            /*********************
             * Data For Graphics *
             *********************/
            /* Add input container */
            var inputContainer = document.createElement("DIV");
            inputContainer.setAttribute("id", "inputContainer");
            dashboardDiv.appendChild(inputContainer);
            /*********************
             *                   *
             *   Input Fields    *
             *                   *
             *********************/
            /* Add input field for work hours */
            var textNode = document.createTextNode("Hours Worked/Day");
            inputContainer.appendChild(textNode);
            var workInput = document.createElement("input");
            workInput.setAttribute("type", "text");
            workInput.setAttribute("id", "workInput");
            workInput.setAttribute("class", "inputs");
            workInput.setAttribute("placeholder", "Hours spent at work...");
            inputContainer.appendChild(workInput);
            /* Add input field for hours spent eating */
            textNode = document.createTextNode("Hours Spent Eating/Day");
            inputContainer.appendChild(textNode);
            var eatInput = document.createElement("input");
            eatInput.setAttribute("type", "text");
            eatInput.setAttribute("id", "eatInput");
            eatInput.setAttribute("class", "inputs");
            eatInput.setAttribute("placeholder", "Hours spent eating...");
            inputContainer.appendChild(eatInput);
            /* Add input field for hours spent commuting */
            textNode = document.createTextNode("Hours Spent Commuting/Day");
            inputContainer.appendChild(textNode);
            var commuteInput = document.createElement("input");
            commuteInput.setAttribute("type", "text");
            commuteInput.setAttribute("id", "commuteInput");
            commuteInput.setAttribute("class", "inputs");
            commuteInput.setAttribute("placeholder", "Hours spent commuting...");
            inputContainer.appendChild(commuteInput);
            /* Add input field for hours spent sleeping */
            textNode = document.createTextNode("Hours Spent Sleeping/Day");
            inputContainer.appendChild(textNode);
            var sleepInput = document.createElement("input");
            sleepInput.setAttribute("type", "text");
            sleepInput.setAttribute("id", "sleepInput");
            sleepInput.setAttribute("class", "inputs");
            sleepInput.setAttribute("placeholder", "Hours spent sleeping...");
            inputContainer.appendChild(sleepInput);
            /**********************
             * Data For Animation *
             **********************/
            /* Add input field for ms for animation */
            textNode = document.createTextNode("Animation in ms");
            inputContainer.appendChild(textNode);
            var msInput = document.createElement("input");
            msInput.setAttribute("type", "text");
            msInput.setAttribute("id", "msInput");
            msInput.setAttribute("class", "inputs");
            msInput.setAttribute("placeholder", "Animation time in ms...");
            inputContainer.appendChild(msInput);
            /* Add input field for distance in animation */
            textNode = document.createTextNode("Animation Distance");
            inputContainer.appendChild(textNode);
            var distanceInput = document.createElement("input");
            distanceInput.setAttribute("type", "text");
            distanceInput.setAttribute("id", "distanceInput");
            distanceInput.setAttribute("class", "inputs");
            distanceInput.setAttribute("placeholder", "Animation distance...");
            inputContainer.appendChild(distanceInput);

            inputContainer.appendChild(document.createElement("br"));
            /* Create container for buttons */
            var divContainer = document.createElement("div");
            /* Create submit button */
            var submitButton = document.createElement("span");
            submitButton.setAttribute("class", "addBtn");
            submitButton.setAttribute("onclick", "myLibraryObject.submitData()");
            submitButton.innerHTML = "Submit Data";
            divContainer.appendChild(submitButton);
            /* Create store data button */
            var storeButton = document.createElement("span");
            storeButton.setAttribute("class", "addBtn");
            storeButton.setAttribute("onclick", "myLibraryObject.storeObject()");
            storeButton.innerHTML = "Store Data";
            divContainer.appendChild(storeButton);
            /* Create retrieve data button */
            var retrieveButton = document.createElement("span");
            retrieveButton.setAttribute("class", "addBtn");
            retrieveButton.setAttribute("onclick", "myLibraryObject.retrieveObject()");
            retrieveButton.innerHTML = "Retrieve Data";
            divContainer.appendChild(retrieveButton);

            inputContainer.appendChild(divContainer);

            dashboardDiv.appendChild(document.createElement("br"));
            dashboardDiv.appendChild(document.createElement("br"));
            /* Add divs for Google Visulization */
            var filterDiv = document.createElement("DIV");
            filterDiv.setAttribute("id", "filter_div");
            dashboardDiv.appendChild(filterDiv);

            var taskFilterDiv = document.createElement("DIV");
            taskFilterDiv.setAttribute("id", "task_filter_div");
            dashboardDiv.appendChild(taskFilterDiv);
            
            var containDiv = document.createElement("DIV");
            containDiv.setAttribute("id", "container");
            containDiv.setAttribute("style", "width:500px; height:400px;");
            dashboardDiv.appendChild(containDiv);
            
            var pieContainDiv = document.createElement("DIV");
            pieContainDiv.setAttribute("id", "piecontainer");
            pieContainDiv.setAttribute("style", "width:500px; height:400px;");
            dashboardDiv.appendChild(pieContainDiv);
            
            /* Add animation container */
            var animationContainer = document.createElement("DIV");
            animationContainer.setAttribute("id", "animationContainer");
            var animate = document.createElement("DIV");
            animate.setAttribute("id", "animate");
            animationContainer.appendChild(animate);
            dashboardDiv.appendChild(animationContainer);

            bodyNode.appendChild(dashboardDiv);
        }
       /*************************************** 
        * 
        * GRAPHICS SECTION
        * 
        ****************************************/
        /* Function to create the google graphics */
        /* Uses the same code from class except we accept the data as input */
        myLibraryObject.CreateGraphics = function(graphicObject)
        {
            var work = graphicObject.work;
            var eat = graphicObject.eat;
            var commute = graphicObject.commute;
            var sleep = graphicObject.sleep;
            
            //load chart package
            google.charts.load("current",{packages:['corechart', 'controls','orgchart']});
            google.charts.load("current",{packages:['bar']});

            //callback function
            google.charts.setOnLoadCallback(drawChart);

            function drawChart()
            {

            //setup data
            var data = google.visualization.arrayToDataTable([
                ['task','hours per day'],
                ['work',work],
                ['eat',eat],
                ['commute',commute],
                ['sleep',sleep],
            ]);

            //intantiate google charts
            //dashboard instance
            var dashboard = new google.visualization.Dashboard(document.getElementById("dashboard_div"));

            var rangeSlider = new google.visualization.ControlWrapper(
            {
                'controlType': 'NumberRangeFilter',
                'containerId' : 'filter_div',
                'options' : {'filterColumnLabel' : 'hours per day'}
                
            }

            );

            var taskSelect = new google.visualization.ControlWrapper(
            {
                'controlType': 'CategoryFilter',
                'containerId' : 'task_filter_div',
                'options' : {'filterColumnLabel' : 'task'}
                
            }

            );

            var pieChart = new google.visualization.ChartWrapper(
            {
                'chartType' : 'PieChart',
                'containerId' : 'piecontainer',
                'options' : {title:'hours'}

            }
            );

            var barChart = new google.visualization.ChartWrapper(
            {
                'chartType' : 'BarChart',
                'containerId' : 'container',
                'options' : {title:'hours bar'}

            }
            );

            //piechart.draw(data);
            //chart.draw(data);
            dashboard.bind([rangeSlider,taskSelect],[pieChart,barChart]);
            dashboard.draw(data);
            }
        }
        /*************************************** 
        * 
        * ANIMATION SECTION
        * 
        ****************************************/
        /* Function to perform animation */
        /* https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3 */
        myLibraryObject.animation = function(animationObject)
        {
            //var time = animationObject.time;
            var time = animationObject["time"];
            //var dist = animationObject.dist;
            var dist = animationObject["distance"];
            var elem = document.getElementById("animate");
            var pos = 0;
            /* Set how often the funtion fires */
            var id = setInterval(frame, time);
            /* Move square */
            function frame() {
                /* If we hit our final destination */
                if (pos == dist) {
                    /* end */
                    clearInterval(id);
                }
                /* Otherwise */
                else {
                    /* Increment our position */
                    pos++;
                    /* Shift box down and to the right */
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px";
                }
            }
        }
        /*************************************** 
        * 
        * MAIN
        * 
        ****************************************/
        /* Function to get things started */
        myLibraryObject.createView = function()
        {
            myLibraryObject.createHead();
            myLibraryObject.useExt();
        }
        /*************************************** 
        * 
        * SUBMIT DATA
        * 
        ****************************************/
        /* Function to submit data for visulization */
        myLibraryObject.submitData = function()
        {
            /* Uses Number() fails against random string with numbers */
            /* While parseInt() allows "0skajdkasjd" as 0 */
            /* Number is useful to get either Int or Float */
            var work = document.getElementById("workInput").value;
            work = Number(work);
            var eat = document.getElementById("eatInput").value;
            eat = Number(eat);
            var commute = document.getElementById("commuteInput").value;
            commute = Number(commute);
            var sleep = document.getElementById("sleepInput").value;
            sleep = Number(sleep);
            /* If any of the values are NaN, < 0, > 24, or the total values are greater than 24 */
            if ((isNaN(work) || work < 0 || work > 24) 
            || (isNaN(eat) || eat < 0 || eat > 24)
            || (isNaN(commute) || commute < 0 || commute > 24)
            || (isNaN(sleep) || sleep < 0 || sleep > 24)
            || ((work + eat + commute + sleep) > 24)){
                /* Then, state an error */
                alert("Hours must be a number between 0 and 24. Also the total hours cannot exceed 24 hours");
            }
            else {
                /* Otherwise, display the graphics */
                graphicObject = new myLibraryObject.dataItemGraphics("Graphics", work, eat, commute, sleep);
                myLibraryObject.CreateGraphics(graphicObject);
            }
            var animationTime = document.getElementById("msInput").value;
            animationTime = Number(animationTime);
            var animationDist = document.getElementById("distanceInput").value;
            animationDist = Number(animationDist);
            if ((isNaN(animationTime) || animationTime < 0 || animationTime > 100) 
            || (isNaN(animationDist) || animationDist < 0 || animationDist > 350)){
                /* Then, state an error */
                alert("Animation time must be a number between 0 and 100ms and animation distance must be a number between 0 and 350");
            }
            else {
                //animationObject = new myLibraryObject.dataItemAnimation("Animation", animationTime, animationDist);
                /**********************
                 *       JSON         *
                 **********************/
                animationObject = {"time":animationTime, "distance":animationDist};
                myLibraryObject.animation(animationObject);
            }
        }
        /*************************************** 
        * 
        * LOCAL STORAGE
        * 
        ****************************************/
        /* Function to store data values in local storage */
        myLibraryObject.storeObject = function()
        {
            var work = document.getElementById("workInput").value;
            var eat = document.getElementById("eatInput").value;
            var commute = document.getElementById("commuteInput").value;
            var sleep = document.getElementById("sleepInput").value;
            var time = document.getElementById("msInput").value;
            var distance = document.getElementById("distanceInput").value;
            localStorage.setItem("workData", work);
            localStorage.setItem("eatData", eat);
            localStorage.setItem("commuteData", commute);
            localStorage.setItem("sleepData", sleep);
            localStorage.setItem("msData", time);
            localStorage.setItem("distanceData", distance);
        }
        /* Function to retrieve data values from local storage */
        myLibraryObject.retrieveObject = function()
        {
            var work = localStorage.getItem("workData");
            var eat = localStorage.getItem("eatData");
            var commute = localStorage.getItem("commuteData");
            var sleep = localStorage.getItem("sleepData");
            var time = localStorage.getItem("msData");
            var distance = localStorage.getItem("distanceData");
            document.getElementById("workInput").value = work;
            document.getElementById("eatInput").value = eat;
            document.getElementById("commuteInput").value = commute;
            document.getElementById("sleepInput").value = sleep;
            document.getElementById("msInput").value = time;
            document.getElementById("distanceInput").value = distance;
        }
        /*************************************** 
        * 
        * OBJECT CONSTRUCTORS
        * 
        ****************************************/
        /* Parent Object Constructor */
        myLibraryObject.dataItem = function(purpose)
        {
            this.purpose = purpose;
        }
        /* Object Constructor for Hours input - Inherits from dataItem */
        myLibraryObject.dataItemGraphics = function(purpose, work, eat, commute, sleep)
        {
            myLibraryObject.dataItem.call(this, purpose);
            this.work = work;
            this.eat = eat;
            this.commute = commute;
            this.sleep = sleep;
        }
        /* Object Constructor for Animation input - Inherits from dataItem */
        /* Depreciated - Replaced with JSON */
        myLibraryObject.dataItemAnimation = function(purpose, time, dist)
        {
            myLibraryObject.dataItem.call(this, purpose);
            this.time = time;
            this.dist = dist;
        }
        /*************************************** 
        * 
        * XTEND JAVASCRIPT OBJECT
        * 
        ****************************************/
        /* Extend Array object with shuffle function */
        /* Shuffle randomly shuffles array elements */
        /* Found the example from Kirupa at */
        /* https://www.kirupa.com/html5/extending_built_in_objects_javascript.htm */
        Array.prototype.shuffle = function() {
            /* This is key to extend an object as calling the function uses the calling object as the input*/
            var inputArray = this;
            /* Run through the array */
            for (var i = inputArray.length - 1; i >= 0; i--) {
                /* Get a random index */
                var randomIndex = Math.floor(Math.random() * (i+1));
                /* Get the number at that index */
                var itemAtIndex = inputArray[randomIndex];
                /* Replace random index's value with the current index's value */
                inputArray[randomIndex] = inputArray[i];
                /* Replace current index's value with random index's value */
                inputArray[i] = itemAtIndex;
            }
            return inputArray;
        }
        /* Extend Array object with reverse sort function */
        /* Will use selection sort */
        Array.prototype.revSort = function() {
            var inputArray = this;
            var first;
            var j;
            var temp;
            /* Start at the end and work to the front */
            for (var i = inputArray.length - 1; i>0; i--){
                /* Set the first value to 0 */
                first = 0;
                /* start at index 1 and work towards i */
                for (j = 1; j<=i; j++){
                    /* Whenever the value at j is less than first */
                    if (inputArray[j] < inputArray[first]) {
                        /* replace first with j */
                        first = j;
                    }
                }
                /* For each run of i */
                /* Place the smallest value found by j in temp */
                temp = inputArray[first];
                /* Replace the smallest value with i's */
                inputArray[first] = inputArray[i];
                /* Replace i's with the smallest value */
                inputArray[i] = temp;
            }
            return inputArray;
        }
        /* Function to showcase the extention */
        myLibraryObject.useExt = function() {
            var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            alert("We will take this array:\n[" + originalArray + "]\nand shuffle it using our new shuffle() extention to Array");
            newArray = originalArray.shuffle();
            alert("This is the final result:\n[" + newArray + "]\nNow lets sort this array in decending order using our new revSort() extention to Array");
            newArray = newArray.revSort();
            alert("This is the final result:\n[" + newArray + "]");
        }
        /*************************************** 
        * 
        * END OF LIBRARY
        * 
        ****************************************/
        return myLibraryObject;
    }
    
    window.myLibraryObject = myLibrary();
})(window);
/* Get things going */
myLibraryObject.createView();
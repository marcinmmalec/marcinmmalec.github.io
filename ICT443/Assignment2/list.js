/* Global variables */
var itemsArray = [];
/* Retrieve stored list */
retrieve();
/* Display list */
displayList();
var name = "";
var description = "";
var category = "";
var quantity = "";
var subject = "";
var date = "";
var urgent = "";
var listHidden = 0;
var event;

/*************************************** 
 * 
 * ADD TO LIST FUNCTIONALITY
 * 
*****************************************/

/* Function to create new item */
function getList()
{
	/* Set values */
	name = document.getElementById("nameInput").value;
	description = document.getElementById("descriptionInput").value;
	quantity = document.getElementById("quantityInput").value;
	quantity = parseInt(quantity);
	if (quantity <= 0){
		quantity = 1;
	}
	//category = document.getElementById("categoryInput").value;
	subject = document.getElementById("subjectInput").value;
	var e = document.getElementById("categoryInput");
	category = e.options[e.selectedIndex].text;
	date = document.getElementById("dateInput").value;
	/* Randomly decided to add a default value */
	if (date == ''){
		date = "None";
	}
	var radios = document.getElementsByName("urgency");
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked){
			urgent = radios[i].value;
		}
	}
	if (name != ''){
		/* Create new item as object */
		var gItem;
		/* If category is groceries, create groceries object */
		if(category == "Groceries"){
			quantity = parseInt(quantity);
			if (isNaN(quantity) || quantity <= 0){
				alert("Quantity must be a number greater than 0");
				return;
			}
			else{
				gItem = new toDoItemGroceries(name, description, date, urgent, category, quantity);
			}
		}
		/* If category is school, create school object */
		else if (category == "School"){
			gItem = new toDoItemSchool(name,description,date,urgent,category,subject);
		}
		/* If category is general, create general object */
		else{
			gItem = new toDoItemGeneral(name,description,date,urgent,category);
		}
		itemsArray.push(gItem);
		/* If list isn't hidden */
		if (listHidden == 0){
			/* Display the list */
			displayList();
		}
		/* Else, just store the array */
		else{
			store();
		}
		/* Close add item modal */
		closeModal();
	}
	/* The only data validation */
	else{
		alert("Task name cannot be empty")
	}
}

/*************************************** 
 * 
 * DISPLAY LIST FUNCTIONALITY
 * 
*****************************************/

/* Function to display the list */
function displayList()
{
	/* Update localstorage before displaying the list */
	/* Decided to place the call here instead of putting it before every displayList() call */
	store();
	var myNode = document.getElementById("shoppinglist");
	/* Clear the current list */
	while (myNode.firstChild){
		myNode.removeChild(myNode.firstChild);
	}
	/* Run through the array */
	for(var i = 0; i < itemsArray.length; i++)
	{	
		/* Create inner div tag */
		var innerDiv = document.createElement("DIV");
		
		/* Set the id attribute for the div */
		innerDiv.setAttribute("id", ("itemDiv" + i) );
		innerDiv.setAttribute("class","innerDiv");
		innerDiv.setAttribute("draggable","true");
		//innerDiv.setAttribute("ondragstart","drag(event)");
		//innerDiv.setAttribute("ondrop","return false");
		//innerDiv.setAttribute("ondragover","allowDrop(event)");

		/* Create text node for inner div */
		var divTxt = document.createTextNode("Item number " + (i+1) + " is " + itemsArray[i].name);
		var paraName = document.createElement("P");
		var paraDescription = document.createElement("P");
		var paraQuantity = document.createElement("P");
		var paraSubject = document.createElement("P");
		var paraCategory = document.createElement("P");
		var paraDate = document.createElement("P");
		var paraUrgent = document.createElement("P");
		/* Name */
		paraName.setAttribute("class", "itemDetail");
		paraName.setAttribute("id", "itemName");
		/* Description */
		paraDescription.setAttribute("class", "itemDetail");
		paraDescription.setAttribute("id", "itemDescription");
		/* Quantity */
		paraQuantity.setAttribute("class", "itemDetail");
		paraQuantity.setAttribute("id", "itemQuantity");
		/* Subject */
		paraSubject.setAttribute("class", "itemDetail");
		paraSubject.setAttribute("id", "itemSubject");
		/* Category */
		paraCategory.setAttribute("class", "itemDetail");
		paraCategory.setAttribute("id", "itemCategory");
		/* Date */
		paraDate.setAttribute("class", "itemDetail");
		paraDate.setAttribute("id", "itemDate");
		/* Urgent */
		paraUrgent.setAttribute("class", "itemDetail");
		paraUrgent.setAttribute("id", "itemUrgency");
		/* Add values to innerDiv */
		paraName.appendChild(divTxt);
		innerDiv.appendChild(paraName);
		divTxt = document.createTextNode("Description: " + itemsArray[i].description);
		paraDescription.appendChild(divTxt);
		innerDiv.appendChild(paraDescription);
		if (itemsArray[i].category == "Groceries"){
			divTxt = document.createTextNode("Quantity: " + itemsArray[i].quantity);
			paraQuantity.appendChild(divTxt);
			innerDiv.appendChild(paraQuantity);
		}
		else if (itemsArray[i].category == "School"){
			divTxt = document.createTextNode("Subject: " + itemsArray[i].subject);
			paraSubject.appendChild(divTxt);
			innerDiv.appendChild(paraSubject);
		}
		divTxt = document.createTextNode("Category: " + itemsArray[i].category);
		paraCategory.appendChild(divTxt);
		innerDiv.appendChild(paraCategory);
		divTxt = document.createTextNode("Due Date: " + itemsArray[i].date);
		paraDate.appendChild(divTxt);
		innerDiv.appendChild(paraDate);
		divTxt = document.createTextNode("Urgent: " + itemsArray[i].urgent);
		paraUrgent.appendChild(divTxt);
		innerDiv.appendChild(paraUrgent);
		
		/* Create edit link */
		var editLink = document.createElement("A");
		editLink.innerHTML = "Edit item";
		editLink.setAttribute("id", (i + "_editLink"));
		editLink.setAttribute("href", "#");
		editLink.setAttribute("onclick","editItem(this)");
		innerDiv.appendChild(editLink);
		innerDiv.appendChild(document.createTextNode(" "));

		/* Create up link */
		var upLink = document.createElement("A");
		upLink.innerHTML = "Up item";
		upLink.setAttribute("id", (i + "_upLink"));
		upLink.setAttribute("href", "#");
		upLink.setAttribute("onclick","upItem(this)");
		innerDiv.appendChild(upLink);
		innerDiv.appendChild(document.createTextNode(" "));

		/* Create down link */
		var downLink = document.createElement("A");
		downLink.innerHTML = "Down item";
		downLink.setAttribute("id", (i + "_downLink"));
		downLink.setAttribute("href", "#");
		downLink.setAttribute("onclick","downItem(this)");
		innerDiv.appendChild(downLink);
		innerDiv.appendChild(document.createTextNode(" "));

		/* Create delete link */
		var delLink = document.createElement("A");
		delLink.innerHTML = "Delete item";
		delLink.setAttribute("id", (i + "_delLink") );
		delLink.setAttribute("href", "#" );
		delLink.setAttribute("onclick","deleteItem(this)");
		innerDiv.appendChild(delLink);
		myNode.appendChild(innerDiv);	

		addEventsDragAndDrop(innerDiv);
	}
}

/*************************************** 
 * 
 * ITEM MANIPULATION FUNCTIONALITY
 * 
*****************************************/

/* Function to Delete Item */
function deleteItem(t)
{
	var linkID = parseInt(t.id);
	/* This function removes the element and reindexes the array */
	itemsArray.splice(linkID, 1);
	displayList();
}

/* Edit Item */
function editItem(t){
	/* Get calling item */
	event = t;
	/* Open the edit modal */
	document.getElementById('id02').style.display='block';
}
/* Function that actually performs the editing */
function editItem2(){
	var linkID = parseInt(event.id);
	/* Replace values */
	name = document.getElementById("nameInput2").value;
	description = document.getElementById("descriptionInput2").value;
	quantity = document.getElementById("quantityInput2").value;
	subject = document.getElementById("subjectInput2").value;
	var e = document.getElementById("categoryInput2");
	category = e.options[e.selectedIndex].text;
	date = document.getElementById("dateInput2").value;
	if (date == ''){
		date = "None";
	}
	var radios = document.getElementsByName("urgency2");
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked){
			urgent = radios[i].value;
		}
	}
	if (name != ''){
		/* Create new item as object */
		var gItem;
		/* If category is groceries, create groceries object */
		if(category == "Groceries"){
			quantity = parseInt(quantity);
			if (isNaN(quantity) || quantity <= 0){
				alert("Quantity must be a number greater than 0");
				return;
			}
			else {
				gItem = new toDoItemGroceries(name, description, date, urgent, category, quantity);
			}
		}
		/* If category is school, create school object */
		else if (category == "School"){
			gItem = new toDoItemSchool(name,description,date,urgent,category,subject);
		}
		/* If category is general, create general object */
		else{
			gItem = new toDoItemGeneral(name,description,date,urgent,category);
		}
		itemsArray[linkID] = gItem;
		/* Close Edit Modal */
		closeModal2();
		/* Display updated list */
		displayList();
	}
	else {
		alert("Task name cannot be empty")
	}
}

/* Move item up */
function upItem(t){
	var linkID = parseInt(t.id);
	/* If possible, move item up the list by 1 */
	if((itemsArray.length > 1) && (linkID != 0)){
		var temp = itemsArray[linkID - 1];
		itemsArray[linkID - 1] = itemsArray[linkID];
		itemsArray[linkID] = temp;
		displayList();
	}
	/* If item is the only one, nothing happens */
	else if(itemsArray.length == 1){
		alert("Only item in list");
	}
	/* If item is already at the top of the list, do nothing */
	else if(linkID == 0){
		alert("Item already at the top of the list");
	}
	else{
		console.log("Error in UpItem()");
	}
}

/* Move item down */
function downItem(t){
	var linkID = parseInt(t.id);
	/* If possible, move item down the list by 1 */
	if((itemsArray.length > 1) && (linkID != itemsArray.length-1)){
		var temp = itemsArray[linkID + 1];
		itemsArray[linkID + 1] = itemsArray[linkID];
		itemsArray[linkID] = temp;
		displayList();
	}
	/* If item is the only one, nothing happens */
	else if(itemsArray.length == 1){
		alert("Only item in list");
	}
	/* If item is already at the bottom of the list, do nothing */
	else if(linkID == itemsArray.length-1){
		alert("Item already at the bottom of the list");
	}
	else{
		console.log("Error in downItem()");
	}
}

/*************************************** 
 * 
 * HIDE/DELETE LIST FUNCTIONS
 * 
*****************************************/

/* Function to Hide List */
function hideList(){
	var myNode = document.getElementById("shoppinglist");
	/* If the list isn't hidden */
	if (listHidden == 0){
		/* Remove the list elements (but the array is unaffected) */
		while (myNode.firstChild){
			myNode.removeChild(myNode.firstChild);
		}
		/* Replace "Hide" with "Show" */
		myNode = document.getElementById("hideBtn");
		myNode.innerText = "Show";
		listHidden = 1;
	}
	/* If the list is already hidden */
	else{
		/* Unhide the list (i.e. create list) */
		myNode = document.getElementById("hideBtn");
		myNode.innerText = "Hide";
		displayList();
		listHidden = 0;
	}
}

/* Function to Delete List */
function deleteList(){
	var myNode = document.getElementById("shoppinglist");
	while (myNode.firstChild){
		myNode.removeChild(myNode.firstChild);
	}
	itemsArray.length = 0;
	/* Update localstorage */
	//store();
	/* Clear localstorage */
	clear();
}

/* Functions to close the modals */
/* This function closes the add items modal */
function closeModal(){
	var modal = document.getElementById('id01');
	modal.style.display = "none";
	/* Reset form fields */
	document.getElementById("nameInput").value = '';
	document.getElementById("descriptionInput").value = '';
	document.getElementById("quantityInput").value = '';
	document.getElementById("subjectInput").value = '';
	document.getElementById("categoryInput").selectedIndex = 0;
	categoryChange();
	document.getElementById("dateInput").value = '';
	var radios = document.getElementsByName("urgency");
	radios[1].checked = true;
}
/* This function closes the edit items modal */
function closeModal2(){
	var modal = document.getElementById('id02');
	modal.style.display = "none";
	/* Reset form fields */
	document.getElementById("nameInput2").value = '';
	document.getElementById("descriptionInput2").value = '';
	document.getElementById("quantityInput2").value = '';
	document.getElementById("subjectInput2").value = '';
	document.getElementById("categoryInput2").selectedIndex = 0;
	categoryChange2();
	document.getElementById("dateInput2").value = '';
	var radios = document.getElementsByName("urgency2");
	radios[1].checked = true;
}
/* Function to dynamically change form fields */
/* This function is for the add modal */
function categoryChange(){
	var value = document.getElementById("categoryInput");
	value = value.options[value.selectedIndex].text;
	/* If category is groceries, */
	if (value == "Groceries"){
		/* Make quantity visiable */
		document.getElementById("quantityInput").classList.remove('hidden');
		/* Make subject hidden */
		document.getElementById("subjectInput").classList.add('hidden');
		/* Clear subject input data */
		document.getElementById("subjectInput").value = '';
	}
	/* If category is general, */
	else if (value == "General"){
		/* Make quantity hidden */
		document.getElementById("quantityInput").classList.add('hidden');
		/* Make subject hidden */
		document.getElementById("subjectInput").classList.add('hidden');
		/* Clear quantity input data */
		document.getElementById("quantityInput").value = '';
		/* Clear subject input data */
		document.getElementById("subjectInput").value = '';
	}
	/* If category is school, */
	else if(value == "School"){
		/* Make quantity hidden */
		document.getElementById("quantityInput").classList.add('hidden');
		/* Make subject visiable */
		document.getElementById("subjectInput").classList.remove('hidden');
		/* Clear quantity input data */
		document.getElementById("quantityInput").value = '';
	}
}
/* This function is for the edit modal */
function categoryChange2(){
	var value = document.getElementById("categoryInput2");
	value = value.options[value.selectedIndex].text;
	if (value == "Groceries"){
		document.getElementById("quantityInput2").classList.remove('hidden');
		document.getElementById("subjectInput2").classList.add('hidden');
		document.getElementById("subjectInput2").value = '';
	}
	else if (value == "General"){
		document.getElementById("quantityInput2").classList.add('hidden');
		document.getElementById("subjectInput2").classList.add('hidden');
		document.getElementById("quantityInput2").value = '';
		document.getElementById("subjectInput2").value = '';
	}
	else if(value == "School"){
		document.getElementById("quantityInput2").classList.add('hidden');
		document.getElementById("subjectInput2").classList.remove('hidden');
		document.getElementById("quantityInput2").value = '';
	}
}

/*************************************** 
 * 
 * LOCAL STORAGE FUNCTIONALITY
 * 
*****************************************/

/* Store objects into localstorage */
function store(){
	localStorage.setItem('itemArray',JSON.stringify(itemsArray));
}

/* Retrieve objects from localstorage */
function retrieve(){
	/* Apparently, the extra '[]' is if localStorage is empty */
	itemsArray = JSON.parse(localStorage.getItem('itemArray') || '[]');
}

/* Clear localstorage */
function clear(){
	localStorage.removeItem('itemArray');
}

/*************************************** 
 * 
 * OBJECT CONSTRUCTORS
 * 
*****************************************/

/* Item object - Template */
function toDoItem(name,description,date,urgent,category)
{
	this.name = name;
	this.description = description;
	this.date = date;
	this.urgent = urgent;
	this.category = category;
}

/* Item object - General */
function toDoItemGeneral(name, description, date, urgent, category){
	/* Call is used to inherit parameters */
	toDoItem.call(this, name, description, date, urgent, category);
}

/* Item object - Groceries */
function toDoItemGroceries(name, description, date, urgent, category, quantity){
	toDoItem.call(this, name, description, date, urgent, category);
	this.quantity = quantity;
}

/* Item Object - School */
function toDoItemSchool(name, description, date, urgent, category, subject){
	toDoItem.call(this, name, description, date, urgent, category);
	this.subject = subject;
}

/*************************************** 
 * 
 * DRAG AND DROP FUNCTIONALITY
 * 
*****************************************/

/* Modified from Code Pen Project: */
/* Title: To do List [Drag and Drop] */
/* Author: Gabriel Ferreira */
/* URL: https://codepen.io/gabrielferreira/pen/jMgaLe */
function dragStart(e){
	/* Gives that "I'm being moved look" */
	this.style.opacity = '0.4';
	/* Get the source element */
	dragSrcE1 = this;
	/* Defines the type of effect the drag will perform */
	/* Move: An item may be moved to a new location */
	/* By defining, the default of "All" will not be used */
	e.dataTransfer.effectAllowed = 'move';
	/* The actual data being transfered */
	e.dataTransfer.setData('text/html',this.innerHTML);
}

/* Prevents further propagation of the event (e) */
function dragLeave(e){
	e.stopPropagation();
}

/* Drag over event */
function dragOver(e){
	e.preventDefault();
	/* Defines what the cursor displays */
	e.dataTransfer.dropEffect = 'move';
	return false;
}

/* Event for the actual drop */
function dragDrop(e){
	/* Remove 'itemDiv' and only get the itemArray id */
	var linkID = parseInt(dragSrcE1.id.substring(7));
	var linkID2 = parseInt(this.id.substring(7));
	if (dragSrcE1 != this){
		/* Swap items */
		dragSrcE1.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
		var temp = itemsArray[linkID2];
		itemsArray[linkID2] = itemsArray[linkID];
		itemsArray[linkID] = temp;
		/* Refresh list and store the updated itemArray */
		displayList();
	}
	return false;
}

/* Remove the opacity */
function dragEnd(e){
	this.style.opacity = '1';
}

/* Event listeners for everthing drag and drop related */
function addEventsDragAndDrop(el) {
	el.addEventListener('dragstart', dragStart, false);
	el.addEventListener('dragover', dragOver, false);
	el.addEventListener('dragleave', dragLeave, false);
	el.addEventListener('drop', dragDrop, false);
	el.addEventListener('dragend', dragEnd, false);
}

/* This list will contain all of the list item's containers */
/* I couldn't figure out how to incorporate this with the itemsArray */
var list = document.querySelectorAll('innerDiv');
[].forEach.call(list, function(item){
	/* For every container add event listener */
	addEventsDragAndDrop(item);
});
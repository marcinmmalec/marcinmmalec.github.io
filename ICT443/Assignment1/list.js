/* Global variables */
var itemsArray = [];
var name = "";
var description = "";
var category = "";
var date = "";
var urgent = "";
var listHidden = 0;
var event;

/* Function to create new item */
function getList()
{
	/* Set values */
	name = document.getElementById("nameInput").value;
	description = document.getElementById("descriptionInput").value;
	category = document.getElementById("categoryInput").value;
	date = document.getElementById("dateInput").value;
	var radios = document.getElementsByName("urgency");
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked){
			urgent = radios[i].value;
		}
	}
	/* Close add item modal */
	closeModal();
	if (name != ''){
		/* Create new item as object */
		var gItem = new toDoItem(name,description,date,urgent,category);
		itemsArray.push(gItem);
		/* If list isn't hidden */
		if (listHidden == 0){
			/* Display the list */
			displayList();
		}
	}
	/* The only data validation */
	else{
		alert("Task name cannot be empty")
	}
}

/* Function to display the list */
function displayList()
{
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
		
		/* Create text node for inner div */
		var divTxt = document.createTextNode("Item number " + (i+1) + " is " + itemsArray[i].name);
		var paraName = document.createElement("P");
		var paraDescription = document.createElement("P");
		var paraCategory = document.createElement("P");
		var paraDate = document.createElement("P");
		var paraUrgent = document.createElement("P");
		/* Name */
		paraName.setAttribute("class", "itemDetail");
		paraName.setAttribute("id", "itemName");
		/* Description */
		paraDescription.setAttribute("class", "itemDetail");
		paraDescription.setAttribute("id", "itemDescription");
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
	}
}

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
	itemsArray[linkID].name = document.getElementById("nameInput2").value;
	itemsArray[linkID].description = document.getElementById("descriptionInput2").value;
	itemsArray[linkID].category = document.getElementById("categoryInput2").value;
	itemsArray[linkID].date = document.getElementById("dateInput2").value;
	var radios = document.getElementsByName("urgency2");
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked){
			itemsArray[linkID].urgent = radios[i].value;
		}
	}
	/* Close Edit Modal */
	closeModal2();
	/* Display updated list */
	displayList();
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
}

/* Functions to close the modals */
function closeModal(){
	var modal = document.getElementById('id01');
	modal.style.display = "none";
	/* Reset form fields */
	document.getElementById("nameInput").value = '';
	document.getElementById("descriptionInput").value = '';
	document.getElementById("categoryInput").value = '';
	document.getElementById("dateInput").value = '';
	var radios = document.getElementsByName("urgency");
	radios[1].checked = true;
}

function closeModal2(){
	var modal = document.getElementById('id02');
	modal.style.display = "none";
	/* Reset form fields */
	document.getElementById("nameInput2").value = '';
	document.getElementById("descriptionInput2").value = '';
	document.getElementById("categoryInput2").value = '';
	document.getElementById("dateInput2").value = '';
	var radios = document.getElementsByName("urgency2");
	radios[1].checked = true;
}

/* Item object */
function toDoItem(name,description,date,urgent,category)
{
	this.name = name;
	this.description = description;
	this.date = date;
	this.urgent = urgent;
	this.category = category;
}



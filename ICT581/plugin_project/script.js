/* Function that runs once the page loads (hopefully) */
$(document).ready(function(){
    /* Get unordered list element */
    var list = document.querySelector('#list');
    /* Get new item form element */
    var form = document.querySelector('#newItemForm');
    /* Get new item input element */
    var item = document.querySelector('#item');
    /* Submit event listener geared towards creating new items */
    form.addEventListener('submit',function(e){
        e.preventDefault();
        createItem(list, item);
    },false)
    /* Click event listener */
    list.addEventListener('click',function(e){
        var t = e.target;
        clickListener(t, list);
    },false)

    /* Get stored values from previous session */
    getValues(list);
});
/* Create item function */
function createItem(list, item){
    /* If form field is empty */
    /* Then display error */
    if (item.value == '') {
        $('#dialogError').dialog({
            "show": true,
            "modal": true,
        });
    }
    /* Otherwise, create new list item element with close button */
    else {
        /* Create li element */
        /* Also create a child span element that will act as the close button */
        list.innerHTML += '<li class="list_item">' + item.value + '<span class="close">\u00D7</span></li>';
        /* Update the saved list */
        store(list);
    }
    /* Clear add new value */
    item.value = "";
}
/* Get saved list from past session */
function getValues(list) {
    /* Get values */
    var storedValues = window.localStorage.myitems;
    /* If empty, */
    /* Then, create default */
    if(!storedValues) {
        /* Default list, could be a premade list for demoing */
        list.innerHTML = '';
    }
    /* Otherwise, update the list with the stored values */
    else {
        list.innerHTML = storedValues;
    }
}
/* Function that acts on the click event */
function clickListener(t, list) {
    /* If the element clicked on is a list item */
    /* Then, edit the list item */
    if(t.classList.contains('list_item')) {
        /* Get edit item form element */
        var form = document.querySelector('#editItemForm');
        /* Get edit item input element */
        var editItem = document.querySelector('#editItem');
        /* Bring up edit dialog box */
        $('#editModal').dialog({
            "show": true,
            "modal": true,
            "closeOnMaskClick": true
        });
        /* Create submit event listener for the edit dialog */
        form.addEventListener('submit',function(e) {
            e.preventDefault();
            /* If the edited value is empty */
            /* Then, close the dialog box and do nothing */
            if (editItem.value == ''){
                console.log("Test");
                $('#editModal').dialog('close');
            }
            /* Otherwise, update the list item */
            else {
                /* Update list item with the new value */
                t.innerHTML = editItem.value+'<span class="close">\u00D7</span>';
                /* Close the edit dialog */
                $('#editModal').dialog('close');
                /* Update local storage */
                store(list);
            }
        },false);
        
    }
    /* If the element clicked on is the close button */
    /* Then, remove the parent list node */
    else if(t.classList.contains('close')) {
        t.parentNode.parentNode.removeChild(t.parentNode);
        store(list);
    }

}
/* Store list items in local storage for later sessions */
function store(list) {
    window.localStorage.myitems = list.innerHTML;
}
/* Create a print screen that displays the current list */
function printScreen() {
    /* Get list items */
    var list = document.getElementsByClassName('list_item');
    /* Create print screen */
    var print_window = window.open();
    /* Print Title */
    print_window.document.write('<p style="font-size: 16px; color:black;"><b>List:</b></p>');
    /* Print each list item */
    /* Couldn't figure out how to apply CSS separately */
    for (var i = 0; i<list.length; i++){
        print_window.document.write('<p style="font-size:14px; color:black; margin: 0 0 0 20px;"><b>' + list[i].textContent.slice(0,-1) + '</b></p>');
    }
    print_window.document.close();
    print_window.focus();
    /* Display print screen */
    print_window.print();
    /* Close the window */
    //print_window.close();
}
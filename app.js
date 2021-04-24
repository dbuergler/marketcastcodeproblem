var fields = new Array(); //creating empty field array
var segments = new Array(); // creating empty segments array
function loadSegmentsList(){
    var str = "NAM|FNAFred|LNALong||BIO|DOB02/24/1995||" // setting new string to a variable
    segments = str.split('||') // splitting string into segments by double pipe delimiter
    for (i = 0; i < segments.length; i++){ // for every segment in the list, push the fields name to that list and split them by the single pipe delimiter
        if(segments[i].length > 0){
            fields.push(segments[i].split('|')) 
        }
        console.log(fields[0]) //logging the fields in the NAM segments array
        console.log(fields[1]) // loging the fields in the BIO segments array
}

    console.log(fields.length) //logging the length of the fields object
    var segmentList = document.getElementById('segments') // getting the segments element and putting it into a variable
    for(i = 0; i < fields.length; i++){ // for every field take i and start at the 0 index in the fields array
        var segment = fields[i][0];
        var option = document.createElement('option')// creating an option element
        var item = segmentList.appendChild(option) //appending the option element to the segments list
        item.innerText = segment// changing the innerText of the option to be the segment
    }
}


function fetchField(){
    var fieldList = document.getElementById('fields') //grabbing the fields element from the HTML
    refreshOptionList(fieldList, 'Select Field'); //refreshing the fields option list each time a new segment is clicked on
    console.log(fields) //logging fields
    var segments = document.getElementById('segments') //grabbing the segments element from the HTML
    var selectedFields = fields[segments.selectedIndex -1] //making sure there is no empty field in the fields option
    for (i = 1; i < selectedFields.length; i++){ //for every selectedField start at the fieldValue of index 1
        var fieldValue = selectedFields[i] //setting the field value
        var fieldName = fieldValue.substring(0, 3) //setting the substring of the field value to the 0 index and 3 characters long
        var fieldOption = document.createElement('option')// creating an option element
        var fieldItem = fieldList.appendChild(fieldOption)// appending the fieldOption to the fieldList
        fieldItem.innerText = fieldName// changing the innerText to the fieldName
    }

}

function refreshOptionList(parent, prompt) { //this entire function is removing the child from the parent so that both childs do not show when selected a field
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    var option = document.createElement('option')
    option.innerText = prompt
    parent.appendChild(option)
}

function displayMessage(){ //this entire function is grabbing elements in the HTML and appending the field substring start at index 3 and going the entire length of the field name to display the message and change the innerText to the field value
    var segments = document.getElementById('segments')
    var fieldList = document.getElementById('fields')
    var fieldMessage = document.getElementById('message')
    var selectedFields = fields[segments.selectedIndex -1]
    var field = selectedFields[fieldList.selectedIndex]
    var fieldValue = field.substring(3, field.length)

    fieldMessage.innerText = fieldValue;

}











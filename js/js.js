//onload of the webpage
window.onload = function() {
  value1.style.display = "block";
  value2.style.display = "none";
  value3.style.display = "none";
  value4.style.display = "none";
}

if(window.localStorage.getItem('valuestate') === null) {
    setValue ('value1');
    value1.style.display = "block";
} else {
    var valueItem = readValue() 
    document.getElementById(valueItem).style.display = "block";
}

function setValue (clickedOn) {
    clearValue();
    window.localStorage.setItem('valuestate', clickedOn);
    document.getElementById(clickedOn).style.display = "block";
}

function clearValue () {
    var value = document.getElementsByClassName('container');
    for (var loop = 0; loop < value.length; loop++) {
        value[loop].style.display = 'none';
    }
}

function readValue () {
    console.log( window.localStorage.getItem('valuestate') );
    return window.localStorage.getItem('valuestate');
}

function doValue(clickedElement) {
    setValue(clickedElement);
    document.getElementById(clickedElement).focus();
}

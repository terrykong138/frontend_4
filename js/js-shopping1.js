// document properties
let output;
//a. document.all -HTMLAllCollction; different with HTMLcollection
output=document.all;
// console.log(output);
//console.log(output)[0];
//console.log(output.length);
// b. document.documentElement - html tags in text form
output = document.documentElement;
//console.log(output);
//c. docment.head - head tage in text form
output = document.head;

//d. HTMLCollection of hea tag direct child
output = document.head.children;

//console.log(output);
//e. document other properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;
console.log(output);
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].action;
output = document.forms[0].method;
console.log(output);
document.forms[0].id = "my-form";
output = document.forms[0].id;
console.log(output);
//g. document.link
// output = document.links;
 //output = document.links[0];
// console.log(output);
// outout = document.links[0].href = "https://wwww.google.com";
// output = document.links[0].id = "google";
// utput = document.links[0].className = "google";
// utput = document.links[0];
// console.log(output);
// utput = document.links[0].classList;
//h. document.imgages
output = document.images;
output = document.images[0].src;
console.log(output);
//i. convert HTMLCollection to array
const forms = Array.from(document.forms);
forms.forEach((form) =>{
    console.log(form);
    console.log(typeof form);
} )

//=========================================================
//select elements
//a. slelctor by class naem
const listItems = document.querySelectorAll(".item");
//select all the tt cintent of li
// console.log(listItems[1].innerText);
//return the html of li
console.log(listItems[1].innerHTML);
//apply css style into nodelist single item
listItems[1].style.color = "red";
//normal array high order function applied
//queryselector update css is ok
listItems.forEach((listItem ,index) => {
    listItem.style.color = "red";
    listItem.style.fontSize = "40px";
    listItem.style.fontWeight = "bold";
    listItem.style.textDecoration = "underline";
    listItem.style.textDecorationColor = "green";
    if (index == 1) {
        listItem.remove();
    }
    //can't simply modify the nodelist html structure
    //nodelist includes textnode and other node structures
    if (index == 0) {
        listItem.innerHTML = `Milk <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>` ;
    }

});

//========================================================
//b. select by element class name return HTMLCollectionprint the 3rd item innerText

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2[2].innerText);
//xonvert HTMLCollection to array first
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((listItem, index) => {
    console.log(listItem.innerText);
});
//============================================
//caches. select by element tag name
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);
//d. select by id (need conver to arry)
const listItems4 = document.getElementById("item-form");
console.log(listItems4);





if(localStorage.getItem("books") === null)
{
    var myBooks = [];
}
else
{
    var myBooks = localStorage.getItem("books");
    swapArrayToJS();
}


// Use this function to swap myBooks To JS array
function swapArrayToJS()
{
        myBooks = JSON.parse(myBooks);
} 
// Use this function to swap myBooks To string array
function swapArrayToString()
{
        myBooks = JSON.stringify(myBooks);
} 



// You will call this function when click in submit
function addBook()
{
    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;

    var itemBook = {
        name: siteName,
        address: siteUrl,
    }

    var regexSiteName = /^(\w{3,30})$/i
    var regexSiteUrl = /^\w{5,100}$/i;

    if((regexSiteName.test(itemBook.name)) && (regexSiteUrl.test(itemBook.address)))
    {
        myBooks.push(itemBook);
        swapArrayToString();
        setData(myBooks);
        swapArrayToJS();
        showBooks(myBooks);
        clearInputs();
    }
    else{
        alert("Here is a problem with data")
    }


}



// This function set data in local storage
function setData(arr){
    localStorage.setItem("books",arr);
}


// Add books on DOM by this function
function showBooks(arr) 
{
    var show = document.getElementById("rowOfBooks");
    show.innerHTML = "";

    for(var i = 0 ; i < arr.length ; i++)
    {
        show.innerHTML += `
            <div>
                <h6>${arr[i].name}</h6>
                <div>
                    <button class="visit-book" id="visitBook"><a href="${arr[i].address}">Visit</a></button>
                    <button class="delete-book" id="deleteBook" onclick="deleteBook(${i})">Delete</button>
                </div>
            </div>    
        `
    }
}
showBooks(myBooks);



// Clear inputs
function clearInputs(){
    siteName.value = "";
    siteUrl.value = "";
}


// this function is responsuble for deletion
function deleteBook(index)
{
    myBooks.splice(index,1);
    swapArrayToString();
    setData(myBooks);
    swapArrayToJS();
    showBooks(myBooks);
    
}




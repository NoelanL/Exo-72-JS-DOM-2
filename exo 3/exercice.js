let div = document.getElementsByClassName('name-tag');

for (let i = 0; i < div.length; i++){
    let nouvelElement = document.createElement("p");
    nouvelElement.innerHTML = "Hello World";
    div[i].append(nouvelElement);
}










// var form = document.GetElementByTagname('form')[0];
// var form = document.forms[0];
// Si el formulario se llama igual que propiedades
// o metodos en el documentos estos se referenciaran en vez del formulario
// var form = document.forms.search;
var form = document.forms['search'];

// var input = form.searchBox;
// var input = form['searchBox'];
var input = form.elements[0];
input.value='Search Here';

var button = form.elements[1];

// input.addEventListener('focus',function(){alert("focused")},false);
// input.addEventListener('blur', function(){alert('blurred')},false);
// input.addEventListener('change',function(){alert('changed')},false);

/*
form.addEventListener('submit',function(){
    alert('Formulario enviado');
    return false;
},false);
*/
form.addEventListener('submit',search,false);
/*
function search() {
    alert('Form Submited');
    // return false;
    event.preventDefault();
}
*/
function search(){
    alert('You Searched for : '+input.value);
    event.preventDefault();
}
input.addEventListener('focus',function(){
    if (input.value === 'Search Here'){
        input.value = ''
    }
},false);
input.addEventListener('blur',function(){
    if(input.value == ''){
        input.value = 'Search Here';
    }
},false);
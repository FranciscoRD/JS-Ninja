var form = document.forms.hero;

form.addEventListener('submit',makeHero,false);
function makeHero(event) {
    event.preventDefault();
    var hero = {};
    hero.name = form.name.value;
    hero.realName = form.realName.value;
    hero.powers = [];
    for (i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    for (i = 0; i < form.type.length; i++) {
        if (form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }
    hero.age = form.age.value;
    hero.city = form.city.value;
    
    // form.origin.value = "Hola";
    hero.origin = form.origin.value;

    console.log(JSON.stringify(hero));
}
/*
// Custom Validation. Nombres que inician con X prohibidos
// Se activa al enviar el formulario
form.addEventListener("submit",validate),false;
function validate(){
    var firstLetter = form.name.value[0];
    if (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        console.log("Your name is not allowed to start with X!");
    }
}
*/
// Custom Validation. Nombres que inician con X prohibidos
// Se activa al escribir un Nombre que inicia con X en Name
// Tambien deshabilita el boton de envio
form.name.addEventListener('blur', validateInline,false);
function validateInline(){
    var firstLetter = form.name.value[0];
    var label = document.querySelector("label[for='name']");
    if (firstLetter.toUpperCase() === 'X') {
        label.classList.add('error');
        label.textContent = 'Your name is not allowed to start with X!';
        hero.envio = form.envio;
        hero.envio.disabled = true;
    }
    else{
        hero.envio.disabled = false;
        label.classList.remove('error');
        label.textContent = 'Name:';
    }
}
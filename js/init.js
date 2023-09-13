const firstNameOutput = document.querySelector("#firstNameOutput");
const surnameOutput = document.querySelector("#surnameOutput");
const genderOutput = document.querySelector("#genderOutput");
const patronymicOutput = document.querySelector("#patronymicOutput");
const professionOutput = document.querySelector("#professionOutput");
const birthYearOutput = document.querySelector("#birthYearOutput");

const start = function () {
    const initPerson = personGenerator.getPerson();
    firstNameOutput.innerText = initPerson.firstName;
    surnameOutput.innerText = initPerson.surname;
    genderOutput.innerText = initPerson.gender;
    patronymicOutput.innerText = initPerson.patronymic;
    professionOutput.innerText = initPerson.profession;
    birthYearOutput.innerText = initPerson.year;
};

window.onload = start;

const generate = document.querySelector("#generate"); // Кнопка генерация данных
generate.addEventListener("click", start);

const clear = document.querySelector("#clear"); // Кнопка сброса
clear.addEventListener("click", function () {
    firstNameOutput.innerText = "";
    surnameOutput.innerText = "";
    genderOutput.innerText = "";
    patronymicOutput.innerText = "";
    professionOutput.innerText = "";
    birthYearOutput.innerText = "";
});

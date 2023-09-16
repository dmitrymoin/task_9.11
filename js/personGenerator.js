const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Светлана",
            "id_3": "Екатерина",
            "id_4": "Анна",
            "id_5": "Наталья",
            "id_6": "Ирина",
            "id_7": "Анастасия",
            "id_8": "Юлия",
            "id_9": "Татьяна",
            "id_10": "Людмила"
        }
    }`,
    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Столяр",
            "id_2": "Токарь",
            "id_3": "Таксист",
            "id_4": "Сантехник",
            "id_5": "Сварщик",
            "id_6": "Электрик",
            "id_7": "Охранник",
            "id_8": "Дальнобойщик",
            "id_9": "Моряк",
            "id_10": "Шахтёр"
        }
    }`,
    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Няня",
            "id_2": "Учитель",
            "id_3": "Повар",
            "id_4": "Кондитер",
            "id_5": "Парикмахер",
            "id_6": "Визажист",
            "id_7": "Врач",
            "id_8": "Стюардесса",
            "id_9": "Модель",
            "id_10": "Швея"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: "Мужской",
    GENDER_FEMALE: "Женский",

    randomIntNumber: (max = 1, min = 0) =>
        Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber() === 1
            ? this.GENDER_MALE
            : this.GENDER_FEMALE;
    },

    randomFirstName: function (gender) {
        // Функция принимает аргументом переменную gender (случайный пол) из getPerson
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function (gender) {
        const surname = this.randomValue(this.surnameJson);
        if (gender === this.GENDER_FEMALE) {
            return surname + "a";
        } else {
            return surname;
        }
    },

    randomPatronymic: function (gender) {
        const name = this.randomValue(this.firstNameMaleJson);
        if (gender === this.GENDER_MALE) {
            if (name === "Дмитрий" || name === "Андрей") {
                return name.replace("й", "евич");
            } else if (name === "Никита") {
                return name.replace("а", "ич");
            }
            return name + "ович";
        
        } else if (gender === this.GENDER_FEMALE) {
            if (name === "Дмитрий" || name === "Андрей") {
                return name.replace("й", "евна");
            } else if (name === "Никита") {
                return name.replace("а", "ична");
            }
            return name + "овна";
        }
    },

    randomProfession: function (gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.profMaleJson);
        } else {
            return this.randomValue(this.profFemaleJson);
        }
    },

    randomDate: function (month) {
        // Функция принимает аргументом переменную month (случайный месяц) из getPerson
        if (month === "февраля") {
            return this.randomIntNumber(29, 1);
        } else if (
            month === "апреля" ||
            month === "июня" ||
            month === "сентября" ||
            month === "ноября"
        ) {
            return this.randomIntNumber(30, 1);
        } else {
            return this.randomIntNumber(31, 1);
        }
    },

    randomMonth: function (month) {
        return month;
    },

    randomAge: function () {
        return this.randomIntNumber(2000, 1960);
    },

    birthYear: function (month) {
        // Функция конкатенации даты рождения
        return `${this.randomDate(month)} ${this.randomMonth(
            month
        )} ${this.randomAge()} года`;
    },

    getPerson: function () {
        this.person = {};

        const gender = this.randomGender();
        const month = this.randomValue(this.monthJson);

        this.person.gender = gender;
        this.person.firstName = this.randomFirstName(gender);
        this.person.surname = this.randomSurname(gender);
        this.person.patronymic = this.randomPatronymic(gender);
        this.person.profession = this.randomProfession(gender);
        this.person.year = this.birthYear(month);

        return this.person;
    },
};

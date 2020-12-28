function myFirstApp(name, age) {
    console.log(`Привет, меня зовут ${name} и это моя первая программа`);

    function showSkills() {
        console.log('Мои навыки: ');
        let skills = ['html', 'css', 'js'];

        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
        }
    }

    showSkills();

    function checkAge() {
        if(age > 18) {
            console.log ('У тебя отличные шансы стать FrontEnd dev');
        } else {
            console.log ('Ты все равно молодец, что задумался о карьере программиста');
        }
    }

    checkAge();

    function calcPow(num) {
        console.log (num*num);
    }

    calcPow(4);
}

myFirstApp('Lena', '27');

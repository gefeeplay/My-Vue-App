const totalElement = document.querySelector("#sum")

const Habit = {
    name:'',
    descryption: '',
    frequency: 0,
    count: 0,
    sum: 0,
}

const nameMeta = {
    selector: document.querySelector('habitName'),
    handler(event) {
        Habit.name = event.target.value
        console.log(name)
    }
}

const descryptionMeta = {
    selector: document.querySelector('descrption'),
    handler(event) {
        Habit.name = event.target.value
        console.log(name)
    }
}

const frequencyMeta = {
    selector: document.querySelector('frequency'),
    handler(event){
        Habit.name = event.target.value
        console.log(name)
    }
}

const countMeta = {
    selector: document.querySelector('count'),
    handler(event){
        Habit.name = event.target.value
        console.log(name)
    }

}

const sumMeta = {
    selector: document.querySelector('sum'),
    handler(event) {
        Habit.name = event.target.value
        console.log(name)
    }
}

const metaData = [nameMeta, descryptionMeta, frequencyMeta, countMeta, sumMeta]

for (const meta of metaData){
        meta.selector?.addEventListener('change', meta.handler)
}


const setSum = (Habit) =>{
    let res = "Не подсчитано";
    const frequencyValue = Habit.frequency;
    const periodValue = Habit.count;

    if (frequencyValue == undefined) {
        res = "Не указана частота";
    } else if (periodValue == undefined) {
        res = "Не указан период";
    } else {
        res = (frequencyValue * periodValue).toString();
    }

    console.log(frequencyValue, periodValue);
    totalElement.textContent = res;
};



const formElement = document.querySelector('form');
formElement.addEventListener('submit', (event) =>{
    ev.preventDefault(); // Предотвращаем стандартное поведение формы

    // Проверяем, что все поля заполнены
    if (!Habit.name || !Habit.description || Habit.frequency === undefined || Habit.period === undefined) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Выводим данные в консоль в формате JSON
    console.log(JSON.stringify(Habit));
});

setSum(Habit)
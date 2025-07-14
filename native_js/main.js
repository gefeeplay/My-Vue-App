const totalElement = document.querySelector("#sum")

const habit = {}

const nameMeta = {
    selector: document.querySelector('#habitName'),
    handler(event) {
        habit.name = event.target.value
        //console.log(name)
    }
}

const descryptionMeta = {
    selector: document.querySelector('#description'),
    handler(event) {
        habit.description = event.target.value
        //console.log(habit.name)
    }
}

const frequencyMeta = {
    selector: document.querySelector('#frequency'),
    handler(event) {
        habit.frequency = event.target.value
        //console.log(habit.description)

        setSum(habit)
    }
}

const countMeta = {
    selector: document.querySelector('#count'),
    handler(event) {
        habit.count = event.target.value
        //console.log(habit.count)

        setSum(habit)
    }


}

const sumMeta = {
    selector: document.querySelector('#sum'),
    handler(event) {
        setSum(habit)
        habit.sum = event.target.value
        //console.log(habit.sum)
    }
}

const metaData = [nameMeta, descryptionMeta, frequencyMeta, countMeta, sumMeta]

for (const meta of metaData) {
    if (meta.selector) {
        const eventType = meta.selector.tagName === 'SELECT' ? 'change' : 'input';
        meta.selector.addEventListener(eventType, meta.handler);
    }
}


const setSum = (habit) => {
    let res = "Не подсчитано";
    const frequencyValue = habit.frequency;
    const countValue = habit.count;

    if (frequencyValue == undefined) {
        res = "Не указана частота";
    } else if (countValue == undefined) {
        res = "Не указан период";
    } else {
        res = (frequencyValue * countValue).toString();
    }

    console.log(frequencyValue, countValue);
    totalElement.textContent = res;
    habit.sum = res
};



const formElement = document.querySelector('form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Проверяем, что все поля заполнены
    if (!habit.name || !habit.description || habit.frequency === undefined || habit.count === undefined) {
        alert("Пожалуйста, заполните все поля.");

        return;
    }

    // Выводим данные в консоль в формате JSON
    console.log(JSON.stringify(habit));
});

setSum(habit)

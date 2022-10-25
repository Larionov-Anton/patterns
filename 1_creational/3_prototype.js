//* Прототипирование 

const car = {
	wheels: 4,

	init() {
		console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
	}
}

const carWhithOwner = Object.create(car, {
	owner: {
		value: 'Дмитрий'
	}
})

carWhithOwner.init()

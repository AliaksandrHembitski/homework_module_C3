// класс электро приборов
class ElectricalDevices {
	constructor(title, power, condition) {
		this.title = title
		this.power = power
		this.condition = condition || 'выключен'
	}
	turnsDevice() {
		if (this.condition == 'выключен') {
			this.condition = 'включен'
		} else if (this.condition == 'включен') {
			this.condition = 'выключен'
		} else {
			// console.log(`Прибор ${this.title} не исправен.`)
			return `Прибор ${this.title} не исправен.`
		}
		// console.log(`Прибор ${this.title} ${this.condition}.`)
		return `Прибор ${this.title} ${this.condition}.`
	}
}

// класс прибора колонка
class BmusicСolumn extends ElectricalDevices {
	constructor(name, operation, title, power, condition) {
		super(title, power, condition)
		this.name = name
		this.operation = operation
	}
	operatingMode() {
		if (this.operation == 50) {
			this.power = this.power / 2
			return this.power
		} else if (this.operation == 100) {
			console.log(this.power)
			this.power = this.power / 1
			return this.power
		} else if (this.operation == 10) {
			this.power = this.power / 10
			return this.power
		} else {
			return `${this.title} работает в три режимах 10%, 50% и 100% мощности.`
		}
	}
}
// класс прибора синтезатора
class ElectronicSynthesizer extends ElectricalDevices {
	constructor(
		name,
		title,
		power,
		simulationMode,
		presenceAutoPlayerMode,
		condition
	) {
		super(title, power, condition)
		this.name = name
		this.simulationMode = simulationMode
		this.presenceAutoPlayerMode = presenceAutoPlayerMode
	}
	displayingSettingsDisplay() {
		return `Эмитирующий инструмент: ${this.simulationMode}\nАвтопроигрование: ${this.presenceAutoPlayerMode}`
	}
}
// экземпляр колонки
const bmusicСolumn = new BmusicСolumn('CGBox Sound', 50, 'Cgpods', 10)
// экземпляр синтезатора
const electronicSynthesizer = new ElectronicSynthesizer(
	'PSR-F52',
	'YAMAHA',
	5,
	'piano',
	'выкл.'
)
// включаем колонку
bmusicСolumn.turnsDevice()
// определение мощности колонки
bmusicСolumn.operatingMode(100)
// вывод объекта колонка
console.log(bmusicСolumn)
// включаем синтезатора
electronicSynthesizer.turnsDevice()
// вывод настроек на экран синтезатора
electronicSynthesizer.displayingSettingsDisplay()
// вывод объекта синтезатора
console.log(electronicSynthesizer)

// конструктор объектов
function ElectricalDevices(title, power, condition) {
	this.title = title
	this.power = power
	this.condition = condition || 'выключен'
}
// метод который включает/выключает прибор
ElectricalDevices.prototype.turnsDevice = function () {
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
// прибор колонка
function BmusicСolumn(name, operation, title, power, condition) {
	this.name = name
	this.operation = operation
	this.title = title
	this.power = power
	this.condition = condition || 'выключен'
	this.operatingMode = function () {
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
// экземпляр колонки
BmusicСolumn.prototype = new ElectricalDevices()
let bmusicСolumn = new BmusicСolumn('CGBox Sound', 50, 'Cgpods', 10)

// прибор синтезатор
function ElectronicSynthesizer(
	name,
	title,
	power,
	simulationMode,
	presenceAutoPlayerMode,
	condition
) {
	this.name = name
	this.title = title
	this.power = power
	this.simulationMode = simulationMode
	this.presenceAutoPlayerMode = presenceAutoPlayerMode
	this.condition = condition || 'выключен'
	this.displayingSettingsDisplay = function displayingSettingsDisplay() {
		console.log(
			`Эмитирующий инструмент: ${this.simulationMode}\nАвтопроигрование: ${this.presenceAutoPlayerMode}`
		)
	}
}
// экземпляр синтезатора
ElectronicSynthesizer.prototype = new ElectricalDevices()
let electronicSynthesizer = new ElectronicSynthesizer(
	'PSR-F52',
	'YAMAHA',
	5,
	'piano',
	'выкл.'
)
// включаем колонку
bmusicСolumn.turnsDevice()
// определение мощности колонки
bmusicСolumn.operatingMode()
// вывод объекта колонка
console.log(bmusicСolumn)
// включаем синтезатора
electronicSynthesizer.turnsDevice()
// вывод настроек на экран синтезатора
electronicSynthesizer.displayingSettingsDisplay()
// вывод объекта синтезатора
console.log(electronicSynthesizer)

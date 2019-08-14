const { Printer, JSONPrinter } = require('./inheritance')

describe("Printer class", () => {
    it("can be instantiated", () => {
        new Printer()
    })
    it("has a print method", () => {
        let argumentToFakeLogger
        const fakeLogger = (text) => {
            argumentToFakeLogger = text
        }
        const p = new Printer(fakeLogger)
        p.print("Hello")
        expect(argumentToFakeLogger).toBe("Hello")
    })
})

describe("JSONPrinter class", () => {
    it("can be instantiated", () => {
        new JSONPrinter()
    })
    it("has a print method", () => {
        const fakeLogger = () => {}
        const jsonConverter = () => {}
        const p = new JSONPrinter(fakeLogger, jsonConverter)
        p.print("Hello")
    })
})
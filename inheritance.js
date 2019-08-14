class Printer {
    constructor(logger) {
        this.log = logger || console.log
    }

    print(text) {
        this.log(text)
    }
}

class JSONPrinter extends Printer {
    constructor(logger, jsonConverter) {
        super(logger)
        this.converter = jsonConverter
    }
}

module.exports = { Printer, JSONPrinter }
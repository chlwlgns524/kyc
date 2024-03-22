export class Option {
    constructor(id, value, label) {
        this.id = id;
        this.value = value;
        this.label = label;
    }
}

export class OptionsCollection {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }

    getOption(id) {
        return this.options.find(option => option.id === id);
    }
}
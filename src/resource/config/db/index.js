const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/NKIT');
        console.log('Connect Successfull!');
    } catch (error) {
        console.log('Connect False!');
    }
}

async function disconnect() {
    try {
        await mongoose.disconnect();
        console.log('DisConnect Successfull!');
    } catch (error) {
        console.log('Disonnect False!');
    }
}

async function test() {
    const people = new mongoose.Schema({
        name: String,
    });
    people.methods.speak = function speak() {
        const greeting = this.name
            ? 'He name is:' + this.name
            : "I don't have name";
        console.log(greeting);
    };
    const model_people = mongoose.model('model_people', people);
    const silence = model_people({ name: 'Nam Kha' });
    await silence.save();
    const m = await model_people.find();
}

module.exports = { connect, disconnect, test };

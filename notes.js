const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('Note added!!'))
    } else {
        console.log(chalk.red('Note title taken!!!'))
    }
};

const removeNote = (title) => {
    const notes = loadNotes()
    original_length = notes.length
    const filtered_notes = notes.filter((note) => !(note.title === title))

    if (filtered_notes.length !== original_length) {
        saveNotes(filtered_notes)
        console.log(chalk.green(`${title} removed successfully`))
    } else {
        console.log(chalk.red(`${title} does not exist!`))
    }
}

const listNotes = () => {
    console.log(chalk.green('Your Notes'))
    notes = loadNotes()

    notes.forEach((note) => console.log(chalk.blue(note.title)))
} 


const readNote = (title) => {
    const notes = loadNotes()
    const specific_note = notes.find((note) => note.title === title)

    if (specific_note) {
        console.log(chalk.blue.bold(specific_note.title))
        console.log(specific_note.body)
    } else {
        console.log(chalk.red.bold('NOTE NOT FOUND'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const jsonData = buffer.toString()
        return JSON.parse(jsonData)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
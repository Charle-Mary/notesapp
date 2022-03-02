const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// Create add command

yargs.command({
    command: 'add',
    description: 'Adds a note',
    aliases: ['a', 'ad'],
    builder: {
        title: {
            description: 'Add title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'This is the body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Removing a note
yargs.command({
    command: 'remove',
    description: 'Removes a note',
    aliases: ['rm','rmv'],
    builder: {
        title: {
            description: 'Allows input of a specific title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//Listing notes
yargs.command({
    command: 'list',
    aliases: ['li', 'lis'],
    description: 'Lists notes',
    handler (){
        notes.listNotes()
    }
})

//Reading notes
yargs.command({
    command: 'read',
    description: 'Reads a particular note',
    aliases: ['r'],
    builder: {
        title: {
            description: 'Takes in the title of the note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()
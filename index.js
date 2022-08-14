#!/usr/bin/env node

const moment = require('moment');
const argv = require('yargs')
.command('$0', 'default func', (yargs) => {}, () => {
	console.log(moment())
})
.command('sub', 'adding string', (yargs) => {}, (argv) => {
	if(argv.hasOwnProperty('day')) {
		console.log(moment().subtract(argv.day, 'days'));
	} else if(argv.hasOwnProperty('d')) {
		console.log(moment().subtract(argv.d, 'days'));
	} else if(argv.hasOwnProperty('month')) {
		console.log(moment().subtract(argv.month, 'months'))
	} else if(argv.hasOwnProperty('m')) {
		console.log(moment().subtract(argv.m, 'months'))
	} else if(argv.hasOwnProperty('year')) {
		console.log(moment().subtract(argv.year, 'years'));
	} else if(argv.hasOwnProperty('y')) {
		console.log(moment().subtract(argv.y, 'years'))
	}
})
.command('add', 'adding string', (yargs) => {}, (argv) => {
	if(argv.hasOwnProperty('day')) {
		console.log(moment().add(argv.day, 'days'));
	} else if(argv.hasOwnProperty('d')) {
		console.log(moment().add(argv.d, 'days'));
	} else if(argv.hasOwnProperty('month')) {
		console.log(moment().add(argv.month, 'months'))
	} else if(argv.hasOwnProperty('m')) {
		console.log(moment().add(argv.m, 'months'))
	} else if(argv.hasOwnProperty('year')) {
		console.log(moment().add(argv.year, 'years'));
	} else if(argv.hasOwnProperty('y')) {
		console.log(moment().add(argv.y, 'years'))
	}
})
.argv;

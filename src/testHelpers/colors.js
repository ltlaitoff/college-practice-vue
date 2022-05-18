var colors = require('colors/safe')

class TestsConsoleLog {
	note(message) {
		const clgMessage = colors.green(`${colors.bold(' Note:')} ${message} `)
		console.log(clgMessage)
	}
	optimize(message) {
		const clgMessage = colors.blue(`${colors.bold(' Optimize:')} ${message} `)
		console.log(clgMessage)
	}
	todo(message) {
		const clgMessage = colors.magenta(`${colors.bold(' TODO:')} ${message} `)
		console.log(clgMessage)
	}
	hack(message) {
		const clgMessage = colors.brightYellow(
			`${colors.bold(' Hack:')} ${message} `
		)
		console.log(clgMessage)
	}
	xxx(message) {
		const clgMessage = colors.black.bgBrightYellow(
			`${colors.rainbow(' XXX:')} ${message} `
		)
		console.log(clgMessage)
	}
	fixme(message) {
		const clgMessage = colors.red(`${colors.bold(' FIXME:')} ${message} `)
		console.log(clgMessage)
	}
	bug(message) {
		const clgMessage = colors.white.bgRed(`${colors.bold(' BUG:')} ${message} `)
		console.log(clgMessage)
	}
}

export default new TestsConsoleLog()

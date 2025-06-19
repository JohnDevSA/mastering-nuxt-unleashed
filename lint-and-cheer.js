import { exec } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import notifier from 'node-notifier';

const spinner = ora('Linting your code...').start();

exec('pnpm lint', (error, stdout, stderr) => {
	spinner.stop();

	if (error) {
		console.log(chalk.red('\n❌ Lint failed:\n'));
		console.error(stderr);
		process.exit(1);
	} else {

		console.clear();
		console.log(chalk.greenBright(stdout));
		console.log('\n' + gradient.atlas(figlet.textSync('All Clean!', { horizontalLayout: 'full' })));

		console.log(chalk.cyanBright('\n🎉✨ Great job! You’re cleaner than ever! ✨🎉\n'));

		console.log(
			gradient.instagram(`
    ┌( ಠ‿ಠ)┘
    👏 Code’s clean – ship it like a rockstar! 🚀🔥
    `)
		);

		console.log('🎯', chalk.magentaBright('Pro tip:'), 'You should totally commit now.');

		// Optional: Desktop notification
		notifier.notify({
			message: 'All done. Great job!',
			sound: true,
			title: '✅ Push Complete',
		});

		console.log('\n' + '🔥'.repeat(20));
	}
});
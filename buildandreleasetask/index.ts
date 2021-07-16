import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const commandInput: string | undefined = tl.getInput('command', true);
        const projectPathInput: string | undefined = tl.getInput('projectPath', true);
        if (commandInput == 'bad' || projectPathInput== 'bad' ) {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
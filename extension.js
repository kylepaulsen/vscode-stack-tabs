const vscode = require('vscode');

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('stackTabs.stackTab', () => {
        vscode.commands.executeCommand('moveActiveEditor', {to: 'first', by: 'tab'});
    }));

    vscode.window.onDidChangeActiveTextEditor(() => {
        vscode.commands.executeCommand('stackTabs.stackTab');
    });
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;

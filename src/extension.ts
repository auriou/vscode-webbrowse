'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.web-browse', () => {
        var extension = vscode.extensions.getExtension('auriou.webbrowse');
        if(extension !== undefined) {
        var extensionPath = extension.extensionPath;
        var pathHome = vscode.Uri.file(extensionPath + "/resources/home.html");
        
                vscode.commands.executeCommand('vscode.previewHtml', pathHome, vscode.ViewColumn.Two, 'Browser').then((success) => {}, 
                (reason) => {
                    vscode.window.showErrorMessage(reason);
                });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
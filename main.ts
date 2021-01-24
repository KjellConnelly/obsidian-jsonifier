import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'json-parse',
			name: 'JSON.parse(selection)',
			hotkeys: [{
        modifiers: ["Mod", "Alt"],
				key: "["
			}],
			callback: ()=>{
				let text = ''
				if (window.getSelection) {
	        text = window.getSelection().toString();
		    } else if (document.selection && document.selection.type != "Control") {
		        text = document.selection.createRange().text;
		    }
				navigator.clipboard.writeText(JSON.parse(text))
				new Notice('Selection parsed and copied to clipboard.');
			}
		})

		this.addCommand({
			id: 'json-stringify',
			name: 'JSON.stringify(selection)',
			hotkeys: [{
        modifiers: ["Mod", "Alt"],
				key: "]"
			}],
			callback: ()=>{
				let text = ''
				if (window.getSelection) {
	        text = window.getSelection().toString();
		    } else if (document.selection && document.selection.type != "Control") {
		        text = document.selection.createRange().text;
		    }
				text = JSON.stringify(text)
				navigator.clipboard.writeText(text)
				new Notice('Selection stringified and copied to clipboard.');
			}
		})
	}
}

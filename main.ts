import { Plugin } from "obsidian";

export default class examplePlugin extends Plugin{ 
	statusBarTextElement: HTMLSpanElement

	onload(): void | Promise<void> {
		this.statusBarTextElement = this.addStatusBarItem().createEl('span')
		this.statusBarTextElement;
	}
};
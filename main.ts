import { Plugin, setIcon } from "obsidian";

export default class examplePlugin extends Plugin{ 
	onload(): void | Promise<void> {
		const item = this.addStatusBarItem();
		setIcon(item, 'baby')

		const item2 = this.addRibbonIcon('baby', 'baby', ()=> {
			setIcon(item2, 'chef-hat')
		});
	}
};
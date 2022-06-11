import type { Tree, Node } from '$lib/decisionTree';

const capColorNodes: { [key: string]: Node } = {
	c: {
		content: 'e',
		probability: 1
	},
	n: {
		content: 'e',
		probability: 1
	},
	w: {
		content: 'p',
		probability: 1
	},
	y: {
		content: 'p',
		probability: 1
	}
};

const capColorNode = {
	content: 'Cap color',
	children: Object.entries(capColorNodes).map(([label, node]) => ({
		label,
		node
	}))
};

const grillSizeNodes = {
	b: {
		content: 'e',
		probability: 1
	},
	n: {
		content: 'p',
		probability: 1
	}
};

const grillSizeNode = {
	content: 'Grill Size',
	children: Object.entries(grillSizeNodes).map(([label, node]) => ({
		label,
		node
	}))
};

const habitatNodes = {
	g: {
		content: 'e',
		probability: 1
	},
	p: {
		content: 'e',
		probability: 1
	},
	w: {
		content: 'e',
		probability: 1
	},
	d: grillSizeNode,
	l: capColorNode
};

const habitatNode = {
	content: 'Habitat',
	children: Object.entries(habitatNodes).map(([label, node]) => ({
		label,
		node
	}))
};

const sporePrintColorNodes = {
	b: {
		content: 'e',
		probability: 1
	},
	h: {
		content: 'e',
		probability: 1
	},
	k: {
		content: 'e',
		probability: 1
	},
	n: {
		content: 'e',
		probability: 1
	},
	o: {
		content: 'e',
		probability: 1
	},
	r: {
		content: 'p',
		probability: 1
	},
	y: {
		content: 'e',
		probability: 1
	},
	w: habitatNode
};

const sporePrintColorNode = {
	content: 'Spore Print Color',
	children: Object.entries(sporePrintColorNodes).map(([label, node]) => ({
		label,
		node
	}))
};

const oderNodes = {
	a: {
		content: 'e',
		probability: 1
	},
	n: sporePrintColorNode,
	c: {
		content: 'p',
		probability: 1
	},
	f: {
		content: 'p',
		probability: 1
	},
	l: {
		content: 'e',
		probability: 1
	},
	m: {
		content: 'p',
		probability: 1
	},
	p: {
		content: 'p',
		probability: 1
	},
	s: {
		content: 'p',
		probability: 1
	},
	y: {
		content: 'p',
		probability: 1
	}
};

const tree: Tree = {
	root: {
		content: 'Odor',
		children: Object.entries(oderNodes).map(([label, node]) => ({
			label,
			node
		}))
	}
};

export function getDecisionTree() {
	// console.log(JSON.stringify(tree, null, 2));
	return tree;
}

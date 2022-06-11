export type NodeChild = { label: string; node: Node; selected?: boolean };

export interface BaseNode {
	children?: NodeChild[];
	content: string;
}

export interface LeafNode extends BaseNode {
	probability: number;
}

export type Node = BaseNode | LeafNode;

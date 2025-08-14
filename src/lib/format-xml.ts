import { parseDocument } from 'htmlparser2';
import type { Snippet } from 'svelte';

export type SnippetWithAttributes = Snippet<[string, Record<string, string>]>;

type Part =
	| [
			snippet: Snippet<[string, Record<string, string>]>,
			content: string,
			attributes: Record<string, string>
	  ]
	| string;

export const formatXML = (
	message: string,
	elements: Record<string, SnippetWithAttributes | undefined>
) => {
	const dom = parseDocument(message, { xmlMode: true });

	const handleChild = (child: (typeof dom.children)[number]): Part => {
		if (child.type === 'text') {
			return child.data;
		}
		if (child.type === 'tag') {
			const Element = elements[child.name];
			if (Element) {
				return [Element, child.children.map(handleChild).join(''), child.attribs];
			}
		}

		return '';
	};

	return dom.children.map(handleChild);
};

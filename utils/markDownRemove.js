export default function removeMarkdown(markdownText) {
  // Regular expressions to match different Markdown elements
  const headerPattern = /^(#+\s*)/;
  const boldPattern = /(\*\*|__)(.*?)\1/;
  const italicPattern = /(\*|_)(.*?)\1/;
  const codePattern = /(`{1,3})(.*?)\1/;
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/;
  const imagePattern = /!\[([^\]]+)\]\(([^)]+)\)/;
  const listPattern = /(?:^\s*[\-*+]\s*|^\s*\d+\.\s*)/;
  const blockquotePattern = /^\s*>/;
  const horizontalRulePattern = /^\s*-{3,}/;

  // Replace Markdown patterns with empty string
  const filteredText = markdownText
    .replace(headerPattern, "")
    .replace(boldPattern, "$2")
    .replace(italicPattern, "$2")
    .replace(codePattern, "$2")
    .replace(linkPattern, "$1")
    .replace(imagePattern, "$1")
    .replace(listPattern, "")
    .replace(blockquotePattern, "")
    .replace(horizontalRulePattern, "");

  return filteredText;
}

// // Example Markdown text
// const markdownText = `
// # Heading 1
// This is **bold** and *italic* text.

// - Item 1
// - Item 2

// > This is a blockquote.

// [Link](https://example.com)
// `;

// const filteredText = removeMarkdown(markdownText);
// console.log(filteredText);

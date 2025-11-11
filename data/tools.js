import { OnlineTool } from '../types.js';
import { LightbulbIcon } from '../components/icons/LightbulbIcon.js';
import { ToolsIcon } from '../components/icons/ToolsIcon.js';
import { CodeIcon } from '../components/icons/CodeIcon.js';

export const toolsData: OnlineTool[] = [
  {
    id: 'seo-keyword-analyzer',
    name: "SEO Keyword Analyzer",
    icon: LightbulbIcon,
    shortDescription: "Analyze keyword density and get suggestions to improve your content's search engine ranking.",
    description: "Our SEO Keyword Analyzer is an essential tool for content creators and marketers. Paste your text, enter your target keyword, and get instant analysis on keyword density, frequency, and placement. The tool also provides actionable suggestions to optimize your content for better search engine visibility without keyword stuffing.",
    features: ["Keyword Density Analysis", "Frequency Count", "Placement suggestions (headings, body)", "Related Keyword Ideas", "Readability Score"],
    price: "$50 (One-Time)",
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770',
    faq: [
      { question: 'Does this tool save my text?', answer: 'No, all analysis is done in your browser. We do not store or see the content you analyze.'},
      { question: 'What is a good keyword density?', answer: 'Most SEO experts recommend a keyword density of 1-2%. Our tool helps you stay within this optimal range to avoid penalties from search engines.'}
    ],
  },
  {
    id: 'image-compressor',
    name: "Image Compressor",
    icon: ToolsIcon,
    shortDescription: "Drastically reduce image file sizes without sacrificing quality. Speed up your website instantly.",
    description: "Page speed is a critical ranking factor. Large images are the most common cause of slow websites. Our Image Compressor uses advanced algorithms to reduce the file size of your JPG and PNG images by up to 80% with minimal loss in visual quality. Simply drag and drop your images to start compressing.",
    features: ["Batch Compression", "Adjustable Quality Level", "PNG & JPG Support", "No File Size Limits", "Client-Side Processing for Privacy"],
    price: "$40 (One-Time)",
    previewImage: 'https://images.unsplash.com/photo-1611225132515-56a92a592328?q=80&w=1770',
    faq: [
        { question: 'Is there a limit to how many images I can compress?', answer: 'No, with the one-time purchase, you can compress an unlimited number of images.'},
        { question: 'What is the difference between lossy and lossless compression?', answer: 'Our tool primarily uses lossy compression, which removes some data to achieve a much smaller file size. The quality difference is often imperceptible to the human eye.'}
    ],
  },
  {
    id: 'code-formatter',
    name: "Code Formatter",
    icon: CodeIcon,
    shortDescription: "Automatically format your code in various languages for better readability and consistency.",
    description: "Clean, consistent code is easier to read, debug, and maintain. Our Code Formatter automatically beautifies your messy code according to standard style guides. It supports a wide range of languages, including JavaScript, Python, CSS, HTML, and JSON. Just paste your code and let the tool do the work.",
    features: ["Supports 10+ Languages", "Customizable Formatting Rules", "Copy to Clipboard", "Light & Dark Themes", "Syntax Highlighting"],
    price: "$30 (One-Time)",
    previewImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931',
    faq: [
        { question: 'Which languages are supported?', answer: 'We support JavaScript, TypeScript, CSS, HTML, JSON, Python, Ruby, Go, and more. We are constantly adding support for new languages.'},
        { question: 'Can I integrate this into my code editor?', answer: 'This is a standalone web-based tool. However, we also offer plugins for popular editors like VS Code as a separate product.'}
    ],
  },
];
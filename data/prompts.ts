import { AiPrompt } from '../types.ts';

export const promptsData: AiPrompt[] = [
  {
    id: 'marketing-copy-generator',
    name: 'Marketing Copy Generator',
    price: '$25',
    category: 'Marketing',
    shortDescription: 'Generate catchy taglines and persuasive ad copy for any product.',
    description: 'This master prompt is designed to help marketers, entrepreneurs, and copywriters generate compelling and effective marketing copy. By providing a few details about your product and target audience, the AI will produce a variety of taglines, ad headlines, and short descriptions that are designed to convert.',
    promptText: 'Act as a world-class advertising executive. Given the following product information, generate 5 catchy taglines, 3 compelling ad headlines, and a 50-word persuasive product description. Product Name: [Your Product Name]. Target Audience: [Your Target Audience]. Key Features: [List 2-3 Key Features]. Tone: [e.g., Playful, Professional, Luxurious].',
    sampleOutput: 'Product: "Aura Organic Coffee"\n\nTaglines:\n1. Sip with a conscience. Taste the difference.\n2. Aura: Your daily ritual, ethically sourced.\n3. Purely grown, perfectly roasted, consciously consumed.\n\nHeadlines:\n1. Elevate Your Morning with Coffee That Cares.\n2. Finally, an Organic Coffee That Tastes as Good as It Feels.',
    isImageSample: false,
    faq: [
      { question: 'Which AI models does this work best with?', answer: 'This prompt is optimized for advanced language models like Gemini, GPT-4, and Claude 3.' },
      { question: 'Can I customize the output?', answer: 'Absolutely! You can modify the "Tone" parameter and add more specific instructions to tailor the results to your brand voice.' },
    ],
  },
  {
    id: 'sci-fi-character-concept',
    name: 'Sci-Fi Character Concept',
    price: '$30',
    category: 'Creative & Art',
    shortDescription: 'Create stunning, detailed visual concepts for sci-fi characters.',
    description: 'A powerful prompt for artists, writers, and game designers. This text-to-image prompt generates highly detailed and imaginative science fiction character concepts. It utilizes specific artistic terms and composition instructions to guide the AI in producing professional-quality visuals.',
    promptText: 'Concept art, full-body portrait of a grizzled cyborg space-pirate, robotic parrot on his shoulder, intricate mechanical arm with glowing blue circuits, weathered leather duster coat, standing on the bridge of a rusty starship, looking out at a vibrant purple and orange nebula through a viewport, cinematic lighting, hyper-detailed, digital painting, style of Syd Mead and Craig Mullins.',
    sampleOutput: 'https://images.unsplash.com/photo-1582490339794-358046ab6d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    isImageSample: true,
    faq: [
      { question: 'Which AI image generators does this work with?', answer: 'This prompt is highly effective with models like Midjourney, Stable Diffusion, and DALL-E 3.' },
      { question: 'How can I change the character\'s appearance?', answer: 'You can easily swap out keywords. For example, change "cyborg space-pirate" to "alien diplomat" or "nebula" to "dystopian cityscape" to generate completely different scenes and characters.' },
    ],
  },
  {
    id: 'blog-post-writer',
    name: 'SEO Blog Post Writer',
    price: '$40',
    category: 'Content Creation',
    shortDescription: 'Generate a complete, SEO-optimized blog post from a single topic.',
    description: 'This comprehensive prompt guides the AI to write a well-structured, SEO-friendly blog post of approximately 800 words. It includes sections for an introduction, multiple subheadings with detailed content, and a concluding paragraph. It also instructs the AI to naturally incorporate a target keyword throughout the article.',
    promptText: 'Act as an expert SEO content writer. Write an 800-word blog post on the topic: "[Your Topic]". The target keyword is "[Your Keyword]". The article should have an engaging introduction, at least 3 distinct subheadings with detailed paragraphs, and a strong conclusion. Ensure the target keyword is used naturally in the title, introduction, at least one subheading, and the conclusion. Maintain a [e.g., informative, conversational, professional] tone.',
    sampleOutput: 'Topic: "The Benefits of Drip Coffee"\nKeyword: "drip coffee maker"\n\nTitle: Why a Drip Coffee Maker is Still the Best Way to Brew Your Morning Joe\n\n(The AI would then generate an ~800-word article following the specified structure and keyword placement.)',
    isImageSample: false,
    faq: [
      { question: 'Can I specify the word count?', answer: 'Yes, you can easily change the "800-word" instruction in the prompt to your desired length.' },
      { question: 'Is the content ready to publish?', answer: 'The AI-generated content provides a very strong draft. We always recommend reviewing and adding your own personal touch or specific examples before publishing.' },
    ],
  },
];
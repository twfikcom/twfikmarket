import { WebsiteService } from '../types.ts';

export const servicesData: WebsiteService[] = [
  {
    id: 'personal-wordpress',
    name: 'Personal WordPress Site',
    price: '$100',
    shortDescription: 'A professional 5-page WordPress website, perfect for portfolios, blogs, or personal branding.',
    features: ['5 Custom Pages (e.g., Home, About, Services, Blog, Contact)', 'WordPress CMS Setup', 'Mobile-Responsive Design', 'Basic SEO & Security', 'User Training Session'],
    description: "Establish your online presence with a beautifully designed, 5-page personal website built on the powerful and user-friendly WordPress platform. This plan is perfect for freelancers, artists, and professionals looking to showcase their work and connect with their audience. You'll be able to easily manage and update your content yourself after our included training session.",
    portfolio: [
        { src: 'https://images.unsplash.com/photo-1559028006-44d08a5a5e14?q=80&w=1770', alt: 'Clean portfolio website design' },
        { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964', alt: 'Mobile responsive view of a website' },
    ],
    faq: [
      { question: 'Can I add a blog to this site?', answer: 'Yes! WordPress is the world\'s leading platform for blogging. We can configure one of your five pages as a blog, or add it on later.' },
      { question: 'What kind of pages are included?', answer: 'A typical setup includes a Home, About, Services/Portfolio, Blog, and Contact page. However, we can customize these five pages to perfectly match your requirements.' },
    ],
  },
  {
    id: 'woocommerce-store',
    name: 'E-commerce Store',
    price: '$200',
    shortDescription: 'Launch your online business with a 7-page WordPress store powered by WooCommerce.',
    features: ['7-Page E-commerce Site', 'WooCommerce Integration', 'Secure Payment Gateway Setup', 'Mobile-Optimized Storefront', 'Product Upload Training'],
    description: "Start selling online with a professional e-commerce store built on WordPress and WooCommerce, the world's most popular e-commerce combination. This package includes 7 essential pages like a storefront, product category pages, cart, and checkout. We set up the payment gateways for you and provide training on how to add and manage your products. Please note, this plan covers the setup of the store; adding your products is not included but can be quoted separately.",
    portfolio: [
        { src: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1770', alt: 'E-commerce website showing products' },
        { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1703', alt: 'Business website with analytics charts' },
    ],
    faq: [
      { question: 'Does this plan include adding my products to the store?', answer: 'This plan includes the full setup of the store and a training session to teach you how to add and manage products yourself. We do not add the products for you, but we can provide that as a separate service if you need it.' },
      { question: 'Which payment methods can I accept?', answer: 'We can integrate any payment gateway compatible with WooCommerce, including Stripe (for credit cards) and PayPal. This allows you to accept payments securely from customers worldwide.' },
    ],
    popular: true,
  },
  {
    id: 'custom-wordpress',
    name: 'Custom WordPress Solution',
    price: '$300+',
    shortDescription: 'A bespoke, high-performance WordPress site with custom themes, plugins, and integrations.',
    features: ['Unlimited Pages & Possibilities', 'Custom Theme Development', 'Custom Plugin Functionality', 'Third-Party API Integrations', 'Performance Optimization'],
    description: 'For businesses with unique requirements that go beyond standard templates, our Custom WordPress Solution offers unlimited possibilities. We provide bespoke theme and plugin development to create the exact functionality you need. Whether it\'s complex API integrations, membership portals, or advanced booking systems, we build scalable, secure, and highly-optimized WordPress websites tailored to your specific business logic.',
    portfolio: [
        { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1770', alt: 'Team collaborating on a web project' },
        { src: 'https.unsplash.com/photo-1600880292203-942bb68b2433?q=80&w=1770', alt: 'Business professionals discussing a project' },
    ],
    faq: [
      { question: 'What does "custom theme development" mean?', answer: 'It means we design and code a WordPress theme from scratch, specifically for your brand. This results in a unique design, faster performance, and cleaner code compared to pre-built themes, giving you a distinct competitive advantage.' },
      { question: 'What kind of custom features can you build?', answer: 'Virtually anything. Examples include custom calculators, integration with your internal software (CRM, ERP), advanced user dashboards, subscription services, and unique e-learning platforms. If you can imagine it, we can build it on WordPress.' },
    ],
  },
];
export type Blog = {
  id: string
  title: string
  description: string[]
  highlight: string
  image?: string
  color: 'red' | 'blue' | 'yellow'
  excerpt: string
  author: string
  readTime: string
  content: string
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: '10 Wilful Defaults of ₹10,000 Crore that Impacted IDBI Bank',
    description: [
      'High-profile borrowers account for a significant portion of wilful defaults.',
      'The total amount raises serious accountability concerns.',
    ],
    highlight: 'Citizens must raise their voice for financial accountability.',
    image: '/idbi-defaults.jpeg',
    color: 'red',
    excerpt: 'Analysis of the top wilful defaults that severely impacted IDBI Bank and raised accountability concerns.',
    author: 'BETRA Research',
    readTime: '5 min read',
    content: `
      <p>High-profile borrowers account for major defaults in IDBI Bank's loan portfolio. The scale of these defaults — totalling over ₹10,000 crore — has raised serious questions about due diligence and institutional accountability.</p>
      <p>Privatisation of public sector banks raises further concerns about the protection of depositors and the continuity of social banking mandates.</p>
      <p>Citizens and civil society must demand greater transparency and accountability from both banks and regulators to prevent such systemic failures in the future.</p>
    `,
  },
  {
    id: '2',
    title: 'BSE Market Decline & Global Financial Impact',
    description: [
      'BSE dropped nearly 5,000 points wiping ₹30 lakh crore.',
      'Global instability continues to affect long-term stability.',
    ],
    highlight: 'Strategic financial policy response is essential.',
    image: '/bse-market.jpeg',
    color: 'blue',
    excerpt: 'A deep dive into the BSE market crash and its cascading effects on the Indian and global financial ecosystem.',
    author: 'BETRA Research',
    readTime: '4 min read',
    content: `
      <p>The BSE Sensex dropped nearly 5,000 points in a single session, wiping out approximately ₹30 lakh crore in investor wealth. This sharp decline reflects the fragility of equity markets in the face of global macroeconomic headwinds.</p>
      <p>Global instability — driven by geopolitical tensions, rising interest rates in developed economies, and supply chain disruptions — continues to exert downward pressure on emerging markets like India.</p>
      <p>A strategic and coordinated financial policy response from the RBI and the Ministry of Finance is essential to restore investor confidence and stabilise long-term growth trajectories.</p>
    `,
  },
  {
    id: '4',
    title: 'पेटीएम पेमेंट बँकेचा अस्त : पेमेंट बँक रचनेच्या अस्तची सुरवात',
    description: [
      'RBI ने पेटीएम पेमेंट बँकेचा परवाना रद्द केला आहे.',
      '१४,५०० कर्मचारी आणि ६६,००० BCs यांचे भवितव्य अनिश्चित.',
      'ग्रामीण ग्राहकांवर मोठा परिणाम.',
    ],
    highlight: 'पेमेंट बँक धोरणाचा पारदर्शक पुनर्विचार आवश्यक.',
    color: 'yellow',
    excerpt: 'RBI ने पेटीएम पेमेंट बँकेचा परवाना रद्द केल्यानंतर उद्भवलेल्या परिस्थितीचे सखोल विश्लेषण.',
    author: 'देविदास तुळजापूरकर',
    readTime: '6 min read',
    content: `
      <p>रिझर्व्ह बँक ऑफ इंडिया (RBI) ने पेटीएम पेमेंट बँकेचा परवाना रद्द केला आहे. हा निर्णय केवळ एका कंपनीपुरता मर्यादित नसून संपूर्ण पेमेंट बँक व्यवस्थेवर प्रश्नचिन्ह उपस्थित करतो.</p>
      <p>१४,५०० कर्मचारी आणि ६६,००० बिझनेस करस्पॉन्डंट्स (BCs) यांचे भवितव्य अनिश्चित झाले आहे. ग्रामीण भागातील लाखो ग्राहक ज्यांनी डिजिटल बँकिंगसाठी पेटीएमवर अवलंबून राहणे पसंत केले होते, त्यांना आता पर्यायी व्यवस्था शोधावी लागेल.</p>
      <p>पेमेंट बँक धोरणाचा पारदर्शक आणि सर्वसमावेशक पुनर्विचार आवश्यक आहे. नियामक संस्थांनी केवळ दंडात्मक कारवाई न करता, दीर्घकालीन धोरणात्मक उपाय योजणे गरजेचे आहे.</p>
    `,
  },
]

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((blog) => blog.id === id)
}

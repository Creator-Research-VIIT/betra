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
      'RBI ने पेटीएम पेमेंट बँकेचा परवाना रद्द केला — केवळ एका बँकेची नव्हे, तर पेमेंट बँक संरचनेच्या व्यवहार्यतेवरच प्रश्नचिन्ह.',
      '१४,५०० कर्मचारी आणि ६६,००० बिझनेस कॉरस्पॉन्डंट्सचे भवितव्य अनिश्चिततेच्या गर्तेत.',
    ],
    highlight: 'रोजगाराचे संरक्षण, ग्राहकांना अखंड सेवा आणि पेमेंट्स बँक धोरणाचा पारदर्शक पुनर्विचार — आता सरकारनेच भूमिका घ्यायला हवी!',
    color: 'yellow',
    excerpt: 'RBI ने पेटीएम पेमेंट बँकेचा परवाना रद्द केल्यानंतर उद्भवलेल्या परिस्थितीचे सखोल विश्लेषण — कर्मचारी, ग्राहक आणि धोरणाचा पुनर्विचार.',
    author: 'देविदास तुळजापूरकर',
    readTime: '6 min read',
    content: `
      <p>शेवटी रिझर्व्ह बँक ऑफ इंडिया (RBI) ने पेटीएम पेमेंट बँकेचा Payments Bank चा बँकिंग व्यवसाय करण्याचा परवाना रद्द केला आहे. ही केवळ एका बँकेची अखेर नसून, पेमेंट्स बँक या संरचनेच्या दीर्घकालीन व्यवहार्यतेवर गंभीर प्रश्नचिन्ह निर्माण करणारी घटना आहे.</p>

      <p>बँकेच्या २०२५ च्या वार्षिक अहवालानुसार, १४,५०० पेक्षा अधिक कर्मचारी आणि सुमारे ६६,००० बिझनेस कॉरस्पॉन्डंट्स (BCs) या संस्थेशी संबंधित होते. त्यांचे भवितव्य आता अनिश्चिततेच्या गर्तेत आहे. ही केवळ आकडेवारी नाही, तर आर्थिक समावेशनाच्या प्रयोगावर उभ्या राहिलेल्या हजारो कुटुंबांची उपजीविका आहे.</p>

      <p>या बँकेचे उद्घाटन तत्कालीन अर्थमंत्री श्री अरुण जेटली यांनी केले होते. तसेच नरेंद्र मोदी यांच्या डिजिटल इंडिया या संकल्पनेशी स्वतःला जोडत, त्यांच्या छायाचित्राचाही वापर जाहिरातींमध्ये करण्यात आला होता. आजची परिस्थिती पाहता, या स्वप्नाची अंमलबजावणी प्रत्यक्षात कशी झाली? याबाबत अस्वस्थ करणारे प्रश्न उभे राहतात.</p>

      <p>सुमारे ९.५ कोटी ग्राहक असलेल्या या बँकेच्या बंदीचा परिणाम केवळ या संस्थेपुरता मर्यादित नाही. सुमारे ६६,००० बँकिंग कॉरस्पॉन्डंट देशातील ५४० जिल्ह्यांमधील १५,००० गावांमध्ये शेवटच्या टप्प्यावर बँकिंग सेवा पोहोचवत होते. या ग्रामीण व वंचित भागातील ग्राहकांच्या दैनंदिन बँकिंग गरजांचे काय?</p>

      <p>जबाबदारीचा प्रश्न टाळता येणार नाही: जर ही चूक बँक व्यवस्थापनाची असेल, तर त्यांच्या जबाबदारीची ठोस अंमलबजावणी कशी होणार? आणि जर कर्ज देण्यास बंदी यांसारख्या मर्यादांमुळेच हा व्यवसाय मॉडेल अपयशी ठरत असेल, तर हा आराखडा तयार करणाऱ्या आणि मंजूर करणाऱ्या रिझर्व्ह बँक ऑफ इंडियाची जबाबदारी काय?</p>

      <p>ही घटना एका व्यापक संरचनात्मक समस्येकडे निर्देश करते — मुख्य उत्पन्नाचे स्रोत मर्यादित असताना असा बँकिंग मॉडेल स्पर्धात्मक वातावरणात टिकू शकतो का? नियामक देखरेख केवळ नियमपालनापुरती मर्यादित न राहता, प्रणालीगत कमतरता ओळखून त्यावर उपाययोजना करणारी असणे आवश्यक आहे.</p>

      <p>शेवटी, सर्वात मोठी किंमत कर्मचारी, बिझनेस कॉरस्पॉन्डंट्स आणि कोट्यवधी ग्राहकांना मोजावी लागत आहे. पुढील वाटचालीत तीन बाबी अत्यंत महत्त्वाच्या आहेत — रोजगाराचे संरक्षण, ग्राहकांना अखंड सेवा आणि पेमेंट्स बँक धोरणाचा पारदर्शक पुनर्विचार. यावर आता सरकारनेच भूमिका घ्यायला हवी!</p>

      <p><strong>— देविदास तुळजापूरकर</strong><br/>
      <a href="mailto:drtuljapurkar@yahoo.com">drtuljapurkar@yahoo.com</a> | ९४२२२०९३८०</p>
    `,
  },
]

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((blog) => blog.id === id)
}

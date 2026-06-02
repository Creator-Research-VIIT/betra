export type Blog = {
  id: string
  title: string
  description: string[]
  highlight: string
  image?: string
  video?: string
  color: 'red' | 'blue' | 'yellow'
  excerpt: string
  author: string
  content: string
  category?: string
  date?: string
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
    category: 'Banking',
    date: '15 May 2026',
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
    category: 'Finance',
    date: '10 May 2026',
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
    category: 'Policy',
    date: '12 May 2026',
    content: `
      <p>शेवटी रिझर्व्ह बँक ऑफ इंडिया (RBI) ने पेटीएम पेमेंट बँकेचा Payments Bank चा बँकिंग व्यवसाय करण्याचा परवाना रद्द केला आहे. ही केवळ एका बँकेची अखेर नसून, पेमेंट्स बँक या संरचनेच्या दीर्घकालीन व्यवहार्यतेवर गंभीर प्रश्नचिन्ह निर्माण करणारी घटना आहे.</p>

      <p>बँकेच्या २०२५ च्या वार्षिक अहवालानुसार, १४,५०० पेक्षा अधिक कर्मचारी आणि सुमारे ६६,००० बिझनेस कॉरस्पॉन्डंट्स (BCs) या संस्थेशी संबंधित होते. त्यांचे भवितव्य अब अनिश्चिततेच्या गर्तेत आहे. ही केवळ आकडेवारी नाही, तर आर्थिक समावेशनाच्या प्रयोगावर उभ्या राहिलेल्या हजारो कुटुंबांची उपजीविका आहे.</p>

      <p>या बँकेचे उद्घाटन तत्कालीन अर्थमंत्री श्री अरुण जेटली यांनी केले होते. तसेच नरेंद्र मोदी यांच्या डिजिटल इंडिया या संकल्पनेशी स्वतःला जोडत, त्यांच्या छायाचित्राचाही वापर जाहिरातींमध्ये करण्यात आला होता. आजची परिस्थिती पाहता, या स्वप्नाची अंमलबजावणी प्रत्यक्षात कशी झाली? याबाबत अस्वस्थ करणारे प्रश्न उभे राहतात.</p>

      <p>सुमारे ९.५ कोटी ग्राहक असलेल्या या बँकेच्या बंदीचा परिणाम केवळ या संस्थेपुरता मर्यादित नाही. सुमारे ६६,००० बँकिंग कॉरस्पॉन्डंट देशातील ५४० जिल्ह्यांमधील १५,००० गावांमध्ये शेवटच्या टप्प्यावर बँकिंग सेवा पोहोचवत होते. या ग्रामीण व वंचित भागातील ग्राहकांच्या दैनंदिन बँकिंग गरजांचे काय?</p>

      <p>जबाबदारीचा प्रश्न टाळता येणार नाही: जर ही चूक बँक व्यवस्थापनाची असेल, तर त्यांच्या जबाबदारीची ठोस अंमलबजावणी कशी होणार? आणि जर कर्ज देण्यास बंदी यांसारख्या मर्यादांमुळेच हा व्यवसाय मॉडेल अपयशी ठरत असेल, तर हा आराखडा तयार करणाऱ्या आणि मंजूर करणाऱ्या रिझर्व्ह बँक ऑफ इंडियाची जबाबदारी काय?</p>

      <p>ही घटना एका व्यापक संरचनात्मक समस्येकडे निर्देश करते — मुख्य उत्पन्नाचे स्रोत मर्यादित असताना असा बँकिंग मॉडेल स्पर्धात्मक वातावरणात टिकू\} अशा पद्धतीचा विचार करायला हवा.</p>

      <p>शेवटी, सर्वात मोठी किंमत कर्मचारी, बिझनेस कॉरस्पॉन्डंट्स आणि कोट्यवधी ग्राहकांना मोजावी लागत आहे. पुढील वाटचालीत तीन बाबी अत्यंत महत्त्वाच्या आहेत — रोजगाराचे संरक्षण, ग्राहकांना अखंड सेवा आणि पेमेंट्स बँक धोरणाचा पारदर्शक पुनर्विचार. यावर आता सरकारनेच भूमिका घ्यायला हवी!</p>

      <p><strong>— देविदास तुळजापूरकर</strong><br/>
      <a href="mailto:drtuljapurkar@yahoo.com" class="text-blue-600 hover:underline">drtuljapurkar@yahoo.com</a> | ९४२२२०९३८०</p>
    `,
  },
  {
    id: '5',
    title: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
    description: [
      'बँकिंग क्षेत्रातील रोजगाराच्या संधी विषयावर BETRA तर्फे मार्गदर्शन कार्यशाळा उत्साहात पार पडली.',
      'विद्यार्थ्यांना बँकिंग करिअर, परीक्षा पद्धती आणि रोजगार संधींबाबत सविस्तर मार्गदर्शन करण्यात आले.'
    ],
    highlight: '“युवकांनी बँकिंग क्षेत्राकडे गांभीर्याने पाहून नियोजनबद्ध तयारी करावी.”',
    image: '/blog1.jpg',
    color: 'blue',
    excerpt: 'बँकिंग क्षेत्रातील रोजगाराच्या संधी विषयावर BETRA तर्फे मार्गदर्शन कार्यशाळा उत्साहात पार पडली. विद्यार्थ्यांना बँकिंग करिअर, परीक्षा पद्धती आणि रोजगार संधींबाबत सविस्तर मार्गदर्शन करण्यात आले.',
    author: 'BETRA Research',
    category: 'Career Guidance',
    date: '18 May 2026',
    content: `
      <p>बँकिंग एज्युकेशन ट्रेनिंग अँड रिसर्च अकादमी (BETRA) च्या वतीने आज सिडको येथील अकादमीच्या कार्यालयात “बँकिंग क्षेत्रातील रोजगाराच्या संधी” या विषयावर मार्गदर्शन कार्यशाळेचे आयोजन करण्यात आले. या कार्यशाळेला छत्रपती संभाजीनगर येथील अनेक विद्यार्थी, स्पर्धा परीक्षांची तयारी करणारे इच्छुक तसेच त्यांच्या पालकांनी उत्स्फूर्त प्रतिसाद देत सहभाग नोंदवला.</p>
      
      <p>कार्यशाळेत मार्गदर्शन करताना श्री. निलेश खरात आणि श्री. मुकेश उबाळे यांनी सार्वजनिक क्षेत्रातील बँका, खाजगी बँका, प्रादेशिक ग्रामीण बँका, रिझर्व्ह बँक ऑफ इंडिया, नाबार्ड तसेच इतर वित्तीय संस्थांमधील रोजगाराच्या विविध संधींबाबत सविस्तर माहिती दिली.</p>
      
      <p>यासोबतच आवश्यक शैक्षणिक पात्रता, आवश्यक कौशल्ये, स्पर्धा परीक्षांची रचना, अभ्यासाची दिशा, मार्किंग पद्धती आणि मुलाखतीची तयारी याविषयीही त्यांनी उपस्थितांना मार्गदर्शन केले.</p>
      
      <p>बँकिंग क्षेत्रातील नोकऱ्यांमध्ये रोजगाराची सुरक्षितता, आकर्षक वेतनश्रेणी, सामाजिक प्रतिष्ठा आणि पदोन्नतीच्या चांगल्या संधी उपलब्ध असल्यामुळे युवकांनी या क्षेत्राकडे गांभीर्याने पाहून नियोजनबद्ध तयारी करावी, असे आवाहन त्यांनी केले.</p>
      
      <p>कार्यक्रमाच्या अध्यक्षस्थानी अकादमीचे विश्वस्त श्री. उत्तम भाकरे होते. त्यांनी मार्गदर्शक श्री. निलेश खरात आणि श्री. मुकेश उबाळे यांचा सत्कार करून त्यांचे आभार मानले.</p>
      
      <p>कार्यक्रमाचे आभार प्रदर्शन श्री. पीयूष बिऱ्हाडे यांनी केले.</p>
      
      <p>यावेळी अकादमीच्या वतीने अशा प्रकारच्या करिअर मार्गदर्शन आणि प्रशिक्षण कार्यशाळांचे आयोजन नियमितपणे करण्यात येणार असल्याची माहिती देण्यात आली.</p>
      
      <p>इच्छुक विद्यार्थी आणि पालकांनी अधिक माहितीसाठी अकादमीच्या <a href="https://www.be-tra.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">www.be-tra.in</a> ला भेट द्यावी किंवा संपर्क साधावा, असे आवाहन करण्यात आले.</p>
      
      <p>या कार्यशाळेच्या यशस्वी आयोजनासाठी श्री. तपन जैन आणि श्री. प्रकाश बनसोड यांनी विशेष परिश्रम घेतले.</p>
    `,
  },
  {
  id: '6',
  title: 'पायलट सिग्नल्स: सीट बेल्ट घट्ट बांधा, पुढे आर्थिक अस्थिरतेची शक्यता',
  description: [
    'जागतिक अर्थव्यवस्थेत वाढती अनिश्चितता आणि वित्तीय बाजारातील अस्थिरतेच्या पार्श्वभूमीवर गुंतवणूकदारांनी सावध राहण्याची गरज अधोरेखित करण्यात आली आहे.',
    'व्याजदर, चलनवाढ, जागतिक राजकीय घडामोडी आणि बाजारातील चढउतार यांचा गुंतवणूक धोरणांवर होणारा परिणाम या लेखात सविस्तर स्पष्ट करण्यात आला आहे.'
  ],
  highlight: '“सीट बेल्ट घट्ट बांधा; पुढील काही महिने गुंतवणूकदारांसाठी आव्हानात्मक ठरू शकतात.”',
  image: '/image.png',
  color: 'yellow',
  excerpt: 'जागतिक अर्थव्यवस्थेतील अनिश्चितता, व्याजदरातील बदल आणि वित्तीय बाजारातील अस्थिरता लक्षात घेता गुंतवणूकदारांनी शिस्तबद्ध आणि दीर्घकालीन दृष्टीकोन ठेवण्याची गरज या लेखात अधोरेखित करण्यात आली आहे.',
  author: 'देविदास तुळजापूरकर',
  category: 'Economic Analysis',
  date: '19 May 2026',
  content: `
    <p>जागतिक अर्थव्यवस्था सध्या एका महत्त्वपूर्ण वळणावर उभी आहे. वाढती चलनवाढ, केंद्रीय बँकांच्या व्याजदर धोरणातील बदल, जागतिक राजकीय तणाव आणि वित्तीय बाजारातील चढउतार यामुळे पुढील काही महिन्यांत आर्थिक अस्थिरता वाढण्याची शक्यता व्यक्त केली जात आहे.</p>

    <p>अर्थतज्ज्ञ आणि बाजार विश्लेषकांच्या मते, गुंतवणूकदारांनी अल्पकालीन बाजार हालचालींवर प्रतिक्रिया देण्याऐवजी दीर्घकालीन उद्दिष्टांवर लक्ष केंद्रित करणे अधिक आवश्यक आहे. विविध मालमत्ता वर्गांमध्ये संतुलित गुंतवणूक आणि जोखीम व्यवस्थापन ही यशस्वी धोरणाची प्रमुख तत्त्वे मानली जातात.</p>

    <p>केंद्रीय बँकांच्या धोरणात्मक निर्णयांचा शेअर बाजार, बाँड मार्केट आणि चलन विनिमय दरांवर थेट परिणाम होतो. व्याजदर वाढल्यास कर्ज घेण्याचा खर्च वाढतो, ज्याचा उद्योग आणि ग्राहक खर्चावर परिणाम होऊ शकतो. परिणामी आर्थिक वाढीचा वेग मंदावण्याची शक्यता असते.</p>

    <p>याशिवाय, जागतिक स्तरावरील भूराजकीय तणाव, पुरवठा साखळीतील अडथळे आणि ऊर्जा किंमतींतील चढउतार यामुळे गुंतवणूकदारांचा आत्मविश्वास कमी होऊ शकतो. अशा परिस्थितीत पोर्टफोलिओचे विविधीकरण आणि नियमित पुनरावलोकन करणे अत्यंत आवश्यक ठरते.</p>

    <p>लेखात गुंतवणूकदारांना भावनिक निर्णयांपासून दूर राहण्याचा आणि डेटा-आधारित, शिस्तबद्ध गुंतवणूक धोरण स्वीकारण्याचा सल्ला देण्यात आला आहे. बाजारातील अस्थिरता ही जोखीम असली तरी योग्य नियोजन आणि संयम यांच्या मदतीने दीर्घकालीन संधी निर्माण होऊ शकतात.</p>

    <p>आर्थिक जगतातील आगामी घडामोडींवर बारकाईने लक्ष ठेवत, “सीट बेल्ट घट्ट बांधा” हा संदेश गुंतवणूकदारांना सतर्क राहण्याचे आणि बदलत्या परिस्थितीसाठी तयार राहण्याचे महत्त्व अधोरेखित करतो.</p>

    <p>मूळ लेख वाचण्यासाठी
      <a href="https://open.substack.com/pub/devidastuljapurkar/p/pilot-signals-tighten-your-belt-turbulence?utm_source=share&utm_medium=android&r=8ut0k"
         target="_blank"
         rel="noopener noreferrer"
         class="text-blue-600 hover:underline">
         येथे क्लिक करा
      </a>.
    </p>
  `,
},
{
  id: '7',
  title: 'द ग्रेट बँकिंग इल्यूजन: बँकिंग व्यवस्थेचे वास्तव आणि भ्रम',
  description: [
    'आधुनिक बँकिंग व्यवस्थेबद्दल असलेल्या अनेक गैरसमजांना या लेखात सखोलपणे उलगडण्यात आले आहे.',
    'पैशाची निर्मिती, कर्जवाटप आणि बँकिंग व्यवस्थेतील मूलभूत तत्त्वे यांचे सोप्या भाषेत विश्लेषण करण्यात आले आहे.'
  ],
  highlight:
    '“आपण बँकेत ठेवलेला पैसा तिजोरीत पडून राहत नाही; तो अर्थव्यवस्थेच्या प्रवाहाचा एक सक्रिय भाग बनतो.”',

  // image ऐवजी video URL वापरा
  video: 'https://www.youtube.com/embed/AKv7Tz3p_Bc',

  // image field पूर्णपणे काढून टाका
  // image: '/blog7.jpg',

  color: 'yellow',

  excerpt:
    'आधुनिक बँकिंग व्यवस्था कशी कार्य करते, बँका प्रत्यक्षात पैसा कसा निर्माण करतात आणि आर्थिक व्यवस्थेबद्दल असलेले भ्रम काय आहेत याचे सखोल विश्लेषण या लेखात करण्यात आले आहे.',

  author: 'देविदास तुळजापूरकर',
  category: 'Banking Education',
  date: '19 May 2026',

  content: `
    <p>बँकिंग व्यवस्था ही केवळ ठेवी स्वीकारून कर्ज देणारी संस्था नसून ती आधुनिक अर्थव्यवस्थेचा अत्यंत महत्त्वाचा पाया आहे. तथापि, बँका नेमक्या कशा प्रकारे कार्य करतात याबद्दल अनेक गैरसमज समाजात आढळून येतात.</p>

    <p>सामान्यतः असा समज असतो की बँकांकडे ठेवलेला पैसा तिजोरीत सुरक्षित ठेवला जातो आणि त्याच पैशातून कर्ज दिले जाते. प्रत्यक्षात, बँका कर्ज देताना नव्या पैशाची निर्मिती करतात. ही प्रक्रिया अर्थव्यवस्थेतील पतपुरवठा आणि आर्थिक वाढ यांना गती देते.</p>

    <p>जेव्हा एखाद्या व्यक्तीला किंवा उद्योगाला कर्ज मंजूर केले जाते, तेव्हा बँक त्या रकमेची नोंद ग्राहकाच्या खात्यात जमा स्वरूपात करते. त्यामुळे त्या क्षणी अर्थव्यवस्थेत नवीन पैसा निर्माण होतो. या प्रक्रियेमुळे बँकिंग व्यवस्थेची भूमिका केवळ मध्यस्थापेक्षा अधिक व्यापक ठरते.</p>

    <p>या व्यवस्थेचा लाभ आर्थिक विकासासाठी महत्त्वाचा असला तरी जोखीम व्यवस्थापन, नियमन आणि पारदर्शकता यांना तेवढेच महत्त्व आहे. म्हणूनच रिझर्व्ह बँक आणि इतर नियामक संस्था बँकांच्या कार्यपद्धतीवर सतत देखरेख ठेवतात.</p>

    <p>लेखात बँकिंग क्षेत्रातील या मूलभूत संकल्पनांचे सोप्या आणि समजण्यासारख्या भाषेत विश्लेषण करण्यात आले आहे. बँकिंगमध्ये करिअर करू इच्छिणाऱ्या विद्यार्थ्यांसाठी तसेच आर्थिक साक्षरता वाढवू इच्छिणाऱ्या वाचकांसाठी हा लेख विशेष उपयुक्त आहे.</p>

    <p>बँकिंग व्यवस्थेचे वास्तव समजून घेतल्यास आर्थिक निर्णय अधिक सुजाणपणे घेता येतात आणि वित्तीय संस्थांची अर्थव्यवस्थेतील भूमिका अधिक स्पष्टपणे लक्षात येते.</p>

    <!-- YouTube Video Embed -->
    <div class="my-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <iframe
        src="https://www.youtube.com/embed/AKv7Tz3p_Bc"
        title="The Great Banking Illusion"
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>

    <p>वरील व्हिडिओमध्ये आधुनिक बँकिंग व्यवस्था, पैशाची निर्मिती आणि आर्थिक व्यवस्थेतील मूलभूत संकल्पना अत्यंत सोप्या पद्धतीने स्पष्ट करण्यात आल्या आहेत.</p>

    <p>मूळ लेख वाचण्यासाठी
      <a href="https://open.substack.com/pub/devidastuljapurkar/p/the-great-banking-illusion?utm_source=share&utm_medium=android&r=8ut0k"
         target="_blank"
         rel="noopener noreferrer"
         class="text-blue-600 hover:underline">
         येथे क्लिक करा
      </a>.
    </p>
  `,
},
{
  id: '8',
  title: 'Write-Off of Bank Dues: Who Really Bears the Burden?',
  description: [
    'बँक कर्जांच्या राइट-ऑफ प्रक्रियेबाबत सामान्य नागरिकांमध्ये असलेल्या गैरसमजांचे विश्लेषण.',
    'मोठ्या उद्योगांना, कॉर्पोरेट कर्जदारांना आणि सामान्य ठेवीदारांना याचा नेमका काय परिणाम होतो यावर सविस्तर चर्चा.'
  ],
  highlight:
    '“राइट-ऑफ म्हणजे कर्जमाफी नव्हे; पण त्याचा लाभ नेमका कोणाला होतो हा प्रश्न अद्याप अनुत्तरित आहे.”',

  image: '/writeoff.png', // Optional: add image in public folder

  color: 'red',

  excerpt:
  'Corporate write-offs constitute one of the biggest forms of systemic wealth transfer in modern India. In the name of financial stability, public wealth is quietly being redistributed upward.',

  author: 'देविदास तुळजापूरकर',
  category: 'Banking Policy',
  date: '02 June 2026',

  content: `
    <p>मूळ लेख वाचण्यासाठी
      <a href="https://open.substack.com/pub/devidastuljapurkar/p/write-off-of-bank-dues-who-really?r=8ut0k&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
         target="_blank"
         rel="noopener noreferrer"
         class="text-blue-600 hover:underline">
         येथे क्लिक करा
      </a>.
    </p>
  `,
},
]

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((blog) => blog.id === id)
}

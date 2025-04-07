import { HerbData } from '../types/herbs';

export const herbsData: HerbData[] = [
  {
    id: 1,
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    slug: 'ashwagandha',
    description: 'Ashwagandha is an adaptogenic herb that has been used for over 3,000 years to help the body manage stress, boost energy levels, and improve concentration.',
    imageUrl: '/images/herbs/ashwagandha.jpg',
    rating: 4.8,
    categories: ['Adaptogen', 'Stress', 'Energy', 'Sleep', 'Immunity'],
    benefits: [
      'Helps reduce stress and anxiety',
      'May improve sleep quality',
      'Supports immune function',
      'May enhance muscle strength and recovery',
      'Supports cognitive function',
      'May help reduce inflammation'
    ],
    uses: [
      'Stress management and anxiety reduction',
      'Sleep improvement',
      'Immune system support',
      'Athletic performance enhancement',
      'Cognitive function support',
      'Hormonal balance for both men and women'
    ],
    funFact: 'The name "Ashwagandha" translates to "smell of horse" in Sanskrit, referring to both its distinct odor and the traditional belief that consuming it would give you the strength and vitality of a horse!',
    dosage: {
      powder: '1-2 teaspoons (3-6 grams) daily',
      capsule: '300-500 mg, 1-2 times daily',
      tincture: '2-4 ml, 2-3 times daily',
      tea: '1-2 teaspoons of dried root per cup, steep for 10 minutes'
    },
    warnings: [
      'Pregnant or breastfeeding women should avoid use',
      'May interact with thyroid medications',
      'May increase the effects of sedatives',
      'Should be discontinued at least 2 weeks before surgery'
    ],
    history: 'Ashwagandha has been a staple in Ayurvedic medicine for over 3,000 years. Its name means "smell of the horse" in Sanskrit, referring both to its unique smell and its traditional use for imparting the strength and vitality of a horse. In ancient texts, it was classified as a "Rasayana," a group of herbs used to promote physical and mental health, augment resistance to disease, and increase longevity. It was often prescribed for elderly people to rejuvenate body and mind, and for children as a tonic.',
    culturalBackground: 'In India, Ashwagandha has been used in traditional households as a general tonic and for addressing various ailments. It holds a sacred place in indigenous medical systems and is often used in religious ceremonies. The herb is mentioned in ancient texts like the Charaka Samhita (100 BC) and is considered one of the most important herbs in Ayurvedic medicine. It was traditionally prepared with milk and honey to enhance its rejuvenating properties.',
    preparation: 'Traditionally, Ashwagandha root is dried and ground into a fine powder. This powder can be mixed with warm milk and honey to make a tonic. In modern times, it\'s commonly consumed as capsules, tablets, or as part of adaptogenic blends. The root can also be tinctured in alcohol or prepared as a decoction.',
    preparations: [
      {
        name: 'Golden Milk',
        ingredients: ['1 cup milk (dairy or plant-based)', '1/2 tsp Ashwagandha powder', '1/4 tsp turmeric', 'Pinch of black pepper', 'Honey to taste'],
        instructions: 'Heat milk in a small saucepan. Add ashwagandha, turmeric, and black pepper. Simmer for 5 minutes, stirring occasionally. Remove from heat, strain if desired, and add honey to taste.'
      },
      {
        name: 'Stress-Relief Tincture',
        ingredients: ['2 tbsp dried Ashwagandha root', '1 cup high-proof alcohol (vodka or grain alcohol)', 'Glass jar with tight-fitting lid'],
        instructions: 'Place dried herb in glass jar. Cover completely with alcohol. Seal jar and store in a cool, dark place for 4-6 weeks, shaking occasionally. Strain through cheesecloth and store in a dark glass dropper bottle.'
      },
      {
        name: 'Rejuvenating Tea Blend',
        ingredients: ['1 tsp Ashwagandha root powder', '1 tsp cinnamon powder', '1/2 tsp ginger powder', '1/4 tsp cardamom powder', 'Honey and milk to taste'],
        instructions: 'Mix all herbs together. Add 1-2 teaspoons of mixture to a cup of hot water. Steep for 10 minutes, strain, and add honey and milk if desired.'
      }
    ],
    herbPairings: [
      {
        herb: 'Tulsi (Holy Basil)',
        benefit: 'Enhances stress-relieving properties and supports immune function'
      },
      {
        herb: 'Turmeric',
        benefit: 'Amplifies anti-inflammatory effects and supports overall wellness'
      },
      {
        herb: 'Ginger',
        benefit: 'Improves digestion and absorption of Ashwagandha'
      },
      {
        herb: 'Brahmi (Bacopa)',
        benefit: 'Creates a powerful cognitive enhancement combination'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Reduction', percentage: 85 },
      { area: 'Sleep Quality', percentage: 75 },
      { area: 'Immune Support', percentage: 70 },
      { area: 'Energy Levels', percentage: 80 },
      { area: 'Cognitive Function', percentage: 65 }
    ],
    resources: [
      {
        title: 'Adaptogens: Herbs for Strength, Stamina, and Stress Relief',
        author: 'David Winston & Steven Maimes',
        type: 'Book',
        link: 'https://example.com/adaptogen-book'
      },
      {
        title: 'Effects of Ashwagandha on Stress and Anxiety',
        author: 'Journal of Alternative and Complementary Medicine',
        type: 'Research Paper',
        link: 'https://example.com/ashwagandha-research'
      },
      {
        title: 'Ashwagandha in Traditional Ayurvedic Medicine',
        author: 'Ayurvedic Practitioners Association',
        type: 'Online Course',
        link: 'https://example.com/ayurveda-course'
      }
    ]
  },
  {
    id: 2,
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea',
    slug: 'echinacea',
    description: 'Echinacea is a powerful immune-boosting herb native to North America. It has been used for centuries to prevent and treat colds, flu, and other infections.',
    imageUrl: '/images/herbs/echinacea.jpg',
    rating: 4.6,
    categories: ['Immunity', 'Anti-inflammatory', 'Respiratory'],
    benefits: [
      'Boosts immune system function',
      'May reduce the duration and severity of colds and flu',
      'Has anti-inflammatory properties',
      'Supports respiratory health',
      'May help fight infections',
      'Supports wound healing'
    ],
    uses: [
      'Prevention and treatment of colds and flu',
      'Supporting immune system during illness',
      'Alleviating symptoms of upper respiratory infections',
      'Topical application for wound healing',
      'Supporting overall immune health'
    ],
    funFact: 'The name "Echinacea" comes from the Greek word "echinos," meaning hedgehog or sea urchin, referring to the spiky central cone of the flower!',
    dosage: {
      powder: '1-2 grams daily',
      capsule: '300-500 mg, 3 times daily',
      tincture: '2-3 ml, 3 times daily',
      tea: '1-2 teaspoons of dried herb per cup, steep for 10-15 minutes, drink 3 times daily'
    },
    warnings: [
      'May cause allergic reactions in people allergic to plants in the daisy family',
      'Not recommended for people with autoimmune disorders',
      'May interact with immunosuppressant medications',
      'Should be used cyclically (e.g., 10 days on, 4 days off) for best results'
    ],
    history: 'Echinacea has been used for centuries by Native American tribes as a remedy for various ailments, including wounds, burns, insect bites, toothaches, sore throats, and colds. The Comanche used it for sore throats and the Cheyenne used it for colds. It was adopted by American Eclectic physicians in the late 19th century and became a popular herb in the United States before the advent of antibiotics.',
    culturalBackground: 'Native American tribes, particularly the Plains Indians, considered Echinacea one of their most important medicinal plants. They discovered its benefits through observation and traditional knowledge passed down through generations. European settlers learned about Echinacea from Native Americans and brought this knowledge back to Europe, where it became popular in the early 20th century, especially in Germany where much of the scientific research on Echinacea has been conducted.',
    preparation: 'Echinacea can be prepared as a tea, tincture, or used in capsules. All parts of the plant can be used medicinally, but the roots are considered most potent. Fresh Echinacea is often preferred for making tinctures, while dried Echinacea is commonly used for teas and capsules.',
    preparations: [
      {
        name: 'Immune Boosting Tea',
        ingredients: ['1 tsp dried Echinacea root', '1 tsp dried Echinacea flowers', '1/2 tsp dried elderberries', '1/4 tsp dried ginger', 'Honey and lemon to taste'],
        instructions: 'Combine herbs in a tea infuser. Pour boiling water over herbs and steep for 10-15 minutes. Add honey and lemon to taste. Drink 3 times daily at the first sign of illness.'
      },
      {
        name: 'Echinacea Tincture',
        ingredients: ['1 part fresh Echinacea root, chopped', '1 part fresh Echinacea flowers and leaves, chopped', '2 parts high-proof alcohol (vodka or grain alcohol)'],
        instructions: 'Place plant material in a glass jar. Cover with alcohol. Seal jar and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in a dark glass dropper bottle.'
      },
      {
        name: 'Echinacea Throat Spray',
        ingredients: ['2 tbsp Echinacea tincture', '1 tbsp honey', '5 drops peppermint essential oil', '2 tbsp distilled water'],
        instructions: 'Mix all ingredients in a small spray bottle. Shake well before each use. Spray directly onto the back of the throat as needed for sore throat relief.'
      }
    ],
    herbPairings: [
      {
        herb: 'Elderberry',
        benefit: 'Enhances immune-boosting properties and provides additional antiviral support'
      },
      {
        herb: 'Goldenseal',
        benefit: 'Adds antimicrobial properties and supports mucous membrane health'
      },
      {
        herb: 'Ginger',
        benefit: 'Adds warming properties and supports circulation to enhance immune response'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Soothes throat irritation and enhances the overall effectiveness of the formula'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 90 },
      { area: 'Cold & Flu Relief', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 70 },
      { area: 'Respiratory Health', percentage: 75 },
      { area: 'Wound Healing', percentage: 65 }
    ],
    resources: [
      {
        title: 'Echinacea: The Immune Herb',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/echinacea-book'
      },
      {
        title: 'Efficacy of Echinacea for Upper Respiratory Tract Infections',
        author: 'Journal of Clinical Pharmacy and Therapeutics',
        type: 'Research Paper',
        link: 'https://example.com/echinacea-research'
      },
      {
        title: 'Growing and Using Echinacea',
        author: 'American Botanical Council',
        type: 'Guide',
        link: 'https://example.com/growing-echinacea'
      }
    ]
  }
];

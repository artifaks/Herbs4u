import { HerbData } from '../types/herbs';

const traditionalHerbs: HerbData[] = [
  {
    id: 27,
    name: 'Schisandra',
    scientificName: 'Schisandra chinensis',
    slug: 'schisandra',
    description: 'Schisandra is a powerful adaptogenic herb known as "five flavor berry" in Chinese medicine because it contains all five flavors (sweet, sour, bitter, pungent, and salty). It supports liver health, enhances mental performance, and increases resilience to stress.',
    imageUrl: '/images/herbs/schisandra.jpg',
    rating: 4.7,
    categories: ['Adaptogen', 'Liver Support', 'Cognitive', 'Stress Relief'],
    benefits: [
      'Supports liver function and detoxification',
      'Enhances mental performance and focus',
      'Increases physical endurance',
      'Helps the body adapt to stress',
      'May support healthy skin',
      'Traditionally used for longevity'
    ],
    uses: [
      'Supporting liver health',
      'Enhancing mental clarity and focus',
      'Increasing physical stamina',
      'Managing stress and fatigue',
      'Supporting healthy aging',
      'As a general tonic in traditional medicine'
    ],
    funFact: 'Schisandra is known as "wu wei zi" in Chinese, which means "five flavor berry." It\'s said to contain all five flavors recognized in Chinese medicine (sweet, sour, bitter, pungent, and salty), and thus nourishes all five yin organs (liver, kidneys, heart, lungs, and spleen)!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried berries per cup, simmer for 10-15 minutes'
    },
    warnings: [
      'May cause digestive upset in some individuals',
      'May interact with medications metabolized by the liver',
      'Not recommended during pregnancy without medical supervision',
      'May increase the effects of sedatives'
    ],
    history: 'Schisandra has been used in Traditional Chinese Medicine for over 2,000 years. It was first mentioned in the Shennong Ben Cao Jing, an ancient Chinese text on agriculture and medicinal plants from around 200 BCE. It was traditionally used as a tonic for the five yin organs and was believed to promote longevity, enhance vital energy, and improve mental function. It was often included in formulas for coughs, night sweats, insomnia, and physical exhaustion.',
    culturalBackground: 'In Chinese culture, Schisandra is considered one of the 50 fundamental herbs in Traditional Chinese Medicine. It is classified as an herb that "calms the spirit and nourishes the heart." In Russian and Siberian folk medicine, it was used by hunters to improve night vision, reduce hunger and thirst, and increase endurance. In the 1940s and 50s, it was extensively studied in Russia for its adaptogenic properties and was used by Soviet athletes and cosmonauts. In modern times, it has gained popularity worldwide as an adaptogenic supplement.',
    preparation: 'Schisandra berries are the part used medicinally. They can be prepared as a decoction (simmered in water), made into a tincture, or taken as a powder or extract in capsules. The berries have a complex flavor profile that includes all five tastes recognized in Chinese medicine. They are often combined with other adaptogens like Rhodiola and Eleuthero for enhanced effects.',
    preparations: [
      {
        name: 'Schisandra Berry Decoction',
        ingredients: [
          '1 tablespoon dried schisandra berries',
          '2 cups water',
          '1 teaspoon honey (optional)',
          '1 slice fresh ginger (optional)'
        ],
        instructions: 'Place schisandra berries and ginger (if using) in a small pot with water. Bring to a boil, then reduce heat and simmer for 15-20 minutes. Strain and add honey if desired. Drink 1 cup, 1-2 times daily as a tonic for liver health and stress management.'
      },
      {
        name: 'Adaptogenic Energy Tincture',
        ingredients: [
          '1 part dried schisandra berries',
          '1 part dried rhodiola root',
          '1 part dried eleuthero root',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 2-3 times daily for energy and stress support.'
      },
      {
        name: 'Five Flavor Tea',
        ingredients: [
          '1 teaspoon dried schisandra berries',
          '1 teaspoon dried goji berries',
          '1/2 teaspoon dried licorice root',
          '1/2 teaspoon dried orange peel',
          '1 small cinnamon stick',
          '3 cups water'
        ],
        instructions: 'Combine all ingredients in a pot. Bring to a boil, then reduce heat and simmer for 20-30 minutes. Strain and drink 1 cup, 1-2 times daily as a tonic for overall health and vitality. This tea combines the adaptogenic properties of schisandra with the blood-building effects of goji berries and the harmonizing qualities of licorice.'
      }
    ],
    herbPairings: [
      {
        herb: 'Rhodiola',
        benefit: 'Enhanced adaptogenic effects for stress management and energy'
      },
      {
        herb: 'Eleuthero',
        benefit: 'Complementary support for physical endurance and stress resilience'
      },
      {
        herb: 'Reishi Mushroom',
        benefit: 'Added immune support and liver protection'
      },
      {
        herb: 'Goji Berry',
        benefit: 'Traditional pairing in Chinese medicine for vitality and longevity'
      }
    ],
    benefitsVisualization: [
      { area: 'Liver Support', percentage: 90 },
      { area: 'Stress Adaptation', percentage: 85 },
      { area: 'Cognitive Function', percentage: 80 },
      { area: 'Physical Endurance', percentage: 75 },
      { area: 'Longevity Support', percentage: 85 }
    ],
    resources: [
      {
        title: 'Adaptogenic Activity of Schisandra chinensis Baill. Extract',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/schisandra-adaptogenic'
      },
      {
        title: 'Hepatoprotective Effects of Schisandra chinensis',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/schisandra-liver'
      },
      {
        title: 'Adaptogens: Herbs for Strength, Stamina, and Stress Relief',
        author: 'David Winston and Steven Maimes',
        type: 'Book',
        link: 'https://example.com/adaptogens-book'
      }
    ]
  },
  {
    id: 28,
    name: 'Burdock Root',
    scientificName: 'Arctium lappa',
    slug: 'burdock-root',
    description: 'Burdock root is a traditional blood purifier and detoxifying herb that supports liver function, skin health, and lymphatic circulation. It has been used for centuries in various healing traditions for its cleansing and restorative properties.',
    imageUrl: '/images/herbs/burdock-root.jpg',
    rating: 4.5,
    categories: ['Detoxification', 'Skin Health', 'Digestive', 'Blood Purifier'],
    benefits: [
      'Supports liver function and detoxification',
      'Promotes healthy skin and may help with skin conditions',
      'Supports lymphatic system function',
      'Has mild diuretic properties',
      'Contains prebiotic fibers that support gut health',
      'Has anti-inflammatory properties'
    ],
    uses: [
      'Supporting skin health and treating skin conditions',
      'Promoting detoxification and cleansing',
      'Supporting digestive health',
      'As a blood purifier in traditional medicine',
      'Supporting lymphatic system function',
      'As a food (popular in Japanese cuisine as "gobo")'
    ],
    funFact: 'Burdock was the inspiration for Velcro! In the 1940s, Swiss engineer George de Mestral noticed how burdock burrs stuck to his clothes and his dog\'s fur. When he examined them under a microscope, he saw the tiny hooks that inspired his invention of Velcro!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried root per cup, simmer for 15-20 minutes'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the daisy family',
      'May interact with blood-thinning medications',
      'May lower blood sugar levels',
      'Not recommended during pregnancy without medical supervision'
    ],
    history: 'Burdock has been used medicinally for centuries across many cultures. In Traditional Chinese Medicine, it has been used for at least 3,000 years as a blood purifier and to treat sore throats and colds. In European folk medicine, it was used for skin conditions, rheumatism, and as a diuretic. Native Americans used it for skin problems, digestive issues, and venereal disease. In the Middle Ages, it was used to treat leprosy and other skin conditions. In the 17th century, culpeper described it as a good remedy for "old sores and ulcers."',
    culturalBackground: 'In Japanese culture, burdock root (known as "gobo") is a common food, often used in dishes like kinpira gobo. In Traditional Chinese Medicine, it is known as "niu bang zi" and is used to clear heat and toxins from the body. In European folk medicine, it was one of the key ingredients in traditional blood-cleansing formulas. In modern Western herbalism, it became popular in the 19th century as part of the Thomsonian and Eclectic systems of medicine, particularly for skin conditions and as a blood purifier.',
    preparation: 'Burdock root is the part most commonly used medicinally, though the seeds and leaves can also be used. The root is typically dried and prepared as a decoction (simmered in water), made into a tincture, or taken as a powder in capsules. Fresh root can also be used in cooking, where it has a earthy, sweet flavor similar to Jerusalem artichoke. For skin conditions, it is often combined with other alterative herbs like yellow dock and dandelion.',
    preparations: [
      {
        name: 'Burdock Root Decoction',
        ingredients: [
          '1 tablespoon dried burdock root',
          '2 cups water',
          '1 teaspoon honey (optional)',
          '1 slice fresh ginger (optional)'
        ],
        instructions: 'Place burdock root and ginger (if using) in a small pot with water. Bring to a boil, then reduce heat and simmer for 15-20 minutes. Strain and add honey if desired. Drink 1 cup, 2-3 times daily as a blood purifier and for skin health.'
      },
      {
        name: 'Skin Cleansing Tincture',
        ingredients: [
          '1 part dried burdock root',
          '1 part dried yellow dock root',
          '1 part dried dandelion root',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for skin conditions and detoxification.'
      },
      {
        name: 'Kinpira Gobo (Japanese Burdock Root Stir-Fry)',
        ingredients: [
          '1 large burdock root (about 1 foot long)',
          '1 carrot',
          '1 tablespoon sesame oil',
          '1 tablespoon tamari or soy sauce',
          '1 teaspoon honey or maple syrup',
          '1 tablespoon toasted sesame seeds'
        ],
        instructions: 'Scrub burdock root thoroughly (no need to peel). Cut into matchstick-sized pieces and soak in water for 5-10 minutes to remove bitterness. Drain well. Cut carrot into matchsticks. Heat sesame oil in a pan and stir-fry burdock for 5 minutes. Add carrot and stir-fry for another 3 minutes. Add tamari and sweetener, cover, and simmer for 5 minutes until tender. Sprinkle with sesame seeds before serving. This traditional Japanese dish is both medicinal and delicious.'
      }
    ],
    herbPairings: [
      {
        herb: 'Yellow Dock',
        benefit: 'Enhanced blood-purifying and liver-supporting effects'
      },
      {
        herb: 'Dandelion Root',
        benefit: 'Complementary detoxification support for liver and kidneys'
      },
      {
        herb: 'Red Clover',
        benefit: 'Added blood-cleansing properties for skin conditions'
      },
      {
        herb: 'Nettle',
        benefit: 'Nutritive support alongside detoxification'
      }
    ],
    benefitsVisualization: [
      { area: 'Skin Health', percentage: 90 },
      { area: 'Detoxification', percentage: 85 },
      { area: 'Digestive Support', percentage: 80 },
      { area: 'Lymphatic Health', percentage: 75 },
      { area: 'Anti-inflammatory', percentage: 70 }
    ],
    resources: [
      {
        title: 'Burdock (Arctium lappa): A Review of its Traditional Uses, Phytochemistry and Pharmacology',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/burdock-review'
      },
      {
        title: 'Anti-inflammatory Effects of Arctium lappa L.',
        author: 'Phytomedicine',
        type: 'Research Paper',
        link: 'https://example.com/burdock-inflammation'
      },
      {
        title: 'The Earthwise Herbal: A Complete Guide to Old World Medicinal Plants',
        author: 'Matthew Wood',
        type: 'Book',
        link: 'https://example.com/earthwise-herbal'
      }
    ]
  },
  {
    id: 29,
    name: 'Skullcap',
    scientificName: 'Scutellaria lateriflora',
    slug: 'skullcap',
    description: 'Skullcap is a powerful nervine herb that has been used for centuries to calm the nervous system, reduce anxiety, and support restful sleep. It is particularly valued for its ability to relax without causing drowsiness.',
    imageUrl: '/images/herbs/skullcap.jpg',
    rating: 4.6,
    categories: ['Nervine', 'Sleep', 'Anxiety Relief', 'Nervous System'],
    benefits: [
      'Calms the nervous system without sedation',
      'Helps reduce anxiety and nervousness',
      'Supports healthy sleep patterns',
      'May help with muscle tension and spasms',
      'Traditionally used for headaches',
      'May support those recovering from addiction'
    ],
    uses: [
      'Managing anxiety and stress',
      'Supporting healthy sleep',
      'Easing nervous tension',
      'Relieving headaches, particularly tension headaches',
      'Supporting withdrawal from addictive substances',
      'As a gentle nervine for sensitive individuals'
    ],
    funFact: 'Skullcap got its name from the shape of its flowers, which resemble medieval helmets or "skullcaps." In the 19th century, it was known as "mad dog weed" because it was used to treat rabies!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause drowsiness in some individuals',
      'Should not be combined with sedative medications',
      'Not recommended during pregnancy without medical supervision',
      'May interact with anti-seizure medications',
      'Be cautious of commercial products, as Chinese skullcap (a different species) is sometimes substituted'
    ],
    history: 'Skullcap has been used medicinally by Native American tribes for centuries. The Cherokee used it as a tonic for women\'s health issues and to stimulate menstruation. The Iroquois used it to maintain mental health, and the Menominee used it to induce visions. In the 19th century, it became popular among Eclectic physicians (a branch of American medicine that used herbal remedies) for treating nervousness, insomnia, and even rabies. It was listed in the United States Pharmacopeia from 1863 to 1916 and in the National Formulary until 1947.',
    culturalBackground: 'In Native American cultures, skullcap was considered a sacred plant used in ceremonial contexts and for healing. In Appalachian folk medicine, it was a common remedy for nervousness and insomnia. In the 19th century, it was widely used in the Physiomedicalist and Eclectic medical movements in America. In modern Western herbalism, it is considered one of the most important nervine herbs and is often used for anxiety, insomnia, and nervous tension.',
    preparation: 'The aerial parts (leaves, stems, and flowers) of skullcap are used medicinally. They can be prepared as a tea, tincture, or taken in capsules. Fresh plant tinctures are often preferred for their potency. For anxiety and stress, it is often combined with other nervine herbs such as passionflower and lemon balm. For sleep support, it may be combined with valerian or hops.',
    preparations: [
      {
        name: 'Skullcap Calm Tea',
        ingredients: [
          '1 teaspoon dried skullcap',
          '1 teaspoon dried lemon balm',
          '1/2 teaspoon dried lavender flowers',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1-3 cups daily for anxiety and stress relief. This tea combines the nervine properties of skullcap with the calming effects of lemon balm and lavender.'
      },
      {
        name: 'Skullcap Tincture',
        ingredients: [
          '1 cup fresh skullcap herb (or 1/2 cup dried)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Chop fresh skullcap if using. Place herb in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for anxiety or as needed during stressful situations.'
      },
      {
        name: 'Nervous System Support Formula',
        ingredients: [
          '1 part dried skullcap',
          '1 part dried passionflower',
          '1 part dried oat straw',
          '1/2 part dried St. John\'s wort',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for long-term nervous system support and stress resilience.'
      }
    ],
    herbPairings: [
      {
        herb: 'Passionflower',
        benefit: 'Enhanced calming effects for anxiety and overthinking'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Complementary nervine support with added mood-lifting properties'
      },
      {
        herb: 'Valerian',
        benefit: 'Powerful combination for sleep support'
      },
      {
        herb: 'Oat Straw',
        benefit: 'Added nutritive support for the nervous system'
      }
    ],
    benefitsVisualization: [
      { area: 'Anxiety Relief', percentage: 90 },
      { area: 'Nervous System Support', percentage: 85 },
      { area: 'Sleep Quality', percentage: 80 },
      { area: 'Muscle Relaxation', percentage: 75 },
      { area: 'Headache Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Anxiolytic Properties of American Skullcap (Scutellaria lateriflora)',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/skullcap-anxiety'
      },
      {
        title: 'GABA-A Receptor Activity of Skullcap and Related Herbs',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/skullcap-gaba'
      },
      {
        title: 'Skullcap: An Herbal Ally for the Nervous System',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/skullcap-nervine'
      }
    ]
  }
];

export default traditionalHerbs;

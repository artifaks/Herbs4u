import { HerbData } from '../types/herbs';

const adaptogenicHerbs: HerbData[] = [
  {
    id: 107,
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    slug: 'ashwagandha',
    description: 'Ashwagandha is a powerful adaptogenic herb that has been used in Ayurvedic medicine for over 3,000 years to reduce stress, increase energy, and improve concentration while supporting overall vitality and resilience.',
    imageUrl: '/images/herbs/ashwagandha.jpg',
    rating: 4.9,
    categories: ['Adaptogen', 'Stress Relief', 'Energy', 'Immune Support', 'Cognitive Function'],
    benefits: [
      'Helps the body adapt to stress',
      'Supports healthy adrenal function',
      'Improves sleep quality',
      'Enhances mental clarity and focus',
      'Supports immune system function',
      'May help reduce anxiety and depression',
      'Supports healthy thyroid function'
    ],
    uses: [
      'Managing chronic stress',
      'Supporting healthy energy levels',
      'Improving sleep quality',
      'Enhancing cognitive function',
      'Supporting immune system during stress',
      'As part of adaptogenic formulas for overall vitality'
    ],
    funFact: 'The name "ashwagandha" means "smell of horse" in Sanskrit, referring both to the herb\'s distinct odor and the traditional belief that consuming it would give you the strength and vitality of a horse. In Ayurvedic tradition, it is classified as a "rasayana," one of the most powerful herbs for promoting longevity and rejuvenation.',
    dosage: {
      powder: '1-2 teaspoons (3-6g) daily',
      capsule: '300-600mg, 1-2 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1 teaspoon root simmered in 1 cup water for 15 minutes, 1-2 cups daily'
    },
    warnings: [
      'May increase thyroid hormone levels, requiring monitoring in those with thyroid conditions',
      'May interact with medications for diabetes, high blood pressure, and immunosuppressants',
      'May cause mild digestive upset in sensitive individuals',
      'Not recommended during pregnancy without medical supervision',
      'May cause drowsiness in some individuals'
    ],
    history: 'Ashwagandha has been used in Ayurvedic medicine for over 3,000 years. It appears in the ancient Ayurvedic text, the Charaka Samhita (100-200 CE), where it was prescribed for a wide range of conditions including weakness, rheumatism, and reproductive issues. It was traditionally used as a "rasayana" or rejuvenative tonic, particularly for the elderly and debilitated. In traditional Indian medicine, it was often given to children as a tonic and to the elderly to increase longevity. It was also used by warriors to increase strength and recovery from battle. In the 20th century, it began to be studied scientifically, with research confirming many of its traditional uses, particularly its adaptogenic properties.',
    culturalBackground: 'In Ayurvedic tradition, ashwagandha is considered one of the most important herbs and is classified as a "rasayana" (rejuvenative) and "medhya rasayana" (promoting intellect). It is associated with the root chakra and is believed to ground energy and promote stability. In traditional Indian culture, it was often given to children mixed with milk and honey to promote growth and development. In some regions of India, the fresh roots are used in religious ceremonies. In modern Western herbalism, it has gained popularity as an adaptogen for stress management and is often referred to as "Indian ginseng" (though it is botanically unrelated to true ginseng).',
    preparation: 'The root is the primary medicinal part of ashwagandha, typically harvested from plants that are at least 1 year old. In traditional Ayurvedic preparation, the dried root is often powdered and mixed with warm milk and honey, a preparation called "ashwagandha ksheerpaka." It can also be prepared as a decoction, tincture, or taken in capsule form. For enhanced absorption, it is traditionally taken with a small amount of fat or warm liquid. It is often combined with other adaptogenic herbs like holy basil, shatavari, or licorice for synergistic effects.',
    preparations: [
      {
        name: 'Traditional Ashwagandha Milk',
        ingredients: [
          '1 teaspoon ashwagandha root powder',
          '1 cup milk (dairy or plant-based)',
          '1/2 teaspoon ghee or coconut oil',
          '1/4 teaspoon cardamom powder',
          '1/4 teaspoon cinnamon powder',
          'Pinch of nutmeg',
          'Honey or maple syrup to taste',
          'Pinch of saffron (optional)'
        ],
        instructions: 'In a small saucepan, combine the milk, ashwagandha powder, ghee or coconut oil, and spices. Heat gently over low-medium heat, stirring occasionally to prevent the milk from scorching. Bring to a gentle simmer and continue to simmer for about 5 minutes, allowing the herbs and spices to infuse into the milk. Remove from heat and strain if desired (though traditionally the powder is consumed with the milk). Add honey or maple syrup to taste, and saffron if using. Drink warm, preferably in the evening about an hour before bedtime to promote restful sleep. This traditional preparation enhances the absorption of ashwagandha and combines its adaptogenic properties with the nourishing qualities of milk and warming spices.'
      },
      {
        name: 'Ashwagandha Stress Relief Balls',
        ingredients: [
          '1 cup ashwagandha root powder',
          '1/2 cup dates, pitted and soaked in warm water for 30 minutes',
          '1/4 cup almond butter or tahini',
          '2 tablespoons raw honey',
          '2 tablespoons coconut oil, melted',
          '1 tablespoon cacao powder (optional)',
          '1 teaspoon cinnamon powder',
          '1/2 teaspoon cardamom powder',
          'Pinch of sea salt',
          'Unsweetened shredded coconut or additional ashwagandha powder for rolling (optional)'
        ],
        instructions: 'Drain the soaked dates and place them in a food processor. Process until they form a smooth paste. Add the almond butter or tahini, honey, and melted coconut oil, and process until well combined. Add the ashwagandha powder, cacao powder (if using), cinnamon, cardamom, and salt. Process until a uniform, sticky dough forms. If the mixture is too wet, add more ashwagandha powder; if too dry, add a small amount of water or honey. Using clean hands, roll the mixture into small balls, about 1 inch in diameter. If desired, roll the balls in shredded coconut or additional ashwagandha powder to coat. Place the balls on a parchment-lined tray and refrigerate for at least 1 hour to firm up. Store in an airtight container in the refrigerator for up to 2 weeks. Consume 1-2 balls daily as a convenient and tasty way to incorporate ashwagandha into your routine, particularly during times of stress or when energy levels are low.'
      }
    ],
    herbPairings: [
      {
        herb: 'Holy Basil',
        benefit: 'Enhances adaptogenic effects and adds calming properties'
      },
      {
        herb: 'Shatavari',
        benefit: 'Complements hormonal balancing effects and adds moistening properties'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Enhances adaptogenic effects and improves flavor'
      },
      {
        herb: 'Ginger',
        benefit: 'Improves absorption and adds warming properties'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Adaptation', percentage: 95 },
      { area: 'Energy Enhancement', percentage: 85 },
      { area: 'Sleep Quality', percentage: 80 },
      { area: 'Cognitive Function', percentage: 75 },
      { area: 'Immune Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Ashwagandha: Ancient Herb for Modern Stress',
        author: 'David Winston',
        type: 'Book',
        link: 'https://example.com/ashwagandha-book'
      },
      {
        title: 'An Overview on Ashwagandha: A Rasayana (Rejuvenator) of Ayurveda',
        author: 'African Journal of Traditional, Complementary and Alternative Medicines',
        type: 'Research Paper',
        link: 'https://example.com/ashwagandha-research'
      },
      {
        title: 'Ashwagandha Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/ashwagandha-monograph'
      }
    ]
  },
  {
    id: 108,
    name: 'Reishi Mushroom',
    scientificName: 'Ganoderma lucidum',
    slug: 'reishi-mushroom',
    description: 'Reishi mushroom, known as the "mushroom of immortality" in ancient Chinese medicine, is a powerful adaptogenic fungus that supports immune function, promotes stress resilience, and has been revered for thousands of years for its ability to enhance vitality and longevity.',
    imageUrl: '/images/herbs/reishi-mushroom.jpg',
    rating: 4.8,
    categories: ['Adaptogen', 'Immune Support', 'Longevity', 'Stress Relief', 'Sleep Support'],
    benefits: [
      'Supports immune system function',
      'Helps the body adapt to stress',
      'Promotes restful sleep',
      'Supports liver health and detoxification',
      'Provides antioxidant protection',
      'Supports heart health and healthy blood pressure',
      'May help reduce allergic responses'
    ],
    uses: [
      'Supporting immune function during cold and flu season',
      'Managing chronic stress',
      'Improving sleep quality',
      'Supporting liver detoxification',
      'As part of longevity and anti-aging protocols',
      'Supporting respiratory health'
    ],
    funFact: 'Reishi mushroom was so valued in ancient China that it was reserved exclusively for the emperor and royal family. It was considered so precious that anyone outside the royal court who was caught harvesting or possessing reishi could be sentenced to death! In Taoist mythology, it was believed that consuming reishi regularly would grant immortality and allow one to live among the celestial beings.',
    dosage: {
      powder: '1-2 teaspoons (2-4g) daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried mushroom simmered in 2 cups water for 30-60 minutes, 1-2 cups daily'
    },
    warnings: [
      'May interact with blood thinning medications and should be discontinued 2 weeks before surgery',
      'May lower blood pressure, requiring monitoring in those on blood pressure medications',
      'May cause digestive upset in sensitive individuals',
      'Not recommended during pregnancy without medical supervision',
      'May cause allergic reactions in those sensitive to mushrooms',
      'Effects develop gradually over weeks to months of consistent use'
    ],
    history: 'Reishi mushroom has been used in Traditional Chinese Medicine for at least 2,000 years. It first appears in the Shennong Ben Cao Jing (Divine Farmer\'s Materia Medica), one of the oldest Chinese medical texts, compiled around 200 CE. It was classified as a superior herb, meaning it could be taken continuously without side effects. In ancient China, it was associated with immortality, spiritual potency, and royal power. During the Ming Dynasty (1368-1644), it was extensively documented in the pharmacopeia Ben Cao Gang Mu by Li Shizhen. In Japan, it has been used since at least the 15th century and is known as "reishi" or "mannentake" (10,000-year mushroom). In the 20th century, scientific research began to validate many of its traditional uses, particularly its immune-modulating and adaptogenic properties.',
    culturalBackground: 'In Chinese culture, reishi is one of the most revered medicinal substances and is associated with longevity, divine power, and good fortune. It appears in countless works of art, often depicted with immortals and deities. In Taoist tradition, it is considered one of the "herbs of immortality" and is associated with the three treasures: jing (essence), qi (energy), and shen (spirit). In Japanese culture, it symbolizes success, divine power, and longevity. In Korean tradition, it is called "yeongji" and is used in traditional medicine and folk remedies. In modern times, it has become popular worldwide as an adaptogen and immune support, often referred to as the "queen of mushrooms" for its extensive health benefits.',
    preparation: 'The fruiting body (the visible mushroom) is the medicinal part of reishi, which is extremely woody and bitter, making it unsuitable for culinary use. Due to its tough texture, reishi requires extended extraction to access its medicinal compounds. Traditionally, it is prepared as a decoction (simmered for 1-2 hours) or as an alcohol tincture. Modern preparations include hot water extracts, dual extracts (combining hot water and alcohol extraction), and concentrated powders. The active compounds include triterpenes (bitter compounds) and polysaccharides (immune-modulating compounds), which require different extraction methods. For comprehensive benefits, dual-extraction products are often preferred.',
    preparations: [
      {
        name: 'Reishi Immune Support Decoction',
        ingredients: [
          '1/4 cup dried reishi mushroom slices',
          '2 tablespoons dried astragalus root (optional)',
          '1 tablespoon dried codonopsis root (optional)',
          '1 inch piece fresh ginger, sliced',
          '2 cinnamon sticks',
          '3 cups filtered water',
          'Honey or maple syrup to taste (optional)',
          'Lemon slice (optional)'
        ],
        instructions: 'Break or cut the dried reishi mushroom into small pieces to increase surface area. In a medium pot, combine the reishi, optional herbs, ginger, cinnamon, and water. Bring to a boil, then reduce heat to a very low simmer. Cover and simmer for 1-2 hours, adding more water if needed to maintain at least 1 cup of liquid. The longer it simmers, the stronger the decoction will be. Strain through a fine mesh strainer, pressing on the herbs to extract all liquid. Add honey or maple syrup and lemon if desired to improve the bitter flavor. Drink 1/2 cup, 1-2 times daily to support immune function and stress resilience. This decoction can be stored in the refrigerator for up to 3 days and reheated as needed.'
      },
      {
        name: 'Reishi Longevity Elixir',
        ingredients: [
          '2 tablespoons reishi mushroom extract powder (dual-extracted)',
          '1 tablespoon raw cacao powder',
          '1 teaspoon maca powder (optional)',
          '1/2 teaspoon cinnamon powder',
          '1/4 teaspoon cardamom powder',
          'Pinch of sea salt',
          '1 cup hot water or plant-based milk',
          '1 teaspoon coconut oil or ghee',
          '1 tablespoon honey or maple syrup',
          '1/4 teaspoon vanilla extract'
        ],
        instructions: 'In a blender, combine all dry ingredients (reishi extract, cacao, maca, cinnamon, cardamom, and salt). Add the hot water or milk, coconut oil or ghee, sweetener, and vanilla. Blend on high for 30 seconds until frothy and well combined. Pour into a mug and enjoy warm. This elixir can be consumed daily, preferably in the morning or afternoon, as a delicious way to incorporate reishi into your routine. The combination of reishi with healthy fats enhances absorption, while the warming spices and cacao help mask reishi\'s bitter flavor. This preparation supports immune function, stress resilience, and overall vitality.'
      }
    ],
    herbPairings: [
      {
        herb: 'Astragalus',
        benefit: 'Enhances immune support and adds energy-building properties'
      },
      {
        herb: 'Cordyceps',
        benefit: 'Complements adaptogenic effects and adds lung support'
      },
      {
        herb: 'Schisandra',
        benefit: 'Enhances liver support and adds stress-protective effects'
      },
      {
        herb: 'He Shou Wu',
        benefit: 'Adds blood-building and longevity-enhancing properties'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Modulation', percentage: 95 },
      { area: 'Stress Adaptation', percentage: 85 },
      { area: 'Sleep Quality', percentage: 80 },
      { area: 'Liver Support', percentage: 85 },
      { area: 'Longevity Support', percentage: 90 }
    ],
    resources: [
      {
        title: 'Reishi: Mushroom of Immortality',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/reishi-book'
      },
      {
        title: 'Ganoderma lucidum (Reishi mushroom) for cancer treatment',
        author: 'Cochrane Database of Systematic Reviews',
        type: 'Research Paper',
        link: 'https://example.com/reishi-research'
      },
      {
        title: 'Reishi Mushroom Monograph',
        author: 'American Herbal Pharmacopoeia',
        type: 'Monograph',
        link: 'https://example.com/reishi-monograph'
      }
    ]
  },
  {
    id: 109,
    name: 'Schisandra',
    scientificName: 'Schisandra chinensis',
    slug: 'schisandra',
    description: 'Schisandra is a remarkable adaptogenic berry that contains all five flavors (sweet, sour, salty, bitter, and pungent) and has been used in Traditional Chinese Medicine for centuries to support liver health, enhance mental performance, and increase resilience to stress.',
    imageUrl: '/images/herbs/schisandra.jpg',
    rating: 4.7,
    categories: ['Adaptogen', 'Liver Support', 'Cognitive Function', 'Stress Relief', 'Longevity'],
    benefits: [
      'Supports liver health and detoxification',
      'Enhances mental clarity and focus',
      'Helps the body adapt to stress',
      'Supports adrenal function',
      'Provides antioxidant protection',
      'Supports healthy skin',
      'May improve physical endurance'
    ],
    uses: [
      'Supporting liver function and detoxification',
      'Enhancing mental performance during stress',
      'Supporting recovery from illness or fatigue',
      'As part of adaptogenic formulas for stress',
      'Supporting healthy aging',
      'Addressing adrenal fatigue'
    ],
    funFact: 'Schisandra is known as "wu wei zi" in Chinese, which literally means "five flavor berry" because it contains all five flavors recognized in Traditional Chinese Medicine: sweet, sour, salty, bitter, and pungent. According to TCM theory, this makes it an exceptionally balanced herb that can affect all five organ systems (liver, heart, spleen, lungs, and kidneys) and the five elements (wood, fire, earth, metal, and water).',
    dosage: {
      powder: '1-2 teaspoons (2-4g) daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried berries simmered in 1 cup water for 10-15 minutes, 1-2 cups daily'
    },
    warnings: [
      'May cause digestive upset in sensitive individuals',
      'May interact with medications metabolized by the liver',
      'Not recommended during pregnancy without medical supervision',
      'May increase stomach acid, caution with ulcers or gastritis',
      'May cause allergic reactions in sensitive individuals'
    ],
    history: 'Schisandra has been used in Traditional Chinese Medicine for at least 2,000 years. It first appears in the Shennong Ben Cao Jing (Divine Farmer\'s Materia Medica), one of the oldest Chinese medical texts, compiled around 200 CE. It was classified as a superior herb, meaning it could be taken continuously without side effects. It was traditionally used to "calm the heart and quiet the spirit," treat insomnia, prevent aging, increase energy, and treat liver and kidney ailments. During the Tang Dynasty (618-907 CE), it gained popularity as a beauty tonic for the imperial court. In the 1940s and 1950s, Russian scientists began studying schisandra extensively, leading to its classification as an adaptogen. Soviet Olympic athletes and cosmonauts used it to enhance performance and resilience to stress.',
    culturalBackground: 'In Chinese culture, schisandra is considered one of the most important herbs for longevity and is often included in traditional formulas for preserving youth and beauty. It is associated with the Taoist pursuit of immortality and is mentioned in numerous ancient texts on longevity practices. In traditional Korean medicine, it is called "omija" and is used in similar ways to Chinese medicine. In Russia, it is known as "limonnik" (lemon wood) due to the lemony scent of its stems and leaves, and has been used by the Nanai hunters of Siberia to improve night vision, reduce hunger and thirst, and prevent exhaustion during long hunting expeditions. In modern times, it has gained popularity worldwide as an adaptogen and liver tonic.',
    preparation: 'The berries are the medicinal part of schisandra, typically harvested when fully ripe and bright red. They can be prepared as a decoction, tincture, or taken in capsule form. In Traditional Chinese Medicine, the berries are often soaked in wine to extract both the water-soluble and alcohol-soluble compounds. For a traditional preparation, the berries may be simmered for 10-15 minutes or soaked in hot water for several hours. The taste is complex due to the five flavors, with sour and bitter notes predominating. It is often combined with other adaptogenic herbs like reishi, astragalus, or eleuthero for synergistic effects.',
    preparations: [
      {
        name: 'Schisandra Berry Syrup',
        ingredients: [
          '1 cup dried schisandra berries',
          '3 cups filtered water',
          '1 cup raw honey',
          '1 tablespoon lemon juice or brandy (as a preservative)',
          '1 cinnamon stick (optional)',
          '1 inch piece fresh ginger, sliced (optional)',
          'Large pot',
          'Fine mesh strainer or cheesecloth',
          'Glass bottles for storage'
        ],
        instructions: 'In a medium pot, combine the schisandra berries, cinnamon stick, ginger (if using), and water. Bring to a boil, then reduce heat and simmer, covered, for about 30-40 minutes, until the liquid is reduced by half and the berries are soft. Mash the berries with a potato masher or the back of a wooden spoon to release more of their medicinal properties. Continue to simmer for another 10 minutes. Strain the decoction through a fine mesh strainer or cheesecloth, pressing to extract all liquid. Return the liquid to a clean pot and add the honey. Heat gently, stirring constantly, until the honey is fully dissolved (do not boil). Remove from heat and add the lemon juice or brandy. Pour the syrup into sterilized glass bottles and label with the date and contents. Store in the refrigerator, where it will keep for 3-6 months. Take 1-2 teaspoons, 1-3 times daily to support liver function, enhance mental clarity, and increase resilience to stress. This syrup is particularly helpful during times of mental or physical exertion.'
      },
      {
        name: 'Schisandra Five Flavor Tea',
        ingredients: [
          '2 tablespoons dried schisandra berries',
          '1 tablespoon dried goji berries',
          '1 teaspoon dried licorice root',
          '1 teaspoon dried orange peel',
          '1 cinnamon stick',
          '3 cups filtered water',
          'Honey or maple syrup to taste (optional)',
          'Lemon slice (optional)'
        ],
        instructions: 'In a medium pot, combine all herbs and water. Bring to a boil, then reduce heat to a low simmer. Cover and simmer for 15-20 minutes. Remove from heat and let steep for an additional 10 minutes. Strain through a fine mesh strainer, pressing on the herbs to extract all liquid. Add honey or maple syrup and lemon if desired to balance the complex flavor. Drink 1 cup, 1-2 times daily to support liver function, enhance mental clarity, and increase resilience to stress. This tea combines the five-flavor properties of schisandra with the blood-building effects of goji berries, the harmonizing qualities of licorice, and the digestive support of orange peel and cinnamon.'
      }
    ],
    herbPairings: [
      {
        herb: 'Reishi Mushroom',
        benefit: 'Enhances adaptogenic effects and adds immune support'
      },
      {
        herb: 'Eleuthero',
        benefit: 'Complements energy-building effects and adds physical endurance'
      },
      {
        herb: 'Goji Berry',
        benefit: 'Adds blood-building and eye-nourishing properties'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Harmonizes the formula and enhances flavor'
      }
    ],
    benefitsVisualization: [
      { area: 'Liver Support', percentage: 90 },
      { area: 'Cognitive Function', percentage: 85 },
      { area: 'Stress Adaptation', percentage: 85 },
      { area: 'Adrenal Support', percentage: 80 },
      { area: 'Antioxidant Activity', percentage: 75 }
    ],
    resources: [
      {
        title: 'Schisandra: Ultimate Adaptogen',
        author: 'David Winston',
        type: 'Book',
        link: 'https://example.com/schisandra-book'
      },
      {
        title: 'Schisandra chinensis: An Herb with Potent Hepatoprotective Effects',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/schisandra-research'
      },
      {
        title: 'Schisandra Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/schisandra-monograph'
      }
    ]
  }
];

export default adaptogenicHerbs;

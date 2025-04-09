import { HerbData } from '../types/herbs';

const additionalMedicinalHerbs: HerbData[] = [
  {
    id: 101,
    name: 'Milk Thistle',
    scientificName: 'Silybum marianum',
    slug: 'milk-thistle',
    description: 'Milk thistle is renowned for its liver-protective and detoxifying properties, with a long history of use in supporting liver health and addressing various liver conditions.',
    imageUrl: '/images/herbs/milk-thistle.jpg',
    rating: 4.8,
    categories: ['Liver Health', 'Detoxification', 'Antioxidant', 'Digestive Support'],
    benefits: [
      'Protects liver cells from toxins and damage',
      'Supports liver regeneration',
      'Provides powerful antioxidant effects',
      'May help lower cholesterol levels',
      'Supports healthy insulin levels',
      'May help reduce inflammation'
    ],
    uses: [
      'Supporting liver function and detoxification',
      'Addressing fatty liver disease',
      'Supporting recovery from alcohol consumption',
      'Protecting against environmental toxins',
      'Supporting digestive health',
      'As part of detoxification protocols'
    ],
    funFact: 'The name "milk thistle" comes from the milky white sap that flows when the leaves are broken, and the white marbling pattern on its leaves which, according to legend, was caused by drops of the Virgin Mary\'s milk falling onto the plant.',
    dosage: {
      powder: '1-2 teaspoons (about 5-10g) daily',
      capsule: '140-800mg standardized extract (70-80% silymarin), 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons crushed seeds steeped in hot water for 10-15 minutes, 3 times daily'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the Asteraceae family',
      'May have a mild laxative effect in some individuals',
      'May lower blood sugar levels, requiring monitoring in diabetics',
      'May interact with certain medications metabolized by the liver',
      'Not recommended during pregnancy without medical supervision'
    ],
    history: 'Milk thistle has been used medicinally for over 2,000 years. Ancient Greek and Roman physicians, including Dioscorides and Pliny the Elder, documented its use for liver and biliary disorders. In the Middle Ages, it was cultivated in European monastery gardens as a remedy for liver ailments. By the 16th century, English herbalists like John Gerard and Nicholas Culpeper were recommending it for melancholy and liver obstructions. In the late 19th century, the Eclectic physicians in America adopted it for liver, spleen, and kidney disorders.',
    culturalBackground: 'In European folk medicine, milk thistle was considered a sacred herb associated with the Virgin Mary. In German folk medicine, it was a primary remedy for liver disorders, jaundice, and gallstones. Traditional Chinese Medicine incorporated milk thistle for liver and spleen meridians. In Ayurvedic medicine, it was used to support liver function and as a digestive tonic. Native American tribes discovered its medicinal properties after European introduction and incorporated it into their healing traditions for liver and digestive issues.',
    preparation: 'The seeds (technically fruits) are the primary medicinal part of milk thistle. They can be ground and prepared as a tea, although the active compounds (silymarin) are not very water-soluble, making alcohol-based tinctures or standardized extracts more effective. The seeds can also be eaten whole or ground and added to foods. For maximum absorption, milk thistle is often taken with a small amount of healthy fat.',
    preparations: [
      {
        name: 'Milk Thistle Liver Support Tincture',
        ingredients: [
          '1 cup milk thistle seeds, crushed',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 tablespoon dandelion root (optional)',
          '1 teaspoon fennel seeds (optional)',
          'Glass jar with tight-fitting lid',
          'Cheesecloth',
          'Dark glass bottles for storage'
        ],
        prepTime: '30 minutes + 4-6 weeks steeping',
        difficulty: 'Moderate',
        instructions: 'Place the crushed milk thistle seeds and optional herbs in a clean glass jar. Pour the alcohol over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar daily. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles, label with the date and contents, and store in a cool, dark place. Take 1/4 to 1/2 teaspoon (1-2ml) up to three times daily, diluted in water or tea.'
      },
      {
        name: 'Milk Thistle Detox Tea Blend',
        ingredients: [
          '2 tablespoons milk thistle seeds, crushed',
          '1 tablespoon dandelion root',
          '1 tablespoon burdock root',
          '1 teaspoon licorice root',
          '1 teaspoon fennel seeds',
          '1/2 teaspoon ginger, dried and chopped',
          'Honey or lemon to taste (optional)'
        ],
        prepTime: '25 minutes',
        difficulty: 'Easy',
        instructions: 'Combine all herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of water. Bring water to a boil, then remove from heat. Add the herb blend and steep, covered, for 15-20 minutes. Strain well and add honey or lemon if desired. Drink 1-2 cups daily, preferably between meals for optimal absorption and digestive support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Dandelion Root',
        benefit: 'Enhances liver detoxification and adds digestive bitter properties'
      },
      {
        herb: 'Artichoke Leaf',
        benefit: 'Complements liver support and adds bile-stimulating effects'
      },
      {
        herb: 'Turmeric',
        benefit: 'Adds anti-inflammatory properties and enhances detoxification'
      },
      {
        herb: 'Schisandra Berry',
        benefit: 'Provides additional liver protection and adaptogenic effects'
      }
    ],
    benefitsVisualization: [
      { area: 'Liver Protection', percentage: 95 },
      { area: 'Detoxification', percentage: 90 },
      { area: 'Antioxidant Activity', percentage: 85 },
      { area: 'Digestive Support', percentage: 75 },
      { area: 'Metabolic Health', percentage: 70 }
    ],
    resources: [
      {
        title: 'Milk Thistle: The Liver Herb',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/milk-thistle-book'
      },
      {
        title: 'Clinical Applications of Silymarin',
        author: 'Journal of Clinical Gastroenterology',
        type: 'Research Paper',
        link: 'https://example.com/silymarin-research'
      },
      {
        title: 'Milk Thistle Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/milk-thistle-monograph'
      }
    ]
  },
  {
    id: 102,
    name: 'Astragalus',
    scientificName: 'Astragalus membranaceus',
    slug: 'astragalus',
    description: 'Astragalus is a powerful immune-supporting herb with adaptogenic properties that has been used in Traditional Chinese Medicine for centuries to strengthen vital energy, support immune function, and promote longevity.',
    imageUrl: '/images/herbs/astragalus.jpg',
    rating: 4.7,
    categories: ['Immune Support', 'Adaptogen', 'Energy', 'Longevity', 'Cardiovascular'],
    benefits: [
      'Strengthens immune system function',
      'Supports healthy stress response',
      'Promotes cardiovascular health',
      'May support healthy aging and longevity',
      'Supports respiratory health',
      'Helps maintain energy levels'
    ],
    uses: [
      'Supporting immune system during cold and flu season',
      'As a tonic for fatigue and low energy',
      'Supporting recovery after illness',
      'As part of adaptogenic formulas for stress',
      'Supporting cardiovascular health',
      'In longevity and vitality formulations'
    ],
    funFact: 'In Traditional Chinese Medicine, astragalus is known as "Huang Qi" or "yellow leader," referring to the yellow color of its root and its status as one of the most important qi (vital energy) tonics. It\'s considered one of the 50 fundamental herbs in TCM and has been used for over 2,000 years.',
    dosage: {
      powder: '1-2 teaspoons (3-5g) daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '3-5 slices of root simmered in 2 cups water for 20-30 minutes, drink 1-3 cups daily'
    },
    warnings: [
      'May interact with medications that suppress the immune system',
      'May increase the effects of anticoagulant and antiplatelet drugs',
      'Not recommended during acute infections with fever',
      'May affect blood sugar levels, requiring monitoring in diabetics',
      'Not recommended during pregnancy without medical supervision'
    ],
    history: 'Astragalus has been used in Traditional Chinese Medicine for over 2,000 years. It first appeared in the Shennong Ben Cao Jing (Divine Farmer\'s Materia Medica), one of the oldest Chinese herbals, compiled around 200 CE. It was traditionally used to strengthen the "defensive qi," boost vitality, and promote longevity. During the Ming Dynasty (1368-1644), it became a key herb in formulas for strengthening the body\'s resistance to disease. It was introduced to Western herbalism in the late 20th century and gained popularity as research confirmed its immune-enhancing properties.',
    culturalBackground: 'In Chinese culture, astragalus is considered one of the superior tonic herbs that can be taken regularly to maintain health and extend life. It is a key herb in the traditional practice of "Fu Zheng therapy," which focuses on strengthening the body\'s resistance to disease. In TCM, it is classified as a qi tonic that strengthens the spleen and lung meridians. It is often combined with other herbs in formulas like "Yu Ping Feng San" (Jade Windscreen Powder) for immune support. In modern Chinese hospitals, it is commonly used alongside conventional treatments for cancer, heart disease, and chronic fatigue.',
    preparation: 'The root is the medicinal part of astragalus, typically harvested from 4-year-old plants. It is available as dried slices, powder, or in prepared formulas. In traditional preparation, the sliced root is often added to soups and stews, simmered for long periods to extract its medicinal compounds. For therapeutic use, it is commonly prepared as a decoction (simmered tea), tincture, or taken in capsule form. It is frequently combined with other herbs like ginseng, licorice, or reishi mushroom for synergistic effects.',
    preparations: [
      {
        name: 'Astragalus Immune Support Soup',
        ingredients: [
          '10-15 slices of dried astragalus root',
          '1 whole chicken or 2 pounds chicken bones',
          '2 tablespoons goji berries',
          '5 dried shiitake mushrooms',
          '1 inch piece of fresh ginger, sliced',
          '3 cloves garlic, crushed',
          '1 onion, chopped',
          '2 carrots, chopped',
          '2 celery stalks, chopped',
          'Salt and pepper to taste',
          'Fresh herbs like thyme or parsley (optional)'
        ],
        prepTime: '2-3 hours',
        difficulty: 'Easy',
        instructions: 'Rinse the astragalus slices briefly under cold water. In a large pot, combine the chicken or bones, astragalus, goji berries, dried mushrooms, ginger, garlic, onion, carrots, and celery. Add enough cold water to cover all ingredients by about 2 inches. Bring to a boil, then reduce heat to low and simmer, covered, for 2-3 hours (or 6-8 hours in a slow cooker). If using a whole chicken, remove it after about 1 hour, separate the meat, and return the bones to the pot to continue cooking. Strain the broth and discard the astragalus slices and bones. Return the vegetables, chicken meat, and broth to the pot. Season with salt and pepper to taste and add fresh herbs if desired. This immune-supporting soup can be consumed daily during cold and flu season or when extra immune support is needed.'
      },
      {
        name: 'Astragalus Energy Tonic Tincture',
        ingredients: [
          '1 cup dried astragalus root, chopped or sliced',
          '1/4 cup dried eleuthero (Siberian ginseng) root (optional)',
          '1/4 cup dried licorice root (optional)',
          '2 tablespoons dried orange peel (optional)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 cup filtered water',
          'Glass jar with tight-fitting lid',
          'Dark glass bottles for storage'
        ],
        prepTime: '30 minutes + 4-6 weeks steeping',
        difficulty: 'Moderate',
        instructions: 'Combine all herbs in a clean glass jar. Mix the alcohol and water, then pour over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar daily. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles, label with the date and contents, and store in a cool, dark place. Take 1/4 to 1/2 teaspoon (1-2ml) up to three times daily, diluted in water or tea.'
      }
    ],
    herbPairings: [
      {
        herb: 'Reishi Mushroom',
        benefit: 'Enhances immune modulation and adds adaptogenic effects'
      },
      {
        herb: 'Codonopsis',
        benefit: 'Complements energy-building effects with gentler action'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Harmonizes the formula and enhances absorption'
      },
      {
        herb: 'Schisandra Berry',
        benefit: 'Adds adaptogenic support and liver protection'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 90 },
      { area: 'Energy Enhancement', percentage: 85 },
      { area: 'Stress Adaptation', percentage: 80 },
      { area: 'Cardiovascular Health', percentage: 75 },
      { area: 'Longevity Support', percentage: 85 }
    ],
    resources: [
      {
        title: 'Astragalus: A Superior Tonic Herb',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/astragalus-book'
      },
      {
        title: 'Immunomodulatory Effects of Astragalus',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/astragalus-research'
      },
      {
        title: 'Astragalus in Traditional Chinese Medicine',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/astragalus-monograph'
      }
    ]
  },
  {
    id: 103,
    name: 'Rhodiola',
    scientificName: 'Rhodiola rosea',
    slug: 'rhodiola',
    description: 'Rhodiola is a powerful adaptogenic herb that grows in cold, mountainous regions and has been used for centuries to combat fatigue, enhance mental performance, and help the body adapt to physical, environmental, and emotional stressors.',
    imageUrl: '/images/herbs/rhodiola.jpg',
    rating: 4.9,
    categories: ['Adaptogen', 'Mental Performance', 'Energy', 'Stress Relief', 'Endurance'],
    benefits: [
      'Helps the body adapt to stress',
      'Combats fatigue and increases energy',
      'Supports mental clarity and cognitive function',
      'May help alleviate symptoms of depression and anxiety',
      'Supports athletic performance and recovery',
      'Supports immune system function during stress'
    ],
    uses: [
      'Supporting mental performance during periods of stress',
      'Combating fatigue and burnout',
      'Supporting athletic training and recovery',
      'As part of adaptogenic formulas for stress management',
      'Supporting mood and emotional wellbeing',
      'Enhancing focus and concentration'
    ],
    funFact: 'Rhodiola was used by Viking warriors to enhance physical strength and endurance, and by Sherpa guides to help them climb at high altitudes in the Himalayas. In Russia, it was so valued that it was harvested and transported to the Czars in Moscow from the remote Altai mountains, a journey of thousands of miles.',
    dosage: {
      powder: '250-500mg daily, standardized to contain 3% rosavins and 1% salidroside',
      capsule: '200-600mg daily, standardized extract',
      tincture: '1-2ml, 2-3 times daily',
      tea: 'Not commonly used as tea due to extraction requirements'
    },
    warnings: [
      'May cause insomnia if taken late in the day',
      'May interact with medications for depression and anxiety',
      'May affect blood pressure and heart rate in some individuals',
      'Not recommended for people with bipolar disorder',
      'May cause dizziness, dry mouth, or headache in some individuals',
      'Not recommended during pregnancy or breastfeeding'
    ],
    history: 'Rhodiola has been used for thousands of years across northern Europe, Asia, and Scandinavia. It appears in the first Chinese medical text, the Shennong Ben Cao Jing, from around 200 CE. In Viking times, it was used to enhance physical strength and endurance for long sea voyages. In traditional Scandinavian medicine, it was used to prevent illness during the harsh winter months and increase work capacity. Russian researchers began scientific studies of rhodiola in the 1940s, and it was used by Soviet Olympic athletes, military personnel, and even cosmonauts to enhance performance under stress. It was classified as an "adaptogen" in the 1960s by Russian scientists and has gained popularity in Western herbalism since the 1990s.',
    culturalBackground: 'In Siberian culture, rhodiola was considered so valuable that it was given as a gift to newlyweds to ensure fertility and healthy children. In Mongolia, it was used in religious ceremonies and as a treatment for tuberculosis and cancer. In traditional Chinese medicine, it was used to enhance "qi" (vital energy) and strengthen the "lung meridian." In the traditional medicine of the Sami people of northern Scandinavia, it was used to enhance physical endurance for hunting in extreme conditions. In Russia, it became known as "golden root" due to both its value and the color of its rhizome, and was kept as a closely guarded secret during the Cold War for its performance-enhancing effects.',
    preparation: 'The root and rhizome are the medicinal parts of rhodiola, typically harvested from plants that are at least 3-5 years old. Due to the specific compounds that need to be extracted, rhodiola is most commonly prepared as a standardized extract or tincture rather than a tea. The active compounds include rosavins and salidroside, and quality supplements are standardized to contain specific percentages of these compounds. For maximum effectiveness, rhodiola is typically taken early in the day, as it can be stimulating and may interfere with sleep if taken in the evening.',
    preparations: [
      {
        name: 'Rhodiola Mental Performance Tincture',
        ingredients: [
          '1 cup dried rhodiola root, chopped',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 teaspoon ginkgo biloba leaves (optional)',
          '1 teaspoon bacopa leaves (optional)',
          'Glass jar with tight-fitting lid',
          'Cheesecloth',
          'Dark glass bottles for storage'
        ],
        prepTime: '25 minutes + 4-6 weeks steeping',
        difficulty: 'Moderate',
        instructions: 'Combine all herbs in a clean glass jar. Mix the alcohol and water, then pour over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar every few days. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles, label with the date and contents, and store in a cool, dark place. Take 1/4 to 1/2 teaspoon (1-2ml) up to three times daily, diluted in water or tea.'
      },
      {
        name: 'Rhodiola Energy Tea',
        ingredients: [
          '1 tablespoon dried rhodiola root, chopped fine',
          '1 teaspoon dried ginseng root (optional)',
          '1 teaspoon dried peppermint leaves',
          '1/2 teaspoon dried lemon balm',
          '1/4 teaspoon cinnamon',
          'Honey to taste (optional)',
          'Lemon slice (optional)'
        ],
        prepTime: '20 minutes',
        difficulty: 'Easy',
        instructions: 'Combine all herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of water. Bring water to a boil, then remove from heat. Add the herb blend and steep, covered, for 15-20 minutes. Strain well and add honey or lemon if desired. Drink 1-2 cups daily, preferably between meals for optimal absorption and digestive support.'
      },
      {
        name: 'Rhodiola Adaptogenic Honey',
        ingredients: [
          '1/4 cup dried rhodiola root powder',
          '1 cup raw honey',
          '1 teaspoon cinnamon (optional)',
          '1/2 teaspoon dried ginger powder (optional)',
          'Small glass jar with tight-fitting lid'
        ],
        prepTime: '15 minutes + 2 weeks infusing',
        difficulty: 'Easy',
        instructions: 'Combine the rhodiola powder and honey in a small glass jar. Add optional spices if desired. Stir well and seal the jar. Store in a cool, dark place for 2 weeks, shaking the jar every few days. After the infusion period, strain the honey through cheesecloth or a coffee filter into another jar. Discard the solids and store the infused honey in a cool, dark place. Take 1-2 teaspoons daily, preferably in the morning and early afternoon.'
      },
      {
        name: 'Rhodiola Endurance Capsules',
        ingredients: [
          '1/2 cup rhodiola root powder',
          'Empty vegetable capsules (size 00)',
          'Capsule filling machine (optional)',
          'Small bowl',
          'Airtight glass container for storage'
        ],
        prepTime: '45 minutes',
        difficulty: 'Advanced',
        instructions: 'If using whole herbs rather than extracts, ensure they are finely ground to a powder. In a bowl, thoroughly mix all powdered herbs until well combined. Using a capsule filling machine or filling capsules manually, pack the powder mixture into empty vegetable capsules. Store the filled capsules in an airtight container away from light and moisture. Take 1-2 capsules daily, preferably in the morning with breakfast. This formula supports physical endurance, mental stamina, and adaptation to stress, making it particularly beneficial for athletes, students during exam periods, or anyone facing physically or mentally demanding tasks.'
      }
    ],
    herbPairings: [
      {
        herb: 'Eleuthero',
        benefit: 'Enhances adaptogenic effects and adds physical endurance support'
      },
      {
        herb: 'Schisandra',
        benefit: 'Complements mental focus effects and adds liver protection'
      },
      {
        herb: 'Ashwagandha',
        benefit: 'Balances rhodiola\'s stimulating effects with calming properties'
      },
      {
        herb: 'Cordyceps',
        benefit: 'Enhances oxygen utilization and adds lung support'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Adaptation', percentage: 95 },
      { area: 'Mental Performance', percentage: 90 },
      { area: 'Energy Enhancement', percentage: 85 },
      { area: 'Mood Support', percentage: 80 },
      { area: 'Physical Endurance', percentage: 85 }
    ],
    resources: [
      {
        title: 'Rhodiola Rosea: A Phytomedicinal Overview',
        author: 'Richard P. Brown, MD',
        type: 'Book',
        link: 'https://example.com/rhodiola-book'
      },
      {
        title: 'The Effects of Rhodiola rosea on Mental Performance',
        author: 'Journal of Alternative and Complementary Medicine',
        type: 'Research Paper',
        link: 'https://example.com/rhodiola-research'
      },
      {
        title: 'Rhodiola Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/rhodiola-monograph'
      }
    ]
  }
];

export default additionalMedicinalHerbs;

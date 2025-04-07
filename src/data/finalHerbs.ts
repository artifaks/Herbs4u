import { HerbData } from '../types/herbs';

const finalHerbs: HerbData[] = [
  {
    id: 13,
    name: 'Elderberry',
    scientificName: 'Sambucus nigra',
    slug: 'elderberry',
    description: 'Elderberry is a powerful immune-supporting herb known for its antiviral properties and high antioxidant content. It has been used for centuries to fight colds, flu, and other respiratory infections.',
    imageUrl: '/images/herbs/elderberry.jpg',
    rating: 4.7,
    categories: ['Immune Support', 'Antiviral', 'Respiratory', 'Antioxidant'],
    benefits: [
      'Supports immune system function',
      'May reduce duration and severity of colds and flu',
      'Rich in antioxidants',
      'Supports respiratory health',
      'May help reduce inflammation',
      'Supports heart health'
    ],
    uses: [
      'Preventing and treating colds and flu',
      'Supporting overall immune function',
      'As an antioxidant supplement',
      'Supporting respiratory health',
      'As a natural remedy for allergies',
      'In traditional food preparations'
    ],
    funFact: 'Elderberry has been called the "medicine chest of the country people" and was considered a holy tree capable of restoring health, happiness, and even warding off evil spirits!',
    dosage: {
      powder: '500-1000mg daily',
      capsule: '500-1000mg, 2-3 times daily during illness',
      tincture: '2-3ml, 2-3 times daily',
      tea: '1-2 teaspoons dried berries per cup, steep for 10-15 minutes'
    },
    warnings: [
      'Raw and unripe elderberries contain a chemical that can cause nausea, vomiting, and diarrhea',
      'Should be cooked before consumption',
      'Not recommended during pregnancy or breastfeeding without medical advice',
      'May interact with immune-suppressing drugs and diuretics'
    ],
    history: 'Elderberry has been used medicinally for thousands of years across many cultures. Hippocrates, the "father of medicine," described elderberry as his "medicine chest" because of its wide range of applications. Native Americans used elderberry for infections, and during the 1995 Panama flu epidemic, elderberry was used to treat the symptoms and speed recovery.',
    culturalBackground: 'In European folklore, the elder tree was believed to ward off evil and provide protection. It was considered bad luck to cut down an elder tree without asking permission from the "Elder Mother" spirit believed to inhabit it. In many European countries, elderberry was planted near homes for protection. The hollow stems were used to make musical instruments, and the berries were used for food, medicine, and dye.',
    preparation: 'Elderberries must be cooked before consumption to neutralize alkaloids that can cause digestive upset. They are commonly prepared as syrups, tinctures, lozenges, or in capsules. The flowers can be dried and used for tea or infused in honey. Elderberry is often combined with other immune-supporting herbs like echinacea and zinc.',
    preparations: [
      {
        name: 'Elderberry Syrup',
        ingredients: [
          '1 cup dried elderberries or 2 cups fresh',
          '3 cups water',
          '1 cup raw honey',
          '1 cinnamon stick',
          '5 cloves',
          '1 tablespoon fresh ginger (optional)'
        ],
        instructions: 'Place elderberries, water, and spices in a saucepan. Bring to a boil, then reduce heat and simmer for 30-45 minutes until liquid is reduced by half. Strain the mixture and let cool to lukewarm. Stir in honey. Store in the refrigerator for up to 3 months. Take 1 tablespoon daily for prevention, or 1 tablespoon every 2-3 hours during illness.'
      },
      {
        name: 'Elderberry Tea',
        ingredients: [
          '2 teaspoons dried elderberries',
          '1 teaspoon dried elderflowers (optional)',
          '1 cup hot water',
          'Honey to taste',
          'Slice of lemon (optional)'
        ],
        instructions: 'Place elderberries and elderflowers in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey and lemon if desired. Drink 1-3 cups daily during cold and flu season.'
      },
      {
        name: 'Elderberry Tincture',
        ingredients: [
          '1 cup dried elderberries',
          '2 cups high-proof vodka or vegetable glycerin',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place elderberries in a clean glass jar. Cover with alcohol or glycerin. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 to 1/2 teaspoon, 2-3 times daily during cold and flu season.'
      }
    ],
    herbPairings: [
      {
        herb: 'Echinacea',
        benefit: 'Enhanced immune-stimulating effects'
      },
      {
        herb: 'Rose Hips',
        benefit: 'Added vitamin C for immune support'
      },
      {
        herb: 'Ginger',
        benefit: 'Warming properties and additional anti-inflammatory effects'
      },
      {
        herb: 'Astragalus',
        benefit: 'Deep immune system support for long-term health'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 90 },
      { area: 'Antiviral Activity', percentage: 85 },
      { area: 'Antioxidant', percentage: 80 },
      { area: 'Respiratory Support', percentage: 75 },
      { area: 'Anti-inflammatory', percentage: 70 }
    ],
    resources: [
      {
        title: 'Elderberry: Natural Remedies for Colds, Flus, and More',
        author: 'Dr. Madeleine Mumcuoglu',
        type: 'Book',
        link: 'https://example.com/elderberry-remedies'
      },
      {
        title: 'Randomized Study of the Efficacy and Safety of Oral Elderberry Extract in the Treatment of Influenza A and B Virus Infections',
        author: 'Journal of International Medical Research',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-study'
      },
      {
        title: 'The Elder Tree in History, Myth and Medicine',
        author: 'Herbal Academy',
        type: 'Online Course',
        link: 'https://example.com/elder-history'
      }
    ]
  },
  {
    id: 14,
    name: 'St. John\'s Wort',
    scientificName: 'Hypericum perforatum',
    slug: 'st-johns-wort',
    description: 'St. John\'s Wort is a yellow-flowering herb known for its mood-enhancing properties. It has been studied extensively for mild to moderate depression and has a long history of traditional use for nervous system support.',
    imageUrl: '/images/herbs/st-johns-wort.jpg',
    rating: 4.5,
    categories: ['Mood Support', 'Nervous System', 'Antidepressant', 'Anti-inflammatory'],
    benefits: [
      'May help with mild to moderate depression',
      'Supports healthy nervous system function',
      'Has anti-inflammatory properties',
      'May help with seasonal affective disorder (SAD)',
      'Traditionally used for wound healing',
      'May help with menopausal symptoms'
    ],
    uses: [
      'Supporting mental and emotional well-being',
      'Managing mild to moderate depression',
      'Topical application for wounds and burns',
      'Supporting nervous system health',
      'Managing seasonal mood changes',
      'Supporting women\'s health during menopause'
    ],
    funFact: 'St. John\'s Wort got its name because it traditionally blooms around June 24th, the feast day of St. John the Baptist. The red pigment that oozes from the plant when crushed was said to represent the blood of St. John!',
    dosage: {
      powder: '300-500mg, 3 times daily',
      capsule: '300mg standardized to 0.3% hypericin, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10 minutes, 3 cups daily'
    },
    warnings: [
      'Interacts with many medications including birth control pills, blood thinners, and antidepressants',
      'Can cause photosensitivity (increased sensitivity to sunlight)',
      'Not recommended during pregnancy or breastfeeding',
      'Should not be combined with other antidepressants or SSRIs',
      'May take 4-6 weeks to see full effects for mood support'
    ],
    history: 'St. John\'s Wort has been used medicinally for over 2,000 years. The ancient Greeks and Romans used it for various nervous disorders and wound healing. In medieval Europe, it was believed to have magical properties and was hung over doorways on St. John\'s Eve to ward off evil spirits and protect against witchcraft. It became popular in modern times in the 1980s when German studies showed its effectiveness for depression.',
    culturalBackground: 'In European folk medicine, St. John\'s Wort was considered a powerful protective herb. In Germany, it has been one of the most prescribed antidepressants. The name "Hypericum" comes from Greek words meaning "over an apparition," referring to its traditional use to ward off evil spirits. In many cultures, it was believed that sleeping with the herb under your pillow on St. John\'s Eve would result in a vision of St. John and blessing for the coming year.',
    preparation: 'St. John\'s Wort is typically prepared as a standardized extract in capsules, as a tincture, or as a tea. For topical use, it can be infused in oil to create a red-colored oil (called St. John\'s Wort oil) that is used for burns, wounds, and nerve pain. The flowering tops are the medicinal part used.',
    preparations: [
      {
        name: 'St. John\'s Wort Tea',
        ingredients: [
          '1-2 teaspoons dried St. John\'s Wort flowers and leaves',
          '1 cup hot water',
          'Honey to taste',
          'Lemon slice (optional)'
        ],
        instructions: 'Place dried herb in a tea infuser. Pour hot water over herb and steep for 10 minutes. Strain and add honey and lemon if desired. Drink 3 cups daily for mood support. Note that it may take 4-6 weeks of consistent use to notice effects.'
      },
      {
        name: 'St. John\'s Wort Oil',
        ingredients: [
          '2 cups fresh St. John\'s Wort flowers and buds (or 1 cup dried)',
          '2 cups olive oil or other carrier oil',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Fill jar with St. John\'s Wort flowers. Pour oil over herbs until completely covered. Seal jar and place in a sunny window for 4-6 weeks, shaking daily. The oil will turn a deep red color. Strain through cheesecloth and store in dark glass bottles. Apply topically to minor burns, wounds, or areas of nerve pain.'
      },
      {
        name: 'Mood Support Tincture',
        ingredients: [
          '1 part St. John\'s Wort flowering tops',
          '1 part lemon balm leaves',
          '1/2 part lavender flowers',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a glass jar. Cover with alcohol. Seal jar and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-3ml, 3 times daily for mood support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Lemon Balm',
        benefit: 'Enhanced mood support and added calming properties'
      },
      {
        herb: 'Lavender',
        benefit: 'Additional nervous system support and stress relief'
      },
      {
        herb: 'Rhodiola',
        benefit: 'Complementary adaptogenic support for stress and mood'
      },
      {
        herb: 'Passionflower',
        benefit: 'Added support for anxiety and sleep when combined with mood support'
      }
    ],
    benefitsVisualization: [
      { area: 'Mood Support', percentage: 85 },
      { area: 'Nervous System', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 70 },
      { area: 'Wound Healing', percentage: 75 },
      { area: 'Menopausal Support', percentage: 65 }
    ],
    resources: [
      {
        title: 'St. John\'s Wort and Depression: Meta-analysis of Randomized Controlled Trials',
        author: 'British Medical Journal',
        type: 'Research Paper',
        link: 'https://example.com/stjohns-depression'
      },
      {
        title: 'Hypericum perforatum (St John\'s wort) for depression',
        author: 'Cochrane Database of Systematic Reviews',
        type: 'Research Paper',
        link: 'https://example.com/hypericum-review'
      },
      {
        title: 'The Complete Guide to St. John\'s Wort',
        author: 'American Botanical Council',
        type: 'Guide',
        link: 'https://example.com/stjohns-guide'
      }
    ]
  }
];

export default finalHerbs;

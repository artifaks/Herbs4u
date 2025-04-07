import { HerbData } from '../types/herbs';

const medicinalHerbs: HerbData[] = [
  {
    id: 30,
    name: 'Elderberry',
    scientificName: 'Sambucus nigra',
    slug: 'elderberry',
    description: 'Elderberry is a powerful immune-supporting herb known for its antiviral properties and ability to reduce the duration and severity of colds and flu.',
    imageUrl: '/images/herbs/elderberry.jpg',
    rating: 4.8,
    categories: ['Immune Support', 'Antiviral', 'Respiratory', 'Antioxidant'],
    benefits: [
      'Supports immune system function',
      'May reduce duration and severity of colds and flu',
      'Contains powerful antioxidants',
      'Supports respiratory health',
      'May help reduce inflammation',
      'Traditionally used for fever reduction'
    ],
    uses: [
      'Supporting immune function during cold and flu season',
      'Relieving symptoms of upper respiratory infections',
      'As a preventative during cold and flu season',
      'Supporting overall health with antioxidants',
      'Traditional remedy for fever and inflammation',
      'As a delicious syrup, tea, or tincture'
    ],
    funFact: 'Elderberry has been called the "medicine chest of the common people" and has been used in folk medicine for centuries. In European folklore, it was believed that the Elder tree was home to the "Elder Mother" who would protect those who cared for the tree but punish those who cut it down without permission!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-3ml, 2-3 times daily',
      tea: '1-2 teaspoons dried berries per cup, steep for 10-15 minutes'
    },
    warnings: [
      'Raw elderberries contain cyanogenic glycosides and should not be consumed without cooking',
      'Not recommended during pregnancy without medical supervision',
      'May interact with immunosuppressant medications',
      'May interact with diuretics and diabetes medications',
      'Discontinue use 2 weeks before surgery'
    ],
    history: 'Elderberry has been used medicinally for thousands of years across many cultures. Hippocrates, the "father of medicine," described elder as his "medicine chest" in the 5th century BCE. Native American tribes used elderberry for infections, healing broken bones, and as a tonic. In European folk medicine, it was considered a sacred tree with the power to ward off evil spirits and bring good luck. During the Middle Ages, it was commonly used to treat the flu, colds, and sinus infections.',
    culturalBackground: 'In European folklore, the elder tree was believed to have magical properties and was associated with the "Elder Mother" or "Hylde Moer," a protective spirit. It was considered bad luck to cut down an elder tree without first asking permission. In many cultures, the elder tree was planted near homes to protect against evil spirits. In modern times, elderberry has gained popularity as a natural remedy for cold and flu, particularly since the 1990s when research began to validate its traditional uses.',
    preparation: 'The berries and flowers of elderberry are used medicinally. Berries must be cooked before consumption to neutralize cyanogenic glycosides. They can be prepared as a syrup, tincture, or tea. The flowers can be dried and used in teas or infused in honey. For immune support, elderberry is often combined with other immune-supporting herbs like echinacea and astragalus.',
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
        instructions: 'Place elderberries, water, and spices in a pot. Bring to a boil, then reduce heat and simmer for 30-45 minutes until liquid is reduced by half. Strain through a fine mesh strainer, pressing berries to extract all juice. Allow to cool to lukewarm, then stir in honey. Store in glass bottles in the refrigerator for up to 3 months. Take 1 tablespoon daily for prevention, or 1 tablespoon every 2-3 hours during illness.'
      },
      {
        name: 'Elderberry Tincture',
        ingredients: [
          '1 cup dried elderberries',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place elderberries in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 2-3 times daily for immune support.'
      },
      {
        name: 'Elderflower Tea',
        ingredients: [
          '2 teaspoons dried elderflowers',
          '1 cup hot water',
          'Honey to taste',
          'Lemon slice (optional)'
        ],
        instructions: 'Place elderflowers in a tea infuser. Pour hot water over flowers and steep for 10-15 minutes. Strain and add honey and lemon if desired. Drink 1-3 cups daily during cold and flu season or to reduce fever. Elderflower tea is particularly helpful for reducing fever and supporting the body during the early stages of a cold.'
      }
    ],
    herbPairings: [
      {
        herb: 'Echinacea',
        benefit: 'Enhanced immune-stimulating effects for fighting infections'
      },
      {
        herb: 'Astragalus',
        benefit: 'Complementary immune support for long-term immune building'
      },
      {
        herb: 'Ginger',
        benefit: 'Added warming properties to help fight colds and flu'
      },
      {
        herb: 'Rose Hips',
        benefit: 'Increased vitamin C content for enhanced immune support'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 95 },
      { area: 'Cold & Flu Relief', percentage: 90 },
      { area: 'Antioxidant Activity', percentage: 85 },
      { area: 'Respiratory Support', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 }
    ],
    resources: [
      {
        title: 'Elderberry Supplementation Reduces Cold Duration and Symptoms in Air-Travellers',
        author: 'Tiralongo E, et al.',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-travel-study'
      },
      {
        title: 'The effect of Sambucol, a black elderberry-based, natural product, on the production of human cytokines',
        author: 'Barak V, et al.',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-cytokines'
      },
      {
        title: 'Elderberry: History, Folklore, and Modern Uses',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/elderberry-history'
      }
    ]
  },
  {
    id: 31,
    name: 'Licorice Root',
    scientificName: 'Glycyrrhiza glabra',
    slug: 'licorice-root',
    description: 'Licorice root is a sweet, soothing herb that has been used for thousands of years to support digestive, respiratory, and adrenal health. It has anti-inflammatory, antiviral, and expectorant properties.',
    imageUrl: '/images/herbs/licorice-root.jpg',
    rating: 4.6,
    categories: ['Digestive', 'Respiratory', 'Adrenal Support', 'Anti-inflammatory'],
    benefits: [
      'Soothes digestive tract irritation and inflammation',
      'Supports respiratory health and relieves coughs',
      'Supports adrenal function during stress',
      'Has antiviral and antimicrobial properties',
      'May help with acid reflux and ulcers',
      'Traditionally used for hormonal balance'
    ],
    uses: [
      'Soothing irritated throats and coughs',
      'Supporting digestive health and treating ulcers',
      'As an adaptogen for adrenal support',
      'Supporting respiratory health',
      'As a harmonizing herb in traditional formulas',
      'Flavoring herbal preparations'
    ],
    funFact: 'Licorice root is 50 times sweeter than sugar! This natural sweetness comes from glycyrrhizin, the compound that gives licorice its distinctive flavor. Ancient Egyptian pharaohs were buried with licorice root so they could prepare a sweet drink called "mai sus" in the afterlife!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-800mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried root per cup, simmer for 10-15 minutes'
    },
    warnings: [
      'Not recommended for those with high blood pressure, kidney disease, or liver disorders',
      'Not recommended during pregnancy',
      'May cause potassium depletion with long-term use',
      'May interact with certain medications including diuretics and corticosteroids',
      'Use deglycyrrhizinated licorice (DGL) for digestive issues if you have high blood pressure'
    ],
    history: 'Licorice has been used medicinally for at least 4,000 years. It was found in the tomb of King Tutankhamun and mentioned in ancient Assyrian, Egyptian, Chinese, and Indian texts. In Traditional Chinese Medicine, it has been used for over 3,000 years and is included in more formulas than any other herb, earning it the title "The Great Harmonizer." In ancient Greece, Hippocrates recommended it for coughs and respiratory issues. During the Middle Ages, it was widely used throughout Europe for digestive issues, coughs, and as a flavoring agent.',
    culturalBackground: 'In Traditional Chinese Medicine, licorice is known as "gan cao" and is considered one of the 50 fundamental herbs. It is often added to formulas to harmonize the effects of other herbs and reduce side effects. In Ayurvedic medicine, it is called "yashtimadhu" and is used to support the voice, skin, and eyes. In European herbal medicine, it has been a staple for respiratory and digestive issues. In modern times, it remains an important herb in many traditional medical systems and is also widely used in the food and beverage industry as a flavoring agent.',
    preparation: 'The root of the licorice plant is used medicinally. It can be prepared as a decoction (simmered in water), made into a tincture, or taken as a powder in capsules. For digestive issues, deglycyrrhizinated licorice (DGL) is often used to avoid potential side effects on blood pressure. For respiratory issues, it is often combined with other herbs like marshmallow root and mullein. For adrenal support, it may be combined with adaptogens like ashwagandha.',
    preparations: [
      {
        name: 'Licorice Root Tea',
        ingredients: [
          '1 teaspoon dried licorice root',
          '1 cup water',
          '1/2 teaspoon dried ginger (optional)',
          'Honey to taste (optional)'
        ],
        instructions: 'Place licorice root and ginger (if using) in a small pot with water. Bring to a boil, then reduce heat and simmer for 10-15 minutes. Strain and add honey if desired. Drink 1 cup, 1-2 times daily for sore throats, coughs, or digestive issues. Do not drink more than 2 cups daily or use for more than 4-6 weeks continuously.'
      },
      {
        name: 'Throat Soothing Syrup',
        ingredients: [
          '1 part dried licorice root',
          '1 part dried marshmallow root',
          '1 part dried thyme',
          '4 parts water',
          '1 part raw honey',
          '1 part vegetable glycerin'
        ],
        instructions: 'Combine herbs in a pot with water. Bring to a boil, then reduce heat and simmer until liquid is reduced by half. Strain through cheesecloth, pressing herbs to extract all liquid. Add honey and glycerin and stir until well combined. Store in glass bottles in the refrigerator for up to 3 months. Take 1 teaspoon as needed for sore throats and coughs.'
      },
      {
        name: 'DGL Digestive Powder',
        ingredients: [
          '2 parts DGL licorice powder',
          '1 part slippery elm powder',
          '1 part marshmallow root powder',
          '1/2 part ginger powder'
        ],
        instructions: 'Combine all powders in a glass jar and mix well. Take 1/2 teaspoon mixed in a small amount of water or applesauce, 15-20 minutes before meals for digestive issues, acid reflux, or ulcers. This preparation uses deglycyrrhizinated licorice (DGL), which is safer for long-term use and for those with high blood pressure.'
      }
    ],
    herbPairings: [
      {
        herb: 'Marshmallow Root',
        benefit: 'Enhanced soothing effects for irritated mucous membranes'
      },
      {
        herb: 'Slippery Elm',
        benefit: 'Complementary demulcent properties for digestive healing'
      },
      {
        herb: 'Ashwagandha',
        benefit: 'Synergistic support for adrenal function and stress management'
      },
      {
        herb: 'Thyme',
        benefit: 'Added antimicrobial properties for respiratory infections'
      }
    ],
    benefitsVisualization: [
      { area: 'Digestive Support', percentage: 90 },
      { area: 'Respiratory Relief', percentage: 85 },
      { area: 'Adrenal Support', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 },
      { area: 'Antiviral Activity', percentage: 70 }
    ],
    resources: [
      {
        title: 'Glycyrrhiza glabra (Licorice): A Comprehensive Review on Its Phytochemistry, Biological Activity, and Applications',
        author: 'Yang R, et al.',
        type: 'Research Paper',
        link: 'https://example.com/licorice-review'
      },
      {
        title: 'Anti-inflammatory and Anti-ulcer Activities of Licorice',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/licorice-ulcer'
      },
      {
        title: 'Licorice: The Great Harmonizer',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/licorice-harmonizer'
      }
    ]
  },
  {
    id: 32,
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    slug: 'rosemary',
    description: 'Rosemary is an aromatic herb with remarkable cognitive-enhancing, circulatory-stimulating, and antioxidant properties. It has been used for centuries to improve memory, support digestion, and relieve muscle pain.',
    imageUrl: '/images/herbs/rosemary.jpg',
    rating: 4.7,
    categories: ['Cognitive', 'Circulatory', 'Digestive', 'Antioxidant'],
    benefits: [
      'Enhances memory and cognitive function',
      'Improves circulation',
      'Supports digestive health',
      'Contains powerful antioxidants',
      'May relieve muscle pain and tension',
      'Traditionally used for hair and scalp health'
    ],
    uses: [
      'Enhancing memory and focus',
      'Supporting healthy circulation',
      'Relieving digestive discomfort',
      'As an antioxidant-rich addition to diet',
      'Relieving muscle pain when applied topically',
      'Supporting hair and scalp health'
    ],
    funFact: 'Rosemary has long been associated with remembrance and memory. In ancient Greece, students would wear rosemary garlands while studying for exams, and in Shakespeare\'s Hamlet, Ophelia says, "There\'s rosemary, that\'s for remembrance." Modern research has confirmed that even just the scent of rosemary can improve memory and cognitive performance!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-800mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May interact with certain medications including blood thinners and ACE inhibitors',
      'May stimulate menstruation, so not recommended during pregnancy',
      'May interfere with iron absorption when taken internally in large amounts',
      'May lower blood sugar levels',
      'Essential oil should not be taken internally and should be diluted for topical use'
    ],
    history: 'Rosemary has been used medicinally for thousands of years throughout the Mediterranean region. The ancient Greeks and Romans considered it sacred and used it for improving memory, purifying the body, and protecting against evil spirits. In the Middle Ages, it was burned to purify the air during plagues and was a key ingredient in "Hungary Water," one of the first alcohol-based perfumes. It was also traditionally placed on graves as a symbol of remembrance and used in wedding ceremonies to represent love and fidelity.',
    culturalBackground: 'In Mediterranean cultures, rosemary has been a symbol of loyalty, love, and remembrance. In Spanish folklore, it was believed that rosemary could only grow in gardens of righteous people. In European folk medicine, it was used to ward off evil spirits and protect against plague. In modern times, it remains a popular culinary herb and is increasingly recognized for its medicinal properties, particularly for cognitive enhancement. It is also widely used in aromatherapy and natural skincare products.',
    preparation: 'The leaves of the rosemary plant are used medicinally. They can be prepared as a tea, tincture, or taken in capsules. For topical use, rosemary can be infused in oil or made into a liniment for muscle pain. The essential oil is used in aromatherapy for cognitive enhancement and in topical preparations for hair and scalp health. For memory support, it is often combined with other cognitive-enhancing herbs like ginkgo biloba and bacopa.',
    preparations: [
      {
        name: 'Rosemary Memory Tea',
        ingredients: [
          '1 teaspoon dried rosemary leaves',
          '1 teaspoon dried ginkgo leaves (optional)',
          '1/2 teaspoon dried peppermint (optional)',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1 cup, 1-2 times daily for memory enhancement and mental clarity. This tea combines the cognitive-enhancing properties of rosemary with the circulation-boosting effects of ginkgo and the refreshing taste of peppermint.'
      },
      {
        name: 'Rosemary Muscle Relief Oil',
        ingredients: [
          '1 cup dried rosemary leaves',
          '2 cups olive oil or almond oil',
          '10 drops peppermint essential oil (optional)',
          '10 drops eucalyptus essential oil (optional)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place dried rosemary in a clean glass jar. Cover with oil. Seal tightly and place in a sunny window for 4-6 weeks, shaking daily. Alternatively, place jar in a slow cooker filled with water on low heat for 8 hours. Strain through cheesecloth and add essential oils if using. Store in dark glass bottles. Massage into sore muscles and joints as needed for pain relief.'
      },
      {
        name: 'Rosemary Hair Rinse',
        ingredients: [
          '1/4 cup dried rosemary leaves',
          '2 cups water',
          '1 tablespoon apple cider vinegar (optional)'
        ],
        instructions: 'Place rosemary in a pot with water. Bring to a boil, then reduce heat and simmer for 15-20 minutes. Remove from heat, cover, and steep for 30 minutes. Strain and add apple cider vinegar if using. After shampooing, pour rinse over hair and scalp, massage gently, and leave in (no need to rinse out). Use 1-2 times weekly for healthy hair and scalp.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ginkgo Biloba',
        benefit: 'Enhanced cognitive effects through improved circulation to the brain'
      },
      {
        herb: 'Peppermint',
        benefit: 'Complementary digestive support and added mental clarity'
      },
      {
        herb: 'Lavender',
        benefit: 'Balanced combination for headache relief and relaxation'
      },
      {
        herb: 'Sage',
        benefit: 'Traditional pairing for enhanced memory support'
      }
    ],
    benefitsVisualization: [
      { area: 'Cognitive Function', percentage: 90 },
      { area: 'Circulatory Support', percentage: 85 },
      { area: 'Antioxidant Activity', percentage: 85 },
      { area: 'Digestive Support', percentage: 75 },
      { area: 'Muscle Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Aromatherapy with Rosemary and Cognitive Performance',
        author: 'Moss M, et al.',
        type: 'Research Paper',
        link: 'https://example.com/rosemary-cognition'
      },
      {
        title: 'Antioxidant and Antimicrobial Properties of Rosemary',
        author: 'Journal of Food Science',
        type: 'Research Paper',
        link: 'https://example.com/rosemary-antioxidant'
      },
      {
        title: 'Rosemary: The Herb of Remembrance',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/rosemary-remembrance'
      }
    ]
  }
];

export default medicinalHerbs;

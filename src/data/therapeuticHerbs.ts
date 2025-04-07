import { HerbData } from '../types/herbs';

const therapeuticHerbs: HerbData[] = [
  {
    id: 36,
    name: 'Yarrow',
    scientificName: 'Achillea millefolium',
    slug: 'yarrow',
    description: 'Yarrow is a versatile herb with remarkable healing properties for wounds, fever, and inflammation. It has been used for thousands of years on battlefields and in traditional medicine systems around the world.',
    imageUrl: '/images/herbs/yarrow.jpg',
    rating: 4.7,
    categories: ['First Aid', 'Fever Reducer', 'Women\'s Health', 'Circulatory'],
    benefits: [
      'Stops bleeding and promotes wound healing',
      'Reduces fever through diaphoretic action',
      'Supports healthy menstruation',
      'Has anti-inflammatory properties',
      'Supports healthy circulation',
      'May help reduce blood pressure'
    ],
    uses: [
      'First aid for cuts, scrapes, and minor wounds',
      'Reducing fever by promoting sweating',
      'Supporting women\'s reproductive health',
      'Reducing inflammation',
      'Supporting healthy digestion',
      'As a bitter tonic to stimulate digestion'
    ],
    funFact: 'Yarrow\'s botanical name, Achillea millefolium, comes from the Greek hero Achilles, who reportedly used yarrow to stop the bleeding of his soldiers\' wounds during the Trojan War. The species name "millefolium" means "thousand leaf," referring to its finely divided, feathery leaves. Native Americans called it "life medicine" due to its wide range of healing applications!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-900mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the daisy family',
      'May increase photosensitivity in some individuals',
      'Not recommended during pregnancy as it may stimulate uterine contractions',
      'May interact with blood thinning medications and blood pressure medications',
      'May interfere with iron absorption when taken internally in large amounts'
    ],
    history: 'Yarrow has been used medicinally for at least 3,000 years. Neanderthal remains have been found with yarrow pollen, suggesting its use may predate modern humans. Ancient Chinese texts from 1,000 BCE mention yarrow for stopping bleeding. In Greek mythology, Achilles used yarrow to treat his soldiers\' wounds during the Trojan War. Native American tribes used it extensively for wounds, infections, and pain. In European folk medicine, it was known as "soldier\'s woundwort" or "nosebleed plant" for its ability to stop bleeding. It was listed in the U.S. National Formulary from 1863 to 1950.',
    culturalBackground: 'In Chinese tradition, yarrow stalks are used in I Ching divination practices. In European folklore, yarrow was believed to ward off evil and was hung over cradles to protect infants. In Celtic tradition, it was one of the sacred herbs used in rituals. Many Native American tribes considered it a sacred plant for healing and spiritual protection. In modern herbal medicine, it is valued for its versatility and is considered one of the most important herbs for the home medicine cabinet. It is also used in natural landscaping and attracts beneficial insects.',
    preparation: 'The aerial parts (flowers, leaves, and stems) of yarrow are used medicinally. They can be prepared as a tea, tincture, or poultice. For fever reduction, yarrow is often combined with elder flower and peppermint. For women\'s health, it may be combined with cramp bark and raspberry leaf. For wounds, it can be applied directly as a poultice or used in salves and oils.',
    preparations: [
      {
        name: 'Yarrow Fever-Breaking Tea',
        ingredients: [
          '1 part dried yarrow flowers and leaves',
          '1 part dried elderflower',
          '1 part dried peppermint',
          'Hot water',
          'Honey to taste (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1 cup every 2-3 hours at the first sign of fever or cold. This tea helps induce a therapeutic sweat that can help break a fever naturally. Stay warm and hydrated while using this remedy.'
      },
      {
        name: 'Yarrow Wound Powder',
        ingredients: [
          '2 parts dried yarrow flowers and leaves, finely powdered',
          '1 part dried calendula flowers, finely powdered',
          '1 part dried plantain leaf, finely powdered',
          'Clean, dry container for storage'
        ],
        instructions: 'Grind all herbs to a fine powder using a coffee grinder or mortar and pestle. Mix thoroughly and store in a clean, dry container. To use, sprinkle directly on clean wounds to stop bleeding and promote healing. This powder can be carried in a first aid kit for emergency wound care in the field.'
      },
      {
        name: 'Yarrow Menstrual Support Tincture',
        ingredients: [
          '1 part dried yarrow flowers and leaves',
          '1 part dried cramp bark',
          '1 part dried raspberry leaf',
          '5 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for menstrual support and to reduce cramping.'
      }
    ],
    herbPairings: [
      {
        herb: 'Elderflower',
        benefit: 'Enhanced fever-reducing effects through complementary diaphoretic action'
      },
      {
        herb: 'Calendula',
        benefit: 'Powerful combination for wound healing with added anti-inflammatory properties'
      },
      {
        herb: 'Raspberry Leaf',
        benefit: 'Synergistic support for women\'s reproductive health'
      },
      {
        herb: 'Peppermint',
        benefit: 'Added cooling properties for fever reduction'
      }
    ],
    benefitsVisualization: [
      { area: 'Wound Healing', percentage: 95 },
      { area: 'Fever Reduction', percentage: 90 },
      { area: 'Women\'s Health', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Circulatory Support', percentage: 75 }
    ],
    resources: [
      {
        title: 'Achillea millefolium L.: A Review on Its Ethnomedicinal Uses, Phytochemistry and Pharmacological Properties',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/yarrow-review'
      },
      {
        title: 'Anti-inflammatory and Wound Healing Activities of Yarrow',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/yarrow-wounds'
      },
      {
        title: 'Yarrow: The Wound Healer',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/yarrow-healer'
      }
    ]
  },
  {
    id: 37,
    name: 'Linden',
    scientificName: 'Tilia species',
    slug: 'linden',
    description: 'Linden is a gentle, calming herb that supports the nervous system, promotes relaxation, and supports cardiovascular health. Its sweet-smelling flowers have been used for centuries to soothe anxiety and reduce stress.',
    imageUrl: '/images/herbs/linden.jpg',
    rating: 4.6,
    categories: ['Nervine', 'Cardiovascular', 'Sleep', 'Anxiety Relief'],
    benefits: [
      'Calms the nervous system and reduces anxiety',
      'Supports healthy sleep',
      'Promotes cardiovascular health',
      'May help reduce blood pressure',
      'Has mild diaphoretic properties for fever',
      'Traditionally used for respiratory conditions'
    ],
    uses: [
      'Calming anxiety and nervous tension',
      'Supporting restful sleep',
      'Supporting heart health',
      'Helping manage mild hypertension',
      'As a gentle remedy for children',
      'Supporting the body during colds and flu'
    ],
    funFact: 'Linden trees can live for hundreds of years, with some specimens in Europe estimated to be over 1,000 years old! The linden tree is also known as the "bee tree" because its fragrant flowers are irresistible to bees, producing a highly prized honey. In many European countries, the linden tree was traditionally planted in the center of villages as a gathering place, and important community decisions were made under its branches.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-800mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May interact with sedative medications',
      'Not recommended during pregnancy without medical supervision',
      'May increase the effects of blood pressure medications',
      'Excessive use may cause heart problems in sensitive individuals',
      'May cause allergic reactions in some individuals'
    ],
    history: 'Linden has been used medicinally in European traditions for at least 2,000 years. Ancient Romans and Greeks used it for its calming properties. In the Middle Ages, it was widely used throughout Europe for nervous conditions, heart problems, and digestive issues. Hildegard of Bingen, a 12th-century German abbess and herbalist, recommended linden for headaches and seizures. In the 17th century, it became popular as a remedy for epilepsy and other nervous system disorders. By the 19th century, it was widely used in official European pharmacopoeias for its calming and heart-supportive properties.',
    culturalBackground: 'In European folklore, the linden tree was considered sacred and was associated with fertility, love, and justice. It was often planted in the center of villages as a gathering place, and important community decisions were made under its branches. In German folklore, the linden tree was associated with the goddess Freya and was believed to protect against lightning and evil spirits. In Slavic mythology, it was considered the sacred tree of the goddess of love. In modern herbal medicine, it is valued for its gentle yet effective calming properties and is widely used for anxiety, insomnia, and cardiovascular support.',
    preparation: 'The flowers of the linden tree are used medicinally, often with the small leaf-like bract attached. They can be prepared as a tea, tincture, or taken in capsules. For anxiety and stress, linden is often combined with other nervine herbs like passionflower and skullcap. For heart support, it may be combined with hawthorn and motherwort. The pleasant, sweet taste makes it a favorite tea for children and those who dislike bitter herbs.',
    preparations: [
      {
        name: 'Linden Flower Tea',
        ingredients: [
          '1-2 teaspoons dried linden flowers',
          '1 cup hot water',
          'Honey to taste (optional)',
          'Lemon slice (optional)'
        ],
        instructions: 'Place linden flowers in a tea infuser. Pour hot water over flowers and steep for 10-15 minutes. Strain and add honey and lemon if desired. Drink 1-3 cups daily for anxiety, stress, or to support sleep. This simple tea has a pleasant, sweet taste and is gentle enough for children (in appropriate doses).'
      },
      {
        name: 'Calming Sleep Blend',
        ingredients: [
          '2 parts dried linden flowers',
          '1 part dried passionflower',
          '1 part dried chamomile',
          '1/2 part dried lavender',
          'Hot water',
          'Honey to taste (optional)'
        ],
        instructions: 'Combine herbs in a jar for storage. For each cup of tea, use 1-2 teaspoons of the blend. Steep in hot water for 10-15 minutes. Strain and add honey if desired. Drink 1 cup 30-60 minutes before bedtime to promote restful sleep. This blend combines the gentle calming properties of linden with the sleep-supporting effects of passionflower, chamomile, and lavender.'
      },
      {
        name: 'Heart Support Formula',
        ingredients: [
          '1 part dried linden flowers',
          '1 part dried hawthorn berries, flowers, and leaves',
          '1 part dried motherwort',
          '5 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for cardiovascular support and to help manage mild hypertension.'
      }
    ],
    herbPairings: [
      {
        herb: 'Hawthorn',
        benefit: 'Enhanced cardiovascular support and gentle blood pressure regulation'
      },
      {
        herb: 'Passionflower',
        benefit: 'Complementary calming effects for anxiety and insomnia'
      },
      {
        herb: 'Chamomile',
        benefit: 'Added digestive support alongside calming properties'
      },
      {
        herb: 'Elderflower',
        benefit: 'Traditional pairing for colds and flu with fever'
      }
    ],
    benefitsVisualization: [
      { area: 'Anxiety Relief', percentage: 90 },
      { area: 'Sleep Support', percentage: 85 },
      { area: 'Heart Health', percentage: 80 },
      { area: 'Blood Pressure', percentage: 75 },
      { area: 'Fever Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Tilia species: Ethnobotany and Pharmacology',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/linden-review'
      },
      {
        title: 'Anxiolytic Effects of Tilia americana var. mexicana Infusions',
        author: 'Phytomedicine',
        type: 'Research Paper',
        link: 'https://example.com/linden-anxiety'
      },
      {
        title: 'Linden Flower: The Gentle Nervine',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/linden-nervine'
      }
    ]
  },
  {
    id: 38,
    name: 'Oregon Grape Root',
    scientificName: 'Mahonia aquifolium',
    slug: 'oregon-grape-root',
    description: 'Oregon grape root is a powerful antimicrobial and alterative herb that supports liver function, skin health, and digestive wellness. Its bright yellow root contains berberine, a compound with significant antimicrobial properties.',
    imageUrl: '/images/herbs/oregon-grape-root.jpg',
    rating: 4.5,
    categories: ['Antimicrobial', 'Liver Support', 'Skin Health', 'Digestive'],
    benefits: [
      'Has antimicrobial properties against bacteria, fungi, and parasites',
      'Supports liver function and detoxification',
      'May help with skin conditions like psoriasis and eczema',
      'Stimulates bile production and digestive function',
      'Has anti-inflammatory properties',
      'Traditionally used for infections and skin disorders'
    ],
    uses: [
      'Supporting treatment of skin conditions',
      'Supporting liver function',
      'Addressing digestive issues',
      'As an antimicrobial for various infections',
      'Supporting the body during cleansing protocols',
      'As a bitter tonic to stimulate digestion'
    ],
    funFact: 'Oregon grape isn\'t actually a grape at all! It\'s in the barberry family, and its name comes from the blue-purple berries that resemble grapes. The root\'s vibrant yellow color comes from berberine, the same compound found in goldenseal, making it a sustainable alternative to the endangered goldenseal. It\'s also the state flower of Oregon!',
    dosage: {
      powder: '1/2-1 teaspoon daily',
      capsule: '500-1000mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1 teaspoon dried root per cup, simmer for 15-20 minutes'
    },
    warnings: [
      'Not recommended during pregnancy as berberine may stimulate uterine contractions',
      'May worsen jaundice in newborns',
      'May interact with certain medications including those metabolized by the liver',
      'May lower blood sugar levels',
      'The bitter taste may cause nausea in sensitive individuals'
    ],
    history: 'Oregon grape has been used medicinally by Native American tribes of the Pacific Northwest for centuries. The Blackfoot, Kootenai, and many other tribes used it for skin conditions, digestive issues, and as a blood purifier. Lewis and Clark documented its use during their expedition in 1805-1806. In the late 19th century, it was adopted by Eclectic physicians (a branch of American medicine that used herbal remedies) as a substitute for goldenseal, which was already becoming scarce. It was listed in the United States Pharmacopeia from 1905 to 1942 as a treatment for syphilis and other infections.',
    culturalBackground: 'In Native American cultures, Oregon grape was considered a sacred plant with both medicinal and spiritual significance. Many tribes used the berries for food and the root for medicine. The bright yellow root was also used as a dye for baskets and clothing. In modern herbal medicine, it is valued as a sustainable alternative to goldenseal, which is endangered due to overharvesting. It is widely used in Western herbal traditions for skin conditions, liver support, and as an antimicrobial agent. It is also popular in landscaping for its attractive evergreen foliage and bright yellow flowers.',
    preparation: 'The root of the Oregon grape plant is used medicinally. It can be prepared as a decoction (simmered in water), made into a tincture, or taken in capsules. For skin conditions, it is often combined with other alterative herbs like burdock and yellow dock. For liver support, it may be combined with dandelion and milk thistle. The bitter taste can be masked by adding licorice or honey to preparations.',
    preparations: [
      {
        name: 'Oregon Grape Root Decoction',
        ingredients: [
          '1 tablespoon dried Oregon grape root',
          '2 cups water',
          '1 teaspoon licorice root (optional, to reduce bitterness)',
          'Honey to taste (optional)'
        ],
        instructions: 'Place Oregon grape root and licorice (if using) in a small pot with water. Bring to a boil, then reduce heat and simmer for 15-20 minutes. Strain and add honey if desired. Drink 1/2 cup, 2-3 times daily for liver support, digestive issues, or skin conditions. This decoction is quite bitter, which stimulates digestive function but may be unpalatable for some.'
      },
      {
        name: 'Skin Clearing Formula',
        ingredients: [
          '1 part dried Oregon grape root',
          '1 part dried burdock root',
          '1 part dried yellow dock root',
          '1/2 part dried dandelion root',
          '5 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for skin conditions like acne, psoriasis, and eczema.'
      },
      {
        name: 'Oregon Grape Salve',
        ingredients: [
          '1/2 cup Oregon grape root tincture',
          '1/4 cup calendula-infused oil',
          '1/4 cup plantain-infused oil',
          '1 ounce beeswax',
          '10 drops tea tree essential oil (optional)',
          '10 drops lavender essential oil (optional)'
        ],
        instructions: 'In a double boiler, melt beeswax and oils together. Remove from heat and let cool slightly but not solidify. Slowly stir in the tincture (it will bubble as the alcohol evaporates). Add essential oils if using. Pour into clean tins or jars and let solidify. Apply to affected skin areas 2-3 times daily for conditions like psoriasis, eczema, and fungal infections.'
      }
    ],
    herbPairings: [
      {
        herb: 'Burdock Root',
        benefit: 'Enhanced alterative effects for skin conditions'
      },
      {
        herb: 'Dandelion Root',
        benefit: 'Complementary liver support and detoxification'
      },
      {
        herb: 'Milk Thistle',
        benefit: 'Added liver protection alongside detoxification support'
      },
      {
        herb: 'Echinacea',
        benefit: 'Enhanced immune support during infections'
      }
    ],
    benefitsVisualization: [
      { area: 'Antimicrobial Activity', percentage: 90 },
      { area: 'Liver Support', percentage: 85 },
      { area: 'Skin Health', percentage: 85 },
      { area: 'Digestive Function', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 }
    ],
    resources: [
      {
        title: 'Mahonia aquifolium in the Treatment of Psoriasis',
        author: 'Journal of Dermatological Treatment',
        type: 'Research Paper',
        link: 'https://example.com/oregon-grape-psoriasis'
      },
      {
        title: 'Antimicrobial Properties of Berberine-Containing Plants',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/berberine-antimicrobial'
      },
      {
        title: 'Oregon Grape: A Sustainable Alternative to Goldenseal',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/oregon-grape-alternative'
      }
    ]
  }
];

export default therapeuticHerbs;

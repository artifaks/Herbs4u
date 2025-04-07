import { HerbData } from '../types/herbs';

const advancedHerbs: HerbData[] = [
  {
    id: 33,
    name: 'Hawthorn',
    scientificName: 'Crataegus species',
    slug: 'hawthorn',
    description: 'Hawthorn is a renowned heart tonic that supports cardiovascular health, improves circulation, and gently regulates blood pressure. It has been used for centuries to strengthen the heart and improve overall cardiovascular function.',
    imageUrl: '/images/herbs/hawthorn.jpg',
    rating: 4.8,
    categories: ['Cardiovascular', 'Circulatory', 'Heart Tonic', 'Antioxidant'],
    benefits: [
      'Supports overall heart health',
      'May help regulate blood pressure',
      'Improves circulation',
      'Strengthens blood vessels',
      'Contains powerful antioxidants',
      'May reduce symptoms of mild heart failure'
    ],
    uses: [
      'Supporting overall cardiovascular health',
      'Helping to manage mild hypertension',
      'Improving circulation',
      'Supporting recovery after heart-related issues',
      'As a preventative for those with heart disease risk factors',
      'Supporting the elderly with mild heart concerns'
    ],
    funFact: 'Hawthorn has been associated with the heart not just medicinally but also symbolically for centuries. In medieval Europe, it was believed that carrying hawthorn would protect against heartbreak and ensure a happy marriage. The ancient Greeks and Romans associated hawthorn with hope and marriage, and it was often included in wedding decorations!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried berries or flowers per cup, steep for 15 minutes'
    },
    warnings: [
      'May interact with heart medications including digitalis, beta-blockers, and calcium channel blockers',
      'Consult a healthcare provider before use if you have a heart condition',
      'May potentiate the effects of blood pressure medications',
      'Not recommended during pregnancy without medical supervision',
      'Effects may take 4-8 weeks to become noticeable'
    ],
    history: 'Hawthorn has been used medicinally since at least the 1st century CE, when the Greek physician Dioscorides documented its use. In Traditional Chinese Medicine, it has been used for thousands of years, particularly for digestive issues and to support blood circulation. In European folk medicine, it became widely used for heart conditions in the 1800s. Dr. Green, an Irish physician, used hawthorn extensively in his practice and helped popularize it as a heart remedy. By the early 20th century, it was included in the United States Pharmacopeia as a heart tonic.',
    culturalBackground: 'In European folklore, hawthorn was considered a sacred tree associated with protection, fertility, and marriage. It was believed to be inhabited by fairies and was often planted near homes to ward off evil spirits. In Celtic tradition, it marked the entrance to the otherworld and was associated with the May Day festival. In Christian symbolism, it became associated with the crown of thorns and hope. In modern herbal medicine, it is recognized primarily for its cardiovascular benefits and is widely used in Europe as a prescribed medicine for mild heart conditions.',
    preparation: 'The berries, flowers, and leaves of hawthorn are all used medicinally, though the berries are most common. They can be prepared as a tea, tincture, or taken in capsules. For cardiovascular support, hawthorn is often combined with other heart-supportive herbs like motherwort and linden. It is typically taken long-term for chronic heart conditions, with effects becoming more pronounced over time.',
    preparations: [
      {
        name: 'Hawthorn Berry Syrup',
        ingredients: [
          '1 cup dried hawthorn berries',
          '3 cups water',
          '1 cup raw honey',
          '1 cinnamon stick (optional)',
          '3 cardamom pods (optional)',
          '1 tablespoon fresh ginger (optional)'
        ],
        instructions: 'Place hawthorn berries, water, and spices in a pot. Bring to a boil, then reduce heat and simmer for 30-45 minutes until liquid is reduced by half. Strain through a fine mesh strainer, pressing berries to extract all juice. Allow to cool to lukewarm, then stir in honey. Store in glass bottles in the refrigerator for up to 3 months. Take 1 tablespoon, 2-3 times daily as a heart tonic.'
      },
      {
        name: 'Hawthorn Heart Tincture',
        ingredients: [
          '1 part dried hawthorn berries',
          '1 part dried hawthorn flowers and leaves (if available)',
          '1 part dried motherwort',
          '1 part dried linden flowers',
          '5 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for cardiovascular support.'
      },
      {
        name: 'Hawthorn Circulation Tea',
        ingredients: [
          '1 teaspoon dried hawthorn berries',
          '1 teaspoon dried hawthorn flowers and leaves (if available)',
          '1/2 teaspoon dried ginger',
          '1/2 teaspoon cinnamon chips',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 15-20 minutes. Strain and add honey if desired. Drink 1-3 cups daily for cardiovascular support and improved circulation. This tea combines the heart-supportive properties of hawthorn with the circulation-enhancing effects of warming spices.'
      }
    ],
    herbPairings: [
      {
        herb: 'Motherwort',
        benefit: 'Enhanced heart-calming effects, particularly for heart palpitations and anxiety'
      },
      {
        herb: 'Linden',
        benefit: 'Complementary support for heart health and mild hypertension'
      },
      {
        herb: 'Garlic',
        benefit: 'Added support for healthy cholesterol levels and circulation'
      },
      {
        herb: 'Ginger',
        benefit: 'Improved circulation and added warming properties'
      }
    ],
    benefitsVisualization: [
      { area: 'Heart Health', percentage: 95 },
      { area: 'Blood Pressure Support', percentage: 85 },
      { area: 'Circulation', percentage: 80 },
      { area: 'Antioxidant Activity', percentage: 75 },
      { area: 'Blood Vessel Strength', percentage: 85 }
    ],
    resources: [
      {
        title: 'Hawthorn Extract for Treating Chronic Heart Failure',
        author: 'Cochrane Database of Systematic Reviews',
        type: 'Research Paper',
        link: 'https://example.com/hawthorn-heart-failure'
      },
      {
        title: 'Crataegus Special Extract WS 1442 in the Treatment of Heart Failure',
        author: 'American Journal of Cardiovascular Drugs',
        type: 'Research Paper',
        link: 'https://example.com/hawthorn-extract-study'
      },
      {
        title: 'Hawthorn: The Heart Healer',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/hawthorn-heart-healer'
      }
    ]
  },
  {
    id: 34,
    name: 'Marshmallow Root',
    scientificName: 'Althaea officinalis',
    slug: 'marshmallow-root',
    description: 'Marshmallow root is a soothing demulcent herb that forms a protective, healing gel when mixed with water. It has been used for centuries to soothe irritated tissues, particularly in the digestive and respiratory systems.',
    imageUrl: '/images/herbs/marshmallow-root.jpg',
    rating: 4.6,
    categories: ['Digestive', 'Respiratory', 'Demulcent', 'Soothing'],
    benefits: [
      'Soothes irritated mucous membranes',
      'Supports digestive health',
      'Relieves dry coughs and sore throats',
      'May help with urinary tract irritation',
      'Traditionally used for skin inflammation',
      'Supports healthy gut lining'
    ],
    uses: [
      'Soothing irritated digestive tract',
      'Relieving dry coughs and sore throats',
      'Supporting recovery from urinary tract infections',
      'As a gentle remedy for children\'s digestive issues',
      'Topically for minor skin irritations',
      'Supporting gut health and healing'
    ],
    funFact: 'Yes, marshmallow root is related to the fluffy confections we know today! Ancient Egyptians made a sweet treat from the root by mixing it with honey and nuts. By the 1800s, French confectioners replaced the root with gelatin, creating the modern marshmallow. The plant\'s genus name, Althaea, comes from the Greek word "altho," meaning "to heal."',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-800mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried root per cup, cold infuse for 4-8 hours'
    },
    warnings: [
      'May slow the absorption of other medications if taken at the same time',
      'Take at least 2 hours apart from other medications',
      'May lower blood sugar levels',
      'Not recommended during pregnancy without medical supervision',
      'May cause low blood pressure in some individuals'
    ],
    history: 'Marshmallow has been used medicinally for over 2,000 years. It was mentioned in Homer\'s Iliad (written around 800 BCE) as a food eaten during famine. Ancient Egyptian, Arabian, Greek, and Roman physicians all documented its medicinal uses, particularly for inflammation and irritation. In ancient Egypt, it was used to treat sore throats, coughs, and wounds. Hippocrates recommended it for healing wounds and reducing inflammation. Throughout the Middle Ages, it was widely used in Europe for respiratory and digestive complaints. In the 19th century, it became a common remedy in various medical traditions, including the Eclectic and Physiomedicalist schools in America.',
    culturalBackground: 'In European folk medicine, marshmallow was considered one of the most important healing plants, particularly for conditions involving irritation and inflammation. It was often planted near homes for easy access to its medicinal properties. In Arabic medicine, it was highly regarded for treating inflammation. In Native American healing traditions, similar plants in the mallow family were used for similar purposes. In modern herbal medicine, it remains one of the most important demulcent herbs and is widely used for digestive, respiratory, and urinary tract issues.',
    preparation: 'The root of the marshmallow plant is most commonly used medicinally, though the leaves and flowers can also be used. For maximum mucilage content, the root is typically prepared as a cold infusion by steeping it in cold water for 4-8 hours. It can also be prepared as a decoction, tincture, or taken in capsules. For digestive issues, it is often combined with slippery elm and licorice. For respiratory issues, it may be combined with mullein and elecampane.',
    preparations: [
      {
        name: 'Marshmallow Root Cold Infusion',
        ingredients: [
          '1 tablespoon dried marshmallow root',
          '1 cup cold water',
          'Honey to taste (optional)',
          'Lemon juice to taste (optional)'
        ],
        instructions: 'Place marshmallow root in a glass jar. Cover with cold water. Seal and let sit at room temperature or in the refrigerator for 4-8 hours or overnight. Strain and add honey and lemon if desired. Drink 1 cup, 2-3 times daily for digestive or respiratory irritation. Cold infusion maximizes the extraction of mucilage, the soothing component in marshmallow root.'
      },
      {
        name: 'Digestive Healing Tea',
        ingredients: [
          '1 part dried marshmallow root',
          '1 part dried slippery elm bark',
          '1 part dried licorice root',
          '1/2 part dried ginger',
          'Cold water for marshmallow root',
          'Hot water for other herbs'
        ],
        instructions: 'Cold infuse the marshmallow root in a separate container as described above. In another container, combine the remaining herbs and steep in hot water for 15-20 minutes. Strain both preparations and combine. Drink 1 cup, 3 times daily before meals for digestive healing and to soothe irritated gut lining.'
      },
      {
        name: 'Marshmallow Throat Syrup',
        ingredients: [
          '1/4 cup dried marshmallow root',
          '1/4 cup dried licorice root',
          '2 tablespoons dried thyme',
          '2 tablespoons dried sage',
          '4 cups water',
          '1 cup raw honey',
          '1/4 cup vegetable glycerin (optional)'
        ],
        instructions: 'Combine herbs in a pot with water. Bring to a boil, then reduce heat and simmer until liquid is reduced by half. Strain through cheesecloth, pressing herbs to extract all liquid. Allow to cool to lukewarm, then stir in honey and glycerin if using. Store in glass bottles in the refrigerator for up to 3 months. Take 1 teaspoon as needed for sore throats and dry coughs.'
      }
    ],
    herbPairings: [
      {
        herb: 'Slippery Elm',
        benefit: 'Enhanced soothing effects for irritated mucous membranes'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Complementary demulcent properties with added anti-inflammatory effects'
      },
      {
        herb: 'Mullein',
        benefit: 'Powerful combination for respiratory support'
      },
      {
        herb: 'Calendula',
        benefit: 'Added healing properties for digestive and skin issues'
      }
    ],
    benefitsVisualization: [
      { area: 'Digestive Soothing', percentage: 90 },
      { area: 'Respiratory Relief', percentage: 85 },
      { area: 'Mucous Membrane Support', percentage: 95 },
      { area: 'Urinary Tract Support', percentage: 75 },
      { area: 'Skin Soothing', percentage: 70 }
    ],
    resources: [
      {
        title: 'Marshmallow (Althaea officinalis): A Review of Traditional Uses, Phytochemistry and Pharmacology',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/marshmallow-review'
      },
      {
        title: 'Mucilage of Althaea officinalis and its Anti-inflammatory Effects',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/marshmallow-inflammation'
      },
      {
        title: 'Demulcent Herbs: Nature\'s Soothers',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/demulcent-herbs'
      }
    ]
  },
  {
    id: 35,
    name: 'Nettle',
    scientificName: 'Urtica dioica',
    slug: 'nettle',
    description: 'Nettle is a nutrient-rich tonic herb that supports overall health, reduces inflammation, and helps manage allergies. Despite its sting when fresh, it has been used for centuries as both food and medicine.',
    imageUrl: '/images/herbs/nettle.jpg',
    rating: 4.7,
    categories: ['Nutritive', 'Anti-inflammatory', 'Allergy Relief', 'Kidney Support'],
    benefits: [
      'Provides a wealth of vitamins and minerals',
      'May help reduce allergy symptoms',
      'Supports kidney and urinary tract health',
      'Has anti-inflammatory properties',
      'May help with seasonal allergies and hay fever',
      'Traditionally used to support healthy hair and skin'
    ],
    uses: [
      'As a nutritive tonic for overall health',
      'Managing seasonal allergies',
      'Supporting kidney function',
      'Reducing inflammation',
      'As a nourishing food',
      'Supporting healthy hair and skin'
    ],
    funFact: 'Despite its fearsome sting, nettle has been used to make cloth for thousands of years! During World War I, Germany used nettle fiber to make military uniforms when cotton was scarce. The sting is neutralized by cooking, drying, or crushing the plant. Nettle contains more protein than almost any other vegetable, making it a valuable food source throughout history!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May interact with medications for high blood pressure, diabetes, and blood thinning',
      'May increase the effects of diuretics',
      'Not recommended during pregnancy without medical supervision',
      'Fresh plant causes skin irritation; always wear gloves when handling',
      'May lower blood sugar levels'
    ],
    history: 'Nettle has been used medicinally for thousands of years across many cultures. Ancient Greek physicians, including Hippocrates, documented its use for a wide range of conditions. In ancient Egypt, it was used to treat arthritis and lower back pain. Roman soldiers reportedly brought nettle to Britain, where they would rub it on themselves to stay warm in the cold climate. Throughout the Middle Ages, it was widely used in Europe for joint pain, eczema, anemia, and gout. Native American tribes used it for a variety of purposes, including as a pregnancy tonic and for treating eczema.',
    culturalBackground: 'In European folk medicine, nettle was considered a powerful spring tonic to cleanse the body after winter. It was traditionally harvested on "Nettle Day" in many European countries to make soups and other dishes. In Russia, it was used to make a traditional fabric called "nettle cloth." In Celtic tradition, it was associated with protection and used in exorcism rituals. In modern herbal medicine, it is valued as a nutritive tonic and is widely used for allergies, inflammation, and as a general health-supporting herb.',
    preparation: 'The leaves of the nettle plant are most commonly used medicinally, though the root is also used, particularly for prostate health. The leaves can be prepared as a tea, tincture, or taken in capsules. They can also be cooked and eaten as a nutritious vegetable similar to spinach. For allergies, nettle is often combined with other anti-allergy herbs like eyebright and elderflower. For nutritive support, it may be combined with other mineral-rich herbs like red raspberry leaf and oatstraw.',
    preparations: [
      {
        name: 'Nettle Infusion',
        ingredients: [
          '1 ounce dried nettle leaves',
          '1 quart boiling water',
          'Honey to taste (optional)',
          'Lemon juice to taste (optional)'
        ],
        instructions: 'Place dried nettle in a quart jar. Pour boiling water over herbs and cover tightly. Let steep for 4-8 hours or overnight. Strain and add honey and lemon if desired. Drink 1-3 cups daily as a nutritive tonic. This strong infusion extracts the maximum amount of minerals and other nutrients from the nettle.'
      },
      {
        name: 'Allergy Relief Tincture',
        ingredients: [
          '1 part dried nettle leaves',
          '1 part dried eyebright',
          '1 part dried elderflower',
          '1/2 part dried goldenrod',
          '5 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water, 3 times daily for allergy relief.'
      },
      {
        name: 'Nettle Soup',
        ingredients: [
          '4 cups fresh nettle leaves (wear gloves when handling!)',
          '1 onion, chopped',
          '2 cloves garlic, minced',
          '2 tablespoons olive oil',
          '4 cups vegetable broth',
          '1 potato, diced',
          'Salt and pepper to taste',
          '1/4 cup cream or coconut milk (optional)'
        ],
        instructions: 'Heat olive oil in a pot. Add onion and garlic and sauté until soft. Add potato and broth and simmer until potato is tender. Add nettle leaves (the heat will neutralize the sting) and simmer for 5 minutes until wilted. Blend until smooth. Add cream if using, and season with salt and pepper. This nutritious soup is a traditional spring tonic in many European countries.'
      }
    ],
    herbPairings: [
      {
        herb: 'Eyebright',
        benefit: 'Enhanced effects for allergy relief, particularly for eye symptoms'
      },
      {
        herb: 'Red Raspberry Leaf',
        benefit: 'Complementary nutritive support, particularly for women\'s health'
      },
      {
        herb: 'Dandelion',
        benefit: 'Added support for detoxification and liver health'
      },
      {
        herb: 'Saw Palmetto',
        benefit: 'Nettle root combines well with saw palmetto for prostate health'
      }
    ],
    benefitsVisualization: [
      { area: 'Nutritive Support', percentage: 95 },
      { area: 'Allergy Relief', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Kidney Support', percentage: 75 },
      { area: 'Hair & Skin Health', percentage: 70 }
    ],
    resources: [
      {
        title: 'Urtica dioica for Treatment of Allergic Rhinitis',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/nettle-allergies'
      },
      {
        title: 'Nutritional Composition of Urtica dioica',
        author: 'Journal of Food Science',
        type: 'Research Paper',
        link: 'https://example.com/nettle-nutrition'
      },
      {
        title: 'Stinging Nettle: The Nutritive Tonic',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/nettle-tonic'
      }
    ]
  }
];

export default advancedHerbs;

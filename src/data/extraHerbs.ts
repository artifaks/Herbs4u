import { HerbData } from '../types/herbs';

const extraHerbs: HerbData[] = [
  {
    id: 15,
    name: 'Nettle',
    scientificName: 'Urtica dioica',
    slug: 'nettle',
    description: 'Nettle is a nutrient-dense herb with powerful anti-inflammatory and antihistamine properties. It has been used for centuries to treat allergies, support kidney health, and provide essential vitamins and minerals.',
    imageUrl: '/images/herbs/nettle.jpg',
    rating: 4.6,
    categories: ['Allergy Relief', 'Nutritive', 'Anti-inflammatory', 'Kidney Support'],
    benefits: [
      'Rich in vitamins and minerals',
      'May reduce allergy symptoms',
      'Supports kidney and urinary tract health',
      'Has anti-inflammatory properties',
      'May help reduce blood pressure',
      'Traditionally used for joint pain'
    ],
    uses: [
      'Seasonal allergy relief',
      'As a nutritive tonic',
      'Supporting kidney function',
      'Reducing inflammation',
      'As a traditional remedy for arthritis',
      'In food as a nutritious green'
    ],
    funFact: 'Despite its stinging properties when fresh, nettle has been used to make cloth for thousands of years! The fiber is similar to linen and was used to make German army uniforms in World War I when cotton was scarce.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes, 3-4 cups daily'
    },
    warnings: [
      'Fresh nettle can cause skin irritation due to stinging hairs',
      'May interact with medications for high blood pressure, diabetes, and blood thinners',
      'May increase the effects of sedative medications',
      'Should be used with caution during pregnancy'
    ],
    history: 'Nettle has been used medicinally for thousands of years. Ancient Egyptians used nettle for arthritis and lower back pain. Roman soldiers brought nettle to Britain, where they would rub it on themselves to help stay warm in the cold climate. In medieval Europe, it was used to treat joint pain and as a diuretic. Native Americans used nettle fiber to make fishing nets and ropes.',
    culturalBackground: 'In many European cultures, nettle was considered a protective herb and was hung in doorways to ward off evil. In Norse mythology, nettle was associated with Thor, the god of thunder, and was used in spells for protection. In traditional European herbalism, nettle was one of the first spring greens to be harvested and was considered a powerful blood purifier and spring tonic. In Russia, nettle soup was a traditional dish eaten to cleanse the body after winter.',
    preparation: 'Nettle leaves are typically dried or cooked before consumption to neutralize the stinging hairs. They can be prepared as a tea, tincture, or taken in capsules. Fresh young leaves can be cooked like spinach and used in soups, stews, and other dishes. Nettle root is sometimes used separately for prostate health in men.',
    preparations: [
      {
        name: 'Nettle Infusion',
        ingredients: [
          '1 ounce (about 1 cup) dried nettle leaves',
          '1 quart boiling water',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Place dried nettle in a quart jar. Pour boiling water over herbs and cover tightly. Let steep for 4-8 hours or overnight. Strain and drink 2-3 cups daily as a nutritive tonic. This strong infusion extracts more minerals than a standard tea. Can be refrigerated for up to 3 days.'
      },
      {
        name: 'Nettle Soup',
        ingredients: [
          '4 cups young nettle leaves (wear gloves when harvesting)',
          '1 onion, chopped',
          '2 cloves garlic, minced',
          '2 tablespoons olive oil',
          '4 cups vegetable or chicken broth',
          'Salt and pepper to taste',
          '1/2 cup cream or coconut milk (optional)'
        ],
        instructions: 'Wearing gloves, wash nettle leaves thoroughly. Heat oil in a pot and sauté onion and garlic until translucent. Add nettle leaves and sauté until wilted (this neutralizes the sting). Add broth and simmer for 15 minutes. Purée with an immersion blender. Add cream if desired and season with salt and pepper. Serve hot.'
      },
      {
        name: 'Nettle Tincture',
        ingredients: [
          '1 cup dried nettle leaves',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place nettle leaves in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 3 times daily for allergy relief or as a tonic.'
      }
    ],
    herbPairings: [
      {
        herb: 'Dandelion',
        benefit: 'Enhanced detoxification and nutritive properties'
      },
      {
        herb: 'Quercetin',
        benefit: 'Improved antihistamine effects for allergy relief'
      },
      {
        herb: 'Turmeric',
        benefit: 'Stronger anti-inflammatory action for joint pain'
      },
      {
        herb: 'Red Raspberry Leaf',
        benefit: 'Excellent combination for women\'s health and nutrition'
      }
    ],
    benefitsVisualization: [
      { area: 'Nutritional Value', percentage: 95 },
      { area: 'Allergy Relief', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Kidney Support', percentage: 75 },
      { area: 'Joint Health', percentage: 70 }
    ],
    resources: [
      {
        title: 'Stinging Nettle: Ancient Herb, Modern Remedy',
        author: 'Dr. Andrew Weil',
        type: 'Article',
        link: 'https://example.com/nettle-remedy'
      },
      {
        title: 'Randomized, Double-Blind Study of Freeze-Dried Urtica dioica in the Treatment of Allergic Rhinitis',
        author: 'Planta Medica Journal',
        type: 'Research Paper',
        link: 'https://example.com/nettle-allergies'
      },
      {
        title: 'Nettle: The Stinging Herb That Heals',
        author: 'Rosemary Gladstar',
        type: 'Book',
        link: 'https://example.com/nettle-healing'
      }
    ]
  },
  {
    id: 16,
    name: 'Marshmallow Root',
    scientificName: 'Althaea officinalis',
    slug: 'marshmallow-root',
    description: 'Marshmallow root is a demulcent herb rich in mucilage that soothes and protects irritated tissues. It has been used for centuries to treat coughs, digestive issues, and skin conditions.',
    imageUrl: '/images/herbs/marshmallow-root.jpg',
    rating: 4.5,
    categories: ['Digestive', 'Respiratory', 'Skin Care', 'Soothing'],
    benefits: [
      'Soothes irritated mucous membranes',
      'Relieves dry cough and sore throat',
      'Supports digestive health',
      'Protects and heals the skin',
      'May help with urinary tract infections',
      'Traditionally used for heartburn and ulcers'
    ],
    uses: [
      'Soothing coughs and sore throats',
      'Relieving digestive discomfort',
      'Treating minor skin irritations',
      'Supporting urinary tract health',
      'As a gentle remedy for children',
      'In skincare formulations'
    ],
    funFact: 'The modern marshmallow candy was originally made using the root of the marshmallow plant! The sap was whipped with sugar to create a fluffy treat, though today\'s marshmallows no longer contain the actual herb.',
    dosage: {
      powder: '1-2 teaspoons daily mixed with water',
      capsule: '400-800mg, 3 times daily',
      tincture: '2-5ml, 3 times daily',
      tea: '1-2 teaspoons dried root per cup, cold infuse for 8 hours'
    },
    warnings: [
      'May slow the absorption of other medications if taken at the same time',
      'Take at least 2 hours apart from other medications',
      'May lower blood sugar levels',
      'Generally considered safe with few side effects'
    ],
    history: 'Marshmallow has been used medicinally for over 2,000 years. The genus name Althaea comes from the Greek word "altho," meaning "to cure." Ancient Egyptian, Arab, Greek, and Roman physicians used marshmallow to treat a variety of conditions. In ancient Egypt, marshmallow was made into a confection with honey that was reserved for gods and royalty. Throughout the Middle Ages, it was used to treat toothaches, coughs, sore throats, and digestive issues.',
    culturalBackground: 'In many European folk medicine traditions, marshmallow was considered one of the most important medicinal plants. In France, it was cultivated extensively for both medicinal and culinary uses. The original marshmallow confection was developed in France in the 1800s by whipping the sap from the marshmallow root with sugar and egg whites. In Arabic medicine, marshmallow was highly valued for its soothing properties and was used to treat inflammation.',
    preparation: 'Marshmallow root is often prepared as a cold infusion to preserve its mucilage content. It can also be made into teas, tinctures, syrups, or taken in capsules. For topical use, it can be made into poultices or added to salves. The leaves and flowers can also be used medicinally, though the root contains the highest concentration of mucilage.',
    preparations: [
      {
        name: 'Marshmallow Root Cold Infusion',
        ingredients: [
          '1/4 cup dried marshmallow root',
          '1 quart cold water',
          'Honey to taste (optional)',
          'Slice of lemon (optional)'
        ],
        instructions: 'Place marshmallow root in a quart jar. Fill with cold water and cover. Let steep for 8 hours or overnight in the refrigerator. Strain and drink throughout the day for digestive or respiratory soothing. Add honey and lemon if desired. This method preserves the mucilage content better than hot water.'
      },
      {
        name: 'Marshmallow Throat Syrup',
        ingredients: [
          '1/2 cup dried marshmallow root',
          '1 cup water',
          '1 cup honey',
          '1 tablespoon lemon juice',
          '1/4 teaspoon cinnamon (optional)'
        ],
        instructions: 'Combine marshmallow root and water in a pot. Bring to a simmer, then reduce heat and simmer gently for 20-30 minutes. Strain, reserving the liquid. Add honey, lemon juice, and cinnamon if using. Stir until well combined. Store in the refrigerator for up to 3 months. Take 1 teaspoon as needed for sore throat or cough.'
      },
      {
        name: 'Marshmallow Skin Poultice',
        ingredients: [
          '2 tablespoons marshmallow root powder',
          'Hot water (enough to make a paste)',
          'Clean cloth'
        ],
        instructions: 'Mix marshmallow root powder with enough hot water to form a paste. Allow to cool until comfortable to touch. Apply directly to affected skin or spread on a clean cloth and apply to the skin. Cover with another cloth if desired. Leave on for 20-30 minutes. Rinse with warm water. Use for minor skin irritations, burns, or insect bites.'
      }
    ],
    herbPairings: [
      {
        herb: 'Licorice Root',
        benefit: 'Enhanced soothing effects for throat and digestive tract'
      },
      {
        herb: 'Slippery Elm',
        benefit: 'Complementary demulcent action for digestive healing'
      },
      {
        herb: 'Thyme',
        benefit: 'Added antimicrobial action for respiratory infections'
      },
      {
        herb: 'Calendula',
        benefit: 'Excellent combination for skin healing and soothing'
      }
    ],
    benefitsVisualization: [
      { area: 'Respiratory Soothing', percentage: 90 },
      { area: 'Digestive Support', percentage: 85 },
      { area: 'Skin Healing', percentage: 80 },
      { area: 'Urinary Tract Support', percentage: 75 },
      { area: 'Throat Relief', percentage: 90 }
    ],
    resources: [
      {
        title: 'Marshmallow (Althaea officinalis): A Review of Traditional Uses, Phytochemistry and Pharmacology',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/marshmallow-review'
      },
      {
        title: 'Demulcent Herbs: Marshmallow and Friends',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/demulcent-herbs'
      },
      {
        title: 'Making Herbal Remedies with Marshmallow',
        author: 'Rosemary Gladstar',
        type: 'Guide',
        link: 'https://example.com/marshmallow-remedies'
      }
    ]
  },
  {
    id: 17,
    name: 'Hawthorn',
    scientificName: 'Crataegus species',
    slug: 'hawthorn',
    description: 'Hawthorn is a cardiovascular tonic herb that has been used for centuries to support heart health. It strengthens the heart muscle, improves circulation, and may help regulate blood pressure.',
    imageUrl: '/images/herbs/hawthorn.jpg',
    rating: 4.8,
    categories: ['Heart Health', 'Circulatory', 'Antioxidant', 'Nervous System'],
    benefits: [
      'Supports overall heart function',
      'May help regulate blood pressure',
      'Strengthens blood vessels',
      'Has antioxidant properties',
      'May reduce anxiety and stress',
      'Traditionally used for insomnia'
    ],
    uses: [
      'Supporting cardiovascular health',
      'Mild hypertension management',
      'Improving circulation',
      'Reducing anxiety and stress',
      'Supporting recovery after heart issues',
      'As a gentle, long-term heart tonic'
    ],
    funFact: 'Hawthorn is known as "the heart herb" and has been associated with both physical and emotional heart healing. In medieval times, it was hung over the doorway to prevent evil from entering and was associated with hope, happiness, and good fortune!',
    dosage: {
      powder: '500-1000mg, 2-3 times daily',
      capsule: '300-500mg standardized extract, 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried berries or flowers per cup, steep for 15 minutes, 3 cups daily'
    },
    warnings: [
      'May interact with heart medications, blood pressure medications, and cholesterol-lowering drugs',
      'Consult with a healthcare provider if you have heart disease or are taking medications',
      'Effects may take 4-8 weeks to become noticeable',
      'Not recommended during pregnancy without medical supervision'
    ],
    history: 'Hawthorn has been used medicinally since at least the first century CE, when the Greek physician Dioscorides documented its use. In traditional Chinese medicine, it has been used for thousands of years to aid digestion and improve blood circulation. In European folk medicine, it became widely used for heart conditions in the late 19th century, when Dr. Green, an Irish physician, used it successfully to treat his own heart condition.',
    culturalBackground: 'In European folklore, hawthorn was considered a sacred tree associated with protection, love, and fertility. It was believed to be a dwelling place for fairies and was often planted near homes for protection. In Celtic tradition, it marked the entrance to the otherworld and was associated with the May Day festival. In Christianity, it was associated with the crown of thorns and was believed to have protective properties. In many cultures, it was considered bad luck to cut down a hawthorn tree.',
    preparation: 'Different parts of the hawthorn plant are used medicinally, including the berries, leaves, and flowers. They can be prepared as teas, tinctures, or taken in capsules. Standardized extracts are often used in clinical studies. Hawthorn is typically taken over a long period for chronic support of the cardiovascular system.',
    preparations: [
      {
        name: 'Hawthorn Berry Tea',
        ingredients: [
          '1-2 teaspoons dried hawthorn berries',
          '1 cup hot water',
          'Cinnamon stick (optional)',
          'Honey to taste'
        ],
        instructions: 'Crush the dried berries slightly to release their medicinal compounds. Place in a tea infuser with a cinnamon stick if using. Pour hot water over herbs and steep for 15-20 minutes. Strain and add honey if desired. Drink 3 cups daily for heart health. Note that consistent use over several weeks is typically needed to see benefits.'
      },
      {
        name: 'Hawthorn Heart Tonic',
        ingredients: [
          '1 part hawthorn berries',
          '1 part hawthorn leaves and flowers',
          '1/2 part motherwort',
          '1/2 part linden flowers',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a glass jar. Cover with alcohol. Seal jar and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 3 times daily for cardiovascular support.'
      },
      {
        name: 'Hawthorn Berry Syrup',
        ingredients: [
          '1 cup dried hawthorn berries',
          '3 cups water',
          '1 cup honey',
          '1 tablespoon lemon juice',
          '1 cinnamon stick (optional)'
        ],
        instructions: 'Place hawthorn berries, water, and cinnamon stick if using in a pot. Bring to a boil, then reduce heat and simmer for 30-40 minutes until liquid is reduced by half. Strain, reserving the liquid. Add honey and lemon juice. Stir until well combined. Store in the refrigerator for up to 3 months. Take 1 tablespoon daily as a heart tonic.'
      }
    ],
    herbPairings: [
      {
        herb: 'Motherwort',
        benefit: 'Enhanced heart-calming effects and nervous system support'
      },
      {
        herb: 'Linden',
        benefit: 'Complementary cardiovascular support and mild sedative effects'
      },
      {
        herb: 'Garlic',
        benefit: 'Added circulatory support and cholesterol-balancing effects'
      },
      {
        herb: 'Rose',
        benefit: 'Traditional pairing for emotional heart support and mild stress relief'
      }
    ],
    benefitsVisualization: [
      { area: 'Heart Function', percentage: 90 },
      { area: 'Blood Pressure Support', percentage: 85 },
      { area: 'Antioxidant Activity', percentage: 80 },
      { area: 'Circulatory Support', percentage: 85 },
      { area: 'Anxiety Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Hawthorn Berry for the Heart: A Review of Clinical Studies',
        author: 'Journal of Cardiovascular Nursing',
        type: 'Research Paper',
        link: 'https://example.com/hawthorn-heart-review'
      },
      {
        title: 'Hawthorn (Crataegus spp.) in the Treatment of Cardiovascular Disease',
        author: 'Pharmacognosy Reviews',
        type: 'Research Paper',
        link: 'https://example.com/hawthorn-cardiovascular'
      },
      {
        title: 'The Healing Power of Hawthorn',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/healing-hawthorn'
      }
    ]
  }
];

export default extraHerbs;

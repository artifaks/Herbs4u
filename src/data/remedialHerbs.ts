import { HerbData } from '../types/herbs';

const remedialHerbs: HerbData[] = [
  {
    id: 39,
    name: 'Milk Thistle',
    scientificName: 'Silybum marianum',
    slug: 'milk-thistle',
    description: 'Milk Thistle is renowned for its liver-protective and detoxifying properties. Its active compound, silymarin, has been extensively studied for its ability to support liver health, protect against toxins, and promote cellular regeneration.',
    imageUrl: '/images/herbs/milk-thistle.jpg',
    rating: 4.7,
    categories: ['Liver Support', 'Detoxification', 'Antioxidant', 'Digestive'],
    benefits: [
      'Protects liver cells from damage',
      'Supports liver detoxification processes',
      'Has powerful antioxidant properties',
      'May help regulate blood sugar levels',
      'Supports healthy digestion',
      'May help reduce inflammation'
    ],
    uses: [
      'Supporting liver health and function',
      'Protecting against environmental toxins',
      'Supporting recovery from alcohol consumption',
      'As part of detoxification protocols',
      'Supporting digestive health',
      'For skin conditions related to liver function'
    ],
    funFact: 'The name "Milk Thistle" comes from the milky white sap that comes from the leaves when they\'re broken, and the white marbling pattern on its leaves that, according to legend, was caused by drops of the Virgin Mary\'s milk falling onto the plant.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '140-800mg standardized extract (70-80% silymarin), 2-3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1-2 teaspoons crushed seeds per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the Asteraceae family',
      'May have mild laxative effects at high doses',
      'May interact with certain medications that are processed by the liver',
      'Pregnant or nursing women should consult with a healthcare provider before use'
    ],
    history: 'Milk Thistle has been used medicinally for over 2,000 years. It was described by Pliny the Elder in the 1st century AD as a remedy for snake bites. In the Middle Ages, it was cultivated in European monasteries for medicinal use. The 16th-century herbalist John Gerard recommended it for "opening obstructions" of the liver. Nicholas Culpeper, in the 17th century, described it as effective against jaundice. By the 19th century, it was widely recognized in Western herbal medicine for liver complaints.',
    culturalBackground: 'In European folk medicine, Milk Thistle was considered a sacred herb associated with the Virgin Mary. The white markings on its leaves were said to be from her milk, giving the plant protective qualities. In traditional German medicine, it was a primary remedy for liver, spleen, and gallbladder disorders. In traditional Chinese medicine, it was used to clear heat and remove toxicity. Today, it is one of the most well-researched herbs for liver support and is used in conventional medicine in parts of Europe for treating liver disorders.',
    preparation: 'The seeds (technically fruits) of Milk Thistle contain the highest concentration of active compounds and are the part most commonly used medicinally. They can be ground and prepared as a tea, though the active compounds are not very water-soluble. Alcohol-based tinctures or standardized extracts are more effective for accessing the medicinal properties. The young leaves can also be eaten as a vegetable or added to salads.',
    preparations: [
      {
        name: 'Milk Thistle Liver Support Tincture',
        ingredients: [
          '1 cup Milk Thistle seeds, crushed',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 tablespoon dandelion root, dried',
          '1 teaspoon licorice root, dried',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Crush the Milk Thistle seeds using a coffee grinder or mortar and pestle. Place all herbs in a clean glass jar. Cover with alcohol, making sure all herbs are submerged. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-3ml, 2-3 times daily before meals to support liver function and detoxification.'
      },
      {
        name: 'Milk Thistle Detox Tea Blend',
        ingredients: [
          '2 teaspoons crushed Milk Thistle seeds',
          '1 teaspoon dandelion root',
          '1 teaspoon burdock root',
          '1/2 teaspoon peppermint leaves',
          '1/4 teaspoon ginger, dried',
          '2 cups water',
          'Honey to taste',
          'Lemon slice (optional)'
        ],
        instructions: 'Combine all herbs in a pot. Add water and bring to a boil. Reduce heat and simmer for 15 minutes. Strain and add honey and lemon if desired. Drink 1-2 cups daily as part of a gentle detoxification program. This tea supports liver function and helps the body eliminate toxins.'
      },
      {
        name: 'Milk Thistle Seed Powder',
        ingredients: [
          '1 cup Milk Thistle seeds',
          'Coffee grinder or high-powered blender'
        ],
        instructions: 'Place seeds in a coffee grinder or high-powered blender and grind into a fine powder. Store in an airtight container in a cool, dark place. Take 1-2 teaspoons daily mixed in water, juice, or smoothies. The powder can also be added to foods like yogurt, oatmeal, or soups. This is a simple way to incorporate the liver-protective benefits of Milk Thistle into your daily routine.'
      }
    ],
    herbPairings: [
      {
        herb: 'Dandelion Root',
        benefit: 'Enhanced liver detoxification and support for bile production'
      },
      {
        herb: 'Artichoke Leaf',
        benefit: 'Complementary liver protection and support for fat digestion'
      },
      {
        herb: 'Turmeric',
        benefit: 'Added anti-inflammatory and antioxidant support'
      },
      {
        herb: 'Burdock Root',
        benefit: 'Enhanced blood purification and skin health support'
      }
    ],
    benefitsVisualization: [
      { area: 'Liver Protection', percentage: 95 },
      { area: 'Detoxification', percentage: 90 },
      { area: 'Antioxidant Activity', percentage: 85 },
      { area: 'Digestive Support', percentage: 75 },
      { area: 'Skin Health', percentage: 70 }
    ],
    resources: [
      {
        title: 'Milk Thistle: Effects on Liver Disease and Cirrhosis',
        author: 'National Center for Complementary and Integrative Health',
        type: 'Research Review',
        link: 'https://example.com/milk-thistle-liver-research'
      },
      {
        title: 'Silymarin in the Treatment of Liver Diseases: An Overview',
        author: 'Journal of Hepatology',
        type: 'Research Paper',
        link: 'https://example.com/silymarin-liver-treatment'
      },
      {
        title: 'The Therapeutic Potential of Milk Thistle',
        author: 'Alternative Medicine Review',
        type: 'Clinical Review',
        link: 'https://example.com/milk-thistle-therapeutic'
      }
    ]
  },
  {
    id: 40,
    name: 'Valerian',
    scientificName: 'Valeriana officinalis',
    slug: 'valerian',
    description: 'Valerian is a powerful nervine herb known for its sedative and calming properties. It has been used for centuries to promote restful sleep, ease anxiety, and relieve tension without the side effects of conventional sleep medications.',
    imageUrl: '/images/herbs/valerian.jpg',
    rating: 4.5,
    categories: ['Sleep Aid', 'Anxiety Relief', 'Nervine', 'Relaxant'],
    benefits: [
      'Promotes deep, restful sleep',
      'Reduces anxiety and nervous tension',
      'Helps relieve muscle spasms',
      'Supports healthy stress response',
      'May help reduce headaches related to tension',
      'Supports overall nervous system health'
    ],
    uses: [
      'For occasional insomnia and sleep disturbances',
      'To ease anxiety and nervous tension',
      'For muscle tension and spasms',
      'During times of stress',
      'For tension headaches',
      'To support withdrawal from sleep medications'
    ],
    funFact: 'Despite its sleep-promoting benefits for humans, valerian has the opposite effect on cats! It contains compounds similar to catnip and can cause excitement and euphoria in felines. The root also has a distinctive smell often described as "old socks" or "dirty feet," yet it was used as a perfume in medieval times!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-600mg, 1-2 hours before bedtime',
      tincture: '2-4ml, 30 minutes before bedtime',
      tea: '1-2 teaspoons dried root per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause morning drowsiness if taken in high doses',
      'Should not be combined with alcohol or other sedatives',
      'Not recommended for use during pregnancy or breastfeeding',
      'May interact with certain medications',
      'Should be discontinued 2 weeks before surgery',
      'Some people experience paradoxical stimulation'
    ],
    history: 'Valerian has been used medicinally since ancient Greek and Roman times. Hippocrates described its properties, and Galen prescribed it for insomnia. In medieval Europe, it was considered a "heal-all" and was used to treat epilepsy, digestive problems, and nervous disorders. During World War I, it was used to treat shell shock in soldiers. In the 16th century, it was listed in the Pharmacopoeia Londinensis. By the 18th century, it was widely recognized as a sedative and was used to treat "nervous complaints" throughout Europe and later in North America.',
    culturalBackground: 'In European folk medicine, valerian was considered a protective herb and was hung in the home to ward off lightning and evil. In medieval Sweden, it was sometimes placed in the wedding clothes of the groom to prevent envy from the elves. In traditional Persian medicine, it was used for digestive complaints and as a sedative. In American folk medicine of the 19th century, it was used for "hysteria" and nervous conditions. Today, it remains one of the most popular herbal sleep aids worldwide and is included in many pharmacopoeias.',
    preparation: 'The root and rhizome of valerian are the parts used medicinally. They are typically harvested in the fall after 2 years of growth when the medicinal compounds are most concentrated. The fresh root has little odor, but develops its characteristic smell when dried. It can be prepared as a tea, tincture, or taken in capsules. For sleep support, it is often taken 30-60 minutes before bedtime. The effects may be more pronounced after regular use for a few weeks.',
    preparations: [
      {
        name: 'Valerian Sleep Support Tea',
        ingredients: [
          '1 teaspoon dried valerian root',
          '1 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried passionflower',
          '1/2 teaspoon dried lemon balm',
          '1 cup hot water',
          'Honey to taste',
          'Lemon slice (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser or teapot. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey and lemon if desired. Drink 1 cup 30-60 minutes before bedtime to promote restful sleep. The combination of herbs works synergistically to calm the nervous system and prepare the body for sleep.'
      },
      {
        name: 'Valerian Relaxation Tincture',
        ingredients: [
          '1 cup dried valerian root, chopped',
          '1/4 cup dried skullcap',
          '1/4 cup dried California poppy',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place all herbs in a clean glass jar. Cover with alcohol, making sure all herbs are submerged. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 30 minutes before bedtime for sleep support, or 1-2ml as needed during the day for anxiety (the lower daytime dose typically doesn\'t cause drowsiness).'
      },
      {
        name: 'Valerian Dream Pillow',
        ingredients: [
          '1/2 cup dried valerian root',
          '1/2 cup dried lavender flowers',
          '1/4 cup dried hops',
          '1/4 cup dried rose petals',
          'Small cotton or muslin bag',
          'Needle and thread'
        ],
        instructions: 'Mix all dried herbs together in a bowl. Fill the cotton bag with the herb mixture and sew it closed. Place this dream pillow inside your pillowcase or near your bed. The aroma of the herbs will promote relaxation and restful sleep. The pillow can be gently squeezed before bedtime to release more of the aromatic compounds. Replace the herbs every 3-6 months as the scent fades.'
      }
    ],
    herbPairings: [
      {
        herb: 'Hops',
        benefit: 'Enhanced sedative effect for deeper sleep'
      },
      {
        herb: 'Passionflower',
        benefit: 'Added anxiety relief and mental relaxation'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Complementary calming effect with added digestive support'
      },
      {
        herb: 'Skullcap',
        benefit: 'Enhanced nervous system support and tension relief'
      }
    ],
    benefitsVisualization: [
      { area: 'Sleep Quality', percentage: 90 },
      { area: 'Anxiety Reduction', percentage: 85 },
      { area: 'Muscle Relaxation', percentage: 80 },
      { area: 'Stress Response', percentage: 75 },
      { area: 'Nervous System Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Valerian for Sleep: A Systematic Review and Meta-Analysis',
        author: 'American Journal of Medicine',
        type: 'Research Review',
        link: 'https://example.com/valerian-sleep-review'
      },
      {
        title: 'The Effects of Valerian on the Nervous System',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/valerian-nervous-system'
      },
      {
        title: 'Valerian: A safe and effective herbal sleep aid?',
        author: 'Sleep Medicine Reviews',
        type: 'Clinical Review',
        link: 'https://example.com/valerian-safety-efficacy'
      }
    ]
  },
  {
    id: 41,
    name: 'Astragalus',
    scientificName: 'Astragalus membranaceus',
    slug: 'astragalus',
    description: 'Astragalus is a powerful immune-supporting herb with deep roots in traditional Chinese medicine. Known as Huang Qi in Chinese, it is considered a premier tonic herb that strengthens the body\'s vital energy (Qi), supports immune function, and promotes longevity.',
    imageUrl: '/images/herbs/astragalus.jpg',
    rating: 4.6,
    categories: ['Immune Support', 'Adaptogen', 'Longevity', 'Energy', 'Tonic'],
    benefits: [
      'Strengthens the immune system',
      'Increases resistance to stress',
      'Supports cardiovascular health',
      'Promotes energy and vitality',
      'Has antioxidant properties',
      'Supports healthy aging'
    ],
    uses: [
      'Preventing common colds and respiratory infections',
      'Supporting recovery from illness or surgery',
      'For chronic fatigue and low energy',
      'Supporting athletic performance and recovery',
      'As a longevity tonic',
      'For seasonal immune support'
    ],
    funFact: 'In traditional Chinese medicine, astragalus is often prepared as "huang qi chicken soup" for immune support. The root is also known for its unique appearance - when sliced, it resembles a tongue, which some herbalists see as a signature of its ability to "speak to" and strengthen the body\'s defenses!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '3-5 slices of dried root per cup, simmer for 20-30 minutes'
    },
    warnings: [
      'May interact with immune-suppressing medications',
      'Not recommended during acute infections with fever',
      'May affect blood sugar levels',
      'Should be used cautiously by people with autoimmune conditions',
      'Pregnant or nursing women should consult with a healthcare provider before use'
    ],
    history: 'Astragalus has been used in traditional Chinese medicine for over 2,000 years. It first appeared in the Shennong Ben Cao Jing, the oldest Chinese materia medica, compiled around 200 BCE. It was classified as a superior herb, meaning it could be taken long-term for overall health and longevity without side effects. Traditionally, it was used to strengthen the "defensive Qi," treat fatigue, support digestion, and promote wound healing. It was often combined with other herbs in formulas tailored to specific conditions.',
    culturalBackground: 'In Chinese medicine, astragalus is considered one of the most important "Qi tonics" and is used to strengthen the body\'s protective energy. It is associated with the Earth element and the Spleen and Lung meridians in traditional Chinese medical theory. In modern China, it is still widely used in hospitals alongside conventional medicine, particularly for cancer patients to reduce side effects of chemotherapy. In Western herbalism, it gained popularity in the late 20th century primarily as an immune-supporting herb. It is now one of the most researched herbs for immune function.',
    preparation: 'The root of astragalus is the part used medicinally. It is typically harvested from 4-7 year old plants when the medicinal compounds are most concentrated. In traditional Chinese medicine, it is often prepared as a decoction (simmered in water) or added to soups and stews. It can also be prepared as a tincture or taken in capsules. Astragalus is considered a tonic herb and is often taken daily for extended periods, particularly during cold and flu season or times of stress.',
    preparations: [
      {
        name: 'Astragalus Immune Support Soup',
        ingredients: [
          '1/4 cup dried astragalus root slices',
          '1 whole chicken or 2 pounds chicken bones',
          '2 carrots, chopped',
          '2 celery stalks, chopped',
          '1 onion, quartered',
          '2 garlic cloves, crushed',
          '1 inch piece of ginger, sliced',
          '8 cups water',
          'Salt and pepper to taste',
          'Fresh herbs like parsley or cilantro (optional)'
        ],
        instructions: 'Place all ingredients except fresh herbs in a large pot. Bring to a boil, then reduce heat and simmer for 2-3 hours. Remove astragalus slices and bones. Strain if desired. Add fresh herbs before serving. This soup is traditionally eaten during the change of seasons or when immune support is needed. It can be frozen in portions for convenient use.'
      },
      {
        name: 'Astragalus Energy Tonic',
        ingredients: [
          '2 tablespoons dried astragalus root',
          '1 tablespoon dried codonopsis root',
          '1 tablespoon dried licorice root',
          '1 tablespoon dried goji berries',
          '1 cinnamon stick',
          '3 cups water',
          'Honey to taste (optional)'
        ],
        instructions: 'Combine all herbs in a pot. Add water and bring to a boil. Reduce heat and simmer for 30-45 minutes until reduced by about one-third. Strain and add honey if desired. Drink 1/2 cup daily as a general tonic for energy and immune support. This traditional formula is designed to strengthen Qi and support overall vitality.'
      },
      {
        name: 'Astragalus Glycerite (Alcohol-Free Tincture)',
        ingredients: [
          '1 cup dried astragalus root, chopped',
          '2 cups vegetable glycerin',
          '1 cup water',
          'Glass jar with tight-fitting lid',
          'Slow cooker'
        ],
        instructions: 'Place chopped astragalus in a clean glass jar. Mix glycerin and water together and pour over the herb, making sure it is completely covered. Seal the jar tightly. Place a towel in the bottom of a slow cooker and add water until it reaches halfway up the jar. Set the slow cooker to low and let it process for 3 days. Check water levels periodically and add more if needed. After 3 days, strain the mixture through cheesecloth and store in dark glass bottles. Take 1/2-1 teaspoon, 2-3 times daily for immune support. This alcohol-free preparation is suitable for children and those who avoid alcohol.'
      }
    ],
    herbPairings: [
      {
        herb: 'Reishi Mushroom',
        benefit: 'Enhanced immune modulation and adaptogenic support'
      },
      {
        herb: 'Codonopsis',
        benefit: 'Complementary energy support with added digestive benefits'
      },
      {
        herb: 'Elderberry',
        benefit: 'Added antiviral support for respiratory health'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Enhanced adaptogenic effects and improved flavor'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 95 },
      { area: 'Energy Enhancement', percentage: 85 },
      { area: 'Stress Resistance', percentage: 80 },
      { area: 'Cardiovascular Health', percentage: 75 },
      { area: 'Longevity Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Astragalus membranaceus: A Review of its Protection Against Inflammation and Gastrointestinal Cancers',
        author: 'American Journal of Chinese Medicine',
        type: 'Research Review',
        link: 'https://example.com/astragalus-cancer-review'
      },
      {
        title: 'Immunomodulating Effects of Astragalus Polysaccharides',
        author: 'Journal of Medicinal Food',
        type: 'Research Paper',
        link: 'https://example.com/astragalus-immune-effects'
      },
      {
        title: 'Traditional Uses and Modern Research on Astragalus',
        author: 'Chinese Journal of Natural Medicines',
        type: 'Clinical Review',
        link: 'https://example.com/astragalus-traditional-modern'
      }
    ]
  }
];

export default remedialHerbs;

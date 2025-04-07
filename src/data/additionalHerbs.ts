import { HerbData } from '@/types/herbs';

const additionalHerbs: HerbData[] = [
  {
    id: 9,
    name: 'Valerian Root',
    scientificName: 'Valeriana officinalis',
    slug: 'valerian-root',
    description: 'Valerian root is a powerful natural sedative that helps promote sleep and reduce anxiety. It has been used for centuries to treat insomnia, nervousness, and headaches.',
    imageUrl: '/images/herbs/valerian-root.jpg',
    rating: 4.3,
    categories: ['Sleep', 'Anxiety', 'Stress Relief', 'Nervous System'],
    benefits: [
      'Improves sleep quality',
      'Reduces anxiety and stress',
      'Eases menstrual cramps',
      'May lower blood pressure',
      'Helps with headache relief'
    ],
    uses: [
      'Natural sleep aid',
      'Anxiety management',
      'Stress reduction',
      'Menstrual pain relief',
      'Headache treatment'
    ],
    funFact: 'Valerian root has such a strong smell that it was used as a perfume in the 16th century, despite its unpleasant odor to modern noses.',
    dosage: {
      powder: '500-1000mg before bedtime',
      capsule: '300-600mg, 1-2 hours before bedtime',
      tincture: '1-2ml, 1-3 times daily',
      tea: '1 teaspoon of dried root in hot water, steep for 10-15 minutes'
    },
    warnings: [
      'May cause drowsiness - avoid driving or operating machinery',
      'Not recommended during pregnancy or breastfeeding',
      'May interact with alcohol and sedative medications',
      'Can cause morning grogginess if taken in high doses'
    ],
    history: 'Valerian has been used as a medicinal herb since ancient Greek and Roman times. Hippocrates described its properties, and Galen prescribed it for insomnia. During the Middle Ages, it was considered a cure-all and was especially popular for epilepsy.',
    culturalBackground: 'In medieval Sweden, valerian was sometimes placed in the wedding clothes of the groom to ward off the "envy" of the elves. During World War II, it was used to help calm civilians during air raids.',
    preparation: 'Valerian root is typically prepared as a tea, tincture, or taken in capsule form. The root is harvested in the fall after at least two years of growth when its medicinal compounds are most concentrated.',
    preparations: [
      {
        name: 'Valerian Sleep Tea',
        ingredients: [
          '1 teaspoon dried valerian root',
          '1 teaspoon chamomile flowers',
          '1/2 teaspoon lemon balm',
          'Honey to taste (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour boiling water over herbs and steep for 10-15 minutes. Add honey if desired. Drink 30-60 minutes before bedtime.'
      },
      {
        name: 'Valerian Relaxation Tincture',
        ingredients: [
          '1 cup chopped valerian root',
          '2 cups high-proof vodka or brandy',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place valerian root in the jar and cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking occasionally. Strain through cheesecloth and store in dark bottles. Take 1/4 to 1/2 teaspoon as needed for anxiety or sleep.'
      }
    ],
    herbPairings: [
      {
        herb: 'Chamomile',
        benefit: 'Enhanced sleep-promoting effects'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Improved anxiety relief'
      },
      {
        herb: 'Passionflower',
        benefit: 'Stronger sedative effect for insomnia'
      }
    ],
    benefitsVisualization: [
      {
        area: 'Sleep Improvement',
        percentage: 85
      },
      {
        area: 'Anxiety Reduction',
        percentage: 75
      },
      {
        area: 'Stress Relief',
        percentage: 70
      },
      {
        area: 'Pain Relief',
        percentage: 45
      }
    ],
    resources: [
      {
        title: 'Valerian Root for Sleep: A Systematic Review and Meta-Analysis',
        author: 'Bent S, et al.',
        type: 'Research Paper',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4394901/'
      },
      {
        title: 'Valerian for Sleep: A Systematic Review and Meta-Analysis',
        author: 'Fernández-San-Martín MI, et al.',
        type: 'Research Paper',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20347389/'
      }
    ]
  },
  {
    id: 10,
    name: 'Milk Thistle',
    scientificName: 'Silybum marianum',
    slug: 'milk-thistle',
    description: 'Milk thistle is a flowering herb known for its liver-protecting and detoxifying properties. Its active compound, silymarin, has powerful antioxidant and anti-inflammatory effects.',
    imageUrl: '/images/herbs/milk-thistle.jpg',
    rating: 4.5,
    categories: ['Liver Health', 'Detoxification', 'Antioxidant', 'Digestive Health'],
    benefits: [
      'Protects liver cells from toxins',
      'Supports liver regeneration',
      'Reduces inflammation',
      'May help lower cholesterol',
      'Supports insulin resistance in type 2 diabetes'
    ],
    uses: [
      'Liver detoxification',
      'Hangover prevention',
      'Support during cancer treatments',
      'Management of cirrhosis and hepatitis',
      'Digestive disorders'
    ],
    funFact: 'The white marbling on milk thistle leaves is said to have come from drops of the Virgin Mary\'s milk, which is how the plant got its name.',
    dosage: {
      powder: '140-800mg daily, divided into 3 doses',
      capsule: '200-400mg, 2-3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1 teaspoon crushed seeds in hot water, steep for 10-15 minutes'
    },
    warnings: [
      'May cause allergic reactions in people allergic to plants in the same family (ragweed, chrysanthemums, marigolds, daisies)',
      'May lower blood sugar levels',
      'Can have a mild laxative effect',
      'May interact with certain medications processed by the liver'
    ],
    history: 'Milk thistle has been used for over 2,000 years as a herbal remedy for liver and gallbladder problems. The ancient Greeks and Romans used it for liver ailments and snake bites. In the Middle Ages, it was a remedy for liver diseases and depression.',
    culturalBackground: 'In European folk medicine, milk thistle was considered a sacred herb for mothers. The plant was believed to promote lactation, which is reflected in its name. Traditional German medicine practitioners have used milk thistle for liver disorders since the 16th century.',
    preparation: 'The seeds (fruits) of milk thistle are the medicinal part of the plant. They can be ground and made into teas, tinctures, or extracts. Commercial preparations often standardize the amount of silymarin, the active compound.',
    preparations: [
      {
        name: 'Milk Thistle Liver Cleanse Tea',
        ingredients: [
          '1 tablespoon crushed milk thistle seeds',
          '1 teaspoon dried dandelion root',
          '1/2 teaspoon dried peppermint leaves',
          'Honey to taste (optional)'
        ],
        instructions: 'Crush milk thistle seeds in a coffee grinder. Combine with other herbs in a tea infuser. Pour boiling water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1-2 cups daily.'
      },
      {
        name: 'Milk Thistle Tincture',
        ingredients: [
          '1 cup milk thistle seeds',
          '2 cups high-proof vodka or vegetable glycerin',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Crush the seeds slightly and place in the jar. Cover with alcohol or glycerin. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark bottles. Take 1/4 to 1/2 teaspoon, 2-3 times daily.'
      }
    ],
    herbPairings: [
      {
        herb: 'Dandelion Root',
        benefit: 'Enhanced liver detoxification'
      },
      {
        herb: 'Artichoke Leaf',
        benefit: 'Improved bile production and digestion'
      },
      {
        herb: 'Turmeric',
        benefit: 'Stronger anti-inflammatory effect'
      }
    ],
    benefitsVisualization: [
      {
        area: 'Liver Protection',
        percentage: 90
      },
      {
        area: 'Detoxification',
        percentage: 85
      },
      {
        area: 'Antioxidant Activity',
        percentage: 80
      },
      {
        area: 'Digestive Support',
        percentage: 65
      }
    ],
    resources: [
      {
        title: 'Milk Thistle in Liver Diseases: Past, Present, Future',
        author: 'Abenavoli L, et al.',
        type: 'Research Paper',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110560/'
      },
      {
        title: 'Review of Clinical Trials Evaluating Safety and Efficacy of Milk Thistle',
        author: 'Tamayo C, Diamond S.',
        type: 'Research Paper',
        link: 'https://pubmed.ncbi.nlm.nih.gov/17548793/'
      }
    ]
  },
  {
    id: 11,
    name: 'Rhodiola',
    scientificName: 'Rhodiola rosea',
    slug: 'rhodiola',
    description: 'Rhodiola is an adaptogenic herb that helps the body adapt to stress, enhances mental performance, and reduces fatigue. It grows in cold regions of Europe and Asia and has been used in traditional medicine for centuries.',
    imageUrl: '/images/herbs/rhodiola.jpg',
    rating: 4.6,
    categories: ['Adaptogen', 'Energy', 'Mental Performance', 'Stress Relief'],
    benefits: [
      'Reduces stress and fatigue',
      'Improves mental performance',
      'Enhances physical endurance',
      'May help with depression symptoms',
      'Supports immune function'
    ],
    uses: [
      'Combat fatigue and exhaustion',
      'Improve concentration and memory',
      'Enhance athletic performance',
      'Manage stress-related burnout',
      'Support mood balance'
    ],
    funFact: 'Rhodiola was used by Vikings to enhance physical strength and endurance, and by Sherpas to help climb at high altitudes in the Himalayas.',
    dosage: {
      powder: '200-600mg daily',
      capsule: '200-400mg daily, standardized to 3% rosavins and 1% salidroside',
      tincture: '1-2ml, 1-3 times daily',
      tea: '1 teaspoon dried root in hot water, steep for 10 minutes'
    },
    warnings: [
      'May cause dizziness, dry mouth, or insomnia if taken late in the day',
      'Not recommended during pregnancy or breastfeeding',
      'May interact with antidepressants and blood pressure medications',
      'May stimulate the immune system, caution with autoimmune disorders'
    ],
    history: 'Rhodiola has been used in traditional medicine systems in Russia, Scandinavia, and other Arctic regions for centuries. It was used to increase physical endurance, work productivity, longevity, and to treat fatigue, depression, and nervous system disorders.',
    culturalBackground: 'In Siberia, people believed that those who drank rhodiola tea would live to be more than 100 years old. In Mongolia, it was prescribed for tuberculosis and cancer. The Vikings reportedly used rhodiola to enhance their physical strength and endurance.',
    preparation: 'The medicinal part of rhodiola is the root, which is typically dried and prepared as a tea, tincture, or powdered for capsules. Commercial extracts are often standardized to contain specific amounts of the active compounds rosavins and salidroside.',
    preparations: [
      {
        name: 'Rhodiola Energy Tonic',
        ingredients: [
          '1 teaspoon dried rhodiola root',
          '1/2 teaspoon dried eleuthero root',
          '1/2 teaspoon dried schisandra berries',
          'Honey to taste (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour boiling water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink in the morning or early afternoon for energy and stress resilience.'
      },
      {
        name: 'Rhodiola Adaptogen Tincture',
        ingredients: [
          '1 cup chopped rhodiola root',
          '2 cups high-proof vodka or vegetable glycerin',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place rhodiola root in the jar and cover with alcohol or glycerin. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking occasionally. Strain through cheesecloth and store in dark bottles. Take 1/4 to 1/2 teaspoon, 1-2 times daily in the morning or early afternoon.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ashwagandha',
        benefit: 'Enhanced stress-reducing effects'
      },
      {
        herb: 'Eleuthero',
        benefit: 'Improved energy and endurance'
      },
      {
        herb: 'Schisandra',
        benefit: 'Better mental focus and clarity'
      }
    ],
    benefitsVisualization: [
      {
        area: 'Stress Reduction',
        percentage: 85
      },
      {
        area: 'Mental Performance',
        percentage: 80
      },
      {
        area: 'Physical Endurance',
        percentage: 75
      },
      {
        area: 'Mood Enhancement',
        percentage: 70
      }
    ],
    resources: [
      {
        title: 'Rhodiola rosea: A Versatile Adaptogen',
        author: 'Panossian A, et al.',
        type: 'Research Paper',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6288277/'
      },
      {
        title: 'The Effects of Rhodiola rosea L. Extract on Anxiety, Stress, Cognition and Other Mood Symptoms',
        author: 'Cropley M, et al.',
        type: 'Research Paper',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26502953/'
      }
    ]
  },
  {
    id: 12,
    name: 'Lemon Balm',
    scientificName: 'Melissa officinalis',
    slug: 'lemon-balm',
    description: 'Lemon balm is a calming herb with a gentle lemony scent that helps reduce anxiety, promote sleep, and support digestive health. It has been used for its medicinal properties for over 2,000 years.',
    imageUrl: '/images/herbs/lemon-balm.jpg',
    rating: 4.4,
    categories: ['Calming', 'Sleep', 'Digestive Health', 'Antiviral'],
    benefits: [
      'Reduces anxiety and stress',
      'Promotes restful sleep',
      'Eases digestive discomfort',
      'May help with cold sores (herpes simplex)',
      'Supports cognitive function'
    ],
    uses: [
      'Natural sleep aid',
      'Anxiety management',
      'Digestive support',
      'Cold sore treatment',
      'Focus enhancement for ADHD'
    ],
    funFact: 'Lemon balm was used in the Middle Ages to attract bees for honey production. Its genus name, Melissa, is Greek for "honeybee."',
    dosage: {
      powder: '300-600mg, 3 times daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1-2 teaspoons dried herb in hot water, steep for 5-10 minutes'
    },
    warnings: [
      'May interact with sedative medications and thyroid medications',
      'Can cause drowsiness in high doses',
      'May lower blood pressure',
      'Use caution before surgery due to potential sedative effects'
    ],
    history: 'Lemon balm has been cultivated for over 2,000 years. The ancient Greeks and Romans used it for its medicinal properties. Avicenna, the 11th-century Persian physician, wrote about lemon balm\'s effects on the heart and mind. In the Middle Ages, it was used to reduce stress and anxiety, heal wounds, and treat insect bites.',
    culturalBackground: 'Carmelite nuns created a famous lemon balm preparation called "Carmelite water" in the 14th century, which was used as a tonic for nervous headaches and neuralgic pain. In traditional European herbalism, lemon balm was considered a "gladdening herb" that could dispel melancholy.',
    preparation: 'Lemon balm leaves are harvested just before the plant flowers when their essential oil content is highest. The leaves can be used fresh or dried for teas, tinctures, and essential oils. It is often combined with other calming herbs like valerian and chamomile.',
    preparations: [
      {
        name: 'Lemon Balm Calming Tea',
        ingredients: [
          '2 teaspoons fresh or 1 teaspoon dried lemon balm leaves',
          '1 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried lavender buds (optional)',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour boiling water over herbs and steep for 5-10 minutes. Strain and add honey if desired. Drink 1-3 cups daily for anxiety or before bedtime for sleep.'
      },
      {
        name: 'Lemon Balm Cold Sore Salve',
        ingredients: [
          '1/4 cup dried lemon balm leaves',
          '1/2 cup olive oil',
          '2 tablespoons beeswax',
          '10 drops lemon balm essential oil (optional)'
        ],
        instructions: 'Infuse lemon balm in olive oil by heating gently for 30 minutes. Strain out herbs. Add beeswax to the infused oil and heat until melted. Remove from heat, add essential oil if using, and pour into small containers. Apply to cold sores at the first sign of outbreak.'
      }
    ],
    herbPairings: [
      {
        herb: 'Valerian',
        benefit: 'Enhanced sleep-promoting effects'
      },
      {
        herb: 'Chamomile',
        benefit: 'Improved calming and digestive benefits'
      },
      {
        herb: 'Peppermint',
        benefit: 'Better digestive support and headache relief'
      }
    ],
    benefitsVisualization: [
      {
        area: 'Anxiety Reduction',
        percentage: 80
      },
      {
        area: 'Sleep Improvement',
        percentage: 75
      },
      {
        area: 'Digestive Support',
        percentage: 70
      },
      {
        area: 'Antiviral Activity',
        percentage: 65
      }
    ],
    resources: [
      {
        title: 'Attenuation of Laboratory-Induced Stress in Humans After Acute Administration of Melissa officinalis (Lemon Balm)',
        author: 'Kennedy DO, et al.',
        type: 'Research Paper',
        link: 'https://pubmed.ncbi.nlm.nih.gov/15272110/'
      },
      {
        title: 'Melissa officinalis L: A Review Study With an Antioxidant Prospective',
        author: 'Miraj S, et al.',
        type: 'Research Paper',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871149/'
      }
    ]
  }
];

export default additionalHerbs;

import { HerbData } from '../types/herbs';

const specialHerbs: HerbData[] = [
  {
    id: 24,
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea, Echinacea angustifolia',
    slug: 'echinacea',
    description: 'Echinacea is a powerful immune-stimulating herb native to North America. It has been used traditionally by Native Americans and is now one of the most popular herbs for supporting the body during colds and infections.',
    imageUrl: '/images/herbs/echinacea.jpg',
    rating: 4.7,
    categories: ['Immune Support', 'Anti-inflammatory', 'Antimicrobial', 'Wound Healing'],
    benefits: [
      'Stimulates the immune system',
      'May reduce duration and severity of colds',
      'Has antimicrobial properties',
      'Supports wound healing',
      'Has anti-inflammatory effects',
      'Traditionally used for infections'
    ],
    uses: [
      'Supporting the immune system during colds and flu',
      'At the first sign of infection',
      'For wound healing (topical)',
      'Supporting recovery from respiratory infections',
      'As a preventative during cold and flu season',
      'For urinary tract infections'
    ],
    funFact: 'The name "Echinacea" comes from the Greek word "echinos," meaning hedgehog or sea urchin, referring to the spiky center cone of the flower. Native Americans discovered its medicinal properties when they observed wounded elk seeking out the plant!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-4ml, 3-4 times daily at first sign of infection',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'Should not be used by people with autoimmune conditions',
      'May interact with immunosuppressant medications',
      'Not recommended for long-term use (more than 8 weeks)',
      'May cause allergic reactions in people sensitive to plants in the daisy family'
    ],
    history: 'Echinacea has been used medicinally by Native American tribes for over 400 years. The Lakota, Cheyenne, Comanche, and many other tribes used it for a variety of conditions including infections, pain, and snake bites. It was introduced to European settlers and became a popular remedy in the United States in the 19th century. It was listed in the U.S. National Formulary from 1916-1950 but fell out of favor with the rise of antibiotics. It experienced a resurgence in popularity in the late 20th century and is now one of the most widely used herbal supplements.',
    culturalBackground: 'In Native American medicine, echinacea was considered one of the most important medicinal plants. Different tribes had different uses: the Kiowa and Cheyenne chewed the roots for sore throats and coughs, the Lakota used it for pain and infections, and the Dakota used it for hydrophobia. It was often used in sweat lodge ceremonies. In modern times, it has become popular worldwide as an immune-supporting supplement, particularly in Germany where much of the clinical research on echinacea has been conducted.',
    preparation: 'Different parts of the echinacea plant are used medicinally, including the roots, leaves, and flowers. The roots are considered the most potent. It can be prepared as a tea, tincture, or taken in capsules. Fresh plant tinctures are often preferred for their potency. For topical use, it can be made into salves or poultices for wound healing.',
    preparations: [
      {
        name: 'Echinacea Immune Tincture',
        ingredients: [
          '1 cup fresh echinacea root, leaves, and flowers (or 1/2 cup dried)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Chop fresh echinacea if using. Place herb in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. At the first sign of infection, take 1/4 teaspoon (about 2ml) every 2-3 hours for the first day, then 3-4 times daily until symptoms resolve. Not recommended for more than 8 weeks of continuous use.'
      },
      {
        name: 'Echinacea Throat Spray',
        ingredients: [
          '2 tablespoons echinacea tincture',
          '1 tablespoon propolis tincture',
          '1 tablespoon honey',
          '5 drops peppermint essential oil',
          '2 tablespoons distilled water',
          'Small spray bottle'
        ],
        instructions: 'Combine all ingredients in a small spray bottle. Shake well before each use. Spray directly into the throat 2-3 times every 2-3 hours at the first sign of a sore throat. This combination provides antimicrobial and soothing properties directly to the affected area.'
      },
      {
        name: 'Echinacea Cold and Flu Tea',
        ingredients: [
          '1 teaspoon dried echinacea root',
          '1 teaspoon dried elderberries',
          '1/2 teaspoon dried ginger',
          '1/2 teaspoon dried thyme',
          '1 cup hot water',
          'Honey and lemon to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 15 minutes. Strain and add honey and lemon if desired. Drink 3-4 cups daily at the first sign of cold or flu. This tea combines the immune-stimulating properties of echinacea with the antiviral effects of elderberry and the warming, decongestant properties of ginger and thyme.'
      }
    ],
    herbPairings: [
      {
        herb: 'Elderberry',
        benefit: 'Enhanced immune support with added antiviral properties'
      },
      {
        herb: 'Goldenseal',
        benefit: 'Powerful combination for infections with added antimicrobial action'
      },
      {
        herb: 'Yarrow',
        benefit: 'Traditional fever-reducing combination'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Added soothing properties for sore throats and respiratory irritation'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Stimulation', percentage: 90 },
      { area: 'Cold & Flu Relief', percentage: 85 },
      { area: 'Antimicrobial Action', percentage: 80 },
      { area: 'Wound Healing', percentage: 75 },
      { area: 'Anti-inflammatory', percentage: 70 }
    ],
    resources: [
      {
        title: 'Echinacea for Preventing and Treating the Common Cold',
        author: 'Cochrane Database of Systematic Reviews',
        type: 'Research Paper',
        link: 'https://example.com/echinacea-review'
      },
      {
        title: 'Echinacea: The Genus Echinacea',
        author: 'Sandra Carol Miller and He-ci Yu',
        type: 'Book',
        link: 'https://example.com/echinacea-book'
      },
      {
        title: 'Native American Medicinal Plants: Echinacea',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/native-echinacea'
      }
    ]
  },
  {
    id: 25,
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla (German), Chamaemelum nobile (Roman)',
    slug: 'chamomile',
    description: 'Chamomile is a gentle yet effective herb with daisy-like flowers that has been used for thousands of years to promote relaxation, support digestive health, and soothe irritated skin and tissues.',
    imageUrl: '/images/herbs/chamomile.jpg',
    rating: 4.8,
    categories: ['Relaxation', 'Digestive', 'Skin Care', 'Anti-inflammatory', 'Sleep'],
    benefits: [
      'Promotes relaxation and sleep',
      'Soothes digestive discomfort',
      'Has anti-inflammatory properties',
      'Calms irritated skin',
      'May help reduce anxiety',
      'Gentle enough for children'
    ],
    uses: [
      'Supporting healthy sleep',
      'Calming digestive upset',
      'Soothing skin irritations',
      'Reducing anxiety and stress',
      'As a gentle remedy for children',
      'In skincare formulations'
    ],
    funFact: 'The name "chamomile" comes from the Greek words "khamai" meaning "on the ground" and "melon" meaning "apple," referring to the apple-like scent of the flowers. In ancient Egypt, chamomile was dedicated to the sun god Ra because of its healing properties!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers per cup, steep for 5-10 minutes'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the daisy family',
      'May increase the effects of blood-thinning medications',
      'May increase drowsiness when combined with sedative medications',
      'Generally considered very safe with few side effects'
    ],
    history: 'Chamomile has been used medicinally for thousands of years. It was used by ancient Egyptians, Greeks, and Romans for a variety of ailments. In ancient Egypt, it was dedicated to the sun god Ra and used in embalming oils. Hippocrates, the "father of medicine," described its uses for fevers and female disorders. In medieval Europe, it was one of the nine sacred herbs of the Anglo-Saxons and was used for ceremonies as well as medicine. It has been a staple in traditional European herbalism for digestive issues, inflammation, and as a gentle sedative.',
    culturalBackground: 'In many European cultures, chamomile was considered a protective herb and was planted around homes to ward off illness and bring good fortune. In German folk medicine, it was one of the most important herbs and was called "alles zutraut" meaning "capable of anything." In Hispanic cultures, "manzanilla" (chamomile) tea is a common home remedy for digestive issues and is often given to children. In modern times, chamomile tea is one of the most popular herbal teas worldwide, known for its calming properties.',
    preparation: 'Chamomile flowers are the part used medicinally. They can be prepared as a tea, tincture, or used in topical preparations such as creams, salves, and bath products. For tea, the flowers are typically steeped for 5-10 minutes to release their medicinal compounds. The essential oil is also used in aromatherapy for relaxation and skin care.',
    preparations: [
      {
        name: 'Chamomile Sleep Tea',
        ingredients: [
          '1 tablespoon dried chamomile flowers',
          '1 teaspoon dried lavender flowers',
          '1/2 teaspoon dried lemon balm',
          '1 cup hot water',
          'Honey to taste',
          'Slice of lemon (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey and lemon if desired. Drink 1 cup 30-60 minutes before bedtime to promote relaxation and sleep. This tea combines the calming properties of chamomile with the additional relaxing effects of lavender and lemon balm.'
      },
      {
        name: 'Chamomile Digestive Tincture',
        ingredients: [
          '1 cup dried chamomile flowers',
          '1/4 cup dried peppermint leaves',
          '1/4 cup dried fennel seeds',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water after meals or as needed for digestive discomfort. This tincture combines the anti-inflammatory properties of chamomile with the carminative effects of peppermint and fennel.'
      },
      {
        name: 'Chamomile Skin Soothing Bath',
        ingredients: [
          '1/2 cup dried chamomile flowers',
          '1/4 cup dried calendula flowers',
          '1/4 cup dried lavender flowers',
          '1/4 cup colloidal oatmeal (optional)',
          'Muslin bag or old clean sock',
          'Warm bath water'
        ],
        instructions: 'Place herbs in a muslin bag or clean sock and tie securely. Fill bathtub with warm water and hang the herb bag under the running water as the tub fills. Add colloidal oatmeal if using. Soak in the bath for 15-20 minutes to soothe irritated skin, reduce inflammation, and promote relaxation. This bath is particularly helpful for skin conditions such as eczema, rashes, and sunburn.'
      }
    ],
    herbPairings: [
      {
        herb: 'Lavender',
        benefit: 'Enhanced relaxation and sleep-promoting effects'
      },
      {
        herb: 'Peppermint',
        benefit: 'Improved digestive support for upset stomach'
      },
      {
        herb: 'Calendula',
        benefit: 'Powerful skin-soothing combination'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Added calming effects for anxiety and stress'
      }
    ],
    benefitsVisualization: [
      { area: 'Relaxation & Sleep', percentage: 90 },
      { area: 'Digestive Soothing', percentage: 85 },
      { area: 'Skin Healing', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Anxiety Relief', percentage: 75 }
    ],
    resources: [
      {
        title: 'Chamomile: A Herbal Medicine of the Past with a Bright Future',
        author: 'Molecular Medicine Reports',
        type: 'Research Paper',
        link: 'https://example.com/chamomile-future'
      },
      {
        title: 'Clinical Applications of Chamomile',
        author: 'Alternative Medicine Review',
        type: 'Research Paper',
        link: 'https://example.com/chamomile-clinical'
      },
      {
        title: 'Chamomile: Industrial Profiles',
        author: 'Rolf Franke and Heinz Schilcher',
        type: 'Book',
        link: 'https://example.com/chamomile-profiles'
      }
    ]
  },
  {
    id: 26,
    name: 'Passionflower',
    scientificName: 'Passiflora incarnata',
    slug: 'passionflower',
    description: 'Passionflower is a beautiful climbing vine with exotic flowers that has powerful calming effects on the nervous system. It has been used traditionally to treat anxiety, insomnia, and nervous disorders.',
    imageUrl: '/images/herbs/passionflower.jpg',
    rating: 4.6,
    categories: ['Relaxation', 'Sleep', 'Anxiety Relief', 'Nervous System'],
    benefits: [
      'Reduces anxiety and nervousness',
      'Promotes restful sleep',
      'Calms racing thoughts',
      'May help with withdrawal symptoms',
      'Has mild pain-relieving properties',
      'Supports healthy blood pressure'
    ],
    uses: [
      'Managing anxiety and stress',
      'Supporting healthy sleep',
      'Easing nervous tension',
      'Supporting withdrawal from addictive substances',
      'Calming overthinking and racing thoughts',
      'As a non-addictive sleep aid'
    ],
    funFact: 'The name "passionflower" comes from Spanish Christian missionaries in South America who saw the flower as a symbol of the crucifixion of Christ (the "Passion of Christ"). They believed the flower\'s parts represented various elements of the crucifixion story, including the crown of thorns, the wounds, and the apostles!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 1-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause drowsiness',
      'Should not be combined with sedative medications',
      'May interact with blood-thinning medications',
      'Not recommended during pregnancy',
      'May increase the effects of alcohol'
    ],
    history: 'Passionflower has been used medicinally by indigenous peoples of the Americas for centuries. Native American tribes including the Cherokee, Houma, and Natchez used it for a variety of conditions including anxiety, insomnia, and as a topical wash for wounds and inflammation. It was introduced to European medicine in the 16th century by Spanish explorers and became popular in Europe as a remedy for epilepsy and insomnia. In the 19th and early 20th centuries, it was listed in the United States Pharmacopeia as a sedative.',
    culturalBackground: 'In Native American cultures, passionflower was used in traditional medicine and was sometimes included in ceremonial smoking mixtures. In European and American folk medicine, it became known as a calming herb for "nervous" conditions. In modern herbal medicine, it is widely recognized for its benefits for anxiety and sleep disorders. In some South American countries, the fruit of certain Passiflora species (known as maracuja or passion fruit) is eaten and used to make juices and desserts.',
    preparation: 'The aerial parts (leaves, stems, and flowers) of passionflower are used medicinally. They can be prepared as a tea, tincture, or taken in capsules. For sleep support, it is often combined with other calming herbs such as valerian and hops. For anxiety, it may be combined with herbs like lemon balm and skullcap.',
    preparations: [
      {
        name: 'Passionflower Sleep Tea',
        ingredients: [
          '1 teaspoon dried passionflower',
          '1 teaspoon dried valerian root',
          '1/2 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried lavender flowers',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1 cup 30-60 minutes before bedtime to promote relaxation and sleep. This tea combines the calming properties of passionflower with the sleep-inducing effects of valerian and the gentle relaxing qualities of chamomile and lavender.'
      },
      {
        name: 'Passionflower Anxiety Tincture',
        ingredients: [
          '1 part dried passionflower',
          '1 part dried skullcap',
          '1 part dried lemon balm',
          '4 parts high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine herbs in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4 teaspoon (about 2ml) in a small amount of water as needed for anxiety or stress, up to 3 times daily. This tincture combines the calming properties of passionflower with the nervous system support of skullcap and the mood-lifting effects of lemon balm.'
      },
      {
        name: 'Passionflower Dream Pillow',
        ingredients: [
          '1/4 cup dried passionflower',
          '1/4 cup dried lavender flowers',
          '2 tablespoons dried rose petals',
          '2 tablespoons dried hops',
          '1 tablespoon dried chamomile flowers',
          'Small cloth bag or handkerchief',
          'Ribbon for tying'
        ],
        instructions: 'Mix all herbs together in a bowl. Fill the cloth bag with the herb mixture. Tie securely with ribbon. Place under your pillow or near your bed to promote relaxation and peaceful dreams. The herbs release their calming scent throughout the night, helping to quiet the mind and promote restful sleep. Replace when the scent begins to fade, typically every few months.'
      }
    ],
    herbPairings: [
      {
        herb: 'Valerian',
        benefit: 'Enhanced sleep-promoting effects'
      },
      {
        herb: 'Skullcap',
        benefit: 'Powerful combination for anxiety and nervous tension'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Added calming effects with mood-lifting properties'
      },
      {
        herb: 'California Poppy',
        benefit: 'Complementary mild pain relief and sedative effects'
      }
    ],
    benefitsVisualization: [
      { area: 'Anxiety Relief', percentage: 90 },
      { area: 'Sleep Support', percentage: 85 },
      { area: 'Mental Calmness', percentage: 90 },
      { area: 'Withdrawal Support', percentage: 75 },
      { area: 'Pain Relief', percentage: 65 }
    ],
    resources: [
      {
        title: 'Passiflora incarnata L.: Ethnopharmacology, Clinical Application, Safety and Evaluation of Clinical Trials',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/passionflower-review'
      },
      {
        title: 'A Double-blind, Placebo-controlled Investigation of the Effects of Passiflora incarnata in Anxiety',
        author: 'Journal of Clinical Pharmacy and Therapeutics',
        type: 'Research Paper',
        link: 'https://example.com/passionflower-anxiety'
      },
      {
        title: 'Passionflower: The Versatile Nervine',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/passionflower-nervine'
      }
    ]
  }
];

export default specialHerbs;

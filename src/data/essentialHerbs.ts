import { HerbData } from '../types/herbs';

const essentialHerbs: HerbData[] = [
  {
    id: 21,
    name: 'Mullein',
    scientificName: 'Verbascum thapsus',
    slug: 'mullein',
    description: 'Mullein is a gentle yet powerful respiratory herb with soft, fuzzy leaves that have been used for centuries to support lung health and soothe irritated respiratory tissues.',
    imageUrl: '/images/herbs/mullein.jpg',
    rating: 4.6,
    categories: ['Respiratory', 'Ear Health', 'Soothing', 'Lung Support'],
    benefits: [
      'Soothes irritated respiratory tissues',
      'Helps expel excess mucus',
      'Supports overall lung health',
      'Traditionally used for ear infections',
      'Has mild sedative properties',
      'Contains anti-inflammatory compounds'
    ],
    uses: [
      'Relieving dry, irritated coughs',
      'Supporting recovery from respiratory infections',
      'As an ear oil for ear infections',
      'Soothing irritated throat tissues',
      'Supporting smokers trying to quit',
      'In smoking blends for respiratory conditions'
    ],
    funFact: 'Mullein\'s tall stalks were once dipped in tallow to create torches in ancient times! The Romans called these "torch plants" and they were used in religious ceremonies and as funeral torches.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried leaves per cup, steep for 10-15 minutes, strain well'
    },
    warnings: [
      'Always strain mullein tea well to remove the small hairs that can irritate the throat',
      'Mullein flower oil for ears should not be used if the eardrum is perforated',
      'Generally considered very safe with few side effects',
      'May cause contact dermatitis in sensitive individuals'
    ],
    history: 'Mullein has been used medicinally for at least 2,000 years. The ancient Greeks, Romans, and later European herbalists used it for respiratory conditions. Native Americans adopted it after European colonization and used it for respiratory issues, smoking it for asthma and bronchitis. In the 19th century, it was listed in the U.S. Pharmacopeia as a treatment for respiratory conditions, coughs, and inflammation.',
    culturalBackground: 'In European folk medicine, mullein was considered a protective herb and was planted near homes to ward off evil and illness. In Appalachian folk medicine, it was a primary remedy for respiratory conditions. Native American tribes including the Cherokee, Delaware, and Mohegan used mullein for respiratory support and ceremonial smoking mixtures. In some traditions, it was believed that carrying mullein would give courage to the bearer and protect against wild animals and negative energies.',
    preparation: 'Mullein leaves and flowers are the parts most commonly used. The leaves can be dried and prepared as a tea, tincture, or smoked for respiratory conditions. The flowers are often infused in oil for ear infections. When making tea, it\'s important to strain it well through a fine cloth to remove the tiny hairs that can irritate the throat.',
    preparations: [
      {
        name: 'Mullein Lung Support Tea',
        ingredients: [
          '2 teaspoons dried mullein leaves',
          '1 teaspoon dried thyme',
          '1 teaspoon dried plantain leaves',
          '1/2 teaspoon licorice root (optional)',
          '2 cups hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a teapot. Pour hot water over herbs and steep for 15 minutes. Strain well through a coffee filter or fine cloth to remove all the small hairs. Add honey if desired. Drink 2-3 cups daily for respiratory support. This tea helps soothe irritated tissues and supports the body in expelling excess mucus.'
      },
      {
        name: 'Mullein Flower Ear Oil',
        ingredients: [
          '1/4 cup fresh mullein flowers (or 2 tablespoons dried)',
          '1/2 cup olive oil',
          '2-3 cloves of garlic, crushed (optional)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place mullein flowers and garlic (if using) in a clean, dry glass jar. Pour olive oil over herbs, making sure they are completely covered. Seal jar and place in a sunny window for 2-4 weeks, shaking daily. Alternatively, place jar in a small pot with water and heat on low for 2-3 hours to infuse more quickly. Strain through cheesecloth and store in a dark glass dropper bottle. To use, warm the oil slightly and place 2-3 drops in the affected ear, keeping the head tilted for a few minutes. Do not use if eardrum is perforated.'
      },
      {
        name: 'Mullein Respiratory Syrup',
        ingredients: [
          '1/4 cup dried mullein leaves',
          '2 tablespoons dried mullein flowers',
          '2 tablespoons dried thyme',
          '1 tablespoon dried elecampane root',
          '1 tablespoon fresh or dried ginger',
          '3 cups water',
          '1 cup raw honey',
          '1/4 cup brandy or vodka (optional as a preservative)'
        ],
        instructions: 'Combine herbs and water in a pot. Bring to a boil, then reduce heat and simmer until liquid is reduced by half (about 30-45 minutes). Strain through a fine cloth. Let cool until lukewarm, then stir in honey and alcohol if using. Store in the refrigerator for up to 3 months. Take 1 teaspoon every 2-3 hours for acute respiratory conditions, or 1 teaspoon 3 times daily for general respiratory support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Thyme',
        benefit: 'Added antimicrobial action for respiratory infections'
      },
      {
        herb: 'Elecampane',
        benefit: 'Enhanced expectorant effects for productive coughs'
      },
      {
        herb: 'Plantain',
        benefit: 'Complementary soothing action for irritated tissues'
      },
      {
        herb: 'Garlic',
        benefit: 'Added antimicrobial properties when used in ear oil'
      }
    ],
    benefitsVisualization: [
      { area: 'Respiratory Soothing', percentage: 90 },
      { area: 'Expectorant Action', percentage: 85 },
      { area: 'Ear Health', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 },
      { area: 'Mild Sedative', percentage: 65 }
    ],
    resources: [
      {
        title: 'Mullein: A Medicinal Plant with History',
        author: 'Journal of Medicinal Plants Studies',
        type: 'Research Paper',
        link: 'https://example.com/mullein-history'
      },
      {
        title: 'Antibacterial Activity of Verbascum thapsus',
        author: 'Pharmaceutical Biology',
        type: 'Research Paper',
        link: 'https://example.com/mullein-antibacterial'
      },
      {
        title: 'Respiratory Herbs: Traditional Uses and Modern Research',
        author: 'American Herbalists Guild',
        type: 'Guide',
        link: 'https://example.com/respiratory-herbs'
      }
    ]
  },
  {
    id: 22,
    name: 'Holy Basil',
    scientificName: 'Ocimum sanctum (Ocimum tenuiflorum)',
    slug: 'holy-basil',
    description: 'Holy Basil, also known as Tulsi, is a sacred herb in Ayurvedic medicine revered as an "elixir of life." It is a powerful adaptogen that helps the body respond to stress while supporting mental clarity, immune function, and overall well-being.',
    imageUrl: '/images/herbs/holy-basil.jpg',
    rating: 4.8,
    categories: ['Adaptogen', 'Stress Relief', 'Immune Support', 'Sacred', 'Cognitive'],
    benefits: [
      'Helps the body adapt to stress',
      'Supports mental clarity and cognitive function',
      'Strengthens the immune system',
      'Has anti-inflammatory properties',
      'Supports healthy blood sugar levels',
      'Traditionally used for longevity and spiritual practices'
    ],
    uses: [
      'Managing stress and anxiety',
      'Supporting cognitive function',
      'Boosting immune system resilience',
      'Supporting respiratory health',
      'In spiritual and meditation practices',
      'As a daily tonic for overall well-being'
    ],
    funFact: 'Holy Basil is known as "The Queen of Herbs" in Ayurveda and is considered so sacred in India that many households have a Tulsi plant that is worshipped daily. The name "Tulsi" means "the incomparable one" in Sanskrit!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-600mg, 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 5-10 minutes'
    },
    warnings: [
      'May have mild blood-thinning effects',
      'May lower blood sugar levels',
      'May decrease fertility (not recommended when trying to conceive)',
      'Should be discontinued 2 weeks before surgery'
    ],
    history: 'Holy Basil has been used in Ayurvedic medicine for over 3,000 years. It is mentioned in ancient texts including the Charaka Samhita from around 1000 BCE. In Ayurveda, it is classified as a "rasayana," an herb that promotes longevity and overall well-being. It was traditionally used to treat a wide range of conditions including respiratory disorders, digestive issues, skin diseases, and to enhance spiritual practice. It was also used to purify the air and protect against insects and disease.',
    culturalBackground: 'In Hindu culture, Holy Basil is considered a manifestation of the goddess Tulsi, a consort of the god Vishnu. It is grown in many Hindu households and temples, where it is worshipped daily. The wood from the plant is used to make prayer beads. In Ayurvedic tradition, it is believed to balance the chakras and promote spiritual purity. In Thailand, it is known as "Thai Holy Basil" and is used in cooking, particularly in the famous dish Pad Krapow. In modern times, it has gained popularity worldwide as an adaptogenic herb for stress management.',
    preparation: 'Holy Basil leaves, flowers, and stems can all be used medicinally. They can be prepared as a tea, tincture, or taken in capsules. Fresh leaves can be chewed daily as a traditional practice. The essential oil is sometimes used in aromatherapy. In Ayurvedic tradition, it is often combined with other herbs in formulas for specific conditions.',
    preparations: [
      {
        name: 'Holy Basil Stress-Relief Tea',
        ingredients: [
          '1 tablespoon dried holy basil leaves',
          '1 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried lavender',
          '1 cup hot water',
          'Honey to taste',
          'Slice of lemon (optional)'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey and lemon if desired. Drink 1-3 cups daily for stress relief and mental clarity. This tea is particularly beneficial in the afternoon or early evening to help transition from a busy day.'
      },
      {
        name: 'Holy Basil Tincture',
        ingredients: [
          '1 cup fresh holy basil leaves and flowers (or 1/2 cup dried)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Chop fresh holy basil if using. Place herb in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 2-3 times daily for stress management and immune support.'
      },
      {
        name: 'Holy Basil Honey',
        ingredients: [
          '1/2 cup fresh holy basil leaves and flowers',
          '1 cup raw honey',
          'Glass jar with lid'
        ],
        instructions: 'Chop fresh holy basil leaves and flowers. Place in a clean glass jar. Pour honey over herbs, ensuring they are completely covered. Seal jar and let infuse for 2-4 weeks in a cool, dark place, turning occasionally. The honey can be strained or left with the herbs. Take 1 teaspoon daily as a general tonic or add to tea or warm water.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ashwagandha',
        benefit: 'Enhanced adaptogenic effects for stress management'
      },
      {
        herb: 'Brahmi (Bacopa)',
        benefit: 'Improved cognitive support and mental clarity'
      },
      {
        herb: 'Turmeric',
        benefit: 'Added anti-inflammatory action'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Complementary calming effects for anxiety and stress'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Adaptation', percentage: 90 },
      { area: 'Cognitive Support', percentage: 85 },
      { area: 'Immune Function', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 },
      { area: 'Spiritual Well-being', percentage: 90 }
    ],
    resources: [
      {
        title: 'Tulsi - Ocimum sanctum: A Herb for All Reasons',
        author: 'Journal of Ayurveda and Integrative Medicine',
        type: 'Research Paper',
        link: 'https://example.com/tulsi-review'
      },
      {
        title: 'Therapeutic Potential of Ocimum sanctum in Prevention and Treatment of Cancer',
        author: 'Cancer Letters',
        type: 'Research Paper',
        link: 'https://example.com/tulsi-cancer'
      },
      {
        title: 'Holy Basil: An Overview of the Research and Clinical Indications',
        author: 'Alternative and Complementary Therapies',
        type: 'Article',
        link: 'https://example.com/holy-basil-clinical'
      }
    ]
  },
  {
    id: 23,
    name: 'Calendula',
    scientificName: 'Calendula officinalis',
    slug: 'calendula',
    description: 'Calendula is a vibrant orange-yellow flower with remarkable healing properties for the skin and mucous membranes. It has been used for centuries to treat wounds, inflammation, and digestive issues.',
    imageUrl: '/images/herbs/calendula.jpg',
    rating: 4.7,
    categories: ['Skin Care', 'Wound Healing', 'Anti-inflammatory', 'Digestive'],
    benefits: [
      'Promotes wound healing',
      'Has anti-inflammatory properties',
      'Supports healthy skin',
      'Soothes digestive tract irritation',
      'Has antimicrobial properties',
      'Supports lymphatic system function'
    ],
    uses: [
      'Treating minor wounds, cuts, and burns',
      'Soothing skin irritations and rashes',
      'Supporting digestive health',
      'As a gentle remedy for children',
      'In skincare formulations',
      'Supporting oral health'
    ],
    funFact: 'Calendula\'s name comes from the Latin word "kalendae," meaning "little calendar" or "little clock," because it was observed to flower on the first day of each month in ancient Rome. It was also believed that if the flowers remained closed after 7 a.m., it would rain that day!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-500mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May cause allergic reactions in people sensitive to plants in the daisy family',
      'Should be avoided during pregnancy as it may stimulate menstruation',
      'May interact with sedative medications',
      'Generally considered very safe for topical use'
    ],
    history: 'Calendula has been used medicinally for centuries across many cultures. Ancient Egyptians valued it for its rejuvenating properties. In ancient Greece and Rome, it was used to treat various ailments and as a culinary herb. During the Civil War in America, it was used to treat wounds and stop bleeding. In medieval Europe, it was believed to have magical properties and was used to protect against evil and predict weather patterns. It has been a staple in traditional European herbalism for treating wounds, skin conditions, and digestive issues.',
    culturalBackground: 'In many European cultures, calendula was associated with the sun due to its bright orange-yellow flowers. In India, the flowers are used in religious ceremonies and to make garlands for sacred statues. In Mexican culture, it is used in Day of the Dead celebrations, where it is known as "flor de muerto" (flower of the dead) and believed to guide spirits with its bright color and scent. In traditional European folk medicine, it was considered a protective herb and was planted around homes to ward off illness and evil.',
    preparation: 'Calendula flowers are the part used medicinally. They can be prepared as a tea for internal use, infused in oil for topical applications, or made into tinctures, salves, and creams. The dried petals can also be added to soups and salads both for their nutritional value and their vibrant color. For medicinal preparations, the whole flower head is typically used.',
    preparations: [
      {
        name: 'Calendula Healing Salve',
        ingredients: [
          '1 cup calendula-infused oil (see instructions below)',
          '1/4 cup beeswax pellets',
          '10 drops lavender essential oil (optional)',
          '5 drops tea tree essential oil (optional)',
          'Small glass jars for storage'
        ],
        instructions: 'To make calendula-infused oil: Fill a clean, dry glass jar halfway with dried calendula flowers. Cover completely with olive oil or another carrier oil. Seal and place in a sunny window for 4-6 weeks, shaking daily. Alternatively, place jar in a small pot with water and heat on low for 2-3 hours. Strain through cheesecloth. For the salve: Combine infused oil and beeswax in a double boiler and heat until beeswax is melted. Remove from heat and add essential oils if using. Pour into small jars and let cool completely. Apply to minor wounds, cuts, burns, rashes, and dry skin as needed.'
      },
      {
        name: 'Calendula Digestive Tea',
        ingredients: [
          '1 tablespoon dried calendula flowers',
          '1 teaspoon dried chamomile flowers',
          '1 teaspoon dried peppermint leaves',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey if desired. Drink 1-3 cups daily to soothe digestive inflammation and support gut health. This tea is particularly helpful for inflammatory conditions of the digestive tract.'
      },
      {
        name: 'Calendula Facial Steam',
        ingredients: [
          '2 tablespoons dried calendula flowers',
          '1 tablespoon dried rose petals',
          '1 tablespoon dried lavender flowers',
          '4 cups hot water',
          'Large bowl',
          'Towel'
        ],
        instructions: 'Place herbs in a large bowl. Pour hot water over herbs. Lean over the bowl, keeping your face about 12 inches from the water. Cover your head and the bowl with a towel to create a tent. Steam your face for 5-10 minutes. This treatment helps open pores, cleanse the skin, and deliver the healing properties of calendula directly to the skin. Follow with a gentle face wash and moisturizer.'
      }
    ],
    herbPairings: [
      {
        herb: 'Plantain',
        benefit: 'Enhanced wound healing and skin-soothing effects'
      },
      {
        herb: 'Chamomile',
        benefit: 'Complementary anti-inflammatory action for skin and digestion'
      },
      {
        herb: 'Comfrey',
        benefit: 'Powerful combination for tissue repair (external use only)'
      },
      {
        herb: 'Marshmallow Root',
        benefit: 'Added demulcent action for digestive soothing'
      }
    ],
    benefitsVisualization: [
      { area: 'Wound Healing', percentage: 90 },
      { area: 'Skin Support', percentage: 95 },
      { area: 'Anti-inflammatory', percentage: 85 },
      { area: 'Digestive Soothing', percentage: 80 },
      { area: 'Antimicrobial Action', percentage: 75 }
    ],
    resources: [
      {
        title: 'Calendula officinalis: A Review of its Wound Healing and Anti-inflammatory Activity',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/calendula-review'
      },
      {
        title: 'The Healing Garden: Calendula',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/healing-calendula'
      },
      {
        title: 'Making Plant Medicine: Calendula Preparations',
        author: 'Richo Cech',
        type: 'Book',
        link: 'https://example.com/plant-medicine'
      }
    ]
  }
];

export default essentialHerbs;

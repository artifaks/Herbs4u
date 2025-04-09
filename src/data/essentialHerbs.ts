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
  },
  {
    id: 24,
    name: 'Lemon Balm',
    scientificName: 'Melissa officinalis',
    slug: 'lemon-balm',
    description: 'Lemon balm is a lemon-scented herb from the mint family with calming properties that support the nervous system, digestion, and cognitive function while uplifting the spirits.',
    imageUrl: '/images/herbs/lemon-balm.jpg',
    rating: 4.7,
    categories: ['Nervine', 'Digestive', 'Cognitive', 'Antiviral', 'Mood Support'],
    benefits: [
      'Calms the nervous system',
      'Supports healthy stress response',
      'Aids digestion and relieves gas',
      'Has antiviral properties',
      'Improves cognitive function and memory',
      'Uplifts mood and reduces anxiety'
    ],
    uses: [
      'Relieving anxiety and stress',
      'Supporting sleep quality',
      'Soothing digestive upset',
      'Managing cold sores (topically)',
      'Improving focus and memory',
      'Reducing symptoms of PMS'
    ],
    funFact: 'Lemon balm has been used since the Middle Ages to attract bees for honey production! Its genus name "Melissa" comes from the Greek word for "honeybee." Carmelite water, a popular perfume and tonic from the 17th century, used lemon balm as its primary ingredient.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-600mg, 3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 5-10 minutes'
    },
    warnings: [
      'May interact with thyroid medications',
      'Can cause drowsiness when combined with sedatives',
      'May interact with HIV medications and certain sedatives',
      'Should be used with caution before surgery due to potential sedative effects'
    ],
    history: 'Lemon balm has been used medicinally for over 2,000 years. The ancient Greeks and Romans used it for its calming effects and to treat wounds. In the Middle Ages, it was included in elixirs said to promote longevity and reduce melancholy. The famous physician Paracelsus (1493-1541) called it the "elixir of life." By the 17th century, Carmelite nuns were creating Carmelite water, a lemon balm-based tonic that became popular throughout Europe for nervous complaints and digestive issues.',
    culturalBackground: 'In ancient Greece, lemon balm was dedicated to the goddess Diana and used in temples. In European folk medicine, it was considered a "gladdening herb" that could lift the spirits and heal a broken heart. In Arabian medicine, it was used to treat heart palpitations and anxiety. The 17th-century English herbalist Nicholas Culpeper recommended it for "opening obstructions of the brain." In traditional European herbalism, it was often planted near beehives to encourage bees to return home and produce more honey.',
    preparation: 'Lemon balm leaves are the part used medicinally. They can be prepared as a tea, tincture, or taken in capsules. Fresh leaves can be added to salads, desserts, and drinks for both flavor and medicinal benefits. The essential oil is sometimes used in aromatherapy. For best results, harvest leaves before the plant flowers, as this is when the volatile oils are most concentrated.',
    preparations: [
      {
        name: 'Lemon Balm Calming Tea',
        ingredients: [
          '2 tablespoons fresh lemon balm leaves (or 1 tablespoon dried)',
          '1 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried lavender buds',
          '1 cup hot water',
          'Honey to taste',
          'Lemon slice (optional)'
        ],
        instructions: 'Roughly chop fresh lemon balm if using. Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey and lemon if desired. Drink 1-3 cups daily for stress relief and digestive support. This tea is particularly beneficial in the evening to promote relaxation and sleep.'
      },
      {
        name: 'Lemon Balm Tincture',
        ingredients: [
          '1 cup fresh lemon balm leaves (or 1/2 cup dried)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Chop fresh lemon balm if using. Place herb in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-3ml, 2-3 times daily for anxiety, stress, and digestive support.'
      },
      {
        name: 'Lemon Balm Cold Sore Salve',
        ingredients: [
          '1/4 cup lemon balm-infused oil (see instructions below)',
          '1 tablespoon beeswax pellets',
          '10 drops lemon balm essential oil (optional)',
          '5 drops tea tree essential oil (optional)',
          'Small glass container for storage'
        ],
        instructions: 'To make lemon balm-infused oil: Fill a clean, dry glass jar halfway with dried lemon balm leaves. Cover completely with olive oil or another carrier oil. Seal and place in a sunny window for 4-6 weeks, shaking daily. Alternatively, place jar in a small pot with water and heat on low for 2-3 hours. Strain through cheesecloth. For the salve: Combine infused oil and beeswax in a double boiler and heat until beeswax is melted. Remove from heat and add essential oils if using. Pour into a small container and let cool completely. Apply to cold sores at the first sign of tingling for best results.'
      }
    ],
    herbPairings: [
      {
        herb: 'Chamomile',
        benefit: 'Enhanced calming effects for anxiety and sleep support'
      },
      {
        herb: 'Valerian',
        benefit: 'Powerful combination for insomnia and nervous tension'
      },
      {
        herb: 'Peppermint',
        benefit: 'Complementary digestive support with added cooling properties'
      },
      {
        herb: 'St. Johns Wort',
        benefit: 'Synergistic effects for mood support (use with caution due to interactions)'
      }
    ],
    benefitsVisualization: [
      { area: 'Nervous System Support', percentage: 90 },
      { area: 'Mood Enhancement', percentage: 85 },
      { area: 'Digestive Aid', percentage: 80 },
      { area: 'Antiviral Properties', percentage: 75 },
      { area: 'Cognitive Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Melissa officinalis L: A Review Study With an Antioxidant Prospective',
        author: 'Journal of Evidence-Based Complementary & Alternative Medicine',
        type: 'Research Paper',
        link: 'https://example.com/lemon-balm-review'
      },
      {
        title: 'Effects of Melissa officinalis L. on Anxiety-Like Reactivity',
        author: 'Phytomedicine',
        type: 'Research Paper',
        link: 'https://example.com/lemon-balm-anxiety'
      },
      {
        title: 'Lemon Balm: An Herb Society of America Guide',
        author: 'Herb Society of America',
        type: 'Guide',
        link: 'https://example.com/lemon-balm-guide'
      }
    ]
  },
  {
    id: 25,
    name: 'Nettle',
    scientificName: 'Urtica dioica',
    slug: 'nettle',
    description: 'Nettle is a nutrient-dense plant with remarkable healing properties for inflammation, allergies, and overall vitality. Despite its sting when fresh, once processed, it becomes a gentle yet powerful ally for health.',
    imageUrl: '/images/herbs/nettle.jpg',
    rating: 4.8,
    categories: ['Nutritive', 'Anti-inflammatory', 'Allergy Relief', 'Detoxification', 'Hair & Skin'],
    benefits: [
      'Exceptionally rich in vitamins and minerals',
      'Reduces inflammation throughout the body',
      'Supports kidney and urinary tract health',
      'Helps relieve seasonal allergy symptoms',
      'Supports healthy hair and skin',
      'Has gentle detoxifying properties'
    ],
    uses: [
      'As a nutritive tonic for overall health',
      'Managing seasonal allergies',
      'Supporting joint health and reducing pain',
      'Promoting healthy hair growth',
      'Supporting kidney and urinary health',
      'As a pregnancy tonic (when appropriate)'
    ],
    funFact: 'Despite its fearsome sting, nettle has been used to make cloth for thousands of years! During World War I, Germany used nettle fiber to make military uniforms when cotton was scarce. The sting of nettle was also traditionally used as a treatment for arthritis pain through a practice called "urtication" where the fresh plant was applied to painful joints.',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '300-600mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 tablespoons dried herb per cup, steep for 4-8 hours (cold infusion) or 10-15 minutes (hot infusion)'
    },
    warnings: [
      'May interact with medications for high blood pressure, diabetes, and blood thinners',
      'May affect kidney function and urine flow',
      'Should be used with caution during pregnancy (consult a healthcare provider)',
      'Fresh plant causes skin irritation; always use gloves when harvesting'
    ],
    history: 'Nettle has been used medicinally for thousands of years across many cultures. Ancient Egyptians used it for arthritis pain. Greek and Roman physicians, including Hippocrates and Galen, documented its use for a wide range of conditions. In medieval Europe, it was used to treat joint pain, eczema, anemia, and gout. Native American tribes used it for pregnancy support, allergies, and as a spring tonic. During both World Wars, nettle was harvested extensively as a food source and for fiber to make textiles when other materials were scarce.',
    culturalBackground: 'In European folk medicine, nettle was considered a protective herb and was hung in doorways to ward off negativity. In Norse mythology, nettle was associated with Thor, the god of thunder, and was used in protective amulets. Many cultures have spring nettle festivals celebrating its emergence as one of the first edible greens, symbolizing renewal and vitality after winter. In traditional European herbalism, it was one of the primary "blood purifiers" used during spring cleansing rituals. In Russia, nettle was used in traditional steam baths (banya) for purification.',
    preparation: 'Nettle leaves, roots, and seeds all have medicinal uses, though the leaves are most commonly used. They can be prepared as a tea (infusion), tincture, or taken in capsules. For maximum mineral content, a long cold infusion is recommended. Young leaves can be cooked and eaten as a nutritious vegetable similar to spinach. Cooking or drying neutralizes the sting. The root is primarily used for prostate health and prepared as a decoction or tincture.',
    preparations: [
      {
        name: 'Nettle Mineral-Rich Infusion',
        ingredients: [
          '1 ounce (about 1 cup) dried nettle leaves',
          '1 quart boiling water',
          'Quart-sized glass jar with lid',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Place dried nettle in a quart jar. Pour boiling water over herbs, filling the jar. Stir to ensure all plant material is submerged. Cap tightly and let steep for 4-8 hours or overnight. Strain and store in the refrigerator for up to 3 days. Drink 1-3 cups daily as a nutritive tonic. This long infusion extracts the maximum amount of minerals and other water-soluble nutrients from the plant.'
      },
      {
        name: 'Nettle Allergy Relief Tincture',
        ingredients: [
          '1 cup dried nettle leaves',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1/4 cup raw local honey (optional)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place dried nettle in a clean glass jar. Cover with alcohol. If using honey, add it now. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 3 times daily before and during allergy season for prevention and relief of symptoms.'
      },
      {
        name: 'Nettle Hair Rinse',
        ingredients: [
          '2 cups dried nettle leaves',
          '4 cups apple cider vinegar',
          '10 drops rosemary essential oil (optional)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place dried nettle in a large glass jar. Cover with apple cider vinegar. Seal tightly and store in a cool, dark place for 2-4 weeks, shaking occasionally. Strain through cheesecloth and add essential oil if using. To use, after shampooing, dilute 1/4 cup of the rinse with 1 cup of water and pour over hair, massaging into scalp. Leave on for 1-2 minutes, then rinse lightly or leave in. This rinse helps strengthen hair, reduce dandruff, and add shine.'
      }
    ],
    herbPairings: [
      {
        herb: 'Red Raspberry Leaf',
        benefit: 'Enhanced nutritive properties for womens health'
      },
      {
        herb: 'Dandelion',
        benefit: 'Complementary detoxification support for liver and kidneys'
      },
      {
        herb: 'Peppermint',
        benefit: 'Improves flavor and adds digestive benefits'
      },
      {
        herb: 'Quercetin',
        benefit: 'Enhanced anti-allergy effects (supplement, not an herb)'
      }
    ],
    benefitsVisualization: [
      { area: 'Nutritional Content', percentage: 95 },
      { area: 'Anti-inflammatory', percentage: 85 },
      { area: 'Allergy Relief', percentage: 80 },
      { area: 'Kidney Support', percentage: 75 },
      { area: 'Hair & Skin Health', percentage: 85 }
    ],
    resources: [
      {
        title: 'Urtica dioica L.: A Review of its Ethnomedicinal, Phytochemical and Pharmacological Profile',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/nettle-review'
      },
      {
        title: 'The Role of Nettle (Urtica dioica) in Allergic Rhinitis',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/nettle-allergies'
      },
      {
        title: 'Nettles: The Stinging Superfood',
        author: 'American Herbalists Guild',
        type: 'Article',
        link: 'https://example.com/nettle-superfood'
      }
    ]
  },
  {
    id: 26,
    name: 'Elderberry',
    scientificName: 'Sambucus nigra',
    slug: 'elderberry',
    description: 'Elderberry is a powerful immune-supporting fruit with a rich history of traditional use for colds, flu, and overall wellness. Its deep purple berries are packed with antioxidants and compounds that help the body fight viral infections.',
    imageUrl: '/images/herbs/elderberry.jpg',
    rating: 4.9,
    categories: ['Immune Support', 'Antiviral', 'Respiratory', 'Antioxidant', 'Traditional'],
    benefits: [
      'Supports immune system function',
      'Has antiviral properties against cold and flu viruses',
      'Rich in antioxidants and flavonoids',
      'Supports respiratory health',
      'May reduce duration and severity of cold and flu symptoms',
      'Has mild anti-inflammatory properties'
    ],
    uses: [
      'Preventing and treating colds and flu',
      'Supporting overall immune function',
      'As a daily antioxidant tonic',
      'Supporting recovery from respiratory infections',
      'Traditional winter wellness support',
      'In combination with other immune herbs'
    ],
    funFact: 'Elderberry has such a rich folklore that it was considered a "complete medicine chest" in itself! In European folklore, an elder tree was believed to house a protective spirit called the "Elder Mother," and people would ask permission before harvesting from the tree. Hippocrates, the "father of medicine," referred to the elder tree as his "medicine chest."',
    dosage: {
      syrup: '1 teaspoon for children, 1 tablespoon for adults, 1-3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1-2 teaspoons dried berries per cup, decoct for 15-20 minutes',
      capsule: '500-1000mg, 2-3 times daily'
    },
    warnings: [
      'Raw, unripe elderberries contain cyanogenic glycosides and should never be consumed raw',
      'May interact with immunosuppressant medications',
      'May interact with diuretics and diabetes medications',
      'Flowers and berries are safe when properly prepared; leaves, bark, and roots should be avoided'
    ],
    history: 'Elderberry has been used medicinally for thousands of years across many cultures. Ancient Egyptians used it for burns and to improve complexion. Hippocrates, Dioscorides, and other ancient physicians documented its medicinal uses. In medieval Europe, it was considered a holy tree with protective properties. Native American tribes used various elder species for infections, fevers, and joint pain. In the 1995 Panama flu epidemic, elderberry was used successfully to treat the symptoms, leading to increased scientific interest in its antiviral properties.',
    culturalBackground: 'In European folklore, the elder tree was considered sacred and magical, associated with the goddess Holle or Hylde-Moer (Elder Mother). It was believed that cutting down an elder tree without permission would bring bad luck. In Celtic tradition, the elder represented the end of summer and the entrance to winter. The hollow branches were used to make musical instruments, and it was believed that music played on these instruments could communicate with the spirit world. In Christian symbolism, it was sometimes associated with the crucifixion, as it was believed that Judas hanged himself on an elder tree.',
    preparation: 'Elderberries and flowers are the parts used medicinally. The berries are typically cooked and prepared as syrups, tinctures, or wines. The flowers can be prepared as teas, tinctures, or infused in honey. Both berries and flowers can be dried for later use. It is crucial to properly identify elderberry and to always cook the berries, as raw berries contain compounds that can cause nausea and digestive upset.',
    preparations: [
      {
        name: 'Classic Elderberry Syrup',
        ingredients: [
          '1 cup dried elderberries (or 2 cups fresh)',
          '4 cups water',
          '1 tablespoon fresh ginger, grated',
          '1 teaspoon cinnamon powder',
          '5 cloves',
          '1 cup raw honey',
          '1 tablespoon lemon juice (optional)'
        ],
        instructions: 'Combine elderberries, water, ginger, cinnamon, and cloves in a pot. Bring to a boil, then reduce heat and simmer for 30-45 minutes until liquid is reduced by half. Remove from heat and let cool until lukewarm. Strain through a fine mesh strainer, pressing berries to extract all juice. Add honey and lemon juice if using, and stir well. Store in glass bottles in the refrigerator for up to 3 months. Take 1 teaspoon (children) or 1 tablespoon (adults) daily for prevention, or 3-4 times daily during illness.'
      },
      {
        name: 'Elderflower Tea',
        ingredients: [
          '2 teaspoons dried elderflowers',
          '1 teaspoon dried peppermint leaves (optional)',
          '1/2 teaspoon dried thyme (optional)',
          '1 cup hot water',
          'Honey and lemon to taste'
        ],
        instructions: 'Place elderflowers and other herbs if using in a tea infuser. Pour hot water over herbs and steep for 10-15 minutes. Strain and add honey and lemon if desired. Drink 2-3 cups daily at the first sign of a cold or flu, especially when accompanied by fever. This tea helps induce sweating and support the body\'s natural fever process.'
      },
      {
        name: 'Elderberry Oxymel',
        ingredients: [
          '1 cup dried elderberries',
          '1 cup raw apple cider vinegar',
          '1 cup raw honey',
          '1 tablespoon fresh grated ginger',
          '1 cinnamon stick',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Combine all ingredients in a glass jar. Stir well to ensure honey is fully incorporated. Seal tightly and store in a cool, dark place for 2-4 weeks, shaking daily. Strain through cheesecloth and store in glass bottles. Take 1 tablespoon daily mixed with water or tea for immune support, or 1 tablespoon 3 times daily during illness. This preparation combines the benefits of elderberry with the digestive support of vinegar and the soothing properties of honey.'
      }
    ],
    herbPairings: [
      {
        herb: 'Echinacea',
        benefit: 'Enhanced immune-stimulating effects'
      },
      {
        herb: 'Rose Hips',
        benefit: 'Added vitamin C and antioxidant support'
      },
      {
        herb: 'Ginger',
        benefit: 'Warming circulation support and added anti-inflammatory action'
      },
      {
        herb: 'Thyme',
        benefit: 'Complementary antimicrobial support for respiratory infections'
      }
    ],
    benefitsVisualization: [
      { area: 'Antiviral Activity', percentage: 90 },
      { area: 'Immune Support', percentage: 95 },
      { area: 'Antioxidant Content', percentage: 85 },
      { area: 'Respiratory Support', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 }
    ],
    resources: [
      {
        title: 'Randomized Study of the Efficacy and Safety of Oral Elderberry Extract in the Treatment of Influenza A and B Virus Infections',
        author: 'Journal of International Medical Research',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-flu-study'
      },
      {
        title: 'The Effect of Sambucol, a Black Elderberry-Based, Natural Product, on the Production of Human Cytokines',
        author: 'European Cytokine Network',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-cytokines'
      },
      {
        title: 'Elderberry: History, Folklore, and Modern Uses',
        author: 'HerbalGram',
        type: 'Article',
        link: 'https://example.com/elderberry-history'
      }
    ]
  }
];

export default essentialHerbs;

import { HerbData } from '../types/herbs';

const immuneHerbs: HerbData[] = [
  {
    id: 113,
    name: 'Elderberry',
    scientificName: 'Sambucus nigra',
    slug: 'elderberry',
    description: 'Elderberry is a powerful immune-supporting herb with antiviral properties that has been used for centuries to prevent and address cold and flu symptoms, while providing additional benefits for respiratory health and overall immunity.',
    imageUrl: '/images/herbs/elderberry.jpg',
    rating: 4.9,
    categories: ['Immune Support', 'Antiviral', 'Respiratory Health', 'Antioxidant', 'Berry Medicine'],
    benefits: [
      'Supports immune system function',
      'May reduce duration and severity of cold and flu symptoms',
      'Provides powerful antioxidant protection',
      'Supports respiratory health',
      'May help reduce inflammation',
      'Supports healthy circulation',
      'Rich in vitamins A and C'
    ],
    uses: [
      'Preventing and addressing cold and flu symptoms',
      'Supporting overall immune function',
      'As part of seasonal immune protocols',
      'Supporting recovery from respiratory infections',
      'As a daily antioxidant tonic',
      'Supporting healthy inflammatory response'
    ],
    funFact: 'The elder tree has been called "the medicine chest of the country people" and has a rich folklore surrounding it. In many European traditions, it was believed that a guardian spirit, the Elder Mother, lived in the tree and that one should ask her permission before harvesting any part of the plant. Cutting down an elder tree was thought to bring bad luck unless you had first asked the Elder Mother\'s permission by reciting: "Lady Ellhorn, give me of thy wood, and I will give thee of mine when I become a tree."',
    dosage: {
      powder: '1-2 teaspoons (3-5g) daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 3 times daily (syrup: 1 tsp for children, 1 tbsp for adults, 1-3 times daily)',
      tea: '1-2 teaspoons dried berries simmered in 1 cup water for 15 minutes, 1-3 cups daily'
    },
    warnings: [
      'Raw and unripe elderberries contain cyanogenic glycosides and should not be consumed',
      'Always cook elderberries before consumption',
      'May interact with medications that suppress the immune system',
      'May interact with diuretics and diabetes medications',
      'Not recommended in high doses during pregnancy without medical supervision',
      'Flowers are generally considered safer than berries for most applications'
    ],
    history: 'Elderberry has been used medicinally for thousands of years across multiple cultures. Evidence of elderberry cultivation dates back to the Stone Age, and it was mentioned in the writings of Hippocrates, Pliny the Elder, and Dioscorides. In ancient Egypt, elderberry was used to improve complexion and heal burns. Native American tribes used various elder species for infections, fever, and rheumatism. In medieval Europe, it was considered a holy tree, capable of protecting against witchcraft and evil spirits. The 17th-century physician Martin Blochwich devoted an entire book to the medicinal uses of elder. In the 18th century, it was widely used for respiratory conditions, and by the 19th century, elderberry wine and elderberry rob (a concentrated syrup) were standard remedies in many households for colds and flu. Modern scientific research began to validate its traditional uses in the 1980s, with studies showing its effectiveness against various strains of influenza virus.',
    culturalBackground: 'In European folklore, the elder tree was considered sacred and was associated with the goddess Freya in Norse mythology and the White Goddess in Celtic tradition. It was believed that the tree protected against evil spirits and lightning strikes, and was often planted near homes for protection. In Danish folklore, the Elder Mother (Hyldemoer) was said to live in the tree and watch over it. In English tradition, it was believed that sleeping under an elder tree on Midsummer\'s Eve would allow one to see the fairy king and his entourage. In Jewish tradition, the hardwood of the elder tree was used to make musical instruments, including the shofar. In Romanian folklore, elder branches were used to measure the deceased for their coffins, as it was believed to keep evil spirits away. In modern Western herbalism, elderberry is considered one of the most important herbs for immune support and is widely used in both preventative and acute care.',
    preparation: 'The berries and flowers of elder are both used medicinally, with somewhat different properties. The berries are typically harvested when fully ripe (dark purple to black) in late summer or early fall, while the flowers are collected when in full bloom in late spring. The berries must be cooked before consumption to neutralize cyanogenic glycosides present in the raw fruit. They are most commonly prepared as a syrup, tincture, or tea. The flowers can be used fresh or dried and are prepared as a tea, tincture, or infused in honey. For immune support, elderberry is often combined with other immune-enhancing herbs like echinacea, astragalus, or reishi mushroom. For respiratory support, it pairs well with mullein, thyme, or elecampane.',
    preparations: [
      {
        name: 'Classic Elderberry Syrup',
        ingredients: [
          '1 cup dried elderberries (or 2 cups fresh)',
          '4 cups filtered water',
          '1 cinnamon stick',
          '5 whole cloves',
          '1 tablespoon fresh ginger, grated',
          '1 cup raw honey',
          '1 tablespoon lemon juice or apple cider vinegar (optional, as a preservative)',
          'Medium pot',
          'Fine mesh strainer or cheesecloth',
          'Glass bottles for storage'
        ],
        instructions: 'In a medium pot, combine the elderberries, water, cinnamon stick, cloves, and ginger. Bring to a boil, then reduce heat and simmer, covered, for about 45 minutes, until the liquid is reduced by half. Remove from heat and let cool slightly. Mash the berries with a potato masher or the back of a wooden spoon to release more of their medicinal properties. Strain the mixture through a fine mesh strainer or cheesecloth, pressing on the solids to extract all liquid. Allow the liquid to cool to just warm (below 110°F/43°C to preserve the beneficial properties of raw honey). Add the honey and lemon juice or apple cider vinegar, stirring until the honey is fully dissolved. Pour into sterilized glass bottles and label with the date and contents. Store in the refrigerator, where it will keep for 2-3 months. Standard dosage is 1 teaspoon for children and 1 tablespoon for adults, taken 1-3 times daily for prevention during cold and flu season, or every 2-3 hours during active infection. This syrup combines the antiviral properties of elderberry with the warming, circulation-enhancing effects of cinnamon, cloves, and ginger.'
      },
      {
        name: 'Elderflower and Thyme Respiratory Tea',
        ingredients: [
          '2 tablespoons dried elderflowers',
          '1 tablespoon dried thyme',
          '1 teaspoon dried peppermint leaves',
          '1 teaspoon dried licorice root (optional)',
          '1/2 teaspoon dried ginger root',
          'Honey and lemon to taste',
          'Pinch of cinnamon (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of hot water. Pour boiling water over the herbs and steep, covered, for 10-15 minutes. Strain well and add honey and lemon to taste. Drink 3-4 cups daily during respiratory infections, or 1 cup daily as a preventative during cold and flu season. This tea combines the diaphoretic (sweat-inducing) properties of elderflower with the antimicrobial effects of thyme, the decongestant qualities of peppermint, and the soothing properties of licorice for comprehensive respiratory support. The ginger adds warming circulation-enhancing effects, while cinnamon improves flavor and adds antimicrobial properties.'
      }
    ],
    herbPairings: [
      {
        herb: 'Echinacea',
        benefit: 'Enhances immune-stimulating effects and adds antimicrobial properties'
      },
      {
        herb: 'Rose Hips',
        benefit: 'Complements vitamin C content and adds additional antioxidants'
      },
      {
        herb: 'Thyme',
        benefit: 'Adds antimicrobial properties and enhances respiratory support'
      },
      {
        herb: 'Ginger',
        benefit: 'Adds warming properties and enhances circulation'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 95 },
      { area: 'Antiviral Activity', percentage: 90 },
      { area: 'Respiratory Support', percentage: 85 },
      { area: 'Antioxidant Protection', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 75 }
    ],
    resources: [
      {
        title: 'Elderberry: History, Folklore, and Recent Research',
        author: 'David Hoffmann',
        type: 'Book',
        link: 'https://example.com/elderberry-book'
      },
      {
        title: 'Randomized study of the efficacy and safety of oral elderberry extract in the treatment of influenza A and B virus infections',
        author: 'Journal of International Medical Research',
        type: 'Research Paper',
        link: 'https://example.com/elderberry-research'
      },
      {
        title: 'Elderberry Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/elderberry-monograph'
      }
    ]
  },
  {
    id: 114,
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea, E. angustifolia, E. pallida',
    slug: 'echinacea',
    description: 'Echinacea is a powerful immune-stimulating herb native to North America that has been used for centuries to prevent and address infections, support immune function, and enhance the body\'s natural defenses against pathogens.',
    imageUrl: '/images/herbs/echinacea.jpg',
    rating: 4.8,
    categories: ['Immune Support', 'Antimicrobial', 'Anti-inflammatory', 'Wound Healing', 'Native American Medicine'],
    benefits: [
      'Stimulates immune system function',
      'May reduce duration and severity of cold and flu symptoms',
      'Supports the body\'s response to infections',
      'Has antimicrobial properties',
      'Supports wound healing when used topically',
      'May help reduce inflammation',
      'Supports lymphatic system function'
    ],
    uses: [
      'Preventing and addressing cold and flu symptoms',
      'Supporting recovery from infections',
      'As part of immune-supporting protocols',
      'Topically for wound healing and skin infections',
      'Supporting the body during times of stress',
      'Addressing early signs of infection'
    ],
    funFact: 'Echinacea gets its name from the Greek word "echinos," meaning hedgehog or sea urchin, referring to the spiky central cone of the flower. It was one of the most widely used medicinal plants among Native American tribes, with at least 14 different tribes using it for various ailments. The Kiowa and Cheyenne would chew on the roots to numb toothaches, which led to echinacea being used in some of the first commercial local anesthetics in America.',
    dosage: {
      powder: '1-2 teaspoons (3-5g) daily',
      capsule: '500-1000mg, 3 times daily at onset of symptoms; 500mg daily for prevention',
      tincture: '2-4ml, every 2-4 hours at onset of symptoms; 1-2ml daily for prevention',
      tea: '1-2 teaspoons dried herb steeped in 1 cup hot water for 10-15 minutes, 3 cups daily'
    },
    warnings: [
      'May cause allergic reactions in those sensitive to plants in the Asteraceae family',
      'Not recommended for people with autoimmune disorders without professional supervision',
      'May interact with immunosuppressant medications',
      'Best used for acute conditions rather than long-term daily use',
      'May cause mild digestive upset in some individuals',
      'Use with caution during pregnancy (occasional use is generally considered safe)'
    ],
    history: 'Echinacea has been used medicinally by Native American tribes for at least 400 years before European contact. It was used by tribes including the Lakota, Cheyenne, Comanche, Kiowa, and Pawnee for a wide range of conditions including wounds, burns, insect bites, snakebites, toothaches, sore throats, and infections. When European settlers arrived in America, they quickly adopted echinacea into their pharmacopeia. In the late 19th century, it became one of the primary herbs used by the Eclectic physicians, who documented its use for infections, blood poisoning, and as a "blood purifier." It was listed in the U.S. National Formulary from 1916 to 1950. With the rise of antibiotics in the mid-20th century, echinacea use declined in the United States but remained popular in Europe, particularly Germany, where much of the modern research on echinacea has been conducted. It experienced a resurgence in popularity in the U.S. in the 1980s as interest in herbal medicine grew.',
    culturalBackground: 'In Native American cultures, echinacea was considered a sacred medicine plant with multiple uses. The Lakota called it "snake root" because of its use for snakebites. The Cheyenne used it in their Sun Dance ceremony, a sacred ritual of renewal. The Comanche used the chewed root as a numbing agent for toothaches and sore throats. In European and American folk medicine of the 18th and 19th centuries, it was known as "Kansas snakeroot" and was used for blood poisoning, infections, and to "purify the blood." In modern Western herbalism, it is considered one of the most important immune-supporting herbs and is widely used for prevention and treatment of upper respiratory infections. In German phytomedicine, it has been extensively researched and is approved by Commission E (the German regulatory agency for herbs) for supportive treatment of respiratory and urinary infections and for wound healing.',
    preparation: 'Different species of echinacea have somewhat different properties, with E. angustifolia and E. pallida traditionally considered stronger for immune support, while E. purpurea is more commonly used in modern preparations due to ease of cultivation. The root, leaf, and flower are all used medicinally, with the root generally considered most potent. Echinacea is prepared as a tincture, capsule, tea, or fresh-pressed juice. For acute conditions, it is typically taken in frequent small doses (every 2-4 hours) at the first sign of infection. For prevention, it is often taken daily during cold and flu season. It has a distinctive tingling sensation when held in the mouth, which is considered a sign of potency due to the presence of alkylamides. For maximum effectiveness, it is often combined with other immune-supporting herbs like elderberry, astragalus, or thyme.',
    preparations: [
      {
        name: 'Echinacea and Elderberry Immune Tincture',
        ingredients: [
          '1/2 cup dried echinacea root',
          '1/4 cup dried echinacea flowers and leaves',
          '1/2 cup dried elderberries',
          '1/4 cup dried thyme',
          '2 tablespoons dried ginger root',
          '3 cups high-proof alcohol (vodka or grain alcohol)',
          '1 cup filtered water',
          'Glass jar with tight-fitting lid',
          'Dark glass bottles with dropper tops for storage'
        ],
        instructions: 'Combine all herbs in a clean glass jar. Mix the alcohol and water, then pour over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar every few days. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles with droppers, label with the date and contents, and store in a cool, dark place. At the first sign of infection, take 1/4 to 1/2 teaspoon (1-2ml) every 2-3 hours for the first day, then 3-4 times daily until symptoms resolve. For prevention during cold and flu season, take 15-20 drops (approximately 0.5-1ml) daily. This tincture combines the immune-stimulating properties of echinacea with the antiviral effects of elderberry, the antimicrobial qualities of thyme, and the warming, circulation-enhancing properties of ginger for comprehensive immune support.'
      },
      {
        name: 'Echinacea Throat Spray',
        ingredients: [
          '1/4 cup echinacea tincture (prepared as above or purchased)',
          '2 tablespoons raw honey',
          '1 tablespoon apple cider vinegar',
          '10 drops propolis tincture (optional)',
          '5 drops thyme essential oil (optional)',
          '5 drops peppermint essential oil (optional)',
          '1/4 cup filtered water',
          'Small spray bottle',
          'Small pot for warming',
          'Funnel'
        ],
        instructions: 'In a small pot, gently warm the water (do not boil). Add the honey and stir until fully dissolved. Remove from heat and let cool slightly. Add the echinacea tincture, apple cider vinegar, propolis tincture (if using), and essential oils (if using). Stir well to combine. Using a funnel, transfer the mixture to a small spray bottle. Label with the date and contents. Store in a cool, dark place or in the refrigerator, where it will keep for 3-6 months. Shake well before each use. Spray directly onto the back of the throat 3-5 times, every 2-3 hours at the first sign of a sore throat or upper respiratory infection. This spray combines the immune-stimulating and antimicrobial properties of echinacea with the soothing effects of honey, the antimicrobial qualities of apple cider vinegar and propolis, and the additional antimicrobial and analgesic properties of thyme and peppermint essential oils for comprehensive throat support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Elderberry',
        benefit: 'Enhances immune support and adds antiviral properties'
      },
      {
        herb: 'Thyme',
        benefit: 'Adds antimicrobial properties and enhances respiratory support'
      },
      {
        herb: 'Goldenseal',
        benefit: 'Complements antimicrobial effects and adds mucous membrane support'
      },
      {
        herb: 'Boneset',
        benefit: 'Enhances effectiveness for flu-like symptoms with body aches'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Stimulation', percentage: 95 },
      { area: 'Infection Response', percentage: 90 },
      { area: 'Antimicrobial Activity', percentage: 85 },
      { area: 'Wound Healing', percentage: 80 },
      { area: 'Anti-inflammatory', percentage: 75 }
    ],
    resources: [
      {
        title: 'Echinacea: The Immune Herb',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/echinacea-book'
      },
      {
        title: 'Echinacea for preventing and treating the common cold',
        author: 'Cochrane Database of Systematic Reviews',
        type: 'Research Paper',
        link: 'https://example.com/echinacea-research'
      },
      {
        title: 'Echinacea Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/echinacea-monograph'
      }
    ]
  },
  {
    id: 115,
    name: 'Holy Basil',
    scientificName: 'Ocimum sanctum (Ocimum tenuiflorum)',
    slug: 'holy-basil',
    description: 'Holy Basil, also known as Tulsi, is a sacred adaptogenic herb that has been revered in Ayurvedic medicine for over 3,000 years for its ability to promote balance in the body and mind, support stress resilience, enhance cognitive function, and support overall wellbeing.',
    imageUrl: '/images/herbs/holy-basil.jpg',
    rating: 4.9,
    categories: ['Adaptogen', 'Stress Relief', 'Cognitive Function', 'Immune Support', 'Sacred Herb'],
    benefits: [
      'Helps the body adapt to stress',
      'Supports healthy cortisol levels',
      'Enhances mental clarity and cognitive function',
      'Supports immune system function',
      'Has antioxidant and anti-inflammatory properties',
      'Supports healthy blood sugar levels',
      'Promotes respiratory health',
      'Supports cardiovascular health'
    ],
    uses: [
      'Managing chronic stress',
      'Supporting mental clarity and focus',
      'As part of immune-supporting protocols',
      'Supporting healthy metabolism',
      'Addressing mild anxiety and depression',
      'Supporting respiratory health',
      'As a daily adaptogenic tonic'
    ],
    funFact: 'Holy Basil (Tulsi) is known as "The Queen of Herbs" and "The Incomparable One" in Ayurvedic medicine. In Hindu tradition, it is considered the earthly manifestation of the goddess Tulsi, a consort of the god Vishnu. It is so sacred that many Hindu families keep a Tulsi plant in their homes and courtyards, and traditional wedding necklaces are made from Tulsi stems. It is believed that even the shadow of the Tulsi plant is purifying, and that it creates a protective shield of spiritual light around the home.',
    dosage: {
      powder: '1-2 teaspoons (2-4g) daily',
      capsule: '300-600mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '1-2 teaspoons dried herb steeped in 1 cup hot water for 5-10 minutes, 1-3 cups daily'
    },
    warnings: [
      'May interact with blood thinning medications',
      'May lower blood sugar levels, requiring monitoring in diabetics',
      'May affect fertility, not recommended in large doses when trying to conceive',
      'May interact with certain medications metabolized by the liver',
      'Generally considered very safe with few side effects'
    ],
    history: 'Holy Basil has been used in Ayurvedic medicine for at least 3,000 years. It appears in the ancient Ayurvedic text, the Charaka Samhita (100-200 CE), where it was prescribed for a wide range of conditions including respiratory disorders, digestive issues, and to promote longevity. In Hindu tradition, it has been revered as a sacred plant for over 5,000 years and is mentioned in the Puranas, ancient Hindu texts written between 500 BCE and 1000 CE. It was traditionally planted around Hindu temples and homes to purify the atmosphere and to protect inhabitants from negative energies and disease. During the colonization of India, European botanists documented its medicinal uses, and it gradually made its way into Western herbalism. In the 20th century, scientific research began to validate many of its traditional uses, particularly its adaptogenic, anti-stress, and immunomodulatory properties.',
    culturalBackground: 'In Hindu culture, Holy Basil (Tulsi) is considered one of the most sacred plants and is worshipped as the goddess Tulsi, an incarnation of Lakshmi, the goddess of wealth and prosperity. Daily worship of the Tulsi plant is a common practice in many Hindu households, and it is believed that the plant connects the worshipper to the divine. In traditional Indian weddings, the bride is considered unmarried until she offers a garland made of Tulsi leaves to the groom. In Ayurvedic tradition, it is classified as a "rasayana" (rejuvenative) and is believed to balance the three doshas (vata, pitta, and kapha). It is associated with the heart chakra and is believed to open the heart and mind. In modern Western herbalism, it is valued as an adaptogen for stress management and is often referred to as "holy basil" to distinguish it from culinary basil (Ocimum basilicum).',
    preparation: 'The leaves, stems, and seeds of Holy Basil are all used medicinally, with the leaves being most commonly used. In traditional Ayurvedic preparation, the fresh leaves are often consumed raw or made into a tea. The dried herb can be prepared as a tea, tincture, or taken in capsule form. For stress management, it is often consumed daily as a tea or tincture, sometimes combined with other adaptogenic herbs like ashwagandha or rhodiola. For respiratory support, it can be prepared as a steam inhalation or combined with other respiratory herbs like thyme or mullein. For maximum benefits, it is traditionally taken consistently over time, as its adaptogenic effects build gradually.',
    preparations: [
      {
        name: 'Holy Basil Stress Relief Tea',
        ingredients: [
          '2 tablespoons dried holy basil leaves',
          '1 tablespoon dried lemon balm (optional)',
          '1 teaspoon dried rose petals (optional)',
          '1/2 teaspoon dried lavender flowers (optional)',
          '1/4 teaspoon cardamom pods, crushed (optional)',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of hot water. Pour boiling water over the herbs and steep, covered, for 5-10 minutes. Strain well and add honey and/or lemon if desired. Drink 1-3 cups daily to support stress resilience, mental clarity, and overall wellbeing. This blend combines the adaptogenic properties of holy basil with the calming effects of lemon balm and lavender, the heart-opening qualities of rose, and the digestive support of cardamom, creating a comprehensive stress relief tea that addresses both mind and body.'
      },
      {
        name: 'Holy Basil Adaptogenic Honey',
        ingredients: [
          '1 cup fresh holy basil leaves (or 1/2 cup dried)',
          '2 cups raw honey',
          '1 tablespoon ashwagandha powder (optional)',
          '1 teaspoon cinnamon powder (optional)',
          '1/2 teaspoon cardamom powder (optional)',
          'Pinch of black pepper (optional, enhances absorption)',
          'Clean glass jar with tight-fitting lid'
        ],
        instructions: 'If using fresh holy basil, wash the leaves thoroughly and pat dry. Chop the leaves finely. In a small pot, gently warm the honey over low heat until it becomes more liquid (do not boil, as this will damage the beneficial enzymes in raw honey). Remove from heat and stir in the holy basil leaves and optional powdered herbs. Pour the mixture into a clean glass jar and seal tightly. Label with the date and contents. Store in a cool, dark place for 2-4 weeks, turning the jar daily to mix the contents. After the infusion period, the honey can be strained if desired, or the plant material can be left in for continued infusion. Take 1-2 teaspoons daily as an adaptogenic tonic, or use to sweeten tea or spread on toast. This honey combines the adaptogenic properties of holy basil with the nutritive benefits of raw honey and the complementary effects of ashwagandha, creating a delicious and effective stress-management support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ashwagandha',
        benefit: 'Enhances adaptogenic effects and adds grounding properties'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Complements nervous system support and adds uplifting properties'
      },
      {
        herb: 'Rhodiola',
        benefit: 'Enhances cognitive benefits and adds energizing properties'
      },
      {
        herb: 'Ginger',
        benefit: 'Improves circulation and enhances absorption'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Adaptation', percentage: 95 },
      { area: 'Cognitive Function', percentage: 85 },
      { area: 'Immune Support', percentage: 80 },
      { area: 'Respiratory Health', percentage: 75 },
      { area: 'Metabolic Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Tulsi: The Mother Medicine of Nature',
        author: 'Marc Maurice Cohen',
        type: 'Book',
        link: 'https://example.com/tulsi-book'
      },
      {
        title: 'Tulsi - Ocimum sanctum: A herb for all reasons',
        author: 'Journal of Ayurveda and Integrative Medicine',
        type: 'Research Paper',
        link: 'https://example.com/tulsi-research'
      },
      {
        title: 'Holy Basil Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/holy-basil-monograph'
      }
    ]
  }
];

export default immuneHerbs;

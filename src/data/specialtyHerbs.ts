import { HerbData } from '../types/herbs';

const specialtyHerbs: HerbData[] = [
  {
    id: 110,
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    slug: 'ginger',
    description: 'Ginger is a warming, aromatic herb with powerful digestive, anti-inflammatory, and circulatory properties that has been used for thousands of years across multiple cultures to address digestive complaints, reduce inflammation, and support overall wellness.',
    imageUrl: '/images/herbs/ginger.jpg',
    rating: 4.9,
    categories: ['Digestive Support', 'Anti-inflammatory', 'Circulation', 'Warming', 'Immune Support'],
    benefits: [
      'Soothes digestive discomfort and nausea',
      'Reduces inflammation throughout the body',
      'Improves circulation and warms the body',
      'Supports immune function',
      'May help reduce pain and muscle soreness',
      'Supports respiratory health',
      'May help regulate blood sugar levels'
    ],
    uses: [
      'Addressing nausea, motion sickness, and morning sickness',
      'Supporting healthy digestion and preventing gas and bloating',
      'As a warming remedy for cold conditions',
      'Supporting circulation in cold extremities',
      'As part of immune-supporting formulas for colds and flu',
      'Addressing inflammatory conditions'
    ],
    funFact: 'Ginger has been so valued throughout history that it was used as currency in ancient times! During the 13th and 14th centuries, the value of a pound of ginger was equivalent to the cost of a sheep. The Romans taxed it as a luxury item, and by medieval times, it was so prized in Europe that one pound of ginger could be traded for a live sheep.',
    dosage: {
      powder: '1/4-1 teaspoon (0.5-2g) daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '1-2ml, 2-3 times daily',
      tea: '1 teaspoon fresh grated or dried ginger steeped in 1 cup hot water for 5-10 minutes, 1-3 cups daily'
    },
    warnings: [
      'May increase bile production, caution with gallstones',
      'May interact with blood thinning medications',
      'May lower blood sugar, requiring monitoring in diabetics',
      'May cause heartburn or digestive discomfort in high doses',
      'Use with caution during pregnancy (small amounts are generally considered safe)',
      'May interact with certain heart and blood pressure medications'
    ],
    history: 'Ginger has been used medicinally for at least 5,000 years. It was one of the first spices to be traded and was a key component of ancient trade routes between Asia and Europe. It appears in ancient Chinese texts from around 400 BCE and was highly valued in Traditional Chinese Medicine. In ancient India, ginger was considered a universal medicine and was mentioned in the Ayurvedic text Charaka Samhita (100-200 CE). The ancient Greeks and Romans imported it from the East, with the Greek physician Dioscorides recommending it for digestive issues in the 1st century CE. By the 13th and 14th centuries, it was so common in Europe that it was included in nearly every recipe in the first English cookbook. During the Age of Exploration, ginger plants were transported to the Caribbean and became a major crop in Jamaica, which remains famous for its ginger to this day.',
    culturalBackground: 'In Chinese culture, ginger is considered a yang (warming) herb and is used to balance cold conditions. It is an essential ingredient in many traditional formulas and is often paired with scallions as a remedy for the early stages of colds. In Indian culture, ginger (adrak) is both a culinary staple and a primary medicine, used in daily cooking and as a remedy for numerous ailments. It is considered sattvic (promoting clarity and balance) in Ayurvedic tradition. In Japanese culture, pickled ginger (gari) is served with sushi to cleanse the palate and aid digestion. In Caribbean and African traditions, ginger is used in beverages like ginger beer and as a remedy for digestive and respiratory issues. In Western herbalism, it has been valued since medieval times and was especially popular in England, where it was used in gingerbread, which was originally a medicinal preparation.',
    preparation: 'Both fresh and dried ginger root are used medicinally, with slightly different properties. Fresh ginger is more aromatic and has stronger anti-inflammatory effects, while dried ginger is more warming and better for cold conditions. For digestive issues, ginger is often prepared as a tea, eaten raw, or taken in capsule form. For colds and flu, it is frequently combined with honey and lemon in hot water. For circulatory support, it can be used in baths or as a warming massage oil. The essential oil is used in aromatherapy for nausea and to stimulate circulation. For maximum digestive benefits, ginger is best taken before or with meals.',
    preparations: [
      {
        name: 'Ginger Digestive Tea',
        ingredients: [
          '1 inch piece fresh ginger root, thinly sliced or grated',
          '1 teaspoon fennel seeds (optional)',
          '1/2 teaspoon cardamom pods, crushed (optional)',
          '1/2 teaspoon cinnamon powder or 1 small cinnamon stick (optional)',
          '2 cups water',
          'Honey or lemon to taste (optional)',
          'Pinch of black pepper (optional, enhances absorption)'
        ],
        instructions: 'In a small pot, combine the ginger, optional spices, and water. Bring to a boil, then reduce heat and simmer, covered, for 5-10 minutes. The longer it simmers, the stronger the tea will be. Remove from heat and strain. Add honey and/or lemon if desired. Drink warm, preferably before or after meals to aid digestion. This tea is particularly helpful for bloating, gas, indigestion, nausea, and to warm the body during cold weather or at the onset of a cold. The addition of fennel and cardamom enhances the digestive benefits, while cinnamon adds warming and blood sugar balancing properties.'
      },
      {
        name: 'Ginger Immune-Boosting Syrup',
        ingredients: [
          '1 cup fresh ginger, roughly chopped or grated',
          '1 lemon, zested and juiced',
          '1 orange, zested and juiced',
          '1/4 cup raw honey',
          '1 tablespoon turmeric powder or 1 inch fresh turmeric, grated',
          '1/4 teaspoon black pepper',
          '1 cinnamon stick (optional)',
          '3 cups water',
          '1 tablespoon apple cider vinegar (optional, as a preservative)'
        ],
        instructions: 'In a medium pot, combine the ginger, lemon zest, orange zest, turmeric, black pepper, cinnamon stick (if using), and water. Bring to a boil, then reduce heat and simmer, uncovered, until the liquid is reduced by half, about 30-45 minutes. Strain the mixture through a fine mesh strainer or cheesecloth, pressing on the solids to extract all liquid. While the liquid is still warm but not hot (below 110°F/43°C to preserve raw honey benefits), stir in the honey, lemon juice, orange juice, and apple cider vinegar until fully dissolved. Transfer to a clean glass jar with a tight-fitting lid and store in the refrigerator, where it will keep for 2-3 weeks. Take 1-2 tablespoons as needed at the first sign of a cold, or use 1 tablespoon daily as a preventative during cold and flu season. This syrup combines the immune-supporting properties of ginger with the vitamin C from citrus and the anti-inflammatory effects of turmeric.'
      }
    ],
    herbPairings: [
      {
        herb: 'Turmeric',
        benefit: 'Enhances anti-inflammatory effects and improves absorption'
      },
      {
        herb: 'Cinnamon',
        benefit: 'Complements warming properties and adds blood sugar regulation'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Adds soothing properties for digestive tract and enhances flavor'
      },
      {
        herb: 'Lemon',
        benefit: 'Adds vitamin C and enhances detoxification'
      }
    ],
    benefitsVisualization: [
      { area: 'Digestive Support', percentage: 95 },
      { area: 'Anti-inflammatory', percentage: 85 },
      { area: 'Circulation', percentage: 80 },
      { area: 'Immune Support', percentage: 75 },
      { area: 'Pain Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Ginger: Common Spice and Wonder Drug',
        author: 'Paul Schulick',
        type: 'Book',
        link: 'https://example.com/ginger-book'
      },
      {
        title: 'The Amazing and Mighty Ginger',
        author: 'Ann M. Bode and Zigang Dong',
        type: 'Research Paper',
        link: 'https://example.com/ginger-research'
      },
      {
        title: 'Ginger Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/ginger-monograph'
      }
    ]
  },
  {
    id: 111,
    name: 'Chamomile',
    scientificName: 'Matricaria recutita',
    slug: 'chamomile',
    description: 'Chamomile is a gentle yet effective nervine herb with calming, anti-inflammatory, and digestive properties that has been used for centuries to soothe nervous tension, support digestive health, and address inflammatory conditions throughout the body.',
    imageUrl: '/images/herbs/chamomile.jpg',
    rating: 4.8,
    categories: ['Nervine', 'Digestive Support', 'Anti-inflammatory', 'Sleep Support', 'Skin Health'],
    benefits: [
      'Calms the nervous system and reduces anxiety',
      'Promotes restful sleep',
      'Soothes digestive inflammation and spasms',
      'Reduces inflammation throughout the body',
      'Supports skin health and wound healing',
      'Gentle enough for children and the elderly',
      'May help reduce menstrual pain'
    ],
    uses: [
      'Supporting healthy sleep patterns',
      'Calming anxiety and nervousness',
      'Addressing digestive complaints like gas, bloating, and IBS',
      'As a gentle remedy for children\'s ailments',
      'In topical applications for skin inflammation',
      'Supporting women\'s health and menstrual comfort'
    ],
    funFact: 'The name "chamomile" comes from the Greek words "khamai" (on the ground) and "melon" (apple), referring to the apple-like scent of the flowers. In ancient Egypt, chamomile was dedicated to the sun god Ra because of its sunny appearance and was used in everything from beverages to embalming oils. It was one of the nine sacred herbs of the Anglo-Saxons, who believed it had the power to ward off disease and promote longevity.',
    dosage: {
      powder: '1-2 teaspoons (2-4g) daily',
      capsule: '400-800mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers steeped in 1 cup hot water for 5-10 minutes, 1-3 cups daily'
    },
    warnings: [
      'May cause allergic reactions in those sensitive to plants in the Asteraceae family',
      'May interact with blood thinning medications',
      'May increase the effects of sedative medications',
      'Use with caution during pregnancy (occasional use is generally considered safe)',
      'May cause drowsiness in some individuals'
    ],
    history: 'Chamomile has been used medicinally for at least 5,000 years. It was sacred to the ancient Egyptians, who dedicated it to their sun god Ra and used it in cosmetics, beverages, and the embalming process. Ancient Greeks and Romans used it for digestive issues, headaches, and as a mild sedative. Hippocrates, Dioscorides, and Galen all wrote about its medicinal properties. In medieval Europe, it was one of the nine sacred herbs mentioned in the Anglo-Saxon herbal texts and was planted around monasteries for its medicinal value. During the Middle Ages, it was strewn on floors to create a pleasant fragrance and repel insects. In the 17th century, the British botanist Nicholas Culpeper recommended it for digestive issues, fevers, and women\'s health. German chamomile (Matricaria recutita) and Roman chamomile (Chamaemelum nobile) have been used somewhat interchangeably throughout history, though German chamomile is more commonly used medicinally today.',
    culturalBackground: 'In European folk medicine, chamomile was considered a "plant doctor," believed to revive sick plants growing nearby, and was often planted in herb gardens to protect other plants. In German tradition, it was one of the "Neun Kräuter" (Nine Herbs) of ancient Germanic paganism and was later called "alles zutraut" (capable of anything) for its wide range of uses. In Spanish culture, "manzanilla" (little apple) tea is a daily ritual for many families. In Russian folk medicine, it was used for children\'s ailments and was considered a symbol of youthfulness. In Egyptian culture, it was associated with the sun and was used in religious ceremonies. In modern Western herbalism, it is considered one of the gentlest yet most effective nervine herbs, suitable for all ages from infants to the elderly.',
    preparation: 'The flower heads are the medicinal part of chamomile, harvested when fully open and dried for later use. Chamomile is most commonly prepared as a tea, which extracts its volatile oils and flavonoids. For digestive or nervous system support, it is typically consumed as a hot tea, often with honey. For sleep support, it is frequently combined with other nervine herbs like lavender, lemon balm, or passionflower. For topical use, it can be prepared as a strong tea for compresses or added to bath water. The essential oil is used in aromatherapy for stress relief and skin care. Chamomile is generally considered safe for long-term use and is gentle enough for children when appropriately dosed.',
    preparations: [
      {
        name: 'Chamomile Sleep Support Tea Blend',
        ingredients: [
          '2 tablespoons dried chamomile flowers',
          '1 tablespoon dried lavender flowers',
          '1 tablespoon dried lemon balm',
          '1 teaspoon dried passionflower (optional)',
          '1/2 teaspoon dried mint (optional, for flavor)',
          'Honey to taste (optional)',
          'Lemon slice (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of hot water. Pour boiling water over the herbs and steep, covered, for 5-10 minutes to preserve the volatile oils. Strain well and add honey and/or lemon if desired. Drink 1 cup 30-60 minutes before bedtime to promote relaxation and restful sleep. This blend combines the gentle sedative properties of chamomile with the complementary effects of lavender, lemon balm, and passionflower for comprehensive sleep support. The mint adds a pleasant flavor and helps with digestion, which can sometimes interfere with sleep.'
      },
      {
        name: 'Chamomile Digestive Tincture',
        ingredients: [
          '1 cup dried chamomile flowers',
          '1/4 cup dried fennel seeds (optional)',
          '1/4 cup dried peppermint leaves (optional)',
          '2 tablespoons dried ginger root (optional)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 cup filtered water',
          'Glass jar with tight-fitting lid',
          'Dark glass bottles with dropper tops for storage'
        ],
        instructions: 'Combine all herbs in a clean glass jar. Mix the alcohol and water, then pour over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar every few days. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles with droppers, label with the date and contents, and store in a cool, dark place. Take 30-60 drops (approximately 1.5-3ml) in a small amount of water before or after meals to support digestion, or as needed for digestive discomfort. This tincture combines the anti-inflammatory and antispasmodic properties of chamomile with the carminative effects of fennel, the cooling properties of peppermint, and the warming qualities of ginger for comprehensive digestive support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Lavender',
        benefit: 'Enhances calming effects and adds aromatic properties'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Complements nervous system support and adds uplifting properties'
      },
      {
        herb: 'Fennel',
        benefit: 'Enhances digestive benefits and adds carminative effects'
      },
      {
        herb: 'Calendula',
        benefit: 'Adds wound-healing properties for topical applications'
      }
    ],
    benefitsVisualization: [
      { area: 'Nervous System Support', percentage: 90 },
      { area: 'Sleep Quality', percentage: 85 },
      { area: 'Digestive Support', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Skin Health', percentage: 75 }
    ],
    resources: [
      {
        title: 'Chamomile: Industrial Profiles',
        author: 'Rolf Franke',
        type: 'Book',
        link: 'https://example.com/chamomile-book'
      },
      {
        title: 'Chamomile: A herbal medicine of the past with bright future',
        author: 'Journal of Molecular Medicine',
        type: 'Research Paper',
        link: 'https://example.com/chamomile-research'
      },
      {
        title: 'Chamomile Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/chamomile-monograph'
      }
    ]
  },
  {
    id: 112,
    name: 'Red Raspberry Leaf',
    scientificName: 'Rubus idaeus',
    slug: 'red-raspberry-leaf',
    description: 'Red raspberry leaf is a nourishing, toning herb rich in vitamins, minerals, and tannins that has been used for centuries to support women\'s reproductive health, particularly during pregnancy and childbirth, while also providing general nutritive benefits.',
    imageUrl: '/images/herbs/red-raspberry-leaf.jpg',
    rating: 4.7,
    categories: ['Women\'s Health', 'Pregnancy Support', 'Nutritive', 'Astringent', 'Uterine Tonic'],
    benefits: [
      'Tones and strengthens the uterine muscles',
      'May ease menstrual cramps and regulate cycles',
      'Provides essential nutrients including iron, calcium, and magnesium',
      'Supports healthy pregnancy and may ease labor',
      'Has astringent properties beneficial for digestive issues',
      'Supports overall reproductive health',
      'May help reduce excessive menstrual bleeding'
    ],
    uses: [
      'Supporting women throughout the childbearing years',
      'Preparing the uterus for labor during pregnancy (typically in the third trimester)',
      'Addressing menstrual discomfort and irregularity',
      'As a nutritive tonic for general health',
      'Supporting postpartum recovery',
      'Addressing mild diarrhea and digestive inflammation'
    ],
    funFact: 'Red raspberry leaf has been called "the woman\'s herb" for centuries, but it was also used by Native American men before hunting because they believed it would prevent muscle cramping during the hunt. The leaf—not the fruit—is the medicinal part, though the delicious berries have their own health benefits. In 19th century America, it was so valued for women\'s health that Lydia Pinkham included it in her famous "Vegetable Compound" for "female complaints," one of the most successful patent medicines of the era.',
    dosage: {
      powder: '1-2 teaspoons (2-4g) daily',
      capsule: '500-1000mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried leaves steeped in 1 cup hot water for 10-15 minutes, 1-3 cups daily'
    },
    warnings: [
      'Consult with a healthcare provider before using during pregnancy',
      'May cause mild digestive upset in some individuals',
      'May lower blood sugar levels, requiring monitoring in diabetics',
      'May interact with medications that affect hormones',
      'Generally considered very safe with few side effects'
    ],
    history: 'Red raspberry leaf has been used medicinally for thousands of years across multiple cultures. It was mentioned in ancient Greek texts for its benefits during pregnancy and childbirth. Native American tribes, including the Cherokee, Iroquois, and Mohegan, used it extensively for women\'s health, particularly during pregnancy, and also for digestive issues and as a wash for sore eyes. In 17th century England, it was recommended by herbalists like Nicholas Culpeper for strengthening the womb and preventing miscarriage. During the 19th century, it became a staple of the Eclectic and Physiomedicalist physicians in America, who prescribed it for various female complaints. It was included in the U.S. Pharmacopeia from 1882 to 1905. In the early 20th century, it was studied by Dr. Aviva Romm and other herbalists who documented its benefits for pregnancy and labor.',
    culturalBackground: 'In European folk medicine, raspberry leaf was considered a protective herb for pregnant women and was often given throughout pregnancy to ensure a safe delivery. In Native American traditions, it was used in coming-of-age ceremonies for young women and was considered a sacred women\'s herb. The Chippewa used it in a tea for pregnant women, while the Cherokee used it for digestive issues and as a wash for sore eyes. In traditional midwifery across cultures, it has been a standard recommendation for pregnancy, often combined with other herbs like nettle and alfalfa for their nutritive properties. In modern Western herbalism, it is considered one of the safest and most effective herbs for women\'s reproductive health and is frequently recommended by midwives and herbalists for pregnancy support.',
    preparation: 'The leaves are the medicinal part of red raspberry, typically harvested before the plant flowers for maximum potency and dried for later use. Red raspberry leaf is most commonly prepared as a tea, which extracts its vitamins, minerals, and tannins. For pregnancy support, it is often consumed daily as a hot or cold infusion, sometimes combined with other nutritive herbs like nettle or alfalfa. For menstrual support, it can be taken throughout the month or focused on the week before menstruation. The tannins in raspberry leaf give it an astringent quality and a somewhat bitter taste, which can be improved by adding honey or blending with more flavorful herbs like mint or lemon balm. For maximum nutritional benefits, it is best prepared as a long-steeped infusion (4+ hours).',
    preparations: [
      {
        name: 'Pregnancy Support Tea Blend',
        ingredients: [
          '2 tablespoons dried red raspberry leaf',
          '1 tablespoon dried nettle leaf',
          '1 tablespoon dried alfalfa leaf (optional)',
          '1 teaspoon dried spearmint leaf (optional, for flavor)',
          '1/2 teaspoon dried ginger root (optional)',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 tablespoons of the blend per cup of hot water. Pour boiling water over the herbs and steep, covered, for 10-15 minutes (or longer for a stronger infusion). Strain well and add honey and/or lemon if desired. Drink 1-3 cups daily throughout pregnancy, particularly in the second and third trimesters. This blend combines the uterine toning properties of raspberry leaf with the nutritive benefits of nettle and alfalfa, creating a comprehensive pregnancy support tea rich in vitamins and minerals. The spearmint adds a pleasant flavor and helps with digestion, while ginger can help alleviate morning sickness in early pregnancy.'
      },
      {
        name: 'Women\'s Nutritive Infusion',
        ingredients: [
          '1 ounce (about 1 cup) dried red raspberry leaf',
          '1/2 ounce dried nettle leaf',
          '1/2 ounce dried oatstraw',
          '1/4 ounce dried rose hips (optional, for vitamin C)',
          '1 quart boiling water',
          'Honey or lemon to taste (optional)',
          'Large glass jar with lid'
        ],
        instructions: 'Place all dried herbs in a large glass jar. Pour boiling water over the herbs, filling the jar. Stir with a wooden spoon to ensure all herbs are moistened. Cap tightly and let steep for 4-8 hours or overnight. Strain the infusion through a fine mesh strainer or cheesecloth, pressing on the herbs to extract all liquid. Store the infusion in the refrigerator, where it will keep for 2-3 days. Drink 1-2 cups daily, either cold or gently reheated (do not boil). This long-steeped infusion maximizes the extraction of minerals and other nutrients from the herbs, creating a highly nutritive tonic. It is particularly beneficial during menstruation, pregnancy, postpartum recovery, or any time additional nutritional support is needed.'
      }
    ],
    herbPairings: [
      {
        herb: 'Nettle Leaf',
        benefit: 'Enhances nutritive properties and adds iron and mineral content'
      },
      {
        herb: 'Alfalfa',
        benefit: 'Complements vitamin K content and adds additional minerals'
      },
      {
        herb: 'Spearmint',
        benefit: 'Improves flavor and adds digestive support'
      },
      {
        herb: 'Rose Hips',
        benefit: 'Adds vitamin C and immune support'
      }
    ],
    benefitsVisualization: [
      { area: 'Uterine Toning', percentage: 90 },
      { area: 'Nutritive Value', percentage: 85 },
      { area: 'Menstrual Support', percentage: 80 },
      { area: 'Pregnancy Support', percentage: 90 },
      { area: 'Astringent Action', percentage: 75 }
    ],
    resources: [
      {
        title: 'The Natural Pregnancy Book',
        author: 'Aviva Romm',
        type: 'Book',
        link: 'https://example.com/pregnancy-book'
      },
      {
        title: 'Raspberry Leaf in Pregnancy: Its Safety and Efficacy in Labor',
        author: 'Journal of Midwifery & Women\'s Health',
        type: 'Research Paper',
        link: 'https://example.com/raspberry-research'
      },
      {
        title: 'Red Raspberry Leaf Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/raspberry-monograph'
      }
    ]
  }
];

export default specialtyHerbs;

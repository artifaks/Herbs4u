import { HerbData } from '../types/herbs';

const nutritiveHerbs: HerbData[] = [
  {
    id: 42,
    name: 'Red Clover',
    scientificName: 'Trifolium pratense',
    slug: 'red-clover',
    description: 'Red Clover is a nutritive herb rich in minerals, vitamins, and isoflavones. It has been traditionally used to support women\'s health, particularly during menopause, and is valued for its blood-purifying and anti-inflammatory properties.',
    imageUrl: '/images/herbs/red-clover.jpg',
    rating: 4.4,
    categories: ['Women\'s Health', 'Blood Purifier', 'Nutritive', 'Lymphatic'],
    benefits: [
      'Supports women\'s health during menopause',
      'Contains phytoestrogens that may help balance hormones',
      'Supports healthy skin and tissue repair',
      'Has blood-purifying properties',
      'Supports lymphatic system function',
      'Contains valuable nutrients including calcium, magnesium, and vitamins'
    ],
    uses: [
      'For menopausal symptoms like hot flashes',
      'Supporting skin health and conditions like eczema',
      'As a nutritive tonic for overall health',
      'Supporting lymphatic system cleansing',
      'For coughs and respiratory congestion',
      'As part of cleansing protocols'
    ],
    funFact: 'Red Clover was a key ingredient in the famous Hoxsey formula, a controversial alternative cancer treatment in the early 20th century. The four-leaf clover, a rare variation of red clover, is considered a symbol of good luck in many cultures!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '400-600mg, 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May interact with hormonal medications and blood thinners',
      'Not recommended during pregnancy',
      'May affect hormone-sensitive conditions',
      'Should be discontinued 2 weeks before surgery',
      'Consult a healthcare provider if you have a history of estrogen-dependent cancers'
    ],
    history: 'Red Clover has been used medicinally for centuries across many cultures. Native Americans used it for respiratory conditions and as a blood purifier. In traditional European herbalism, it was used for skin conditions, coughs, and bronchial issues. In the 19th century, it became popular in American folk medicine as part of various "blood cleansing" formulas. It was a key ingredient in the Hoxsey formula, a controversial alternative cancer treatment in the early 20th century. It gained renewed popularity in the late 20th century for women\'s health, particularly for menopausal symptoms.',
    culturalBackground: 'In European folk medicine, red clover was considered a protective herb and was used in charms and spells for luck, money, and love. In some Celtic traditions, it was associated with the triple goddess and feminine power. In traditional Russian herbalism, it was used for bronchial issues and as a blood cleanser. In North American folk medicine, it was often included in spring tonics to purify the blood after winter. Today, it is widely used in Western herbalism primarily for women\'s health and as a nutritive tonic.',
    preparation: 'The flowering tops of red clover are the part used medicinally. They are typically harvested when in full bloom and can be dried for later use. Red clover can be prepared as a tea, tincture, or taken in capsules. For skin conditions, it can also be used externally as a wash or in salves. As a nutritive herb, it is often infused in water for extended periods (4-8 hours) to extract the full range of minerals and vitamins.',
    preparations: [
      {
        name: 'Red Clover Mineral-Rich Infusion',
        ingredients: [
          '1 ounce (about 1 cup) dried red clover blossoms',
          '1 quart boiling water',
          'Glass jar with lid',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Place dried red clover in a glass jar. Pour boiling water over the herbs and seal with a lid. Let steep for 4-8 hours or overnight. Strain and drink 1-2 cups daily as a nutritive tonic. This long infusion extracts the full range of minerals and vitamins from the herb. The infusion can be refrigerated for up to 3 days. This is particularly beneficial during times of stress, during menopause, or when extra nutritional support is needed.'
      },
      {
        name: 'Red Clover Lymphatic Support Blend',
        ingredients: [
          '2 parts dried red clover blossoms',
          '1 part dried calendula flowers',
          '1 part dried cleavers',
          '1/2 part dried peppermint leaves',
          'Honey to taste',
          'Hot water'
        ],
        instructions: 'Mix all dried herbs together and store in an airtight container. To prepare, use 1-2 teaspoons of the blend per cup of hot water. Steep for 10-15 minutes, strain, and add honey if desired. Drink 2-3 cups daily to support lymphatic cleansing and skin health. This blend combines the blood-purifying properties of red clover with the lymphatic support of cleavers and the anti-inflammatory properties of calendula.'
      },
      {
        name: 'Red Clover Skin Healing Salve',
        ingredients: [
          '1 cup red clover-infused oil (see instructions below)',
          '1/4 cup calendula-infused oil',
          '1 ounce beeswax',
          '10 drops lavender essential oil',
          '5 drops tea tree essential oil',
          'Small jars for storage'
        ],
        instructions: 'To make red clover-infused oil: Fill a jar halfway with dried red clover blossoms. Cover completely with olive oil. Seal and place in a sunny window for 4-6 weeks, shaking occasionally. Alternatively, place the jar in a small pot with water and heat on low for 2-3 hours. Strain through cheesecloth. For the salve: Combine infused oils and beeswax in a double boiler and heat until beeswax is melted. Remove from heat and add essential oils. Pour into small jars and let cool completely. Apply to dry skin, eczema, psoriasis, or minor wounds as needed.'
      }
    ],
    herbPairings: [
      {
        herb: 'Nettle',
        benefit: 'Enhanced nutritive properties and additional minerals'
      },
      {
        herb: 'Cleavers',
        benefit: 'Complementary lymphatic system support'
      },
      {
        herb: 'Dandelion Root',
        benefit: 'Added liver support for hormone balancing'
      },
      {
        herb: 'Vitex (Chaste Tree)',
        benefit: 'Enhanced hormone-balancing effects for women'
      }
    ],
    benefitsVisualization: [
      { area: 'Women\'s Health', percentage: 85 },
      { area: 'Nutritive Value', percentage: 90 },
      { area: 'Skin Health', percentage: 80 },
      { area: 'Lymphatic Support', percentage: 75 },
      { area: 'Blood Purification', percentage: 70 }
    ],
    resources: [
      {
        title: 'Isoflavones from Red Clover (Trifolium pratense) for Menopausal Symptoms',
        author: 'Journal of Women\'s Health',
        type: 'Research Review',
        link: 'https://example.com/red-clover-menopause'
      },
      {
        title: 'Nutritional Profile of Red Clover (Trifolium pratense)',
        author: 'Journal of Agricultural and Food Chemistry',
        type: 'Research Paper',
        link: 'https://example.com/red-clover-nutrition'
      },
      {
        title: 'Traditional Uses of Red Clover in European Herbalism',
        author: 'Journal of Ethnopharmacology',
        type: 'Historical Review',
        link: 'https://example.com/red-clover-traditional'
      }
    ]
  },
  {
    id: 43,
    name: 'Solomon\'s Seal',
    scientificName: 'Polygonatum biflorum',
    slug: 'solomons-seal',
    description: 'Solomon\'s Seal is a remarkable herb for musculoskeletal health, known for its ability to restore proper tension to tendons, ligaments, and attachments. It has a long history of use for injuries, joint health, and connective tissue repair.',
    imageUrl: '/images/herbs/solomons-seal.jpg',
    rating: 4.5,
    categories: ['Musculoskeletal', 'Joint Health', 'Injury Recovery', 'Anti-inflammatory'],
    benefits: [
      'Supports healthy joints and connective tissue',
      'Helps restore proper tension to tendons and ligaments',
      'Has anti-inflammatory properties',
      'Supports recovery from injuries',
      'Moistens dry tissues',
      'Helps relieve pain from repetitive stress injuries'
    ],
    uses: [
      'For joint pain and inflammation',
      'Supporting recovery from sprains and strains',
      'For repetitive stress injuries',
      'Supporting overall joint health',
      'For dry, irritated lungs and digestive tract',
      'As part of rehabilitation protocols'
    ],
    funFact: 'The name "Solomon\'s Seal" comes from the scar left on the rhizome when the stem breaks off, which resembles the ancient Hebrew seal of King Solomon. In folklore, it was believed that Solomon himself had placed his seal upon the plant, giving it healing powers!',
    dosage: {
      powder: '1/2-1 teaspoon daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-3ml, 3 times daily',
      tea: '1 teaspoon dried root per cup, simmer for 15-20 minutes'
    },
    warnings: [
      'May lower blood sugar levels',
      'May have mild laxative effects at high doses',
      'Not well studied during pregnancy and breastfeeding',
      'May interact with medications for diabetes',
      'Should be discontinued 2 weeks before surgery'
    ],
    history: 'Solomon\'s Seal has been used medicinally for thousands of years across multiple cultures. In traditional Chinese medicine, a related species (Polygonatum sibiricum) has been used for over 2,000 years as a lung and kidney tonic. In European herbalism, it was mentioned by Dioscorides in the 1st century and later by medieval herbalists for treating inflammations, bruises, and broken bones. Native American tribes including the Cherokee, Iroquois, and Mohegan used it for joint pain, lung conditions, and as a blood purifier. In the 19th century, it was listed in the U.S. Pharmacopeia for treating inflammations and wounds.',
    culturalBackground: 'In European folk medicine, Solomon\'s Seal was considered a magical herb associated with King Solomon\'s wisdom and healing powers. The root was sometimes carried as an amulet for protection. In traditional Chinese medicine, it is classified as a Yin tonic that nourishes the Kidney and Lung meridians. In Native American traditions, it was often used in combination with other herbs for joint pain and to speed healing of injuries. The Cherokee used it in formulas for lung conditions and as a blood purifier. Today, it is experiencing renewed interest in Western herbalism for musculoskeletal health.',
    preparation: 'The root (rhizome) of Solomon\'s Seal is the part used medicinally. It is typically harvested in the fall after the plant has died back and the energy has returned to the root. It can be prepared as a decoction (simmered in water), tincture, or taken in capsules. For external use, it can be made into salves, liniments, or poultices. The root contains mucilage, which is best extracted in water, making tea a traditional preparation for lung and digestive conditions.',
    preparations: [
      {
        name: 'Solomon\'s Seal Joint Support Decoction',
        ingredients: [
          '1 tablespoon dried Solomon\'s Seal root, chopped',
          '1 teaspoon dried turmeric root',
          '1 teaspoon dried ginger root',
          '2 cups water',
          'Honey to taste',
          'Splash of milk or milk alternative (optional)'
        ],
        instructions: 'Combine herbs and water in a small pot. Bring to a boil, then reduce heat and simmer for 20-30 minutes until reduced by about one-third. Strain and add honey and milk if desired. Drink 1 cup, 1-2 times daily for joint support and to help recover from injuries. This decoction combines the connective tissue support of Solomon\'s Seal with the anti-inflammatory properties of turmeric and ginger.'
      },
      {
        name: 'Solomon\'s Seal Liniment for Injuries',
        ingredients: [
          '1/2 cup dried Solomon\'s Seal root, chopped',
          '1/4 cup dried arnica flowers',
          '1/4 cup dried comfrey root',
          '2 tablespoons dried ginger root',
          '2 cups high-proof alcohol (vodka or rubbing alcohol)',
          'Glass jar with tight-fitting lid',
          '10 drops each of essential oils: wintergreen, peppermint, and eucalyptus (optional)'
        ],
        instructions: 'Place all dried herbs in a clean glass jar. Cover with alcohol, making sure all herbs are submerged. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and add essential oils if using. Store in dark glass bottles with spray tops or flip caps. Apply externally to sprains, strains, bruises, and areas of joint pain. Do not use on open wounds. This powerful liniment helps reduce inflammation and supports tissue repair.'
      },
      {
        name: 'Solomon\'s Seal and Marshmallow Lung Support Tea',
        ingredients: [
          '1 teaspoon dried Solomon\'s Seal root',
          '1 teaspoon dried marshmallow root',
          '1/2 teaspoon dried licorice root',
          '1/2 teaspoon dried thyme',
          '2 cups water',
          'Honey to taste'
        ],
        instructions: 'Combine all herbs in a small pot. Add water and bring to a boil. Reduce heat and simmer for 15-20 minutes. Strain and add honey if desired. Drink 1 cup, 2-3 times daily for dry, irritated lungs or coughs. This tea combines the moistening properties of Solomon\'s Seal and marshmallow with the soothing effects of licorice and the antimicrobial properties of thyme.'
      }
    ],
    herbPairings: [
      {
        herb: 'Turmeric',
        benefit: 'Enhanced anti-inflammatory action for joint pain'
      },
      {
        herb: 'Marshmallow Root',
        benefit: 'Complementary moistening properties for dry tissues'
      },
      {
        herb: 'Comfrey',
        benefit: 'Added tissue repair support for injuries (external use only)'
      },
      {
        herb: 'Ginger',
        benefit: 'Increased circulation to affected areas and pain relief'
      }
    ],
    benefitsVisualization: [
      { area: 'Joint Support', percentage: 90 },
      { area: 'Tissue Repair', percentage: 85 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Moistening Effect', percentage: 75 },
      { area: 'Pain Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Polygonatum Species: A Comprehensive Review',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Review',
        link: 'https://example.com/polygonatum-review'
      },
      {
        title: 'Traditional Uses of Solomon\'s Seal in Native American Medicine',
        author: 'American Journal of Ethnobotany',
        type: 'Historical Review',
        link: 'https://example.com/solomons-seal-native'
      },
      {
        title: 'Anti-inflammatory Effects of Polygonatum Species',
        author: 'Phytotherapy Research',
        type: 'Research Paper',
        link: 'https://example.com/polygonatum-inflammation'
      }
    ]
  },
  {
    id: 44,
    name: 'Mugwort',
    scientificName: 'Artemisia vulgaris',
    slug: 'mugwort',
    description: 'Mugwort is a powerful herb with a rich history of use for women\'s health, digestive support, and dream enhancement. It has been revered across many cultures for its medicinal and spiritual properties, particularly for its ability to stimulate dreams and intuition.',
    imageUrl: '/images/herbs/mugwort.jpg',
    rating: 4.3,
    categories: ['Women\'s Health', 'Digestive', 'Dream Enhancement', 'Nervous System'],
    benefits: [
      'Supports healthy menstruation and relieves cramps',
      'Aids digestion and stimulates appetite',
      'Enhances dreams and supports lucid dreaming',
      'Has mild sedative properties',
      'Supports healthy liver function',
      'Has antimicrobial properties'
    ],
    uses: [
      'For menstrual irregularities and cramps',
      'Supporting digestive health',
      'Enhancing dreams and supporting dream recall',
      'In dream pillows and sleep blends',
      'For mild anxiety and nervous tension',
      'In spiritual and cleansing rituals'
    ],
    funFact: 'Mugwort gets its name from its historical use to flavor beer before hops became popular. The "mug" in mugwort refers to its use in beer mugs! It was also traditionally placed in shoes to prevent fatigue during long journeys, leading to the saying "travel as far as mugwort will take you."',
    dosage: {
      powder: '1/2-1 teaspoon daily',
      capsule: '300-600mg, 1-3 times daily',
      tincture: '1-2ml, 1-3 times daily',
      tea: '1 teaspoon dried herb per cup, steep for 5-10 minutes'
    },
    warnings: [
      'Not recommended during pregnancy (may stimulate uterine contractions)',
      'May cause allergic reactions in people sensitive to plants in the Asteraceae family',
      'May interact with medications for diabetes and seizures',
      'May increase sensitivity to sunlight',
      'Should be used in moderation as excessive use may cause nervous system issues'
    ],
    history: 'Mugwort has been used medicinally for thousands of years across multiple cultures. In ancient China, it was mentioned in the oldest Chinese herbal text, the Shennong Ben Cao Jing (circa 200 BCE), and was used in moxibustion therapy. In ancient Greece and Rome, it was associated with the goddess Artemis/Diana and used for women\'s health and to ward off evil spirits. In medieval Europe, it was considered one of the nine sacred herbs of Anglo-Saxon tradition and was used to protect travelers. Native American tribes used local Artemisia species for similar purposes. In traditional Japanese and Korean medicine, it is still used in moxibustion therapy today.',
    culturalBackground: 'In European folk traditions, mugwort was considered a magical herb of protection and was hung over doorways to keep evil spirits away. It was placed under pillows on St. John\'s Eve to induce prophetic dreams. In Chinese medicine, it is used in moxibustion, a therapy where the dried herb is burned near acupuncture points to stimulate energy flow. In Native American traditions, various Artemisia species were used in purification ceremonies and as smudging herbs. In modern witchcraft and pagan traditions, it is used for divination, protection, and to enhance psychic abilities. In Japanese culture, it is used to make mochi (rice cakes) called "yomogi mochi."',
    preparation: 'The leaves and flowering tops of mugwort are the parts used medicinally. They can be harvested just before or during flowering for the highest potency. Mugwort can be prepared as a tea, tincture, or taken in capsules. For dream enhancement, it is often used in dream pillows or smoked in herbal smoking blends. For moxibustion, the dried herb is rolled into sticks or cones and burned near (not on) the skin. The fresh leaves can also be used in cooking, particularly with fatty meats, as it aids digestion.',
    preparations: [
      {
        name: 'Mugwort Dream Enhancement Tea',
        ingredients: [
          '1 teaspoon dried mugwort',
          '1/2 teaspoon dried chamomile flowers',
          '1/2 teaspoon dried lavender',
          '1/4 teaspoon dried mint (optional)',
          '1 cup hot water',
          'Honey to taste'
        ],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey if desired. Drink 1 cup before bed to enhance dreams and dream recall. This tea is best used 3-4 times per week rather than daily. The combination of herbs promotes relaxation while the mugwort specifically supports vivid dreams and dream memory.'
      },
      {
        name: 'Mugwort Dream Pillow',
        ingredients: [
          '1/2 cup dried mugwort',
          '1/4 cup dried lavender',
          '1/4 cup dried rose petals',
          '2 tablespoons dried mint',
          '1 tablespoon dried hops',
          'Small cotton or muslin bag',
          'Needle and thread'
        ],
        instructions: 'Mix all dried herbs together in a bowl. Fill the cotton bag with the herb mixture and sew it closed. Place this dream pillow inside your pillowcase or near your bed. The aroma of the herbs will promote vivid dreams and enhance dream recall. The pillow can be gently squeezed before bedtime to release more of the aromatic compounds. Replace the herbs every 3-6 months as the scent fades.'
      },
      {
        name: 'Mugwort Digestive Bitters',
        ingredients: [
          '2 tablespoons dried mugwort',
          '1 tablespoon dried dandelion root',
          '1 tablespoon dried orange peel',
          '1 teaspoon dried ginger root',
          '1/2 teaspoon cardamom pods, crushed',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place all herbs in a clean glass jar. Cover with alcohol, making sure all herbs are submerged. Seal tightly and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 1/4-1/2 teaspoon (about 1-2ml) before meals to stimulate digestion and support liver function. These bitters combine the digestive properties of mugwort with complementary herbs to create a well-rounded digestive aid.'
      }
    ],
    herbPairings: [
      {
        herb: 'Chamomile',
        benefit: 'Added relaxation for sleep and dream enhancement'
      },
      {
        herb: 'Dandelion Root',
        benefit: 'Enhanced liver support and digestive function'
      },
      {
        herb: 'Ginger',
        benefit: 'Complementary digestive support and increased circulation'
      },
      {
        herb: 'Motherwort',
        benefit: 'Enhanced support for menstrual health and uterine function'
      }
    ],
    benefitsVisualization: [
      { area: 'Dream Enhancement', percentage: 90 },
      { area: 'Menstrual Support', percentage: 85 },
      { area: 'Digestive Aid', percentage: 80 },
      { area: 'Nervous System', percentage: 75 },
      { area: 'Liver Support', percentage: 70 }
    ],
    resources: [
      {
        title: 'Artemisia vulgaris: A Comprehensive Review',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Review',
        link: 'https://example.com/mugwort-review'
      },
      {
        title: 'The Effect of Mugwort on Dream Activity and Recall',
        author: 'Journal of Sleep Research',
        type: 'Research Paper',
        link: 'https://example.com/mugwort-dreams'
      },
      {
        title: 'Traditional Uses of Mugwort in European Folk Medicine',
        author: 'Herbal History Review',
        type: 'Historical Review',
        link: 'https://example.com/mugwort-traditional'
      }
    ]
  }
];

export default nutritiveHerbs;

import { HerbData } from '../types/herbs';

const traditionalMedicinalHerbs: HerbData[] = [
  {
    id: 104,
    name: 'Valerian',
    scientificName: 'Valeriana officinalis',
    slug: 'valerian',
    description: 'Valerian is a powerful nervine herb with sedative properties that has been used for centuries to promote relaxation, improve sleep quality, and calm nervous tension without the side effects of pharmaceutical sleep aids.',
    imageUrl: '/images/herbs/valerian.jpg',
    rating: 4.7,
    categories: ['Sleep Support', 'Anxiety Relief', 'Nervous System', 'Relaxation', 'Stress Management'],
    benefits: [
      'Promotes deep, restful sleep',
      'Reduces anxiety and nervous tension',
      'Helps ease muscle spasms and menstrual cramps',
      'Supports healthy stress response',
      'May help reduce symptoms of restless leg syndrome',
      'Supports overall nervous system health'
    ],
    uses: [
      'Supporting healthy sleep patterns',
      'Calming anxiety and nervousness',
      'Easing tension headaches',
      'Supporting during times of stress',
      'Addressing mild insomnia',
      'As part of relaxation formulas'
    ],
    funFact: 'Despite its powerful sleep-promoting effects, valerian\'s name comes from the Latin word "valere" meaning "to be strong" or "to be healthy." Ironically, while valerian helps humans sleep, cats have the opposite reaction—they become excited and playful when exposed to valerian, similar to their response to catnip!',
    dosage: {
      powder: '1-2 teaspoons (2-3g) of dried root daily',
      capsule: '300-600mg, 1-2 hours before bedtime',
      tincture: '1-2ml, 2-3 times daily or 3-5ml before bedtime',
      tea: '1-2 teaspoons dried root steeped in hot water for 10-15 minutes, drink 30-60 minutes before bedtime'
    },
    warnings: [
      'May cause morning drowsiness if taken in large doses',
      'Not recommended for use with alcohol or other sedatives',
      'May interact with certain medications including benzodiazepines',
      'Should not be used before driving or operating machinery',
      'Not recommended during pregnancy or breastfeeding',
      'Should be discontinued 2 weeks before surgery due to potential anesthesia interactions'
    ],
    history: 'Valerian has been used medicinally for at least 2,000 years. It was described by Hippocrates in ancient Greece and later by Galen and Dioscorides for its sedative properties. During the Middle Ages, it was used to treat epilepsy and nervous disorders. In the 16th century, it gained popularity for treating nervousness, trembling, headaches, and heart palpitations. During World War I, valerian was used to treat shell shock in soldiers, and during World War II, it was used in England to relieve stress from air raids. It became an official drug in the U.S. Pharmacopeia from 1820 to 1942 and remains one of the most researched herbs for sleep and anxiety.',
    culturalBackground: 'In European folk medicine, valerian was considered a protective herb and was hung in homes to ward off lightning and evil. In medieval Sweden, it was sometimes placed in the wedding clothes of the groom to ward off the "envy" of elves. In traditional Persian medicine, it was used for epilepsy and as a blood purifier. In traditional Chinese medicine, it was used to calm the liver and relieve constraint. The 11th-century Persian physician Avicenna recommended valerian for insomnia. In 19th century America, the Eclectic physicians used it for "nervous excitability" and insomnia, particularly in children, the elderly, and those with nervous constitutions.',
    preparation: 'The root and rhizome are the medicinal parts of valerian, typically harvested in the fall from plants that are at least 2 years old. While valerian can be prepared as a tea, the taste is quite unpleasant—earthy, bitter, and somewhat musty—leading many to prefer tinctures or capsules. For teas, adding licorice root, honey, or lemon can help mask the flavor. Valerian is often combined with other calming herbs like passionflower, hops, or lemon balm for enhanced effects. For sleep support, it is typically taken 30-60 minutes before bedtime.',
    preparations: [
      {
        name: 'Valerian Sleep Support Tincture',
        ingredients: [
          '1 cup dried valerian root, chopped',
          '1/4 cup dried passionflower herb (optional)',
          '1/4 cup dried hops flowers (optional)',
          '2 tablespoons dried lemon balm (optional)',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '1 cup filtered water',
          'Glass jar with tight-fitting lid',
          'Dark glass bottles with dropper tops for storage'
        ],
        instructions: 'Combine all herbs in a clean glass jar. Mix the alcohol and water, then pour over the herbs, ensuring they are completely covered with at least 1-2 inches of liquid above the plant material. Seal the jar tightly and shake well. Store in a cool, dark place for 4-6 weeks, shaking the jar every few days. After the extraction period, strain the mixture through cheesecloth, squeezing to extract all liquid. Transfer the tincture to dark glass bottles with droppers, label with the date and contents, and store in a cool, dark place. Take 30-60 drops (approximately 1.5-3ml) in a small amount of water 30-60 minutes before bedtime. This tincture supports deep, restful sleep and helps calm an overactive mind.'
      },
      {
        name: 'Valerian Dream Tea Blend',
        ingredients: [
          '2 tablespoons dried valerian root',
          '2 tablespoons dried chamomile flowers',
          '1 tablespoon dried lemon balm',
          '1 tablespoon dried lavender flowers',
          '1 teaspoon dried mint leaves (to improve flavor)',
          '1/2 teaspoon dried stevia leaf or honey to taste (optional)',
          'Lemon slice (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of hot water. Bring water to a boil, then remove from heat. Add the herb blend and steep, covered, for 10-15 minutes to extract the medicinal properties. Strain well and add honey or stevia and lemon if desired for flavor. Drink 1 cup 30-60 minutes before bedtime to promote relaxation and restful sleep. This blend combines the sedative properties of valerian with the gentle calming effects of chamomile, lemon balm, and lavender for comprehensive sleep support.'
      }
    ],
    herbPairings: [
      {
        herb: 'Passionflower',
        benefit: 'Enhances sedative effects and adds mental relaxation'
      },
      {
        herb: 'Hops',
        benefit: 'Complements sleep-promoting effects and adds bitter digestive support'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Adds nervous system support and improves flavor'
      },
      {
        herb: 'Skullcap',
        benefit: 'Enhances nervous system support and adds anti-spasmodic effects'
      }
    ],
    benefitsVisualization: [
      { area: 'Sleep Quality', percentage: 90 },
      { area: 'Anxiety Relief', percentage: 85 },
      { area: 'Muscle Relaxation', percentage: 75 },
      { area: 'Stress Reduction', percentage: 80 },
      { area: 'Nervous System Support', percentage: 85 }
    ],
    resources: [
      {
        title: 'Valerian: The Relaxing and Sleep Herb',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/valerian-book'
      },
      {
        title: 'Effects of Valerian on Sleep Quality in Insomnia Sufferers',
        author: 'Sleep Medicine Reviews',
        type: 'Research Paper',
        link: 'https://example.com/valerian-research'
      },
      {
        title: 'Valerian Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/valerian-monograph'
      }
    ]
  },
  {
    id: 105,
    name: 'Marshmallow Root',
    scientificName: 'Althaea officinalis',
    slug: 'marshmallow-root',
    description: 'Marshmallow root is a soothing demulcent herb rich in mucilage that has been used for centuries to calm irritated tissues, support digestive health, and address respiratory conditions with its gentle, cooling properties.',
    imageUrl: '/images/herbs/marshmallow-root.jpg',
    rating: 4.6,
    categories: ['Digestive Support', 'Respiratory Health', 'Urinary Tract', 'Skin Health', 'Soothing'],
    benefits: [
      'Soothes irritated mucous membranes',
      'Supports respiratory health',
      'Calms digestive inflammation',
      'Supports urinary tract health',
      'Provides gentle detoxification support',
      'Moisturizes and soothes dry skin when used topically'
    ],
    uses: [
      'Soothing dry, irritated coughs',
      'Addressing digestive inflammation and ulcers',
      'Supporting urinary tract infections and irritation',
      'As a gentle laxative for constipation',
      'In topical preparations for skin irritation',
      'As a base for throat lozenges and syrups'
    ],
    funFact: 'The modern confectionery marshmallow was originally made from the root of the marshmallow plant! Ancient Egyptians combined marshmallow root with honey to make a confection reserved for gods and royalty. The modern marshmallow no longer contains the plant but was inspired by this ancient treat.',
    dosage: {
      powder: '1-2 teaspoons (3-5g) daily mixed with water or applesauce',
      capsule: '400-800mg, 3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '1-2 teaspoons dried root cold-infused in 1 cup water for 4-8 hours, drink 3 cups daily'
    },
    warnings: [
      'May slow the absorption of other medications if taken simultaneously',
      'Take at least 2 hours apart from other medications',
      'May cause low blood sugar in sensitive individuals',
      'Rarely may cause allergic reactions in people sensitive to plants in the Malvaceae family',
      'Generally considered very safe with few side effects'
    ],
    history: 'Marshmallow has been used medicinally for over 2,000 years. Ancient Egyptian, Greek, and Roman physicians, including Hippocrates, used it to treat wounds, insect bites, and digestive issues. Its genus name, Althaea, comes from the Greek word "altho," meaning "to heal." In ancient Egypt, marshmallow was so highly valued that it was offered to the gods. In the 9th century, Arab physicians used it for inflammation and as a poultice. During the Middle Ages, it was cultivated in monastery gardens throughout Europe as a food and medicine. In the 19th century, it was listed in the U.S. Pharmacopeia and was widely used by Eclectic physicians for inflammation of the respiratory, digestive, and urinary systems.',
    culturalBackground: 'In European folk medicine, marshmallow was considered one of the most important healing plants, often called "mortification root" for its ability to prevent gangrene in wounds. In Celtic traditions, it was associated with the moon and feminine energy, used in protection rituals and to attract love and fertility. In traditional Arabic medicine, it was used for inflammation and as a cooling remedy. In traditional Chinese medicine, it was classified as a cooling, moistening herb for dry conditions. In 19th century America, Native American tribes adopted it after European introduction, using it for coughs, digestive issues, and as a food during times of scarcity.',
    preparation: 'The root is the primary medicinal part of marshmallow, though the leaves and flowers are also used. Due to its high mucilage content, marshmallow root is often prepared as a cold infusion rather than a hot tea, as cold water better extracts the mucilage without damaging it. For a cold infusion, the dried root is soaked in room temperature water for 4-8 hours. It can also be prepared as a decoction, tincture, or syrup. When used for digestive or urinary issues, it is typically taken between meals, but for respiratory conditions, it can be taken as needed.',
    preparations: [
      {
        name: 'Marshmallow Root Cold Infusion',
        ingredients: [
          '1/4 cup dried marshmallow root',
          '4 cups cold filtered water',
          '1 tablespoon honey or maple syrup (optional)',
          'Juice of half a lemon (optional)',
          'Glass jar with lid'
        ],
        instructions: 'Place the dried marshmallow root in a glass jar. Pour the cold water over the herb, seal the jar, and shake gently. Allow to infuse in the refrigerator for 4-8 hours or overnight. The liquid will become slightly thick and slippery due to the extracted mucilage. Strain the infusion through a fine mesh strainer or cheesecloth. Add honey or maple syrup and lemon juice if desired for flavor. This cold infusion can be stored in the refrigerator for up to 3 days. Drink 1/2 to 1 cup, 3-4 times daily to soothe irritated mucous membranes in the digestive tract, urinary system, or respiratory system. This gentle preparation is particularly effective for dry coughs, sore throats, heartburn, and urinary irritation.'
      },
      {
        name: 'Marshmallow Root Digestive Syrup',
        ingredients: [
          '1 cup dried marshmallow root',
          '1/4 cup dried licorice root (optional)',
          '1/4 cup dried slippery elm bark (optional)',
          '4 cups filtered water',
          '2 cups raw honey or maple syrup',
          '1 tablespoon lemon juice or apple cider vinegar (as a preservative)',
          '1 teaspoon cinnamon powder (optional, for flavor)',
          'Large pot',
          'Fine mesh strainer or cheesecloth',
          'Glass bottles for storage'
        ],
        instructions: 'In a large pot, combine the marshmallow root and optional herbs with the water. Bring to a gentle boil, then reduce heat and simmer, covered, for about 30-40 minutes, until the liquid is reduced by half. Strain the decoction through a fine mesh strainer or cheesecloth, pressing to extract all liquid. Return the liquid to a clean pot and add the honey or maple syrup. Heat gently, stirring constantly, until the sweetener is fully dissolved (do not boil). Remove from heat and add the lemon juice or apple cider vinegar and optional cinnamon. Pour the syrup into sterilized glass bottles and label with the date and contents. Store in the refrigerator, where it will keep for 3-6 months. Take 1-2 teaspoons, 3 times daily between meals to soothe digestive inflammation, heartburn, gastritis, or irritable bowel symptoms. This syrup combines the soothing properties of marshmallow with the anti-inflammatory effects of licorice and the additional mucilage from slippery elm.'
      }
    ],
    herbPairings: [
      {
        herb: 'Slippery Elm',
        benefit: 'Enhances demulcent effects and adds nutritive properties'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Complements soothing effects and adds anti-inflammatory properties'
      },
      {
        herb: 'Plantain Leaf',
        benefit: 'Adds wound-healing properties and enhances respiratory support'
      },
      {
        herb: 'Calendula',
        benefit: 'Adds antimicrobial properties and enhances skin healing'
      }
    ],
    benefitsVisualization: [
      { area: 'Mucous Membrane Support', percentage: 95 },
      { area: 'Digestive Soothing', percentage: 90 },
      { area: 'Respiratory Support', percentage: 85 },
      { area: 'Urinary Tract Health', percentage: 80 },
      { area: 'Skin Soothing', percentage: 75 }
    ],
    resources: [
      {
        title: 'Marshmallow: A Healing Mucilage',
        author: 'Matthew Wood',
        type: 'Book',
        link: 'https://example.com/marshmallow-book'
      },
      {
        title: 'Demulcent Effects of Althaea officinalis on Mucosal Tissues',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/marshmallow-research'
      },
      {
        title: 'Marshmallow Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/marshmallow-monograph'
      }
    ]
  },
  {
    id: 106,
    name: 'Hawthorn',
    scientificName: 'Crataegus species',
    slug: 'hawthorn',
    description: 'Hawthorn is a premier cardiovascular tonic that has been used for centuries to support heart health, regulate blood pressure, and strengthen the entire cardiovascular system with its gentle yet profound effects.',
    imageUrl: '/images/herbs/hawthorn.jpg',
    rating: 4.9,
    categories: ['Heart Health', 'Cardiovascular', 'Circulatory Support', 'Antioxidant', 'Longevity'],
    benefits: [
      'Strengthens heart muscle function',
      'Helps regulate blood pressure',
      'Improves circulation',
      'Provides antioxidant protection for the cardiovascular system',
      'Supports healthy cholesterol levels',
      'Reduces symptoms of mild heart failure'
    ],
    uses: [
      'Supporting overall cardiovascular health',
      'Addressing mild to moderate heart failure',
      'Supporting recovery after heart attack',
      'Managing mild hypertension',
      'Supporting healthy aging of the cardiovascular system',
      'As part of heart-healthy lifestyle protocols'
    ],
    funFact: 'Hawthorn is known as "the heart herb" not only for its cardiovascular benefits but also because its berries are heart-shaped. In Celtic tradition, hawthorn was believed to house fairies and was considered a portal to the otherworld. Cutting down a hawthorn tree was thought to bring terrible misfortune, which may have helped preserve these important medicinal trees throughout history!',
    dosage: {
      powder: '1-2 teaspoons (3-5g) of dried berries daily',
      capsule: '300-600mg standardized extract (1.8-2.2% vitexin-4\'-rhamnoside), 2-3 times daily',
      tincture: '2-4ml of berry, leaf, and flower tincture, 3 times daily',
      tea: '1-2 teaspoons dried berries, leaves, or flowers per cup, steeped for 15 minutes, 3 cups daily'
    },
    warnings: [
      'May enhance the effects of cardiac medications, requiring professional monitoring',
      'May potentiate the effects of blood pressure medications',
      'Not recommended during pregnancy without professional supervision',
      'May cause mild digestive upset in sensitive individuals',
      'Effects develop gradually over weeks to months of consistent use',
      'Should not replace prescribed medications without medical supervision'
    ],
    history: 'Hawthorn has been used medicinally for thousands of years across multiple cultures. The ancient Greeks and Romans used it for heart conditions and as a symbol of hope. In Traditional Chinese Medicine, it has been used for over 2,000 years for digestion and cardiovascular support. In European tradition, it was primarily used for digestive issues until the late 19th century, when Irish physician Dr. Green began using it specifically for heart conditions. In 1896, hawthorn was included in the first American medical publication on heart disease. By the early 20th century, it was widely used in European and American medical practice for various heart conditions. Today, it is one of the best-researched herbal remedies for cardiovascular health, with numerous clinical trials supporting its traditional uses.',
    culturalBackground: 'In Celtic culture, hawthorn was sacred to the goddess of love and fertility and was used in wedding ceremonies. In Christian tradition, it was believed that the crown of thorns worn by Jesus was made from hawthorn, giving it sacred associations. In European folk medicine, it was planted near houses for protection and was associated with the heart both physically and emotionally. In medieval Europe, it was considered a symbol of hope and was used in May Day celebrations. In traditional German medicine, it was classified as a "heart tonic." In modern Western herbalism, it is considered one of the safest and most effective herbs for long-term cardiovascular support.',
    preparation: 'The berries, leaves, and flowers of hawthorn are all used medicinally, with slightly different properties. The berries are traditionally harvested in the fall when fully ripe, while the flowers and leaves are collected in spring. All parts can be prepared as teas, tinctures, or in capsules. For cardiovascular support, hawthorn is typically taken consistently over months or years, as its effects build gradually. It is often combined with other heart-supporting herbs like motherwort, linden, or garlic. For optimal effectiveness, it is best used as part of a comprehensive heart health program that includes appropriate diet, exercise, and stress management.',
    preparations: [
      {
        name: 'Hawthorn Heart Tonic Syrup',
        ingredients: [
          '2 cups fresh or 1 cup dried hawthorn berries',
          '1/2 cup dried hawthorn leaves and flowers (optional)',
          '1/4 cup dried rose hips (optional, for added vitamin C)',
          '1/4 cup dried hibiscus flowers (optional, for flavor and circulatory support)',
          '4 cups filtered water',
          '2 cups raw honey or maple syrup',
          '1 tablespoon lemon juice or brandy (as a preservative)',
          '1 teaspoon cinnamon powder (optional, for flavor)',
          'Large pot',
          'Fine mesh strainer or cheesecloth',
          'Glass bottles for storage'
        ],
        instructions: 'In a large pot, combine the hawthorn berries, leaves, flowers, and optional herbs with the water. Bring to a gentle boil, then reduce heat and simmer, covered, for about 45-60 minutes, until the berries are soft and the liquid is reduced by half. Mash the berries with a potato masher or the back of a wooden spoon to release more of their medicinal properties. Continue to simmer for another 15 minutes. Strain the decoction through a fine mesh strainer or cheesecloth, pressing to extract all liquid. Return the liquid to a clean pot and add the honey or maple syrup. Heat gently, stirring constantly, until the sweetener is fully dissolved (do not boil). Remove from heat and add the lemon juice or brandy and optional cinnamon. Pour the syrup into sterilized glass bottles and label with the date and contents. Store in the refrigerator, where it will keep for 3-6 months. Take 1-2 teaspoons, 2-3 times daily to support cardiovascular health. This syrup combines the cardiotonic properties of hawthorn with the additional vitamin C from rose hips and the circulatory support of hibiscus.'
      },
      {
        name: 'Hawthorn Circulation Support Tea Blend',
        ingredients: [
          '2 tablespoons dried hawthorn berries, crushed',
          '2 tablespoons dried hawthorn leaves and flowers',
          '1 tablespoon dried hibiscus flowers',
          '1 tablespoon dried linden flowers',
          '1 teaspoon dried ginger root',
          '1/2 teaspoon cinnamon chips',
          'Honey or lemon to taste (optional)'
        ],
        instructions: 'Combine all dried herbs in a bowl and mix well. Store in an airtight container away from light and heat. To prepare tea, use 1-2 teaspoons of the blend per cup of water. For a more medicinal preparation, simmer the crushed hawthorn berries in water for 15 minutes first, then remove from heat and add the remaining herbs to steep for an additional 10 minutes. Strain well and add honey or lemon if desired. Drink 2-3 cups daily to support cardiovascular health, circulation, and healthy blood pressure. This blend combines the heart-strengthening properties of hawthorn with the circulatory support of hibiscus, the calming effects of linden, and the warming circulation-enhancing properties of ginger and cinnamon.'
      }
    ],
    herbPairings: [
      {
        herb: 'Motherwort',
        benefit: 'Enhances cardiac effects and adds calming properties for heart palpitations'
      },
      {
        herb: 'Linden',
        benefit: 'Complements cardiovascular support and adds relaxing properties'
      },
      {
        herb: 'Garlic',
        benefit: 'Adds cholesterol-lowering and blood-thinning properties'
      },
      {
        herb: 'Ginger',
        benefit: 'Enhances circulation and adds warming properties'
      }
    ],
    benefitsVisualization: [
      { area: 'Heart Function', percentage: 95 },
      { area: 'Blood Pressure Regulation', percentage: 85 },
      { area: 'Circulation', percentage: 80 },
      { area: 'Antioxidant Protection', percentage: 90 },
      { area: 'Cholesterol Management', percentage: 75 }
    ],
    resources: [
      {
        title: 'Hawthorn: The Heart Healer',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/hawthorn-book'
      },
      {
        title: 'Efficacy and safety of Crataegus extract WS 1442 in heart failure',
        author: 'European Journal of Heart Failure',
        type: 'Research Paper',
        link: 'https://example.com/hawthorn-research'
      },
      {
        title: 'Hawthorn Monograph',
        author: 'American Botanical Council',
        type: 'Monograph',
        link: 'https://example.com/hawthorn-monograph'
      }
    ]
  }
];

export default traditionalMedicinalHerbs;

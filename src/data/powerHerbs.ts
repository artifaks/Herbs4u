import { HerbData } from '../types/herbs';

const powerHerbs: HerbData[] = [
  {
    id: 18,
    name: 'Astragalus',
    scientificName: 'Astragalus membranaceus',
    slug: 'astragalus',
    description: 'Astragalus is a powerful immune-strengthening adaptogen that has been used in Traditional Chinese Medicine for thousands of years. It helps build deep immune resilience and supports overall vitality and longevity.',
    imageUrl: '/images/herbs/astragalus.jpg',
    rating: 4.7,
    categories: ['Immune Support', 'Adaptogen', 'Energy', 'Longevity'],
    benefits: [
      'Strengthens the immune system',
      'Increases resistance to stress',
      'Supports cardiovascular health',
      'May help protect against cellular damage',
      'Traditionally used for fatigue and weakness',
      'May support healthy aging'
    ],
    uses: [
      'Building immune resilience',
      'Supporting energy and vitality',
      'Recovering from illness or stress',
      'As a preventative tonic',
      'Supporting cardiovascular health',
      'As a longevity herb in traditional medicine'
    ],
    funFact: 'In Traditional Chinese Medicine, astragalus is known as "Huang Qi" or "yellow leader," reflecting its status as one of the most important herbs for strengthening the body\'s vital energy or "Qi"!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 3 times daily',
      tea: '3-5 slices of root per cup, simmer for 20-30 minutes'
    },
    warnings: [
      'May interact with immune-suppressing medications',
      'Not recommended during acute infections or fever',
      'May increase the effects of blood-thinning medications',
      'Should be used with caution by people with autoimmune conditions'
    ],
    history: 'Astragalus has been used in Traditional Chinese Medicine for over 2,000 years. It was first documented in the Shennong Ben Cao Jing, one of the oldest Chinese materia medica texts, dating from around 200 BCE. It was traditionally used to strengthen the body\'s defensive energy, support lung function, and promote overall vitality. It was often combined with other herbs in formulas designed to build strength and resilience.',
    culturalBackground: 'In Chinese medicine, astragalus is considered one of the most important "tonic" herbs, used to strengthen the body\'s vital energy or "Qi." It is classified as a "superior" herb, meaning it can be taken long-term without side effects. It is often included in soups and broths in Chinese cuisine, especially for those recovering from illness or for the elderly to maintain health. In modern times, it has become popular worldwide as an immune-supporting supplement.',
    preparation: 'Astragalus root is typically sliced and dried for medicinal use. It can be prepared as a decoction (simmered in water), added to soups and broths, or taken as a tincture or in capsules. In Traditional Chinese Medicine, it is often combined with other herbs in formulas. The root slices are woody and light yellow in color with a slightly sweet taste.',
    preparations: [
      {
        name: 'Immune-Building Broth',
        ingredients: [
          '10-15 slices of astragalus root',
          '5-6 shiitake mushrooms',
          '1 inch piece of fresh ginger, sliced',
          '2 cloves garlic, crushed',
          '8 cups water or vegetable broth',
          'Salt and pepper to taste',
          'Vegetables of choice (optional)'
        ],
        instructions: 'Place astragalus, mushrooms, ginger, and garlic in a large pot. Add water or broth and bring to a boil. Reduce heat and simmer for 1-2 hours. Strain out the herbs or remove the astragalus slices before serving. Add vegetables in the last 20-30 minutes of cooking if desired. Drink 1-2 cups daily during cold and flu season or when recovering from illness.'
      },
      {
        name: 'Astragalus Honey',
        ingredients: [
          '1/4 cup dried astragalus root, broken into small pieces',
          '1 cup raw honey',
          'Glass jar with lid'
        ],
        instructions: 'Place astragalus pieces in a clean glass jar. Pour honey over the herb, ensuring it is completely covered. Seal jar and let infuse for 2-4 weeks in a cool, dark place. Strain if desired or leave the pieces in the honey. Take 1 teaspoon daily as an immune-supporting tonic.'
      },
      {
        name: 'Astragalus Tincture',
        ingredients: [
          '1 cup dried astragalus root, chopped',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place astragalus in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 6-8 weeks, shaking daily. Strain through cheesecloth and store in dark glass dropper bottles. Take 2-4ml, 2-3 times daily as an immune tonic.'
      }
    ],
    herbPairings: [
      {
        herb: 'Reishi Mushroom',
        benefit: 'Enhanced immune modulation and adaptogenic effects'
      },
      {
        herb: 'Elderberry',
        benefit: 'Complementary immune support with added antiviral properties'
      },
      {
        herb: 'Ginseng',
        benefit: 'Powerful energy and vitality combination'
      },
      {
        herb: 'Licorice Root',
        benefit: 'Traditional pairing in Chinese medicine for enhanced effects'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Support', percentage: 90 },
      { area: 'Energy & Vitality', percentage: 85 },
      { area: 'Stress Resistance', percentage: 80 },
      { area: 'Cardiovascular Health', percentage: 75 },
      { area: 'Longevity Support', percentage: 85 }
    ],
    resources: [
      {
        title: 'Astragalus: A Review of Traditional Uses, Phytochemistry and Pharmacology',
        author: 'Journal of Ethnopharmacology',
        type: 'Research Paper',
        link: 'https://example.com/astragalus-review'
      },
      {
        title: 'Effects of Astragalus membranaceus on Natural Killer Cell Activity and Autoimmunity',
        author: 'Immunopharmacology and Immunotoxicology',
        type: 'Research Paper',
        link: 'https://example.com/astragalus-immunity'
      },
      {
        title: 'Adaptogens: Herbs for Strength, Stamina, and Stress Relief',
        author: 'David Winston and Steven Maimes',
        type: 'Book',
        link: 'https://example.com/adaptogens-book'
      }
    ]
  },
  {
    id: 19,
    name: 'Dandelion',
    scientificName: 'Taraxacum officinale',
    slug: 'dandelion',
    description: 'Dandelion is a nutrient-rich herb that supports liver health, digestion, and detoxification. Every part of this common "weed" is medicinal, from its roots to its flowers, making it one of nature\'s most versatile remedies.',
    imageUrl: '/images/herbs/dandelion.jpg',
    rating: 4.6,
    categories: ['Liver Support', 'Digestive', 'Detoxification', 'Nutritive'],
    benefits: [
      'Supports liver function and detoxification',
      'Acts as a gentle diuretic without depleting potassium',
      'Rich in vitamins and minerals',
      'Supports digestive health',
      'May help balance blood sugar',
      'Traditionally used for skin conditions'
    ],
    uses: [
      'Supporting liver health and detoxification',
      'As a nutritive tonic',
      'Promoting healthy digestion',
      'Supporting kidney function',
      'As a bitter to stimulate digestion',
      'In food as a nutritious green or root vegetable'
    ],
    funFact: 'The name "dandelion" comes from the French "dent de lion" meaning "lion\'s tooth," referring to the jagged edges of its leaves. In folk tradition, blowing on a dandelion seed head while making a wish was believed to carry your wish to your loved ones when you blew the seeds into the wind!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1500mg, 3 times daily',
      tincture: '2-5ml, 3 times daily',
      tea: '1-2 teaspoons dried root or leaves per cup, steep for 10-15 minutes'
    },
    warnings: [
      'May interact with certain medications including diuretics, lithium, and some antibiotics',
      'May increase the flow of bile (caution with gallstones)',
      'May cause allergic reactions in people allergic to plants in the daisy family',
      'May increase stomach acid (caution with ulcers)'
    ],
    history: 'Dandelion has been used medicinally for thousands of years in traditional Chinese, Arabic, and European medicine systems. The first mention of dandelion as a medicine was in the writings of Arabian physicians of the 10th and 11th centuries. In European herbalism, it was used to purify the blood, support liver function, and treat a variety of ailments. Native Americans used dandelion for kidney disease, swelling, skin problems, and heartburn.',
    culturalBackground: 'In many cultures, dandelion is not seen as a weed but as a valuable food and medicine. In Japan, certain varieties are cultivated as vegetables. In France and Italy, dandelion greens are commonly used in salads. In traditional European folk medicine, dandelion was associated with the sun due to its bright yellow flowers and was believed to bring good luck. The milky sap was used to treat warts and the flowers were used to make wine, especially in England where dandelion wine was a traditional country wine.',
    preparation: 'All parts of the dandelion plant are medicinal. The root is typically dried and used for liver support, often roasted as a coffee substitute. The leaves are used fresh in salads or dried for tea, supporting kidney function. The flowers can be used to make dandelion wine or infused in oil for skin preparations. The plant can be prepared as teas, tinctures, or taken in capsules.',
    preparations: [
      {
        name: 'Dandelion Root Decoction',
        ingredients: [
          '1 tablespoon dried dandelion root',
          '2 cups water',
          'Honey and lemon to taste (optional)'
        ],
        instructions: 'Place dandelion root in a small pot with water. Bring to a boil, then reduce heat and simmer for 15-20 minutes. Strain and add honey and lemon if desired. Drink 1-2 cups daily to support liver function and digestion.'
      },
      {
        name: 'Dandelion Leaf Infusion',
        ingredients: [
          '2 teaspoons dried dandelion leaves or a handful of fresh leaves',
          '1 cup hot water',
          'Pinch of sea salt (optional)'
        ],
        instructions: 'Place dandelion leaves in a tea infuser. Pour hot water over leaves and steep for 10-15 minutes. Add a pinch of sea salt if desired to enhance the mineral content. Drink 1-3 cups daily as a nutritive tonic and gentle diuretic.'
      },
      {
        name: 'Dandelion Flower Oil',
        ingredients: [
          '2 cups fresh dandelion flowers (picked from areas free of pesticides)',
          '2 cups olive oil or other carrier oil',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Pick dandelion flowers on a dry, sunny day. Let them wilt for a few hours to reduce water content. Place flowers in a clean glass jar. Pour oil over flowers until completely covered. Seal jar and place in a sunny window for 2-4 weeks, shaking daily. Strain through cheesecloth and store in dark glass bottles. Use as a massage oil for sore muscles or as a base for salves.'
      }
    ],
    herbPairings: [
      {
        herb: 'Milk Thistle',
        benefit: 'Enhanced liver support and detoxification'
      },
      {
        herb: 'Burdock Root',
        benefit: 'Powerful combination for skin health and blood purification'
      },
      {
        herb: 'Yellow Dock',
        benefit: 'Complementary liver and blood-building support'
      },
      {
        herb: 'Nettle',
        benefit: 'Excellent nutritive combination with added kidney support'
      }
    ],
    benefitsVisualization: [
      { area: 'Liver Support', percentage: 90 },
      { area: 'Digestive Health', percentage: 85 },
      { area: 'Nutritional Value', percentage: 90 },
      { area: 'Kidney Support', percentage: 80 },
      { area: 'Skin Health', percentage: 75 }
    ],
    resources: [
      {
        title: 'The Healing Power of Dandelion',
        author: 'Dr. Peter Gail',
        type: 'Book',
        link: 'https://example.com/dandelion-healing'
      },
      {
        title: 'Taraxacum officinale (Dandelion): A Review on its Phytochemical and Pharmacological Profile',
        author: 'International Journal of Pharmacognosy',
        type: 'Research Paper',
        link: 'https://example.com/dandelion-review'
      },
      {
        title: 'Dandelion: From Weed to Superfood',
        author: 'American Botanical Council',
        type: 'Article',
        link: 'https://example.com/dandelion-superfood'
      }
    ]
  },
  {
    id: 20,
    name: 'Reishi Mushroom',
    scientificName: 'Ganoderma lucidum',
    slug: 'reishi-mushroom',
    description: 'Reishi mushroom is a powerful adaptogen known as the "mushroom of immortality" in Traditional Chinese Medicine. It supports immune function, stress resilience, and has been used for thousands of years to promote longevity and spiritual well-being.',
    imageUrl: '/images/herbs/reishi-mushroom.jpg',
    rating: 4.9,
    categories: ['Adaptogen', 'Immune Support', 'Longevity', 'Spiritual'],
    benefits: [
      'Supports immune system function',
      'Helps the body adapt to stress',
      'Has anti-inflammatory properties',
      'Supports liver health',
      'May improve sleep quality',
      'Traditionally used for longevity and spiritual practices'
    ],
    uses: [
      'Supporting immune function',
      'Managing stress and fatigue',
      'Supporting liver health',
      'Improving sleep quality',
      'As a longevity tonic',
      'In spiritual practices for calming the mind'
    ],
    funFact: 'Reishi mushroom has been called the "mushroom of immortality" and the "divine mushroom" in ancient texts. It was so highly valued in ancient China that it was reserved exclusively for the emperor\'s use and anyone else caught with it could be sentenced to death!',
    dosage: {
      powder: '1-2 teaspoons daily',
      capsule: '500-1000mg, 2-3 times daily',
      tincture: '2-4ml, 2-3 times daily',
      tea: '3-5 grams dried mushroom per cup, simmer for 30-60 minutes'
    },
    warnings: [
      'May interact with blood-thinning medications',
      'May lower blood pressure and blood sugar',
      'May cause digestive upset in some individuals',
      'Should be used with caution before surgery due to potential blood-thinning effects'
    ],
    history: 'Reishi mushroom has been used in Traditional Chinese Medicine for over 2,000 years. It was first mentioned in the Shennong Ben Cao Jing, an ancient Chinese text on agriculture and medicinal plants from around 200 BCE. It was so rare and valued that it was reserved for emperors and the elite. It was believed to promote longevity, enhance vital energy, and support spiritual practices. In Taoist tradition, it was associated with immortality and spiritual attainment.',
    culturalBackground: 'In Chinese culture, reishi is known as "lingzhi" meaning "spiritual potency" and is considered one of the most important herbs in the traditional pharmacopeia. It is depicted in many ancient Chinese artworks and was a symbol of good fortune, divine power, and longevity. In Japanese culture, it is known as "reishi" and has been used in traditional medicine for similar purposes. It appears in many Asian artworks, often in scenes depicting immortals or spiritual figures. In modern times, it has become popular worldwide as an adaptogenic supplement.',
    preparation: 'Reishi mushroom is woody and bitter, so it is not typically eaten as a culinary mushroom. It is usually dried and prepared as a decoction (simmered in water for an extended period), made into a tincture, or taken as a powder or extract in capsules. Dual extraction methods using both alcohol and hot water are often used to extract both the water-soluble polysaccharides and alcohol-soluble triterpenes.',
    preparations: [
      {
        name: 'Reishi Decoction',
        ingredients: [
          '3-5 grams dried reishi mushroom slices',
          '4 cups water',
          'Honey to taste (optional)',
          '1 cinnamon stick (optional)'
        ],
        instructions: 'Break reishi slices into smaller pieces. Place in a pot with water and cinnamon if using. Bring to a boil, then reduce heat and simmer for 1-2 hours until the liquid is reduced by half. Strain and add honey if desired. Drink 1 cup, 1-2 times daily as an immune and stress-supporting tonic.'
      },
      {
        name: 'Reishi Immune Tincture',
        ingredients: [
          '1 cup dried reishi mushroom pieces',
          '2 cups high-proof alcohol (vodka or grain alcohol)',
          '2 cups hot water',
          'Glass jar with tight-fitting lid'
        ],
        instructions: 'Place reishi in a clean glass jar. Cover with alcohol. Seal tightly and store in a cool, dark place for 6-8 weeks, shaking daily. Strain through cheesecloth, reserving the mushroom pieces. Simmer the same mushroom pieces in hot water for 2 hours. Strain and combine the water extract with the alcohol extract at a 1:1 ratio. Store in dark glass dropper bottles. Take 2-4ml, 2-3 times daily.'
      },
      {
        name: 'Reishi Sleep Elixir',
        ingredients: [
          '1 tablespoon reishi mushroom powder',
          '1 teaspoon cacao powder',
          '1 cup plant-based milk',
          '1 teaspoon honey or maple syrup',
          '1/4 teaspoon cinnamon',
          'Pinch of nutmeg'
        ],
        instructions: 'Heat milk in a small saucepan. Add reishi powder, cacao, spices, and sweetener. Whisk until well combined and heated through. Drink 30-60 minutes before bedtime to support relaxation and sleep quality.'
      }
    ],
    herbPairings: [
      {
        herb: 'Astragalus',
        benefit: 'Enhanced immune support and adaptogenic effects'
      },
      {
        herb: 'Ashwagandha',
        benefit: 'Powerful stress-reducing combination'
      },
      {
        herb: 'Turkey Tail Mushroom',
        benefit: 'Complementary immune-supporting mushroom'
      },
      {
        herb: 'Schisandra',
        benefit: 'Added liver support and stress resilience'
      }
    ],
    benefitsVisualization: [
      { area: 'Immune Modulation', percentage: 90 },
      { area: 'Stress Adaptation', percentage: 85 },
      { area: 'Longevity Support', percentage: 90 },
      { area: 'Liver Support', percentage: 80 },
      { area: 'Sleep Quality', percentage: 75 }
    ],
    resources: [
      {
        title: 'Ganoderma lucidum (Reishi): A Medicinal Mushroom',
        author: 'Herbal Medicine: Biomolecular and Clinical Aspects',
        type: 'Research Paper',
        link: 'https://example.com/reishi-medicine'
      },
      {
        title: 'The Pharmacological Potential of Mushrooms',
        author: 'Evidence-Based Complementary and Alternative Medicine',
        type: 'Research Paper',
        link: 'https://example.com/mushroom-potential'
      },
      {
        title: 'Healing Mushrooms: A Practical Guide',
        author: 'Christopher Hobbs',
        type: 'Book',
        link: 'https://example.com/healing-mushrooms'
      }
    ]
  }
];

export default powerHerbs;

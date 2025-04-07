import { HerbData } from '../types/herbs';

export const moreHerbsData: HerbData[] = [
  {
    id: 3,
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    slug: 'turmeric',
    description: 'Turmeric is a powerful anti-inflammatory herb with a bright yellow color. It contains curcumin, which has been studied extensively for its health benefits.',
    imageUrl: '/images/herbs/turmeric.jpg',
    rating: 4.9,
    categories: ['Anti-inflammatory', 'Antioxidant', 'Digestive', 'Joint Health'],
    benefits: [
      'Powerful anti-inflammatory properties',
      'Strong antioxidant effects',
      'Supports joint health and mobility',
      'May improve digestive function',
      'Supports liver health and detoxification',
      'May help balance blood sugar levels'
    ],
    uses: [
      'Reducing inflammation and pain',
      'Supporting joint health and arthritis management',
      'Improving digestion and gut health',
      'Supporting liver function',
      'As a culinary spice in cooking',
      'In skincare for its brightening properties'
    ],
    funFact: 'Turmeric has been used in India for thousands of years as both a spice and medicinal herb, and is also used in traditional ceremonies and as a natural fabric dye!',
    dosage: {
      powder: '1/2-1 teaspoon daily with black pepper for absorption',
      capsule: '500-1000 mg of curcumin with black pepper extract, 1-2 times daily',
      tincture: '15-30 drops, 2-3 times daily',
      tea: '1 teaspoon turmeric powder simmered in water for 10 minutes'
    },
    warnings: [
      'May interact with blood thinning medications',
      'May lower blood sugar levels (monitor if diabetic)',
      'May cause digestive upset in sensitive individuals',
      'High doses may contribute to kidney stones in susceptible individuals'
    ],
    history: 'Turmeric has been used in India for thousands of years as a spice and medicinal herb. It was first used as a dye, then later for its medicinal properties. In traditional Ayurvedic medicine, it was used to treat a wide variety of conditions, from breathing problems to rheumatism. It was also used in religious ceremonies as a symbol of prosperity and cleansing.',
    culturalBackground: 'In Indian culture, turmeric is considered auspicious and holy. It is used in Hindu religious ceremonies and weddings, where a string dyed with turmeric paste is tied around the bride\'s neck as a symbol of prosperity and good fortune. In many South Asian countries, turmeric paste is applied to the skin of both bride and groom before marriage as part of a ceremony to bless and purify them.',
    preparation: 'Turmeric is commonly used as a powder in cooking or mixed with warm milk to make "golden milk." For medicinal use, it\'s often combined with black pepper or fats to increase absorption of curcumin, its active component. It can also be made into a paste for topical application or used in capsules and tinctures.',
    preparations: [
      {
        name: 'Golden Milk',
        ingredients: ['1 cup milk (dairy or plant-based)', '1 tsp turmeric powder', '1/4 tsp black pepper', '1/2 tsp cinnamon', '1 tsp honey or maple syrup', 'Small piece of fresh ginger (optional)'],
        instructions: 'Heat milk in a small saucepan. Add turmeric, black pepper, cinnamon, and ginger if using. Simmer for 5-10 minutes, stirring occasionally. Strain if needed and add sweetener to taste. Drink warm, especially before bedtime.'
      },
      {
        name: 'Anti-inflammatory Paste',
        ingredients: ['1/4 cup turmeric powder', '1/2 tsp black pepper', '1/4 cup coconut oil or ghee', '1/2 cup water'],
        instructions: 'Mix turmeric and black pepper in a small saucepan. Add water and oil. Heat on low, stirring constantly until it forms a thick paste (about 7-10 minutes). Store in a glass jar in the refrigerator for up to 2 weeks. Take 1/4-1/2 teaspoon daily with food or in warm milk.'
      },
      {
        name: 'Turmeric Face Mask',
        ingredients: ['1 tbsp turmeric powder', '1 tbsp raw honey', '1 tbsp plain yogurt', '1/2 tsp lemon juice (optional)'],
        instructions: 'Mix all ingredients to form a paste. Apply to clean face, avoiding the eye area. Leave on for 15-20 minutes, then rinse with warm water. Use once a week for glowing skin. Note: Turmeric may temporarily stain fair skin.'
      }
    ],
    herbPairings: [
      {
        herb: 'Black Pepper',
        benefit: 'Enhances absorption of curcumin by up to 2000%'
      },
      {
        herb: 'Ginger',
        benefit: 'Amplifies anti-inflammatory effects and adds digestive benefits'
      },
      {
        herb: 'Boswellia',
        benefit: 'Creates a powerful anti-inflammatory combination for joint health'
      },
      {
        herb: 'Cinnamon',
        benefit: 'Enhances flavor and adds blood sugar balancing properties'
      }
    ],
    benefitsVisualization: [
      { area: 'Anti-inflammatory', percentage: 95 },
      { area: 'Antioxidant', percentage: 90 },
      { area: 'Joint Health', percentage: 85 },
      { area: 'Digestive Support', percentage: 75 },
      { area: 'Brain Health', percentage: 70 }
    ],
    resources: [
      {
        title: 'The Turmeric Miracle: How Nature\'s Super Medicine Can Help You',
        author: 'Dr. Christine Horner',
        type: 'Book',
        link: 'https://example.com/turmeric-miracle'
      },
      {
        title: 'Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis',
        author: 'Journal of Medicinal Food',
        type: 'Research Paper',
        link: 'https://example.com/turmeric-arthritis'
      },
      {
        title: 'Turmeric in Traditional Medicine',
        author: 'Botanical Medicine Institute',
        type: 'Online Course',
        link: 'https://example.com/traditional-turmeric'
      }
    ]
  },
  {
    id: 4,
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    slug: 'ginger',
    description: 'Ginger is a warming herb with a spicy flavor that has been used for thousands of years to aid digestion, reduce nausea, and fight inflammation.',
    imageUrl: '/images/herbs/ginger.jpg',
    rating: 4.7,
    categories: ['Digestive', 'Anti-inflammatory', 'Circulatory', 'Immune Support'],
    benefits: [
      'Relieves nausea and motion sickness',
      'Supports healthy digestion',
      'Has anti-inflammatory properties',
      'Improves circulation',
      'Supports immune function',
      'May help reduce muscle pain and soreness'
    ],
    uses: [
      'Alleviating nausea, including morning sickness',
      'Supporting digestive health',
      'Reducing inflammation in the body',
      'Warming the body and improving circulation',
      'Supporting respiratory health',
      'As a culinary spice in cooking'
    ],
    funFact: 'Ginger has been used as medicine for at least 5,000 years, and was so valued in ancient times that a pound of ginger could be traded for a sheep!',
    dosage: {
      powder: '1/2-1 teaspoon daily',
      capsule: '500-1000 mg, 2-3 times daily',
      tincture: '2 ml, 3 times daily',
      tea: '1-2 teaspoons fresh grated ginger per cup, steep for 10 minutes'
    },
    warnings: [
      'May interact with blood thinning medications',
      'May lower blood sugar (monitor if diabetic)',
      'May cause heartburn in some individuals',
      'Should be used with caution before surgery due to blood-thinning effects'
    ],
    history: 'Ginger has been used for medicinal purposes for at least 5,000 years, originating in Southeast Asia. It was one of the first spices to be traded and was used extensively by the ancient Romans. By the 13th and 14th centuries, ginger had become so popular in Europe that it was included in every table setting, like salt and pepper. During the Middle Ages, ginger was thought to be effective against the plague.',
    culturalBackground: 'In many Asian cultures, ginger is a staple in cooking and medicine. In China, ginger has been used for over 2,000 years to treat stomach upset, diarrhea, and nausea. In Japan, sliced ginger is served with sushi to cleanse the palate and aid digestion. In India, ginger is an essential component of many curries and is used in Ayurvedic medicine to treat a variety of conditions. In the Caribbean, ginger is used to make a popular beverage called ginger beer.',
    preparation: 'Ginger can be used fresh, dried, powdered, or as an oil or juice. For medicinal purposes, it\'s commonly prepared as a tea, added to food, or taken as a supplement. Fresh ginger can be grated, sliced, or chopped for various preparations. Dried ginger is often used in powdered form for convenience.',
    preparations: [
      {
        name: 'Ginger Tea',
        ingredients: ['2-inch piece of fresh ginger, sliced or grated', '2 cups water', 'Honey and lemon to taste'],
        instructions: 'Bring water to a boil. Add ginger and reduce heat to simmer for 10-15 minutes. Strain and add honey and lemon to taste. Drink warm, especially good for nausea or cold symptoms.'
      },
      {
        name: 'Ginger Compress',
        ingredients: ['2 tbsp grated fresh ginger', '2 cups hot water', 'Clean cloth'],
        instructions: 'Place grated ginger in hot water and steep for 5 minutes. Soak the cloth in the ginger water, wring out excess, and apply to affected area (joints or muscles) for 15-20 minutes. Reapply as needed for pain relief.'
      },
      {
        name: 'Immune-Boosting Ginger Shot',
        ingredients: ['2-inch piece of fresh ginger', '1 lemon, juiced', '1 tbsp honey', 'Pinch of cayenne pepper (optional)'],
        instructions: 'Process ginger in a juicer or blend with a small amount of water and strain. Mix ginger juice with lemon juice, honey, and cayenne if using. Take as a 1-2 oz shot daily, especially during cold and flu season.'
      }
    ],
    herbPairings: [
      {
        herb: 'Turmeric',
        benefit: 'Enhances anti-inflammatory effects and improves absorption'
      },
      {
        herb: 'Lemon',
        benefit: 'Adds vitamin C and enhances flavor and digestive benefits'
      },
      {
        herb: 'Cinnamon',
        benefit: 'Creates a warming combination good for circulation and digestion'
      },
      {
        herb: 'Peppermint',
        benefit: 'Excellent combination for digestive issues and nausea'
      }
    ],
    benefitsVisualization: [
      { area: 'Digestive Support', percentage: 90 },
      { area: 'Nausea Relief', percentage: 95 },
      { area: 'Anti-inflammatory', percentage: 80 },
      { area: 'Circulation', percentage: 85 },
      { area: 'Immune Support', percentage: 75 }
    ],
    resources: [
      {
        title: 'The Healing Power of Ginger',
        author: 'Paul Schulick',
        type: 'Book',
        link: 'https://example.com/healing-ginger'
      },
      {
        title: 'Ginger for Nausea and Vomiting in Pregnancy: A Randomized, Double-Masked, Placebo-Controlled Trial',
        author: 'Obstetrics & Gynecology Journal',
        type: 'Research Paper',
        link: 'https://example.com/ginger-pregnancy'
      },
      {
        title: 'Cooking with Medicinal Herbs: Ginger',
        author: 'Culinary Herbalism Institute',
        type: 'Online Course',
        link: 'https://example.com/cooking-ginger'
      }
    ]
  },
  {
    id: 5,
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    slug: 'lavender',
    description: 'Lavender is a fragrant herb known for its calming and relaxing properties. It has been used for centuries to promote sleep, reduce anxiety, and soothe various ailments.',
    imageUrl: '/images/herbs/lavender.jpg',
    rating: 4.8,
    categories: ['Relaxation', 'Sleep', 'Anxiety', 'Skin Care'],
    benefits: [
      'Promotes relaxation and reduces anxiety',
      'Improves sleep quality',
      'Soothes headaches and migraines',
      'Has antiseptic and anti-inflammatory properties',
      'Supports skin health',
      'May help alleviate mild pain'
    ],
    uses: [
      'Promoting sleep and treating insomnia',
      'Reducing stress and anxiety',
      'Treating minor burns and skin irritations',
      'Alleviating headaches',
      'As a natural perfume and in aromatherapy',
      'Repelling insects'
    ],
    funFact: 'The name lavender comes from the Latin word "lavare," meaning "to wash," as it was commonly used in baths by the Romans for its fragrant and cleansing properties!',
    dosage: {
      powder: 'Not commonly used as powder',
      capsule: '80-160 mg, 1-2 times daily',
      tincture: '2-4 ml, 2-3 times daily',
      tea: '1-2 teaspoons dried lavender flowers per cup, steep for 5-10 minutes'
    },
    warnings: [
      'May cause skin irritation in sensitive individuals',
      'May increase drowsiness when combined with sedative medications',
      'Not recommended in large amounts during pregnancy',
      'Essential oil should never be ingested and should be diluted before skin application'
    ],
    history: 'Lavender has been used for over 2,500 years. The ancient Egyptians used it for mummification and perfume. The Romans used it for cooking, bathing, and scenting the air. During the Great Plague in London, people would tie bundles of lavender to their wrists to protect against the disease. In medieval and Renaissance Europe, lavender was strewn across floors to sweeten the air and repel insects.',
    culturalBackground: 'In Provence, France, lavender has been cultivated for centuries and is deeply integrated into the regional culture and economy. Lavender festivals are held annually to celebrate the harvest. In Victorian England, lavender was associated with cleanliness and purity, and was often used to scent linens and repel insects from clothing. In many Mediterranean countries, lavender is used in traditional cooking, particularly in desserts and as an herb de Provence.',
    preparation: 'Lavender can be used in many forms including dried flowers for tea, essential oil for aromatherapy, and in culinary preparations. For medicinal purposes, it\'s commonly used as a tea, tincture, or essential oil. Lavender essential oil should always be diluted before applying to the skin.',
    preparations: [
      {
        name: 'Lavender Sleep Sachet',
        ingredients: ['1/4 cup dried lavender flowers', 'Small cloth bag or handkerchief', 'Ribbon for tying'],
        instructions: 'Fill the cloth bag with dried lavender flowers. Tie securely with ribbon. Place under your pillow or near your bed to promote relaxation and sleep. Replace when the scent begins to fade, typically every few months.'
      },
      {
        name: 'Lavender Bath Soak',
        ingredients: ['1/2 cup Epsom salts', '1/4 cup dried lavender flowers', '2 tbsp baking soda', '5-10 drops lavender essential oil (optional)'],
        instructions: 'Mix all ingredients together. Store in an airtight container. Add 1/4-1/2 cup to warm bath water and soak for 20-30 minutes to relieve stress and muscle tension.'
      },
      {
        name: 'Lavender Headache Relief Oil',
        ingredients: ['10 drops lavender essential oil', '5 drops peppermint essential oil', '2 tbsp carrier oil (such as jojoba or almond oil)'],
        instructions: 'Mix essential oils with carrier oil in a small glass bottle. Apply a small amount to temples, forehead, and back of neck at the first sign of a headache. Massage gently and breathe deeply. Store in a cool, dark place.'
      }
    ],
    herbPairings: [
      {
        herb: 'Chamomile',
        benefit: 'Enhances relaxation and sleep-promoting properties'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Creates a calming blend that also supports mood'
      },
      {
        herb: 'Peppermint',
        benefit: 'Good combination for headache relief'
      },
      {
        herb: 'Rose',
        benefit: 'Excellent pairing for skin care and emotional balance'
      }
    ],
    benefitsVisualization: [
      { area: 'Relaxation', percentage: 90 },
      { area: 'Sleep Quality', percentage: 85 },
      { area: 'Anxiety Relief', percentage: 80 },
      { area: 'Skin Health', percentage: 75 },
      { area: 'Headache Relief', percentage: 70 }
    ],
    resources: [
      {
        title: 'Lavender: The Genus Lavandula',
        author: 'Maria Lis-Balchin',
        type: 'Book',
        link: 'https://example.com/lavender-genus'
      },
      {
        title: 'Efficacy of Lavender Oil for Anxiety: A Systematic Review',
        author: 'Mental Health Clinician Journal',
        type: 'Research Paper',
        link: 'https://example.com/lavender-anxiety'
      },
      {
        title: 'Growing and Using Lavender',
        author: 'Herb Society of America',
        type: 'Guide',
        link: 'https://example.com/growing-lavender'
      }
    ]
  }
];

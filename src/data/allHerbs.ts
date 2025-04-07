import { HerbData } from '../types/herbs';
import { herbsData } from './herbsData';
import { moreHerbsData } from './moreHerbs';
import additionalHerbs from './additionalHerbs';
import finalHerbs from './finalHerbs';
import extraHerbs from './extraHerbs';
import powerHerbs from './powerHerbs';
import essentialHerbs from './essentialHerbs';
import specialHerbs from './specialHerbs';
import traditionalHerbs from './traditionalHerbs';
import medicinalHerbs from './medicinalHerbs';
import advancedHerbs from './advancedHerbs';
import therapeuticHerbs from './therapeuticHerbs';
import remedialHerbs from './remedialHerbs';
import nutritiveHerbs from './nutritiveHerbs';

// Combine all herb data sources
export const allHerbs: HerbData[] = [
  ...herbsData,
  ...moreHerbsData,
  ...additionalHerbs,
  ...finalHerbs,
  ...extraHerbs,
  ...powerHerbs,
  ...essentialHerbs,
  ...specialHerbs,
  ...traditionalHerbs,
  ...medicinalHerbs,
  ...advancedHerbs,
  ...therapeuticHerbs,
  ...remedialHerbs,
  ...nutritiveHerbs,
  // Additional herbs
  {
    id: 6,
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla',
    slug: 'chamomile',
    description: 'Chamomile is a gentle herb known for its calming properties. It has been used for centuries to promote relaxation, support digestive health, and soothe skin irritations.',
    imageUrl: '/images/herbs/chamomile.jpg',
    rating: 4.7,
    categories: ['Relaxation', 'Sleep', 'Digestive', 'Skin Care'],
    benefits: [
      'Promotes relaxation and reduces stress',
      'Improves sleep quality',
      'Soothes digestive issues',
      'Has anti-inflammatory properties',
      'Supports skin health',
      'May help reduce menstrual pain'
    ],
    uses: [
      'As a calming tea before bedtime',
      'For digestive discomfort and bloating',
      'For skin irritations and inflammation',
      'To reduce anxiety and stress',
      'For eye irritation as a compress',
      'As a gentle remedy for children'
    ],
    funFact: 'The name "chamomile" comes from the Greek words "khamai" meaning "on the ground" and "melon" meaning "apple," referring to the apple-like scent of the flowers!',
    dosage: {
      powder: 'Not commonly used as powder',
      capsule: '400-1600 mg, 1-3 times daily',
      tincture: '1-4 ml, 3 times daily',
      tea: '1-2 teaspoons dried flowers per cup, steep for 5-10 minutes, up to 3-4 cups daily'
    },
    warnings: [
      'May cause allergic reactions in people allergic to plants in the daisy family',
      'May increase the effects of sedative medications',
      'May interact with blood thinning medications',
      'Should be discontinued at least 2 weeks before surgery'
    ],
    history: 'Chamomile has been used for medicinal purposes for thousands of years, dating back to ancient Egypt, where it was dedicated to the sun god Ra for its healing properties. The ancient Romans and Greeks used it for medicinal purposes as well. In medieval Europe, chamomile was one of the nine sacred herbs used by Anglo-Saxons for its healing properties and was often strewn on the floor during gatherings to create a pleasant aroma.',
    culturalBackground: 'In Germany, chamomile is known as "alles zutraut" which means "capable of anything" due to its wide range of medicinal uses. It has been so widely used in German folk medicine that it is sometimes called "German chamomile." In many European countries, chamomile tea is a staple household remedy, especially for children and the elderly. In Egypt, chamomile was dedicated to the sun god and used in embalming oils.',
    preparation: 'Chamomile is most commonly prepared as a tea by steeping the dried flowers in hot water. It can also be used in tinctures, capsules, or applied topically in creams and oils. For topical use, chamomile can be made into a compress or added to bath water.',
    preparations: [
      {
        name: 'Calming Chamomile Tea',
        ingredients: ['2 tsp dried chamomile flowers', '1 cup hot water', 'Honey to taste', 'Slice of lemon (optional)'],
        instructions: 'Place chamomile flowers in a tea infuser or teapot. Pour hot water over flowers and steep for 5-10 minutes. Strain, add honey and lemon if desired. Drink 30 minutes before bedtime for better sleep.'
      },
      {
        name: 'Chamomile Eye Compress',
        ingredients: ['2 chamomile tea bags or 2 tbsp dried chamomile flowers', '1 cup hot water', 'Clean cloth or cotton pads'],
        instructions: 'Steep tea bags or flowers in hot water for 10 minutes. Allow to cool to a comfortable temperature. Soak cloth or cotton pads in the tea and apply to closed eyes for 10-15 minutes to reduce puffiness and irritation.'
      },
      {
        name: 'Chamomile Infused Oil',
        ingredients: ['1/2 cup dried chamomile flowers', '1 cup carrier oil (such as olive or jojoba oil)', 'Glass jar with lid'],
        instructions: 'Fill jar with dried chamomile flowers. Pour oil over flowers until completely covered. Seal jar and place in a sunny window for 2-4 weeks, shaking occasionally. Strain through cheesecloth and store in a dark glass bottle. Use for massage or as a base for salves.'
      }
    ],
    herbPairings: [
      {
        herb: 'Lavender',
        benefit: 'Enhances relaxation and sleep-promoting properties'
      },
      {
        herb: 'Lemon Balm',
        benefit: 'Creates a calming blend that also supports digestive health'
      },
      {
        herb: 'Peppermint',
        benefit: 'Excellent combination for digestive issues'
      },
      {
        herb: 'Calendula',
        benefit: 'Powerful combination for skin healing and inflammation'
      }
    ],
    benefitsVisualization: [
      { area: 'Relaxation', percentage: 85 },
      { area: 'Sleep Quality', percentage: 80 },
      { area: 'Digestive Health', percentage: 75 },
      { area: 'Skin Health', percentage: 70 },
      { area: 'Anti-inflammatory', percentage: 65 }
    ],
    resources: [
      {
        title: 'Chamomile: Industrial Profiles',
        author: 'Rolf Franke',
        type: 'Book',
        link: 'https://example.com/chamomile-profiles'
      },
      {
        title: 'Chamomile: A Herbal Medicine of the Past with a Bright Future',
        author: 'Journal of Molecular Medicine',
        type: 'Research Paper',
        link: 'https://example.com/chamomile-future'
      },
      {
        title: 'Growing and Using Chamomile',
        author: 'Herb Society of America',
        type: 'Guide',
        link: 'https://example.com/growing-chamomile'
      }
    ]
  },
  {
    id: 7,
    name: 'Holy Basil',
    scientificName: 'Ocimum sanctum',
    slug: 'holy-basil',
    description: 'Holy Basil, also known as Tulsi, is a sacred herb in Ayurvedic medicine revered for its adaptogenic properties. It helps the body adapt to stress and promotes mental clarity and spiritual well-being.',
    imageUrl: '/images/herbs/holy-basil.jpg',
    rating: 4.8,
    categories: ['Adaptogen', 'Stress', 'Immunity', 'Respiratory'],
    benefits: [
      'Helps the body adapt to stress',
      'Supports immune system function',
      'Promotes mental clarity and focus',
      'Supports respiratory health',
      'Has antioxidant properties',
      'May help balance blood sugar levels'
    ],
    uses: [
      'Managing stress and anxiety',
      'Supporting immune function',
      'Improving respiratory conditions',
      'Enhancing mental clarity and focus',
      'Supporting heart health',
      'As a daily tonic for overall wellness'
    ],
    funFact: 'Holy Basil is known as "The Queen of Herbs" in Ayurveda and is considered sacred in Hinduism. Many Hindu homes have a Tulsi plant that is worshipped daily!',
    dosage: {
      powder: '1/4-1/2 teaspoon daily',
      capsule: '300-600 mg, 1-2 times daily',
      tincture: '30-60 drops, 2-3 times daily',
      tea: '1-2 teaspoons dried herb per cup, steep for 5-10 minutes, 1-3 cups daily'
    },
    warnings: [
      'May slow blood clotting (discontinue 2 weeks before surgery)',
      'May lower blood sugar levels (monitor if diabetic)',
      'May interact with thyroid medications',
      'Not recommended during pregnancy due to possible effects on uterine contractions'
    ],
    history: 'Holy Basil has been revered in India for over 5,000 years and is mentioned in ancient Ayurvedic texts dating back to 1500 BCE. It was traditionally used in religious ceremonies and as medicine for a wide range of ailments. In Ayurveda, it is classified as a "rasayana," an herb that promotes longevity and overall well-being. It was often planted around Hindu temples and homes to purify the atmosphere and bring good fortune.',
    culturalBackground: 'In Hindu culture, Holy Basil (Tulsi) is considered a manifestation of the goddess Lakshmi and is worshipped daily in many households. A special place is often reserved in the courtyard for a Tulsi plant, and many religious rituals involve the plant. In Ayurvedic medicine, it is considered a balancing herb for all three doshas (constitutional types) and is used to treat a wide range of conditions. It is also known as "The Incomparable One" due to its unique healing properties.',
    preparation: 'Holy Basil can be used fresh or dried and is commonly prepared as a tea, tincture, or taken in capsule form. Fresh leaves can be chewed daily as a preventative tonic. For medicinal purposes, it is often combined with other adaptogens or immune-supporting herbs.',
    preparations: [
      {
        name: 'Stress-Relief Tea',
        ingredients: ['1 tsp dried Holy Basil leaves', '1 tsp dried lemon balm', '1/2 tsp dried chamomile', '1 cup hot water', 'Honey to taste'],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey if desired. Drink 1-3 cups daily, especially during times of stress.'
      },
      {
        name: 'Immune-Boosting Tincture',
        ingredients: ['1 part fresh Holy Basil leaves, chopped', '1 part fresh Echinacea root, chopped', '2 parts high-proof alcohol (vodka or grain alcohol)'],
        instructions: 'Place plant material in a glass jar. Cover with alcohol. Seal jar and store in a cool, dark place for 4-6 weeks, shaking daily. Strain through cheesecloth and store in a dark glass dropper bottle. Take 30-60 drops 2-3 times daily during cold and flu season.'
      },
      {
        name: 'Holy Basil Honey',
        ingredients: ['1/4 cup fresh Holy Basil leaves, chopped', '1 cup raw honey', 'Glass jar with lid'],
        instructions: 'Place Holy Basil leaves in a clean glass jar. Pour honey over leaves, ensuring they are completely covered. Seal jar and let infuse for 1-2 weeks in a cool, dark place. Strain if desired or leave the leaves in the honey. Take 1 teaspoon daily as a tonic or use in tea.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ashwagandha',
        benefit: 'Creates a powerful adaptogenic blend for stress relief and immune support'
      },
      {
        herb: 'Turmeric',
        benefit: 'Enhances anti-inflammatory properties and supports overall wellness'
      },
      {
        herb: 'Ginger',
        benefit: 'Adds warming properties and supports circulation and digestion'
      },
      {
        herb: 'Brahmi (Bacopa)',
        benefit: 'Excellent combination for mental clarity and cognitive function'
      }
    ],
    benefitsVisualization: [
      { area: 'Stress Adaptation', percentage: 90 },
      { area: 'Immune Support', percentage: 85 },
      { area: 'Mental Clarity', percentage: 80 },
      { area: 'Respiratory Health', percentage: 75 },
      { area: 'Antioxidant', percentage: 85 }
    ],
    resources: [
      {
        title: 'Tulsi: The Mother Medicine of Nature',
        author: 'Dr. Narendra Singh',
        type: 'Book',
        link: 'https://example.com/tulsi-mother-medicine'
      },
      {
        title: 'Therapeutic Potential of Ocimum sanctum (Tulsi) in Cardiovascular Diseases',
        author: 'International Journal of Cardiology',
        type: 'Research Paper',
        link: 'https://example.com/tulsi-cardiovascular'
      },
      {
        title: 'Holy Basil in Ayurvedic Medicine',
        author: 'American Botanical Council',
        type: 'Online Course',
        link: 'https://example.com/ayurvedic-tulsi'
      }
    ]
  },
  {
    id: 8,
    name: 'Peppermint',
    scientificName: 'Mentha piperita',
    slug: 'peppermint',
    description: 'Peppermint is a refreshing herb known for its cooling properties and distinctive flavor. It is widely used to support digestive health, relieve headaches, and clear respiratory passages.',
    imageUrl: '/images/herbs/peppermint.jpg',
    rating: 4.6,
    categories: ['Digestive', 'Respiratory', 'Pain Relief', 'Mental Clarity'],
    benefits: [
      'Relieves digestive discomfort and IBS symptoms',
      'Alleviates headaches and migraines',
      'Opens respiratory passages',
      'Improves mental focus and alertness',
      'Has antimicrobial properties',
      'Relieves muscle pain when applied topically'
    ],
    uses: [
      'Treating digestive issues like IBS, gas, and bloating',
      'Relieving headaches and migraines',
      'Clearing sinuses and respiratory congestion',
      'Improving focus and mental clarity',
      'Freshening breath',
      'Cooling the body during hot weather'
    ],
    funFact: 'Peppermint is actually a natural hybrid of water mint and spearmint, and was first described by Carl Linnaeus in 1753. A single drop of peppermint essential oil is equivalent to 26-28 cups of peppermint tea!',
    dosage: {
      powder: 'Not commonly used as powder',
      capsule: '250-750 mg, 2-3 times daily',
      tincture: '1-2 ml, 3 times daily',
      tea: '1-2 teaspoons dried leaves per cup, steep for 5-10 minutes, 2-3 cups daily'
    },
    warnings: [
      'May worsen acid reflux in some individuals',
      'Not recommended for infants or very young children',
      'Essential oil should never be ingested and should be diluted before skin application',
      'May interact with certain medications that are broken down by the liver'
    ],
    history: 'Peppermint has been used for thousands of years, with evidence of its use found in ancient Egyptian tombs dating back to 1000 BCE. The ancient Greeks and Romans used peppermint to flavor foods, as a digestive aid, and in funeral rites. In the 18th century, peppermint was officially recognized for its medicinal properties in Western medicine and was listed in the London Pharmacopoeia in 1721.',
    culturalBackground: 'In many cultures, mint has been associated with hospitality and is often offered to guests in the form of tea or as a flavoring in foods. In Middle Eastern cultures, mint tea is a traditional offering to guests. In England, peppermint became popular during the Victorian era, particularly in the form of peppermint candies and digestive aids. In Japan, mint is used in traditional cooling summer foods and beverages to help combat the heat.',
    preparation: 'Peppermint is commonly used as a tea, essential oil, or in capsule form. For digestive issues, enteric-coated peppermint oil capsules are often used to ensure the oil reaches the intestines. For topical use, diluted peppermint essential oil can be applied to temples for headaches or to muscles for pain relief.',
    preparations: [
      {
        name: 'Digestive Relief Tea',
        ingredients: ['1 tsp dried peppermint leaves', '1/2 tsp dried fennel seeds', '1/2 tsp dried ginger', '1 cup hot water', 'Honey to taste (optional)'],
        instructions: 'Combine herbs in a tea infuser. Pour hot water over herbs and steep for 5-10 minutes. Strain and add honey if desired. Drink after meals to aid digestion or when experiencing bloating or gas.'
      },
      {
        name: 'Headache Relief Oil',
        ingredients: ['10 drops peppermint essential oil', '5 drops lavender essential oil', '2 tbsp carrier oil (such as jojoba or almond oil)'],
        instructions: 'Mix essential oils with carrier oil in a small glass bottle. Apply a small amount to temples, forehead, and back of neck at the first sign of a headache. Massage gently and breathe deeply. Store in a cool, dark place.'
      },
      {
        name: 'Cooling Peppermint Spray',
        ingredients: ['10 drops peppermint essential oil', '1 cup distilled water', '1 tbsp witch hazel', 'Small spray bottle'],
        instructions: 'Add witch hazel and essential oil to spray bottle. Fill with distilled water and shake well before each use. Spray on skin during hot weather for a cooling effect or on sheets before bedtime during summer months.'
      }
    ],
    herbPairings: [
      {
        herb: 'Ginger',
        benefit: 'Excellent combination for digestive issues and nausea'
      },
      {
        herb: 'Lavender',
        benefit: 'Great pairing for headache relief and relaxation'
      },
      {
        herb: 'Eucalyptus',
        benefit: 'Powerful combination for respiratory congestion'
      },
      {
        herb: 'Chamomile',
        benefit: 'Balances peppermint\'s cooling properties with chamomile\'s gentleness for digestive issues'
      }
    ],
    benefitsVisualization: [
      { area: 'Digestive Relief', percentage: 90 },
      { area: 'Headache Relief', percentage: 85 },
      { area: 'Respiratory Support', percentage: 80 },
      { area: 'Mental Clarity', percentage: 75 },
      { area: 'Cooling Effect', percentage: 95 }
    ],
    resources: [
      {
        title: 'Peppermint: The Genus Mentha',
        author: 'Brian M. Lawrence',
        type: 'Book',
        link: 'https://example.com/peppermint-genus'
      },
      {
        title: 'Peppermint Oil for Irritable Bowel Syndrome: A Systematic Review and Meta-analysis',
        author: 'Journal of Clinical Gastroenterology',
        type: 'Research Paper',
        link: 'https://example.com/peppermint-ibs'
      },
      {
        title: 'Growing and Using Peppermint',
        author: 'Herb Society of America',
        type: 'Guide',
        link: 'https://example.com/growing-peppermint'
      }
    ]
  }
];

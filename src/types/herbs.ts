export type HerbPreparation = {
  name: string;
  ingredients: string[];
  instructions: string;
};

export type HerbPairing = {
  herb: string;
  benefit: string;
};

export type BenefitVisualization = {
  area: string;
  percentage: number;
};

export type Resource = {
  title: string;
  author: string;
  type: string;
  link: string;
};

export type HerbData = {
  id: number;
  name: string;
  scientificName: string;
  slug: string;
  description: string;
  imageUrl: string;
  rating: number;
  categories: string[];
  benefits: string[];
  uses: string[];
  funFact: string;
  dosage: {
    powder: string;
    capsule: string;
    tincture: string;
    tea: string;
  };
  warnings: string[];
  history: string;
  culturalBackground: string;
  preparation: string;
  preparations: HerbPreparation[];
  herbPairings: HerbPairing[];
  benefitsVisualization: BenefitVisualization[];
  resources: Resource[];
};

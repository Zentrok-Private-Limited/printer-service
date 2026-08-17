export interface DiagnosticIssue {
  id: string;
  title: string;
  category: 'printer' | 'computer' | 'scanner';
}

export interface PricingPlan {
  id: string;
  duration: string;
  devices: string;
  pricePerMonth: number;
  totalPrice: number;
  badge?: string;
  highlighted?: boolean;
}
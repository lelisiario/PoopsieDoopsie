export interface ServiceType {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface PricingPlan {
    id: number;
    title: string;
    price: string;
    frequency: string;
    features: string[];
    isPopular?: boolean;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
  }
  
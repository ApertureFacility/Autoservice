export interface RequirementItem {
    title: string;
    details: string[];
  }
export interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    toggle: (index: number) => void;
  }
export interface IDamagedCars {
  name: string;
  img: string;
  price: string;
  year: string;
  mileage: string;
}
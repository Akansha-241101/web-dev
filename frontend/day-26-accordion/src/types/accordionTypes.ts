interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

export interface AccordionComponentProps {
  data: AccordionItem[];
}
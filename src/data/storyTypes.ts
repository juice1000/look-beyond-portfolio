export interface Stat {
  value: string;
  label: string;
}

export interface SlideItem {
  title: string;
  description: string;
}

export interface SlideCta {
  label: string;
  href: string;
}

export interface BaseSlide<
  Act extends string = string,
  Visual extends string = string,
> {
  act: Act;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  items?: SlideItem[];
  stats?: Stat[];
  visual?: Visual;
  outcome?: string;
  cta?: SlideCta[];
  /** URL hash (without #) that opens this slide directly. */
  anchor?: string;
}

export interface Act<Id extends string = string> {
  id: Id;
  label: string;
}

export interface StoryLabels {
  back: string;
  next: string;
  result: string;
  chapters: string;
  carousel: string;
}

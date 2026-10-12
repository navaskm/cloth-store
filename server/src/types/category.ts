export interface CategoryDocument {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  heroImageUrl: string;
  heroImageAlt: string;
  editorialHeading: string;
  editorialText: string;
  editorialImageUrl: string;
  editorialImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  relatedSlugs: string[];
  isActive?: boolean;
}

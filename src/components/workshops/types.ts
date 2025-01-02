export interface IWorkShop {
  date: string; // Date of the workshop or panel
  time: string; // Time of the workshop or panel
  imageAlt?: string; // Optional alt text for the image
  imageSrc?: string; // The primary image URL
  secondImageSrc?: string; // The optional second image URL (for toggling images)
  title: string; // Title of the workshop
  company: string; // Company hosting the workshop
  description: string; // Description of the workshop or panel
  registrationLink?: string; // Link to the registration form (optional)
  speakers?: string[];
  disabled?: boolean;
}
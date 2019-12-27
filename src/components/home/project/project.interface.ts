export interface ProjectProps {
  /** Name of the project. */
  title: string;
  /** Description of the project. */
  summary: string;
  /** Link to public repository. */
  repo?: string;
  /** Link to public hosted website. */
  website?: string;
  /** Source location for image. */
  src?: string;
  /** Technology used in the project. */
  technology?: {
    category: string;
    list?: string[];
  }[];
}

export interface Config {
  template: string;
  categories?: Category[];
  'version-template'?: string;
  replacers?: Replacer[];
}
interface Category {
  title: string;
  labels?: string[];
  'collapse-after'?: number;
}
interface Replacer {
  search: string | RegExp;
  replace: string;
}

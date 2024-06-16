import {
  StyleConfig,
  LayoutConfig
} from './index';


/**
 * Optional args to be passed in to Hero component.
 */
export interface HeroConfig {
  content?: {
    title?: string,
    description?: string,
  },
  dataRole?: {
    wrapper?:  string,
    title?: string,
    description: string,
  },
  layout ?: keyof LayoutConfig | '1x1', // 1x1, 1x2, 2x1, 2x2
  style ?: StyleConfig,
  children?: React.ReactNode,
};

/**
 * Required args to be passed in to Hero component.
 */
export interface HeroDefault {
  content: {
    title: string,
    description: string,
  },
  dataRole: {
    wrapper: string,
    title: string,
    description: string,
  },
  layout: keyof LayoutConfig | '1x1', // 1x1, 1x2, 2x1, 2x2
  style: StyleConfig,
  children?: React.ReactNode,
};
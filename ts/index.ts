import * as plugins from './weblogo.plugins';

export interface IWebLogo {
  svgBanner: string;
  svgSquared: string;
  favIcon: string;

}

/**
 * this class will expose the right urls for any needed logo variant within web projects
 */
export class WebLogo implements IWebLogo {
  svgBanner: string;
  svgSquared: string;
  favIcon: string;
  constructor(baseUrl: string) {
    
  }
}
/**
 * Analytics Configuration
 *
 * This file reads environment variables to configure optional analytics services.
 * In a framework like Next.js, these would be set in a `.env.local` file.
 *
 * Example .env.local:
 * NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
 */

// NOTE: `process.env` is not available by default in this client-side setup.
// The code is written to be compatible with frameworks that support it.
declare var process: {
  env: {
    [key: string]: string | undefined
  }
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/**
 * Checks if Google Analytics is enabled by the presence of its tracking ID.
 * @returns {boolean} True if Google Analytics is enabled.
 */
export const isGAEnabled = (): boolean => !!GA_TRACKING_ID;

/**
 * Checks if Plausible Analytics is enabled by the presence of its domain.
 * @returns {boolean} True if Plausible is enabled.
 */
export const isPlausibleEnabled = (): boolean => !!PLAUSIBLE_DOMAIN;

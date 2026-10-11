// Prefix for root-absolute URLs when the app is served under a sub-path
// (set BASE_PATH at build time, e.g. /proxy/8675 on SageMaker).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const withBase = (p: string): string => (p.startsWith('/') ? BASE_PATH + p : p);

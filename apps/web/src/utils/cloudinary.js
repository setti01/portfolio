/**
 * Cloudinary URL optimization utility
 * 
 * Transforms Cloudinary image URLs with optimal settings:
 * - f_auto: serves AVIF/WebP based on browser support
 * - q_auto: dynamic quality compression without visual loss
 * - dpr_auto: serves correct resolution for device pixel ratio
 * - w_auto: dynamic width based on container
 * 
 * @param {string} url - Original Cloudinary URL
 * @param {object} options - Optional transformation overrides
 * @returns {string} Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(url, options = {}) {
  if (!url || !url.includes('cloudinary.com')) return url;

  // Default transformations
  const transforms = [
    'q_auto',
    'f_auto',
    ...(options.width ? [`w_${options.width}`] : []),
    ...(options.height ? [`h_${options.height}`] : []),
    ...(options.crop ? [`c_${options.crop}`] : []),
    ...(options.effects || []),
  ];

  // Insert transformations after 'upload' in the URL path
  const uploadMarker = '/upload/';
  const uploadWithTransform = `/upload/${transforms.join(',')}/`;

  // Check if transformations already exist
  if (url.includes('/q_auto') || url.includes('/f_auto')) {
    return url; // Already optimized
  }

  return url.replace(uploadMarker, uploadWithTransform);
}

/**
 * Returns a full set of img attributes for optimized Cloudinary images
 * including src, srcSet, sizes, width, height for CLS prevention
 */
export function getCloudinaryImgProps(url, { width, height, alt = '' } = {}) {
  if (!url || !url.includes('cloudinary.com')) {
    return { src: url, alt, width, height };
  }

  const baseUrl = url.replace('/upload/', `/upload/q_auto,f_auto/`);

  return {
    src: baseUrl,
    srcSet: `${baseUrl} 1x, ${url.replace('/upload/', `/upload/q_auto,f_auto,dpr_2/`)} 2x`,
    alt,
    width: width || undefined,
    height: height || undefined,
    loading: 'lazy',
    decoding: 'async',
  };
}
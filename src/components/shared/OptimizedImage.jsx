import React from 'react';

/**
 * Componente de Imagem Otimizado para Vite / React SPA
 * Proporciona prevenção de CLS (dimensões explícitas), suporte a WebP/AVIF,
 * carregamento preguiçoso (lazy loading) e priorização para LCP.
 */
function OptimizedImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  loading,
  decoding = 'async',
  sizes,
  ...rest
}) {
  if (!src) return null;

  // Garantir fallback para versão .webp se a string contiver .png
  const webpSrc = src.replace(/\.png$/i, '.webp');
  const isWebp = webpSrc.endsWith('.webp');

  const computedLoading = loading || (priority ? 'eager' : 'lazy');
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <picture>
      {isWebp && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
      <img
        src={webpSrc}
        alt={alt}
        width={width}
        height={height}
        loading={computedLoading}
        // @ts-expect-error fetchpriority é suportado em navegadores modernos e pelo Chrome DevTools
        fetchpriority={fetchPriority}
        decoding={decoding}
        className={className}
        {...rest}
      />
    </picture>
  );
}

export default React.memo(OptimizedImage);

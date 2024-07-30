import { useEffect } from 'react';

const useViewportMetaTag = (targetWidth) => {
  useEffect(() => {
    const deviceWidth = window.innerWidth;
    const initialScale = deviceWidth / targetWidth;

    const viewport = document.querySelector("meta[name=viewport]");
    const originalContent = viewport ? viewport.getAttribute("content") : null;

    if (viewport) {
      viewport.setAttribute(
        "content",
        `width=${targetWidth}, initial-scale=${initialScale}, maximum-scale=1.0, user-scalable=yes`
      );
    } else {
      const newViewport = document.createElement("meta");
      newViewport.name = "viewport";
      newViewport.content = `width=${targetWidth}, initial-scale=${initialScale}, maximum-scale=1.0, user-scalable=yes`;
      document.head.appendChild(newViewport);
    }

    return () => {
      if (viewport && originalContent) {
        viewport.setAttribute("content", originalContent);
      } else if (viewport) {
        viewport.remove();
      }
    };
  }, [targetWidth]);
};

export default useViewportMetaTag;

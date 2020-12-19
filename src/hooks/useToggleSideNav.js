import { useEffect, useCallback } from 'react';

export const useToggleSideNav = (ref, handler) => {

  handler = useCallback((e) => e, []);

  useEffect(
    () => {
      const clickListener = event => {
        // Do action if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        } else {
          handler(event);
          console.log(event)
        }
      };

      document.addEventListener('mousedown', clickListener);
      document.addEventListener('touchstart', clickListener);

      return () => {
        document.removeEventListener('mousedown', clickListener);
        document.removeEventListener('touchstart', clickListener);
      };
    },
    // Add ref and toggleSideNav to effect dependencies
    // It's worth noting that because passed in toggleSideNav is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap toggleSideNav in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

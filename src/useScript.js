import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    async function loadScript() {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }
    loadScript();
  }, [url]);
};

export default useScript;

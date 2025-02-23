import { useEffect } from 'react';

import AppRoutes from './Root/Layout/Routes';

function App() {



  const importAllCSS = async () => {
    const cssModules = import.meta.glob("./styles/*.css");
    for (const path in cssModules) {
      await cssModules[path]();
    }
  };

  console.log('from ahmad');

  useEffect(() => {
    importAllCSS();

  }, []);


  return (
    <AppRoutes />
  );
}

export default App;

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from 'theme/GlobalStyle';
import ThemeProvider from 'theme/Provider';
import Layout from 'components/Layout';
import Hours from 'components/Hours';

const root = document.getElementById('root') as HTMLElement;

const queryClient = new QueryClient();

function main() {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Layout>
            <Hours />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}

console.log('import.meta.env.VITE_MSW', import.meta.env.VITE_MSW)

if (import.meta.env.VITE_MSW) {
  console.log('Run mocks');
  import('api/handler').then(main).catch(() => {
    console.error('MSW in not loading');
  });
} else {
  console.log('Run Remote API');
  main();
}

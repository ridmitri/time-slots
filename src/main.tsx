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

import 'api/handler';

const root = document.getElementById('root') as HTMLElement;

const queryClient = new QueryClient();

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

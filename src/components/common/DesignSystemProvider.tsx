import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

interface DesignSystemProviderProps {
  children: ReactNode;
}

const DesignSystemProvider = ({ children }: DesignSystemProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default DesignSystemProvider;

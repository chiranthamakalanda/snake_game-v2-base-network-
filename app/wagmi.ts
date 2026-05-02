// app/wagmi.ts
import { http, createConfig, createStorage, cookieStorage } from 'wagmi';
import { base } from 'wagmi/chains';
import { injected, baseAccount } from 'wagmi/connectors';

export const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    baseAccount({
      appName: 'Snake Game',
    }),
  ],
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
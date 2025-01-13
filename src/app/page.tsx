"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReduxProvider from "@/core/providers/ReduxProvider";
import WeatherComponent from "@/shared/components/WeatherComponent";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <WeatherComponent />
      </ReduxProvider>
    </QueryClientProvider>
  );
}

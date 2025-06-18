"use client"
import {QueryProviderProps} from "@/interfaces/IQueryProvider";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {useState} from "react";

const QueryProvider = ({children} : QueryProviderProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}
export default QueryProvider

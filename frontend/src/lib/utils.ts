import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import useSWR, { SWRResponse } from 'swr'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useFetch(input: string | URL | globalThis.Request, init?: RequestInit): SWRResponse {
  const fetcher = () => fetch(input, init).then(res => res.json())
  return useSWR(input, fetcher)
}

export enum FetchMethod {
  POST = 'POST'
}

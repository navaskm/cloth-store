import type { Product } from "@/lib/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  const payload = (await response.json()) as ApiResponse<T>;
  if (!payload.success) {
    throw new Error(payload.message ?? "API request failed");
  }
  return payload.data;
}

function queryString(params: Record<string, string | undefined>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) search.set(key, value);
  }
  const value = search.toString();
  return value ? `?${value}` : "";
}

export function getProducts(options: {
  query?: string;
  category?: string;
  sort?: string;
} = {}): Promise<Product[]> {
  return request<Product[]>(`/products${queryString({
    q: options.query,
    category: options.category,
    sort: options.sort,
  })}`);
}

export function getProductBySlug(slug: string): Promise<Product> {
  return request<Product>(`/products/${encodeURIComponent(slug)}`);
}

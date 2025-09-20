// src\utils\slug.ts
export function slugify(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')   // remove non-alphanumerics
        .replace(/\s+/g, '-')           // spaces -> hyphens
        .replace(/-+/g, '-');           // collapse multiple hyphens
}

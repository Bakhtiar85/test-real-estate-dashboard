// src\router.ts
import { Route } from "./types-interfaces/types";

export function parseHash(): Route {
    const hash = window.location.hash.slice(1); // remove '#'
    if (hash.startsWith("/property/")) {
        const slug = hash.replace("/property/", "");
        return { page: "details", slug };
    }
    return { page: "list" };
}

export function goToList() {
    window.location.hash = "/";
}

export function goToDetails(slug: string) {
    window.location.hash = `/property/${slug}`;
}
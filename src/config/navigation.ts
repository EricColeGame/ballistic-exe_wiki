export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "trailer", path: "/trailer", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "versions", path: "/versions", isContentType: true },
  { key: "comparison", path: "/comparison", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

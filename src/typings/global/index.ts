export interface TaskContextType {
    scrollPercentage: number;
    direction: string;
}

export interface ContextProps {
    children: React.ReactNode;
    percentage: number;
}

export interface image {
    src: string;
    alt: string;
}

export interface HoverAnimationProps {
    backgroundImg: image;
    hoverImg: image;
    onHover?: () => void;
}
export interface TaskContextType {
    scrollPercentage: number;
    direction: string;
}

export interface ContextProps {
    children: React.ReactNode;
    percentage: number;
}
type TodoStatus = "todo" | "doing" | "done";
type TodoColors =
  | "inter"
  | "red"
  | "pink"
  | "purple"
  | "deep"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "light-green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deep-orange"
  | "brown";
  
export interface Todo {
  id?: number;
    title?:string;
    description?:string;
    status?:TodoStatus;
    color?: TodoColors
}

export interface CardProps extends Todo {
  onSave?: (todo: Todo) => void;
  onDelete?: () => void;
  onComplete?: () => void;
}
        

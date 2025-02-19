export type User = {
    id: number;
    name: string;
    age: number;
    tasks: Task[];
};

export type Task = {
    id: number;
    name: string;
    done: boolean;
};

export const users: User[] = [
    {
        id: 1,
        name: "John",
        age: 30,
        tasks: [
            { id: 1, name: "Task 1", done: false },
            { id: 2, name: "Task 2", done: false },
        ],
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        tasks: [
            { id: 1, name: "Task 2", done: false },
            { id: 2, name: "Task 2", done: false },
        ],
    },
];

import { NextRequest, NextResponse } from 'next/server';


export function GET(request: Request, response: Response) {
    const Tasks = [
        {
            id: 1,
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            completed: false
        },
        {
            id: 2,
            title: "Task 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            completed: false
        },
        {
            id: 3,
            title: "Task 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            completed: false
        }
    ];

    return NextResponse.json(Tasks);
}
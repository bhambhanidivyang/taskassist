import {Task} from './Task';

interface TaskListProps {
    tasks: {name:string; completed:boolean}[]
    onDelete: (index: number) => void,
    onComplete: (index: number) => void,
    onEdit: (index: number, newName: string) => void
}

export const TaskList = ({tasks, onDelete, onComplete, onEdit}: TaskListProps) => {
    return (
        <>
            <div className="rounded-t-lg text-center p-4">
                <div className="text-left max-w-xl rounded mx-auto gap-6 space-y-4">
                    {tasks.map((task, index) => (
                        <Task task={task} key={index} index={index} onDelete={onDelete} onComplete={onComplete} onEdit={onEdit} />
                    ))}
                </div>
            </div>
        </>
    )
}
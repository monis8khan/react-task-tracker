import { Button } from "./elements/Button"

export const Task = ({ task }) => {
    return (
        <div className="flex flex-row border-t-2 border-dashed last:border-b-2">
            <h1 className="text-white text-lg font-bold p-5 w-1/2">{task.name}</h1>
            <div className="flex justify-end w-1/2">
                <Button add_classes={"font-bold my-auto border-2 rounded-3xl"}></Button>
            </div>
        </div>
    )
}

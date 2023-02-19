import TaskType from "./TaskType";

interface ListType {
    id: number;
    name: string;
    description: string;
    dateCreated: string;
    listItems: Array<TaskType>
};
export default ListType;
import ListType from "./ListType";

interface FetchTodoList {
    status: boolean;
    items: Array<ListType>
};

export default FetchTodoList;
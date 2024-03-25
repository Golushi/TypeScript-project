import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
}
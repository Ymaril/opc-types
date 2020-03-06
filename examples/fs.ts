import { list, isDirectory } from "filesystem";

// ! Note: you should specify ` this: void `
// ! to tell tstl that you don't need a self parameter here.
// ! You can also use @noSelf directive.
function printFiles(this: void, path: string) {
    let [nodes, error] = list(path);
    if (nodes == null) {
        print(error);
        return;
    }
    for (let node of nodes) {
        if (isDirectory(node)) printFiles(node);
        else print(node);
    }
}

printFiles("/home");

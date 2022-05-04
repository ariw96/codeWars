function reduce(head, f, init) {
    let arr = [];
    while (head !== null) {
        arr.push(head.data)
        head = head.next;

    }
    return arr.reduce(f, init);
}
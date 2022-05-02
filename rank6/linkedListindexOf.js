function indexOf(head, value) {
    let arr = [];
    while (head !== null) {
        if (head.data === value) { return arr.length } else {
            arr.push(head.data);
            head = head.next;
        }
    }
    return -1;
}
function indexOf(head, value) {
    let arr = [];
    let result = -1;
    while (head !== null) {
        if (head.data === value) { result = arr.length } else {
            arr.push(head.data);
            head = head.next;
        }
    }
    return result;
}
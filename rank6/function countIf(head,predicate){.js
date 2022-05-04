function countIf(head, predicate) {
    let count = 0;
    while (head !== null) {
        if (predicate(head.data) === head.data) {
            count++;
        }
        head = head.next;
    }
    return count
}
function filter(head, p) {

    while (head !== null) {
        if (p(head.data)) {
            return new Node(head.data, filter(head.next, p))
        } else { return filter(head.next, p) }
        head = head.next;

    }
    return null;
}
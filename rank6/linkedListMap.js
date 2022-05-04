function map(head, f) {

    while (head !== null) {
        return new Node(f(head.data), map(head.next, f)
        }
        return null;
    }
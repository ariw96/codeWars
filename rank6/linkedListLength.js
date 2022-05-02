function linked_list_length(head) {
    let arr = [];
    while (head != null) {
        arr.push(head.data);
        head = head.next;
    }
    return arr.length;
}
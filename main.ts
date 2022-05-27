import { ListNode } from "./LinkedLists/ListNode";


class Main {
    
    main(args?: string[]) {
        
        let head = new ListNode(3);
        let l1 = new ListNode(4);
        let l2 = new ListNode(5);
        let l3 = new ListNode(8);
        let l4 = new ListNode(7);

        head.next = l1
        l1.next = l2;
        l2.next = l3;
        l3.next = l4;

        // Delete ListNode "l2", l2.val = |5|
        l1.next=l3;
        l2.next = null;

        // Add 13 between l1.val = 4 and l3.val = 8
        let l5 = new ListNode(13);
        l1.next = l5;
        l5.next = l3;

        // |3|->|4|->|13|->|8|->|7|
        head.printLinkedList(head);

    }

}

const program = new Main();
program.main();
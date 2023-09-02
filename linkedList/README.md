# Linked List

# 1. What is LinkedList?
      ... LinkedList is a data Structure where it stores data as well as next element location. It contains nodes
      ... Each node in singly LinkedList contains two elements
            a. Value
            b. Pointer that shows to the memory address of next element;
      ... Each node in doubly LinkedList contains three elements
            a. Value
            b. Pointer that shows to the memory address of next element;
            c. Another pointer that shows the memory location of previous element

# 2. Benifit over List?
    ... In list if we add or remove an element its time complexity is O(n) --> it will re-index all the element in the list.
    But in LinkedList its time complexity is also O(n) but it more efficiant than list becuase it does'nt change the index of all the elements.
    LinkedList only iterate to the index location that we given.

# 3.  Time Complexities

               Methods                       Array                          Methods                          Linkded List
            ................           .......................          ................          ...............................
      1.       Push                           O(1)                         Append                                 O(1)  
      2.       unshift                        O(n)                         prepend                                O(1)

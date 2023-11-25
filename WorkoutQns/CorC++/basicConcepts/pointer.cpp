#include <iostream>

using namespace std;

struct Reactangle
{
  int length;
  int breadth;
};

int main()
{

  // pointer to a data

  cout << "pointer to a data" << endl;

  int a = 10; // data memory --> 10 is assigned to 'a' variable
  int *p;     // address memory --> p is a pointer, it is in stack, but the value inside the p is an address of another location;
  p = &a;     // assign the address of 'a' in p. so now p is the pointer to 'a'

  cout << a << endl;

  cout << p << endl;  // it prints the address of 'a' which is stored in p
  cout << *p << endl; // it prints the value in addresss that stored in p, ie it prints the value in 'a'

  // pointer to an array
  cout << "\npointer to an array" << endl;

  int A[5] = {2, 4, 6, 8, 10}; // this array is created inside the stack
  int *p1;
  p1 = A; // here assigning array to a pointer not need to add "&" sign because A already gives the address value of starting element in the array; if use '&' then write "p1=&A[0]";

  cout << A << endl;
  cout << p1 << endl;

  for (int i = 0; i < 5; i++)
  {
    cout << "Hi" << p1[i] << endl;
  };

  // pointer for array inside heap
  cout << "\npointer to an array inside heap" << endl;

  int *p2;
  p2 = new int[5]; // creating dynamic memory space in heap "new" is the keyword used for it
  p2[0] = 3;

  for (int j = 0; j < 5; j++)
  {
    cout << p2[j] << endl;
  };

  delete[] p2; // when ever you create a dynamic memeory you have to release that memory after using; here i am realeasing p2; it is called deallocating

  // different type pointer size
  cout << "\ndifferent type pointer size" << endl;

  int *p3;
  char *p4;
  float *p5;
  double *p6;
  struct Reactangle *p7;

  cout << sizeof(p3) << endl;
  cout << sizeof(p4) << endl;
  cout << sizeof(p5) << endl;
  cout << sizeof(p6) << endl;
  cout << sizeof(p7) << endl;

  // note: size of the pointer is independent of their data types;

  return 0;
};
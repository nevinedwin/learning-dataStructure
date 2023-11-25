#include <iostream>
using namespace std;

struct Rectangle
{
  int length;
  int breadth;
};

int main()
{

  //  assigning structure to a pointer
  cout << "assigning structure to a pointer" << endl;
  Rectangle r;

  r.length = 10;

  Rectangle *p = &r; // asigned it to a pointer

  p->breadth = 5; // we can access the structure using -> or (*p)

  cout << r.length << endl;
  cout << r.breadth << endl;

  cout << (*p).length << endl;
  cout << p->breadth << endl;

  // creating pointer for structure in heap
  cout << "\ncreating pointer for structure in heap" << endl;
  Rectangle *p1;
  p1 = new Rectangle;

  p1->length = 22;
  (*p1).breadth = 11;

  cout << (*p1).length << endl;
  cout << p1->breadth << endl;
};
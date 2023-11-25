#include <iostream>
using namespace std;

struct Rectangle
{
  int length;
  int breadth;
};

struct Test
{
  int A[5];
  int n;
};

int area(struct Rectangle r1)
{
  r1.length = 2;
  return r1.length * r1.breadth;
};

int areaReference(struct Rectangle &r1)
{
  r1.length = 2;
  return r1.length * r1.breadth;
};

int areaAddress(struct Rectangle *r1)
{
  r1->length = 3;
  return r1->length * r1->breadth;
};

void arrayByValue(struct Test t1)
{

  t1.A[0] = 2;
};

int main()
{
  Rectangle r = {0, 5};

  // pass by value
  cout << "pass by value" << endl;
  cout << "area " << area(r) << endl;
  cout << "length " << r.length << endl;

  // pass by reference
  cout << "\npass by reference" << endl;
  cout << "area " << areaReference(r) << endl;
  cout << "length " << r.length << endl;

  // pass by address
  cout << "\npass by Address" << endl;
  cout << "area " << areaAddress(&r) << endl;
  cout << "length " << r.length << endl;

  // passing array as value
  cout << "\npassing Array as value" << endl;
  Test t = {{1, 2, 3, 4, 5}, 5};

  cout << t.A[0] << endl;

  arrayByValue(t);
  cout << t.A[0] << endl;

  return 0;
};
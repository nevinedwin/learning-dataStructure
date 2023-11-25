#include <iostream>

using namespace std;

struct Rectangle
{
  int length;
  int breadth;
  char x;
};

int main()
{
  struct Rectangle r1;
  r1.length = 1;
  r1.breadth = 34;

  cout << r1.length << endl;
  cout << r1.breadth << endl;
  cout << sizeof(r1) << endl;

  struct Rectangle r2 = {10, 13};
  
  cout << r2.length << endl;
  cout << r2.breadth << endl;
  cout << sizeof(r2) << endl;

  return 0;
}
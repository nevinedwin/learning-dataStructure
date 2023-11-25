#include <iostream>
using namespace std;

// pass by value
void swap(int a, int b)
{
  int temp = a;
  a = b;
  b = temp;
};

// pass by address
void swapAddress(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
};

// pass by reference
void swapReference(int &a, int &b)
{
  int temp = a;
  a = b;
  b = temp;
};

int main()
{
  int x, y;
  x = 10;
  y = 20;

  // pass by value
  cout << "pass by value" << endl;
  swap(x, y);

  cout << "X " << x << endl;
  cout << "Y " << y << endl;

  // pass by address
  cout << "\npass by address" << endl;
  swapAddress(&x, &y);

  cout << "X " << x << endl;
  cout << "Y " << y << endl;

  // pass by reference
  cout << "\npass by reference" << endl;

  swapReference(x, y);

  cout << "X " << x << endl;
  cout << "Y " << y << endl;
};
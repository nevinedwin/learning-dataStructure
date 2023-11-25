#include <iostream>
using namespace std;

class Rectangle
{
public:
  int length;
  int breadth;

public:
  Rectangle(int l, int b)
  {
    length = l;
    breadth = b;
  };

  int area()
  {
    return length * breadth;
  };

  void changeLength(int l)
  {
    length = l;
  };

  ~Rectangle(){}; // releasing memory if dynamic memory is used
};

int main()
{

  Rectangle r(10, 15);

  cout << r.area() << endl;
  r.changeLength(20);
  cout << r.length << endl;
};

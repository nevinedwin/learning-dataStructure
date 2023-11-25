#include <iostream>
using namespace std;

// Normal class

class Arithametic
{
private:
  int a;
  int b;

public:
  Arithametic(int a, int b)
  {
    this->a = a;
    this->b = b;
  };

  int add()
  {
    return this->a + this->b;
  };

  int sub()
  {
    return this->a - this->b;
  };
};

// note: In the above class the class is only for int data type but we have to use the same class for different datatypes that type of class is called Generic classes .

template <class T>
class NewArithametic
{
private:
  T a;
  T b;

public:
  NewArithametic(T a, T b)
  {
    this->a = a;
    this->b = b;
  };

  T add()
  {
    return this->a + this->b;
  };

  T sub()
  {
    return this->a - this->b;
  };
};

int main()
{

  // declaring normal class
  Arithametic ar(10, 14);
  cout << ar.add() << endl;

  NewArithametic<int> ar1(20, 30);
  cout << ar1.add() << endl;


  NewArithametic<float> ar2(21.4, 33.4);
  cout << ar2.add() << endl;
};
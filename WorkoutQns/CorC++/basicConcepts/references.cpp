#include <iostream>
using namespace std;

int main(){

  int a = 10; // data variable
  int &r = a; // this r is reference. Which means another name for variable a. now we can access 10 by calling a or r.it is like giving some nick name of a person.

  cout << a << endl << r << endl;
};
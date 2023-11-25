#include <iostream>
using namespace std;

void sampleFun(int B[], int n)
{
  B[0] = 22;
};

int *sampleReturnFun(int n)
{

  int *p = new int[n];
  return p;
}

int main()
{

  int A[5] = {1, 2, 4, 5, 6};
  cout << "Array before modify" << endl;
  for (int i = 0; i < 5; i++)
  {
    cout << A[i] << endl;
  };

  cout << "\nAfter modified array" << endl;
  sampleFun(A, 5);
  for (int i = 0; i < 5; i++)
  {
    cout << A[i] << endl;
  };

  // Function return array;
  int *C;
  C = sampleReturnFun(5);

  cout << "\nArray in heap memory" << endl;
  for (int i = 0; i < 5; i++)
  {
    cout << C[i] << endl;
  };

  return 0;
}
#include <iostream>

using namespace std;

int main(){

  int A[10] = {2, 4, 6, 8, 10, 12, 14};

  // looping the array
  for(int i = 0; i < 10; i++){
    cout<<A[i]<<endl;
  };

  //looping the array in another way
  for(int x:A){
    cout<<x<<endl;
  };

  cout<<sizeof(A)<<endl;
  return 0;
}
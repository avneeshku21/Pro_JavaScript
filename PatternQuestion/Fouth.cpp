#include<iostream>
using namespace std;
int main()
{
    int row,clo;
    cout<<"Enter Row"<<endl;
    cin>>row;
    cout<<"Enter Col"<<endl;
    cin>>clo;
    for(int i=row; i>=1; i--)
    {
        for(int j=1; j<=clo; j++)
        {
cout<<i;

        }
        
        cout<<endl;
    }

}
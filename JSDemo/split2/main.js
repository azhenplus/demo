/**
 * Created by Administrator on 2016/10/27.
 */

function split2(str) {
    var arr=str.split("");
    var arr2=[];
    arr.forEach(function (item,index,arr) {
        if (index%2==0){
            item2=arr[index]+arr[index+1];
            arr2.push(item2);
        }
    });
    return arr2;
}
var str="123456";
var result=split2(str);
console.log(result);


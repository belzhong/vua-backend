var n = 5;
var arr = new vuaVector();
function queen( index ) {
  if( index === n ) {
    console.log( arr );//每次完成一种情况，输出数组；
  }else{
    for( var i = 0; i < n; ++i ) {
      arr[ index ] = i;//为第一行的皇后寻找位置，从0开始，直到7
      var flag = true;//这里主要是为判定可攻击性提供一个开关，如果在攻击范围内
      // 则不进入下一列，继续向下寻找，如果找到了合适的位置，则进入下一行
      for( var j = 0; j < index; ++j ) {
        //这里是为了判定攻击范围，把所有已经放置的皇后与当前放置的皇后做位置计算，如果在攻击范围内，flag为false，不在所有已经放置的皇后的攻击范围内，则不改变flag的属性：true
        if( arr[ index ] === arr[ j ] || arr[ index ] - arr[ j ] === index - j || arr[ index ] - arr[ j ] === j - index ) {
          flag = false;
          break;
        };
      };
      if( flag ) {
        //这里是根据flag的属性判定是否进入下一行的循环；
        queen( index + 1 );
      }
    }
  }

};
queen = addListener(queen);
queen( 0 );//从第0行进行试探

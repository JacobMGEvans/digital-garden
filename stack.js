function mutation(arr) {
        var arr1 = arr[0].split('');
        var arr2 = arr[1].split('');
        arr1 = arr1.map(v => v.toLowerCase());
        arr2 = arr2.map(v => v.toLowerCase());
          for (var i = 0; i <= arr2.length - 1; i++) {
                console.log(arr1)
            if (arr1.includes(arr2[i])) {
          }  else {
          return false;
           }
        return true;
          
        }
        }
        
        console.log(mutation(["hello", "hey"]))
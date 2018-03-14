//this script counts also signs in <...>
//this solution assumes that signs < and > occur only as html tags

s = '<p class="paragraph">Turnip greens yarrow ricebean rutabaga endive cauliflower sea  lettuce kohlrabi amaranth water <a href="https://www.google.pl/search?q=spinach" class="link">spinach avocado daikon Skartoffel napa cabbage <c>asparagus winter purslane kale. Celery potato scallion desert</c> raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize <span style="font-size: 19px;color: blue;">bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</span> Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>';

r = 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea  lettuce kohlrabi amaranth water';

console.log(s);

function openTagSeek(k, n){
    var a = k.search('<');
    if(a !== -1){
        var b = k.search('>');
        console.log('TEST2');
        if(b !== -1 && k.charAt(a+1)!=='/'){
            var l = k.substring(b+1, n);
            var m = openTagSeek(l, n-b);
            if(m===l || m.endsWith('>')===true){
                var x;
                if(k.substring(a,b+1).indexOf(' ') < k.substring(a,b+1).indexOf('>')){
                    x = k.substring(a,b+1).indexOf(' ');
                }else{
                    x = k.substring(a,b+1).indexOf('>');
                }
                console.log('-----'+k.substring(a, x)+'-----------');
                var p = closeTagSeek(m, k.substring(a+1, x));
                return k.substring(0, b+1) + p;
            };
        }else if(b !== -1 && k.charAt(a+1)==='/'){
            var o = k.substring(b+1, n);
            var r = openTagSeek(o, n-b);
            return k.substring(0, b+1) + r;
        }else{return k.substring(0,a)};
    }else{return k};
}
function closeTagSeek(m, tag){
    var d = m.search('</' + tag + '>');
    if(d===-1){
        return m + '</' + tag + '>';
    }else{
        return m;
    }
}

function fullWord(s,n){
    var k;
    if (s.length > n && n > 3) {
        k=s.substring(0, n-3).lastIndexOf(" ");

        return s.substring(0, k);
    } else if (s.length > n && n <= 3) {
        return s.substring(0, n);
    } else {
        return s;
    }
}

var n = 310;

var m = fullWord(s,n-3);
var j = openTagSeek(m, n-3);
console.log(j);

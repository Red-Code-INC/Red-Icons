var elements = document.querySelectorAll('#alt');
for(var i=0,l=elements.length;i<l;++i) {

    var str = elements[i].textContent;
    elements[i].innerHTML = '';

    for(var j=0,ll=str.length;j<ll;++j) {
        var n = document.createElement('span');
        elements[i].appendChild(n);
        n.textContent = str[j];
        n.style.color = (j % 2) ? 'white' : 'black';
    }
}
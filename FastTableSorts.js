function revisedSortTable(){
    var table, rows, switching, i, j, x, y, ai, aj, bi, bj, si, sj, xi, xj, shouldSwitch;
    table = document.getElementById("totable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[11];
            y = rows[i + 1].getElementsByTagName("TD")[11];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
	for (i = 1; i < (rows.length - 1); i++) {
        for (j = i + 1; j < (rows.length); j++) {
            ai = rows[i].getElementsByTagName("TD")[11];
            aj = rows[j].getElementsByTagName("TD")[11];
            bi = rows[i].getElementsByTagName("TD")[12];
            bj = rows[j].getElementsByTagName("TD")[12];
			si = rows[i].getElementsByTagName("TD")[13];
			sj = rows[j].getElementsByTagName("TD")[13];
			xi = rows[i].getElementsByTagName("TD")[14];
			xj = rows[j].getElementsByTagName("TD")[14];
            if (Number(ai.innerHTML) == Number(aj.innerHTML) && isOdd(Number(ai.innerHTML)) == true) {
                if (Number(bi.innerHTML) > Number(bj.innerHTML)) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
          	if (Number(ai.innerHTML) == Number(aj.innerHTML) && isOdd(Number(ai.innerHTML)) == false) {
                if (Number(bi.innerHTML) < Number(bj.innerHTML)) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);

                }
            }
        }
    }
}
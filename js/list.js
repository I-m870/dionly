//布局
var $bush = $.ajax({
	type: "get",
	url: 'http://127.0.0.1/dionly/php/list.php',
	async: true,
}).done(function(res) {
	//	console.log(typeof JSON.parse( res )  )
	var obj = JSON.parse(res);
	var str = "";
	for(var i = 0 ; i <= 1 ; i++){
	for(var arr in obj) {
		str += `<div class="wraperitem">
					<div class="itemimg">
						<a href="http://127.0.0.1/dionly/detailspage.html?id=${obj[arr].id}" target="_blank" title="${obj[arr].itemname}"><img src="${obj[arr].itemimg}" title="${obj[arr].itemname}" alt="${obj[arr].itemname}"></a>
					</div>
					<div class="itemname">
						<a href="http://127.0.0.1/dionly/detailspage.html?id=${obj[arr].id}" target="_blank" title="${obj[arr].itemname}">${obj[arr].itemname}</a>
					</div>
					<div class="itemprice">
						<div class="pricemarket">市场价：<span class="pricemarketnum" style="text-decoration:line-through;">￥ ${obj[arr].pricemarket}.00</span></div>
						<div class="pricemember">商城价：<span class="pricemembernum">￥ ${obj[arr].pricemember}.00</span></div>
					</div>
				</div>`;
	}
	$("#jietuolist").html(str);
}
})
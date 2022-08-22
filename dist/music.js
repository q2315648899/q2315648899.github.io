  var ap = new APlayer({
    element: document.getElementById('aplayer'),
    narrow: false,
	fixed: true,
    /*自动播放，默认值为false，true为开启自动播放*/
    autoplay: false,
    mutex: true,
	lrcType: 3,
});
	$.ajax({
	// 你的歌单id
	url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=7601335521',
	success: function (list) {
	ap.list.add(list);
	}
});
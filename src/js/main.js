var epocTime = votingEndDays + ' ' + votingEndTime;
var endDate = new Date (epocTime);
var endsEpocTime = endDate.getTime();
var nowDateTime = new Date();
var nowEpocTime = nowDateTime.getTime();
var cookie = document.cookie.split(';');
for (const c of cookie) {
    if (c.split('=')[0] == COOKIE_NAME) {
        songListNo = c.split('=')[1];
    }
}

window.onload = function(){
    if (nowEpocTime >= endsEpocTime) {
        //サ終メッセージを表示
        document.getElementById('votingJp').innerHTML = messageStrJp;
    } else {
        //楽曲プルダウンリストを作成
        createSongList();
        //投票終了日を表示
        document.getElementById('endDate').innerHTML = votingEndDate();
        document.getElementById('move').innerHTML = mvEmbedList[songListNo];
    }
}

function votingEndDate() {
    //投票終了日フォーマット
    var dayOfTheWeek = new Date(epocTime);
    var DateTimeArray = [''];
    DateTimeArray.push(dayOfTheWeek.getFullYear());
    DateTimeArray.push('年');
    DateTimeArray.push(dayOfTheWeek.getMonth()+1);
    DateTimeArray.push('月');
    DateTimeArray.push(dayOfTheWeek.getDate());
    DateTimeArray.push('日');
    DateTimeArray.push('(');
    DateTimeArray.push(days[dayOfTheWeek.getDay()]);
    DateTimeArray.push(') ');
    DateTimeArray.push(votingEndTime.substring(0, 5));
    DateTimeArray.push('まで');
    return DateTimeArray.join('');
} 

function createSongList() {

    //select要素を取得する
    var select = document.getElementById('songList');
    for(var i = 0; i < songList.length; i++) {
        //option要素を新しく作る
        var option = document.createElement('option');
        //option要素にvalueと表示名を設定
        option.value = i;
        option.textContent  = songList[i];
        //select要素にoption要素を追加する
        select.appendChild(option)
    }
    select.options[songListNo].selected = true;
    document.getElementById('move').innerHTML = mvEmbedList[songListNo];
}

function selectSong(){
    var select = document.getElementById('songList');
    songListNo = select.selectedIndex;
    document.getElementById('move').innerHTML = mvEmbedList[songListNo];
}

function post() {
    // 新しいタブでポスト画面を開く
    document.cookie = COOKIE_NAME+'='+songListNo+MAX_AGE+LIMIT;
    // document.cookie = COOKIE_NAME+'='+songListNo;
    createVoteMes(POST);
}

function dm() {
    // 新しいタブでDM画面を開く
    createVoteMes(DM);
}

function createVoteMes(btn) {
    var postArray;
    if (btn == POST) {
        // POSTボタン押下時
        postArray = ['https://twitter.com/intent/tweet?&text='];
    } else if (btn == DM) {
        // DMボタン押下時
        postArray = ['https://twitter.com/messages/compose?recipient_id=100786821&text='];
    }
    // 投票文の組立
    var asciiArray = ['（千代浦蝶美）さんの『'];
    asciiArray.push(songList[songListNo]);
    asciiArray.push('』に投票します！\n');

    // ハッシュタグを追加
    for(var i = 0; i < hashTagsList.length; i++) {
        asciiArray.push(hashTagsList[i]);
    }
    
    // MVリンクのチェック
    if (btn == POST) {
        if (document.mvLinkForm.elements[0].checked) {
            asciiArray.push('\n');
            asciiArray.push(mvLinkList[songListNo]);
        }
    }

    postArray.push(encodeURIComponent(asciiArray.join('')));
    window.open(postArray.join(''));
}
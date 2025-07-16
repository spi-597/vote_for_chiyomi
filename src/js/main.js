var epocTime = votingEndDays + 'T' + votingEndTime;
var endDate = new Date (epocTime);
var endsEpocTime = endDate.getTime();
var nowDateTime = new Date();
var nowEpocTime = nowDateTime.getTime();
var cookie = document.cookie.split(';');
var lastVoteDate;
for (const c of cookie) {
    if (c.split('=')[0].trimStart() == COOKIE_SONG_UPDATE) {
        songListNo = c.split('=')[1];
    }
    if (c.split('=')[0].trimStart() == COOKIE_LAST_VOTE_DATE) {
        lastVoteDate = c.split('=')[1];
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

    return dayOfTheWeek.getFullYear() + '年' + (dayOfTheWeek.getMonth()+1) + '月' 
        + dayOfTheWeek.getDate() + '日' + '(' + days[dayOfTheWeek.getDay()] 
        + ') ' + votingEndTime.substring(0, 5) + 'まで'
} 

function votingDate() {
    //投票日
    var dayOfTheWeek = new Date();
    return dayOfTheWeek.getFullYear() + '/' + (dayOfTheWeek.getMonth()+1) + '/' + dayOfTheWeek.getDate();
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
    document.cookie = COOKIE_SONG_UPDATE+'='+songListNo+MAX_AGE+LIMIT;
}

function post() {
    // 新しいタブでポスト画面を開く
    createVoteMes(POST);
}

function dm() {
    // 新しいタブでDM画面を開く
    createVoteMes(DM);
}

function createVoteMes(btn) {

    var nowDate = votingDate();
    if (lastVoteDate == nowDate) {
        if(!window.confirm('本日は既に投票ボタンを押されているようです。\r\n複数投票は無効になりますのでご注意ください。')) {
            return;
        }
    }

    document.cookie = COOKIE_LAST_VOTE_DATE+'='+nowDate+MAX_AGE+LIMIT;

    var postArray;
    if (btn == POST) {
        // POSTボタン押下時
        postArray = ['https://twitter.com/intent/tweet?&text='];
    } else if (btn == DM) {
        // DMボタン押下時
        postArray = ['https://twitter.com/messages/compose?recipient_id=100786821&text='];
    }
    // 投票文の組立
    var asciiArray = ['(千代浦蝶美)さんの『'];
    asciiArray.push(songList[songListNo]);
    asciiArray.push('』に投票します！\n');

    // ハッシュタグを追加
    for(var i = 0; i < oddHashTagsList.length; i++) {
        if(nowDateTime.getDate() % 2 !== 0) {
            asciiArray.push(oddHashTagsList[i]);
        } else {
            asciiArray.push(evenHashTagsList[i]);
        }
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
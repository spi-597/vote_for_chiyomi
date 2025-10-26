// 終了日
var votingEndDays //= '2026-09-06';
var votingEndTime = '23:59:59.999';

// 楽曲更新日
const COOKIE_SONG_UPDATE = 'newSong_20250205';

// 前回投票日
const COOKIE_LAST_VOTE_DATE = "lastVoteDate"

// 楽曲リスト
const songList = new Array(
    '夢追いの蝶'
    , 'Butterfly Dream'
);    

// ポスト埋め込みURLリスト
const mvEmbedList = new Array(
    '<iframe id="moveFrame" class="moveFrame" src="https://www.youtube.com/embed/YRXxEyReOm0?si=W4gRLRDR5IuY19aL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ,'<iframe id="moveFrame" class="moveFrame" src="https://www.youtube.com/embed/rBXvnL-T8_s?si=5lcoV9ZijoP_lRki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
);    

// 埋め込みMV URLリスト
const mvLinkList = new Array(
    'https://youtu.be/YRXxEyReOm0?si=fjvgWnrM1SRoM3if'
    ,'https://youtu.be/rBXvnL-T8_s?si=fFETrNwx_Y2MX_dh'
);    

// ハッシュタグリスト
const oddHashTagsList = new Array(
    '#ミューコミVR '
    , '#VTuber楽曲ランキング'
);

const evenHashTagsList = new Array(
    '#VTuber楽曲ランキング '
    , '#ミューコミVR'
);

// 以下更新無い予定/////////////////////////////////////////////////////////////////////////////////

// Cookie保持期間
const LIMIT = '604800';
// const LIMIT = '10';
const MAX_AGE = ';max-age=';

// 曜日リスト
const days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

// その他
const POST = 'post'
const DM = 'dm'
const messageStrJp = '投票期間終了に伴いサービスを終了いたしました。<br>御利用頂きありがとうございました。<br><br>管理人(Admin):    <a href= \"https://x.com/spi_milkprinces\" target=\"_blank\" >スピ(X:旧Twitter)</a>';
var songListNo = 0;

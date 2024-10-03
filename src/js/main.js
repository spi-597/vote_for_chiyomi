function post() {
    // テキストをクリップボードにコピーする
    copyToClipboard();

    // 新しいタブでポスト画面を開く
    window.open('https://twitter.com/intent/post?&text=%EF%BC%88%E5%8D%83%E4%BB%A3%E6%B5%A6%E8%9D%B6%E7%BE%8E%EF%BC%89%E3%81%95%E3%82%93%E3%81%AE%E3%80%8EButterfly+Dream%E3%80%8F%E3%81%AB%E6%8A%95%E7%A5%A8%E3%81%97%E3%81%BE%E3%81%99%EF%BC%81%0D%0A%23VTuber%E6%A5%BD%E6%9B%B2%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0+%23%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B3%E3%83%9FVR');
}
function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("copyTarget");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
}
function dm() {
    // 新しいタブでポスト画面を開く
    window.open('https://twitter.com/messages/compose?recipient_id=100786821&text=%EF%BC%88%E5%8D%83%E4%BB%A3%E6%B5%A6%E8%9D%B6%E7%BE%8E%EF%BC%89%E3%81%95%E3%82%93%E3%81%AE%E3%80%8EButterfly+Dream%E3%80%8F%E3%81%AB%E6%8A%95%E7%A5%A8%E3%81%97%E3%81%BE%E3%81%99%EF%BC%81%0D%0A%23VTuber%E6%A5%BD%E6%9B%B2%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0+%23%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B3%E3%83%9FVR');
}

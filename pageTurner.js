document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const pages = book.getElementsByClassName('page');
    let currentPage = 0;
  
    turnPage();
  
    // 前へボタンのイベントリスナー
    document.getElementById('prevButton').addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped'); // めくられたページのflippedクラスを削除
        turnPage();
      }
    });
  
    // 次へボタンのイベントリスナー
    document.getElementById('nextButton').addEventListener('click', () => {
      if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
        turnPage();
      }
    });
  
    function turnPage() {
      // すべてのページのz-indexをリセット
      Array.from(pages).forEach(page => page.style.zIndex = 0);
  
      // 現在のページに.currentクラスを追加
      pages[currentPage].classList.add('current');
      pages[currentPage].style.zIndex = 2;
  
      // めくられたページに.flippedクラスを追加
      if (currentPage > 0) {
        pages[currentPage - 1].classList.add('flipped');
        pages[currentPage - 1].style.zIndex = 1;
      }
  
      // 最後のページが一瞬表示される問題を解決するために、
      // アニメーションが完了するまで待機してからページの内容を切り替える
      setTimeout(() => {
        // ここにページの内容を切り替えるコードを追加
      }, 800); // 0.9秒後に実行
    }
  });
  
  
  
  
  
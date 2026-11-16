const news = document.querySelector("#news");

const lists = [
    {
        category: "イベント",
        images: ["IMG_3782.JPG"], // 複数の画像を配列で
        title: "6月に大学内でBBQを開催しました",
        date: "2024.10.11",
        detail1: "6月29日に大学内の敷地でBBQ懇親会が開催されました。BBQだけでなくフリスビーや野球道具を使い体を動かして楽しみました。",
        detail2:"6月29日に大学内の敷地でBBQ懇親会が開催されました。BBQだけでなくフリスビーや野球道具を使い体を動かして楽しみました",
    },
    {
        category: "イベント",
        images: ["about_main.jpeg", ],
        title: "夏休み出張Jゼミが開催しました",
        date: "2024.10.11",
        detail1: "8月21日に江別蔦屋書店で出張Jゼミを開催しました。スターバックスコーヒーで先生と生徒2名でデザイン道場の公式サイト作りの会議が行われました。",
        detail2:" 8月21日に江別蔦屋書店で出張Jゼミを開催しました。スターバックスコーヒーで先生と生徒2名でデザイン道場の公式サイト作りの会議が行われました。",
    },
    {
        category: "イベント",
        images: ["IMG_5401.JPG"],
        title: "蒼天祭が始まりました",
        date: "2024.10.11",
        detail1: "10月11日に蒼天祭が始まりました。22時半まで残り装飾や作品制作をしていました。",
        detail2:"10月11日に蒼天祭が始まりました。22時半まで残り装飾や作品制作をしていました。",
    },
];

// 記事を生成して表示
lists.forEach((item, index) => {
    const { category, images, title, date, detail1,detail2 } = item;

    const content = `
        <div class="article">
            <img src="img/${images[0]}" alt="${title}">  <!-- 最初の画像を表示 -->
            <p class="date">${date}</p>
            <p class="category">${category}</p>
            <h2 class="title">${title}</h2>
            <p class="detail">${detail1}</p>
        </div>`;

    // 記事を挿入
    news.insertAdjacentHTML("beforeend", content);

    // 挿入後、記事にイベントを設定
    const article = news.lastElementChild; // 最後に追加された要素を取得
    article.addEventListener("click", () => {
         

        // ポップアップ内容を設定
        popupContent.innerHTML = `
            <div class="popup-inner">
                <h2 class="popup-title">${title}</h2>
                <p class="popup-date">${date}</p>
            <img class="popup-img" src="img/${images}" alt="${title}">
                <p class="popup-detail">${detail2}</p>
            </div>
        `;


        // ポップアップを表示
        overlay.style.display = "flex";
    });
});

// ポップアップ関連の要素を取得
const overlay = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

// 閉じるボタンにクリックイベントを追加
closePopup.addEventListener("click", () => {
    overlay.style.display = "none";
});

// オーバーレイのクリックで閉じる
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function adjustTableLayout() {
        const rows = document.querySelectorAll("#graph-wrapper tbody tr");

        rows.forEach((row) => {
            const th = row.querySelector("th");
            const td = row.querySelector("td");
            const tdSpan = row.querySelector("td span");

            if (th && td && tdSpan) {
                const thWidth = th.getBoundingClientRect().width;
                const tdWidth = td.getBoundingClientRect().width;

                if (thWidth > tdWidth - 40) {
                    tdSpan.style.left = `${thWidth + 32}px`; // th の横 3vw の位置
                } else {
                    tdSpan.style.left = ""; // デフォルト位置に戻す
                }
            }
        });
    }

    // 初期調整
    adjustTableLayout();

    // リサイズ時に再調整
    window.addEventListener("resize", adjustTableLayout);
});

const qa1Array = [
    {
        question: "デザイン道場ゼミはどんなゼミですか？",
        answer: "学年学科の垣根を越えて、楽しく自分のペースで活動をしているＪゼミです！「自分のやりたいことに積極的にチャレンジする人」「デザインに関する制作ツールに触れ、学内外問わずコンペ等に参加できる人」が本Ｊゼミに所属する学生の目標です！"
    },
    {
        question: "Ｊゼミ（自主ゼミ）ってなんですか？",
        answer: "単位にはなりませんが、興味関心のあるテーマを学生と教員が一緒に学習するゼミです。学部・学科・学年が違う学生とも仲間になれる場です。"
    },
    {
        question: "デザイン道場ゼミに参加する方法は？",
        answer: "北海道情報大学に所属する学生なら、学部学科・学年関係なく誰でも参加可能です！お気軽に近澤先生のメールアドレス“chikazawa@do-johodai.ac.jp”からお問い合わせください！"
    },
    {
        question: "いつ・どこで活動していますか？",
        answer: "通常は平日の曜日ごとに決まったコマで開講しています。場所は近澤研究室（３３０研究室）です。"
    }
];

const qaID1 = document.getElementById("qaID1");

qa1Array.forEach((qa1, index) => {
    // 質問（左側にアイコン）
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("qa-item", "question");
    questionDiv.innerHTML = `
        <img src="images/decoration/question.webp" alt="質問者">
        <p>${qa1.question}</p>
    `;

    // 回答（右側にアイコン）
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("qa-item", "answer");
    answerDiv.innerHTML = `
        <p>${qa1.answer}</p>
        <img src="images/decoration/answer.webp" alt="回答者">
    `;

    // コンテナに追加
    qaID1.appendChild(questionDiv);
    qaID1.appendChild(answerDiv);
});

const qa2Array = [
    {
        question: "近澤先生がデザイン道場ゼミを設立した理由を教えてください！",
        answer: "デザインを学ぶ人が将来クリエイティブ業界に入るには早い段階から準備が必要です。しかし、大学１、２年生は授業等で忙しいため、デザインを独学で学ぶにはハードルが高いです。デザインを学ぶ人同士交流することで相乗効果、学部学科の垣根を越えて交流して、コミュニティを作りたいと思い設立しました。"
    },
    {
        question: "デザイン道場ゼミに入る前に何か準備は必要でしょうか？また、これから北海道情報大学に入学する方へメッセージをお願いします！",
        answer: "今は自分が「楽しい！面白い！」と思うことに一生懸命取り組んでください。そして、もしそれがデザインに関係していたら是非デザイン道場ゼミへ来てください！"
    },
    {
        question: "近澤先生はなぜデザインの分野を研究されているのですか？",
        answer: "私は北海道情報大学の卒業生です！学生時代にデザインを学び、デザインという言葉の広さに驚き、さらに学びたいと考えました。また、一般企業に勤務していた時にデザインの視点が大事だと痛感したため、デザインやコミュニケーションといったキーワードを元に日々研究や勉強をしています。"
    },
    {
        question: "先生の趣味を教えてください！",
        answer: "趣味は廃墟巡りとアウトドアです。休日には家族でキャンプに行きます。最近は家庭菜園をやっています。初めて収穫したじゃがいもは肉じゃがやジャーマンポテトピザにしておいしく食べました。"
    },
    {
        question: "学生時代に取り組んでいたことを教えてください。",
        answer: "中学・高校はバトミントン部で、小学〜高校で和太鼓をしていました。大学では、実行委員会に所属して、体育祭や蒼天祭の運営を頑張っていました。"
    }
];

const qaID2 = document.getElementById("qaID2");

qa2Array.forEach((qa2, index) => {
    // 質問（左側にアイコン）
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("qa-item", "question");
    questionDiv.innerHTML = `
        <img src="images/decoration/question.webp" alt="質問者">
        <p>${qa2.question}</p>
    `;

    // 回答（右側にアイコン）
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("qa-item", "answer");
    answerDiv.innerHTML = `
        <p>${qa2.answer}</p>
        <img src="images/decoration/answer.webp" alt="回答者">
    `;

    // コンテナに追加
    qaID2.appendChild(questionDiv);
    qaID2.appendChild(answerDiv);
});
const daysLeft = document.getElementById("daysLeft");

if(daysLeft){
    const deadline = new Date("2026-07-10");
    const today = new Date();

    const diffTime = deadline - today;
    const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    daysLeft.textContent = "締切まであと " + diffDay + " 日";
}


const tasks = document.querySelectorAll(".task");
const progress = document.getElementById("progress");

if(progress){
    tasks.forEach(task => {
        task.addEventListener("change", updateProgress);
    });

    function updateProgress(){
        let checkedCount = 0;

        tasks.forEach(task => {
            if(task.checked){
                checkedCount++;
            }
        });

        const percent = Math.round((checkedCount / tasks.length) * 100);

        progress.textContent = "進捗率：" + percent + "%";
    }

    updateProgress();
}

const shuffleBtn = document.getElementById("shuffleBtn");
const result = document.getElementById("result");
const shuffleMessage = document.getElementById("shuffleMessage");

const members = ["ミュウ", "セキ", "マ", "ゴ", "マン"];

const roles = [

    "副リーダー",
    "議事録",
    "タイムキーパー",
    "進行",
];

shuffleBtn.addEventListener("click", function(){

    result.innerHTML = "";
    shuffleMessage.textContent = "担当配置中…";
    shuffleBtn.classList.add("shuffle-anime");

    setTimeout(function(){

        const shuffledMembers = [...members].sort(() => Math.random() - 0.5);

        roles.forEach((role, index) => {
            result.innerHTML += `<li>${role}：${shuffledMembers[index]}</li>`;
        });

        shuffleMessage.textContent = "決定！";
        shuffleBtn.classList.remove("shuffle-anime");

    }, 1000);
});
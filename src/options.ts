document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(["name", "fixedText"], (data: { name?: string; fixedText?: string }) => {
        (document.getElementById("name") as HTMLInputElement).value = data.name ?? "";
    });

    document.getElementById("optionsForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        // 保存ボタンがクリックされたときの処理
        const name = (document.getElementById("name") as HTMLInputElement).value;
        chrome.storage.sync.set({ name }, () => {
            alert("保存しました");
        });
    });
});

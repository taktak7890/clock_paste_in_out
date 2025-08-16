document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(["name", "fixedText"], (data: { name?: string; fixedText?: string }) => {
        (document.getElementById("name") as HTMLInputElement).value = data.name ?? "";
    });

    document.getElementById("save")?.addEventListener("click", () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        chrome.storage.sync.set({ name }, () => {
            alert("保存しました");
        });
    });
});

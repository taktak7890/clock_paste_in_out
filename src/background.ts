chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "paste_start",
        title: "出社",
        contexts: ["editable"]
    });
    chrome.contextMenus.create({
        id: "paste_finish",
        title: "退社",
        contexts: ["editable"]
    });
});

chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) => {
    chrome.storage.sync.get(["name"], (data: { name?: string; }) => {
        const name = data.name ?? "";
        if (!name) {
            console.error("名前が設定されていません。");
            return;
        }
        const today = new Date();
        const dateStr = (today.getMonth() + 1) + "/" + today.getDate();
        const fixedText = (info.menuItemId === "paste_finish") ? "退社" : "出社";

        // MM/DD 名前 固定文字列
        //   例) 10/1 山田 出社
        const pasteValue = `${dateStr} ${name} ${fixedText}`;

        chrome.scripting.executeScript({
            target: { tabId: tab.id as number, allFrames: true },
            args: [pasteValue],
            func: (value: string) => {
                const active = document.activeElement as HTMLElement | null;
                if (active && active.isContentEditable) {
                    active.textContent = value;
                }
            },
        });
    });
});

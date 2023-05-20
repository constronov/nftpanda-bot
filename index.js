//clientX: 420,
//clientY: 380,
(async () => {
    const mouseClickEvents = ["mousedown","click", "mouseup"];
    const PAUSE_BETWEEN = 500;
    const LOOP = 1000;
    const PAUSE_MINING = 10000;

    function simulateMouseClickPosition(element) {
        mouseClickEvents.forEach((mouseEventType) =>
            element.dispatchEvent(
                new MouseEvent(mouseEventType, {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    buttons: 1,
                    clientX: parseFloat(window.getComputedStyle(canvas).width) / 4.4,
                    clientY: parseFloat(window.getComputedStyle(canvas).height) / 2.58,
                })
            )
        );
    }

    while (1) {
        var timer = document.querySelector("#all-slots > div > div > div:nth-child(1) > div > div.one-slot-body > div.one-slot-descr > div > div.timer > div.timer-in");
        if (timer == null) {
            var btn_sendadventure = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(1) > span");
            if (btn_sendadventure == null) {
                // Button "Mass Action"
                var btn_massaction = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-all-bt.tooltip > span");
                if (btn_massaction != null) {
                    btn_massaction.click();
                    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                }
                var btn_sendadventure = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(1) > span");
            }

            var btn_selectall = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-top > div > div.select-bt > div > button > span");
            if (btn_selectall != null) {
                btn_selectall.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }

            if (btn_sendadventure != null) {
                btn_sendadventure.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }

            // Select Forest of Ulrian
            var canvas = document.getElementById("defaultCanvas0");
            simulateMouseClickPosition(canvas);
            await new Promise((res) => setTimeout(res, 100));
            simulateMouseClickPosition(canvas);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            var confirmadventure = document.querySelector("#root > div > div.modal-to-adv.open.anim.null.bamb > div.modal-to-adv-body.multi > div.modal-to-adv-body-in > div > div.modal-to-adv-bot > div > button > span");
            if (confirmadventure != null) {
                confirmadventure.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }

            await new Promise((res) => setTimeout(res, PAUSE_MINING));

            var closeadventuretab = document.querySelector("#root > div > div.modal-to-adv.reward-window.open.anim.bamboo-rew > div.modal-to-adv-body > div.modal-to-adv-body-in.multi-rew > div > div.multi-reward-top > div");
            if (closeadventuretab != null) {
                closeadventuretab.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }
        }
        await new Promise((res) => setTimeout(res, LOOP));
    }
})();    
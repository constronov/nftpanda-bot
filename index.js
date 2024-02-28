//clientX: 420,
//clientY: 380,
(async () => {
    const mouseClickEvents = ["mousedown","click", "mouseup"];
    const PAUSE_BETWEEN = 500;
    const LOOP = 1000;
    const PAUSE_MINING = 10000;

    function simulateMouseClickPosition(element, x, y) {
        mouseClickEvents.forEach((mouseEventType) =>
            element.dispatchEvent(
                new MouseEvent(mouseEventType, {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    buttons: 1,
                    clientX: parseFloat(window.getComputedStyle(canvas).width) / x,
                    clientY: parseFloat(window.getComputedStyle(canvas).height) / y,
                })
            )
        );
    }

    while (1) {
        // // Stake and Upgrade
        // var allSlots = document.querySelectorAll(".one-slot");
        // if (allSlots != null)
        // {
        //     for (let i = 0; i < allSlots.length; i++) {
        //         var btnRank = allSlots[i].querySelector("div > div.level-up > button > span > span > span");
        //         if(btnRank != null) {
        //             var btnStake = allSlots[i].querySelector("div.one-slot-descr > div > div.one-slot-bt > div.bt-top-slot > div:nth-child(2) > button");
        //             if (btnStake != null) {
        //                 btnStake.click();
        //                 await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
        //                 var stakeAmount = document.querySelector("#root > div > main > div.modal-wrap-stake.open > div.bamb-modal-body > div > div > div > div.bamb-modal-wrap > div > div.stake-body > div.stake-descr > div > div.modal-must-add > span");
        //                 if (stakeAmount != null) {
        //                     var stakeAmountInt = Math.ceil(stakeAmount.innerText.replace(" BAM", ""))+5;
        //                     var stakeTextField = document.querySelector("#root > div > main > div.modal-wrap-stake.open > div.bamb-modal-body > div > div > div > div.bamb-modal-wrap > div > div.stake-body > div.stake-descr > div > div.stake-form-in > div.stake-inp > input[type=number]");
        //                     // BUG !!!
        //                     stakeTextField.value = stakeAmountInt;
        //                     var stakeNowBtn = document.querySelector("#root > div > main > div.modal-wrap-stake.open > div.bamb-modal-body > div > div > div > div.bamb-modal-wrap > div > div.stake-body > div.stake-descr > div > div.stake-form-in > div.stake-btns > div > button > span > span");
        //                     if (stakeNowBtn != null) {
        //                         stakeNowBtn.click();
        //                         await new Promise((res) => setTimeout(res, PAUSE_MINING));
        //                     }
        //                     console.log(stakeAmountInt);
        //                 }
        //             }
        //             console.log(slot);
        //         }
        //     };
        // }
        
        // check if mass action is activated
        var feedbtn = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(2)");
        if (feedbtn == null) {
            // Button "Mass Action"
            var btn_massaction = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-all-bt.tooltip > span");
            if (btn_massaction != null) {
                btn_massaction.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }
            var btn_selectall = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-top > div > div.select-bt > div > button > span");
            if (btn_selectall != null) {
                btn_selectall.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }
        }

        // Restore energy and equipment
        var energy = document.querySelector("#all-slots > div > div > div:nth-child(1) > div > div.energy > div.energy-info > div > span");   
        var jewelry = document.querySelector("#all-slots > div > div > div:nth-child(1) > div > div.one-slot-body > div.one-slot-nft-card > div > div.img-slot > div.adv-jew.active.tooltip.water.rar-2 > div.cust-tooltip.bottom > div.tool-wrap > div > div > div");
        var weapons = document.querySelector("#all-slots > div > div > div:nth-child(1) > div > div.one-slot-body > div.one-slot-nft-card > div > div.img-slot > div.adv-weapon.tooltip.active.water.rar-3 > div.cust-tooltip.bottom > div.tool-wrap > div");
        var armor = document.querySelector("#all-slots > div > div > div:nth-child(1) > div > div.one-slot-body > div.one-slot-nft-card > div > div.img-slot > div.adv-armor.active.tooltip.water.rar-2 > div.cust-tooltip.bottom > div.tool-wrap > div > div > div");
        
        if(energy.innerText == "0" || jewelry.innerText == "0%" || weapons.innerText == "0%" || armor.innerText == "0%") {
            // feed all
            var feedbtn = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(2) > span");
            if (feedbtn != null && energy.innerText == "0") {
                feedbtn.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                var acceptfeed = document.querySelector("#thank-modal-shop > div.modal-bay-body > div.modal-bay-body-in > div > div.modal-bay-wrap > div.modal-bay-bt > button > span > span > span > span");
                acceptfeed.click();
                await new Promise((res) => setTimeout(res, PAUSE_MINING));
            }
            // rep jewelry
            var repJewBtn = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(3) > span");
            if (repJewBtn != null || jewelry.innerText == "0%") {
                repJewBtn.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                var acceptjew = document.querySelector("#thank-modal-shop > div.modal-bay-body > div.modal-bay-body-in > div > div.modal-bay-wrap.jew-mod-part-rep > div.ico-weap-energy > button > span > span > span > span");
                acceptjew.click();
                await new Promise((res) => setTimeout(res, PAUSE_MINING));
            }
            // rep wapons
            var repWeponsBtn = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(4) > span");
            if (repWeponsBtn != null || weapons.innerText == "0%") {
                repWeponsBtn.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                var acceptweapon = document.querySelector("#thank-modal-shop > div.modal-bay-body > div.modal-bay-body-in > div > div.modal-bay-wrap > div.ico-weap-energy > button > span > span > span > span");
                acceptweapon.click();
                await new Promise((res) => setTimeout(res, PAUSE_MINING));
            }
            // rep armor
            var repArmorBtn = document.querySelector("#root > div > main > div.send-all-wrap > div > div.send-wrap.active > div.send-all-bot > div > div:nth-child(5) > span");
            if (repArmorBtn != null || armor.innerText == "0%") {
                repArmorBtn.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                var acceptarmor = document.querySelector("#thank-modal-shop > div.modal-bay-body > div.modal-bay-body-in > div > div.modal-bay-wrap > div.ico-weap-energy > button > span > span > span > span");
                acceptarmor.click();
                await new Promise((res) => setTimeout(res, PAUSE_MINING));
            }
        }

        // Manage Adventure
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

            // Select randomly the destination
            var canvas = document.getElementById("defaultCanvas0");
            var rand = Math.round(Math.random() * (3 - 1)) + 1;
            let x = 4.4;
            let y = 2.58;
            if (rand == 1) {
                // Select Forest of Ulrian
                x = 4.4;
                y = 2.58;
            }
            else if (rand == 2) {
                // Select Forest of Nyoron (Material)
                x = 3.0;
                y = 2.78;
            }
            else if (rand == 3) {
                // Cave of Terrabarium (Jewelry)
                x = 5.0;
                y = 4.5;
            }

            simulateMouseClickPosition(canvas, x, y);
            await new Promise((res) => setTimeout(res, 100));
            simulateMouseClickPosition(canvas, x, y);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Select Forest of Ulrian
            // simulateMouseClickPosition(canvas, 4.4, 2.58);

            // Select Forest of Nyoron (Material)
            // simulateMouseClickPosition(canvas, 3.0, 2.78);

            // Cave of Terrabarium (Jewelry)
            // simulateMouseClickPosition(canvas, 5.0, 4.5);

            var confirmadventure = document.querySelector("#root > div > div.modal-to-adv.open.anim.anim.bamb > div.modal-to-adv-body.multi > div.modal-to-adv-body-in > div > div.modal-to-adv-bot > div > button > span > span > span > span");
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
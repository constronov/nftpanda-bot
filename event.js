(async () => {
    while (1) {
      timer = document.querySelector("#all-slots > div > div.all-slots-in > div:nth-child(1) > div > div.one-alien-slot > div.descr-slot > div.alien-send > div");
      if(timer != null) {
        buttonMint = document.querySelector("#all-slots > div > div.register-alien > div");
        buttonMint.click();
        await new Promise((res) => setTimeout(res, 1000));

        buttonMintWithoutPotion = document.querySelector("#root > div > div.modal-to-adv.reward-window.open.anim.alien-rew > div.modal-to-adv-body > div.modal-to-adv-body-in.multi-rew > div > div.mdl-gtav-mid > div > div:nth-child(1) > div.one-adv-bl-descr > div.one-adv-bl-bt > div");
        if (buttonMintWithoutPotion != null) {
          buttonMintWithoutPotion.click();
          await new Promise((res) => setTimeout(res, 1000000));
        }
      }
      await new Promise((res) => setTimeout(res, 1000));
    }
  })();
(async () => {
    while (1) {
      timer = document.querySelector("#all-slots > div > div.all-slots-in > div:nth-child(1) > div > div.one-alien-slot > div.descr-slot > div > span");
      if(timer != null && timer.innerText == 'SEND TO ADVENTURE') {
        buttonMint = document.querySelector("#all-slots > div > div.register-alien > div");
        buttonMint.click();
      }
      await new Promise((res) => setTimeout(res, 1000));
    }
  })();
  
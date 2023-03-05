class Vendingmachine {
  constructor() {
    const vendingMachine = document.querySelector('.cont-vending-machine');
    this.balance = vendingMachine.querySelector('.txt-balance');
    this.itemList = vendingMachine.querySelector('.list-item');
    this.inputCostEl = vendingMachine.querySelector('.input-put');
    this.btnPut = vendingMachine.querySelector('.btn-put');
    this.btnReturn = vendingMachine.querySelector('.btn-get');
    this.stagedList = vendingMachine.querySelector('.list-item-staged');

    const myInfo = document.querySelector('.cont-myinfo');
    this.myMoney = myInfo.querySelector('.txt-mymoney');
    this.gotList = myInfo.querySelector('.list-item-staged');
    this.txtTotal = myInfo.querySelector('.txt-total');
  }
  setup() {
    this.bindEvents();
  }

  bindEvents() {
    this.btnPut.addEventListener('click', (event) => {
      const inputCost = parseInt(this.inputCostEl.value);
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

      if (inputCost) {
        // 입금액이 소지금보다 작은 경우
        if (inputCost <= myMoneyVal && inputCost > 0) {
          //Intl.NumberFormat : 언어에 맞는 숫자 서식을 문자열로 반환
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';
          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + ' 원';
        } else {
          alert('소지금이 부족합니다.');
        }
        this.inputCostEl.value = null;
      }
    });
  }
}

export default Vendingmachine;

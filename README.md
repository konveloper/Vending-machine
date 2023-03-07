# 📱 나만의 자판기 📱<br>
🔗 [구현 페이지](https://github.com/konveloper/Vending-machine/index.html)
* 소지금을 이용해 원하는 만큼 돈을 입금하여 원하는 아이템을 뽑는 웹 페이지입니다.

## 기능 명세
1. 판매할 음료에 대한 데이터는 따로 분리되어 있어야 합니다. (혹은 API로 받아야 합니다.)
2. 돈의 입금과 음료의 선택 시점은 자유롭지만 돈이 모자라면 음료가 나와서는 안됩니다.
3. 거스름돈이 나와야 합니다.
4. 버튼을 누르면 상품이 1개씩 추가됩니다. (일반적인 자판기와 동일합니다.)

## 기능 설명
 1. 입금 버튼 기능<br>
입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.<br>
입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.<br>
입금액 인풋창은 초기화됩니다.<br>
2. 거스름돈 반환 버튼 기능<br>
반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.<br>
반환 버튼을 누르면 잔액 창은 초기화됩니다.<br>
3. 자판기 메뉴 기능<br>
아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.<br>
아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.<br>
아이템이 획득가능 창에 등록됩니다.<br>
아이템 버튼의 data-count 값이 -1 됩니다.<br>
만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.<br>
4. 획득 버튼 기능<br>
획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 목록으로 이동합니다.<br>
획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.<br>

## 특징
* 시맨틱한 태그를 사용하였습니다.
* 반응형 웹 페이지로 제작하였습니다.

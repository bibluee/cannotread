// 1. name: 웹 페이지에 표시될 폰트의 이름입니다. 이 이름은 사용자 인터페이스에 직접 보여지며,
//    사용자가 폰트를 선택할 때 표시되는 이름입니다.
// 2. url: 폰트 파일이 저장된 위치의 URL입니다. 이 URL은 웹 페이지에서 해당 폰트를
//    불러오기 위해 사용됩니다. 폰트 파일은 서버의 해당 경로에 저장되어 있어야 합니다.
//    기존에 저장된 위치는 fonts woff가 저장되어 있습니다.
// 3. textDirectionSelect.value: 화면 로드시 세로쓰기를 먼저 마주하고싶을 때 '1' 작성
// 4. text: 미리보기에 보여질 본문입니다.

const fonts = [{
    name: 'cannotread Regular',
    url: './fonts/Cannotread-Regular.woff'
  }];

window.onload = function () {
  insertText();
  // 가로쓰기 0
  // textDirectionSelect.value = "1";
  changetextDirection();
  convertText(contentEditableDiv);
};

function insertText() {
  const text = `Beauty can come from the strangest places, even the most disgusting of places.`;
  document.getElementById("editableDiv").innerHTML = text;
}

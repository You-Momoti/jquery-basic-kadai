$('#change-color').on('click', function () {
  // 文字内容変化
  $('#target').css('color', 'red');
});
$('#change-text').on('click', function () {
  // 文字内容変化
  $('#target').text("Hello!");
});
$('#fade-out').on('click', function () {
  // 不透明度を0にする（フェードアウトする）
  $('#target').fadeOut(100, function () {
  });
});
$('#fade-in').on('click', function () {
  // 不透明度を1にする（フェードインする）
  $('#target').fadeIn(100, function() {
  });
});

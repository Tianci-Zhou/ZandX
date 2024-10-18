function diary(param) {
  if (param == "日记本") {
    $("#pop_rule").show();
    $("#pop_son").show();
    var html = `<div class="accordion">
    <div class="accordion-section">
      <div class="accordion-title">2024年10月13日</div>
      <div class="accordion-content">晚上8：53，小徐同志不好好吃晚饭，记录在册！</div>
    </div>
    <div class="accordion-section">
      <div class="accordion-title">2024年10月14日</div>
      <div class="accordion-content">凌晨0：36，小徐同志，打算当面说狠心话，记录在册！</div>
    </div>
    <div class="accordion-section">
      <div class="accordion-title">2024年10月15日</div>
      <div class="accordion-content">早上9：45，小徐同志，没有好好吃早饭，记录在册！</div>
    </div>
  </div>
   <div class="btn">点击关闭</div>
  `;
    $(".modal-content").html(html);
  } else if (param == "相册") {
    $("#pop_rule2").show();
    $("#pop_son2").show();
    var html = `<div class="container">
      <div class="slider">
        <div class="box" style="--img: url('../img/1.jpg')"></div>
        <div class="box" style="--img: url('../img/2.jpg')"></div>
        <div class="box" style="--img: url('../img/3.jpg')"></div>
        <div class="box" style="--img: url('../img/4.jpg')"></div>
        <div class="box" style="--img: url('../img/5.jpg')"></div>
        <div class="box" style="--img: url('../img/6.jpg')"></div>
        <div class="box" style="--img: url('../img/7.jpg')"></div>
        <div class="box" style="--img: url('../img/8.jpg')"></div>
      </div>
      <div class="buttons">
        <span class="prev"><</span> <span class="next">></span> <span class="close">X</span>
      </div>
    </div>`;
    $(".modal-content2").html(html);
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let slider = document.querySelector(".slider");
    next.addEventListener("click", function () {
      // 获取所有幻灯片
      let box = document.querySelectorAll(".box");
      // 将第一个幻灯片移到列表的最后
      slider.appendChild(box[0]);
    });
    prev.addEventListener("click", function () {
      let box = document.querySelectorAll(".box");
      // 将第一个幻灯片移到列表的最前
      slider.prepend(box[box.length - 1]);
    });
    $(".close").click(function () {
      $("#pop_rule2").hide();
      $("#pop_son2").hide();
    });
  } else if (param == "视频") {
    $(".modal-content").html(`我是${param}`);
  }
  $(".accordion-title").click(function () {
    // 先关闭所有的手风琴内容区域
    $(".accordion-content").slideUp();
    // 然后打开当前点击的内容区域
    $(this).next(".accordion-content").slideDown();
  });
  $(".btn").click(function () {
    $("#pop_rule").hide();
    $("#pop_son").hide();
  });
}

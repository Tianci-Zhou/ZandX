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
    <div class="accordion-section">
      <div class="accordion-title">2024年10月22日</div>
      <div class="accordion-content">晚上9：51，小徐同志，态度极其恶劣，记录在册！（我会永远记住这沉重的一天）</div>
    </div>
    <div class="accordion-section">
      <div class="accordion-title">一个普信男的自白</div>
      <div class="accordion-content">你好徐同学，我不知道你什么时候能看到这一篇文字，可能很快会发现，也可能永远不会发现，因为我决定不打扰你的生活了，虽然你亲口说过，两个人之间要打直球，可是我很明显的感受到我在你的世界里只是一个甲乙丙丁，从一开始都是我以为在作祟，我以为我们会亲密一点，我以为你真的会认真了解我一点，我真的以为我们会认认真真谈一次，可能结果很好，可能结果不好，可是呢正如我所说的，都是我以为罢了，我是一个天生乐观的悲观主义者，我喜欢一切都往好的方向发展，并且我也愿意往好的方向努力，再次遇到你我很开心，我希望我们会更近一步，我不知道什么是爱，什么是感情，但是我感觉，书上所说爱一个人是痛苦的，对方的一点点细微变化都会，都会让自己掀起很大的情绪波动，我在你这感受到很多很多种情绪，都是你的一举一动影响到的，你认真回复我给你发的每一个视频，我会很开心，你会担心我情绪失不失落我也很开心，可能只是你平常对待朋友的方式，我呢又给这些行为加上了滤镜，我以为你会认真的对待感情，这是自私的，我很自私，我以为你会爱我，不过呢，我这个人有一个还算是优点的优点，能找清自己的定位，当我意识到你只是把我当成一个熟悉的朋友的时候，我就知道，我该离开了，你可能会觉得莫名其妙，也可能毫不在意，但是我还是很想说，求求你，回头看我一次吧，我可能不是最好的，但是你可能再也不会遇到了，哈哈，读到这里时是不是感觉我很普信哈哈，写这一篇文字呢，不是为啥让你知道什么，就是想写写，因为我知道你大概永远也不会看到，在你心里，只是消失掉一个熟悉的陌生人罢了，你的精神境界很高，你可能也很喜欢你当下的生活状态，哈哈，先说清楚哈，我不是不喜欢了，我只是不想像一个小丑一样，打扰到你，这次还真像我说的那样，栽到你手里第二次了，哈哈哈挺好的，第一次是我感情的启蒙老师，第二次教会我不要试图融入别人严防死守的生活。可是我真的好舍不得啊，我真的很想很想很想认认真真的和你感受一次幸福的感觉啊，文字永远也写不出心里的惊涛骇浪，日常生活也体会不到心里的波涛汹涌，再见了徐同学，你很好，是我太悲观了，我受不了，你只把我当成朋友的感觉，我太不甘了，我又是一个很自卑的人，不过放心好了，我总是能在自己最最最扛不住的时候，找到能让心情好起来的方式，或是喝酒，或是打会儿游戏，或是去跑步，或是随便走走，看看这个世界，去想去思考，哈哈哈，我感觉我好啰嗦呀，不说了，我想想怎么给这篇文字冠名哈，仪式感哈哈哈，就叫一个普信男的自白吧</div>
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
        <div class="box" style="--img: url('../img/9.jpg')"></div>
        <div class="box" style="--img: url('../img/10.jpg')"></div>
        <div class="box" style="--img: url('../img/11.jpg')"></div>
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

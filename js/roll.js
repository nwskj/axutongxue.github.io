﻿function randomString(c){var d="abcdefghijklmnopqrstuvwxyz";var a="";for(var b=c;b>0;--b){a+=d[Math.floor(Math.random()*d.length)]}return a}var id=randomString(5);var roll=randomString(6);document.write("<style>#"+id+"{height:58px;overflow:hidden;width:322px;border:dashed 0.5px #07c160;margin: 4 auto 4 auto;}."+roll+" li{font-size:12px;text-indent:-30px;padding: 2 0 2 0;line-height:1;}.icon{width:24px;margin-right:2;vertical-align:middle}</style>");document.write("<div id="+id+'><ul class="'+roll+'" style="margin-block:0px;padding-inline-start:33px;"><li><img class="icon" src="https://wework.qpic.cn/wwpic/46565_fxngH6wqR-ykBsx_1669368182/0"><a href="https://apsgo.com/search?keyword=&cate=32&id=725">黑五特惠合集！扫描全能王、截图神器 FastStone Capture、网络优化加速器 cFosSpeed...</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e4ef42330.jpg"><a href="https://docs.qq.com/doc/DZHdwQU9ocWRuTkx1">莆田珂珂鞋厂，自家工厂，全网最低价格，最高品质！</a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/709615_UjmbkH-8Tkaogwq_1669351208/0"><a href="https://flowus.cn/share/acfbf8e6-bdde-4c87-80ec-aa4991acc009">黑五特惠！iSlide买一年送180天，仅需98元起！</ a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/470776_8UUHdUJZRKeTHo0_1669350959/0"><a href="https://flowus.cn/share/f4ca8d62-013f-442f-a5a4-f7d5853049c3">黑五特惠！为知笔记买1年送1个月，最高买3年送5个月</ a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/635069_NdyYN02wQI2iQMv_1669351498/0"><a href="https://flowus.cn/share/8945ec96-d8bd-4ddc-ad18-c8ed2ca44f99">黑五特惠！桌面整理神器Fences 4买断仅需69元！</ a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/879292_u_YtUSxSRNGuWi0_1669351721/0"><a href="https://flowus.cn/share/e17a2f0f-2a83-4e01-b965-2f15403bdb59">黑五特惠！系统修改增强神器Start11，限时仅需29元！</ a></li></ul></div>');$(function(){var c=$("#"+id);var b;c.hover(function(){clearInterval(b)},function(){b=setInterval(function(){a(c)},2000)}).trigger("mouseleave");function a(e){var f=e.find("ul");var d=f.find("li:first").height();f.animate({marginTop:-d+"px"},500,function(){f.css({marginTop:0}).find("li:first").appendTo(f)})}});
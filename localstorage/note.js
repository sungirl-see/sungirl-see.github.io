var clickLi;
var nomalli=[];
var resultNum;
var xq;
$(function(){
			const jinnian=new Date()
			var toYear=jinnian.getFullYear()
			var toMonth=jinnian.getMonth()+1
			var today=jinnian.getDay()
			var cday=jinnian.getDate()
			
			for(var i=0;i<today+1;i++){
				var $li=$('<li></li>')
				$li.text('')
				$('.date').append($li)
			}
			pd()
			$('.year>p').text(toYear)
			$('.month>p').text(toMonth)
			$('.date').empty()
			date()
			// 创造年
			for (var i=1900;i<2100;i++) {
				var $li=$('<li></li>')
				$li.text(i)
				$('.year>ul').append($li)
				
				$li.click(function(){
					var txt=$(this).text()
					$(this).parent().slideUp().prev().text(txt)
					$('.date').empty()
					date()
					oldDay()
				})
			}
			$('.year>p').click(function(e){
				e.stopPropagation()
				$(this).next().slideToggle().parent().siblings().find("ul").slideUp();
			})
			for (var i=1;i<=12;i++) {
				var $li=$('<li></li>')
				$li.text(i)
				$('.month>ul').append($li)
				$('.month>.list>li').click(function(){
					var txt=$(this).text()
					$(this).parent().slideUp().prev().text(txt)
					$('.date').empty()
					date()
					oldDay()
				})
				
			}
			$('.month>p').click(function(e){
				e.stopPropagation()
				$(this).next().slideToggle().parent().siblings().find("ul").slideUp();
			})
			const weeks=['周日','周一','周二','周三','周四','周五','周六']
			weeks.forEach(function(item,index){
				var $li=$('<li></li>')
				$li.text(item)
				$('.time-ul').append($li)
			})
			function date(){
				var x=new Date($('.year>p').text(),$('.month>p').text()-1,1)
				 xq=x.getDay()
				for(var i=0;i<xq;i++){
					var $li=$('<li></li>')
					$li.text('')
					$('.date').append($li)
				}
				pd()
				}
				// 判断平闰年
				function pd(){
					if ($(".year>p").text()%4==0&&$(".year>p").text()%100!=0||$(".year>p").text()%400==0) {
						// 闰年
						if($('.month>p').text()==1||$('.month>p').text()==3||$('.month>p').text()==5||$('.month>p').text()==7||$('.month>p').text()==8||$('.month>p').text()==10||$('.month>p').text()==12){
							for (var i=0;i<31;i++) {
								var $li=$('<li></li>')
								$li.text(i+1)
								$('.date').append($li)
								nomalli.push($li.text())
							}
							// nomalli.push($li.text())
						}
						if($('.month>p').text()==4||$('.month>p').text()==6||$('.month>p').text()==9||$('.month>p').text()==11){
							for(var i=0;i<30;i++){
								var $li=$('<li></li>')
								$li.text(i+1)
								$('.date').append($li)
								nomalli.push($li.text())
								// return false
							}
							// nomalli.push($li.text())
						}if($('.month>p').text()==2){
							for(var i=1;i<=29;i++){
								var $li=$('<li></li>')
								$li.text(i)
								$('.date').append($li)
								nomalli.push($li.text())
							}
							// nomalli.push($li.text())
						} 
					}else{
						// 平年
						if($('.month>p').text()==1||$('.month>p').text()==3||$('.month>p').text()==5||$('.month>p').text()==7||$('.month>p').text()==8||$('.month>p').text()==10||$('.month>p').text()==12){
							for (var i=1;i<=31;i++) {
								var $li=$('<li></li>')
								$li.text(i)
								$('.date').append($li)
								nomalli.push($li.text())
							}
							// nomalli.push($li.text())
						}
						if($('.month>p').text()==4||$('.month>p').text()==6||$('.month>p').text()==9||$('.month>p').text()==11){
							for(var i=1;i<31;i++){
								var $li=$('<li></li>')
								$li.text(i)
								$('.date').append($li)
								nomalli.push($li.text())
							}
							// nomalli.push($li.text())
						}if($('.month>p').text()==2){
							for(var i=1;i<=28;i++){
								var $li=$('<li></li>')
								$li.text(i)
								$('.date').append($li)
								nomalli.push($li.text())
							}
							// nomalli.push($li.text())
						} 
				}
				}
				// 判断今天
				function theDay(){
					var $span=$('<span>今天</span>')
					if($('.year>p').text()==toYear&&$('.month>p').text()==toMonth){
						nomalli.forEach(function(item,index){
							if(item==cday){
								console.log(item)
								$('.date>li').eq(Number(xq)+Number(item)-1)
								.css({
									'background-color':'palegreen',
									'border-radius': '10px'
								})
								.append($span)
								.find($span)
								.css(
								{
									'margin-top':'3px',
									'display':'inline',
									'height':'20px',
									'line-height':'20px',
									'font-size':'15px',
									'float':'left',
									'color': 'crimson',
								}
								)
							}
						})
					}
				}
				// 点击日期更换背景色
				$('.date').on('click','li',function(){
					// console.log($(this).text())
					 clickLi=$(this).text()
					$(this).addClass('active')
					$(this).siblings().removeClass('active')
				})
				// 回到今天
				$('.return').click(function(){
					const c=new Date()
					var cyear=c.getFullYear()
					var cmonth=c.getMonth()+1
					$('.year>p').text(cyear)
					$('.month>p').text(cmonth)
					$('.date').empty()
					date()
					oldDay()
				})
				// 保存按钮
				$('.btn').click(function(){
					// console.log(clickLi)
					var yearTxt=$('.year>p').text()
					var monthTxt=$('.month>p').text()
					var today=clickLi
					var txt=$('.personContent').val()
					var ss=yearTxt+monthTxt+today
					localStorage.setItem(ss,txt)
					$('.personContent').val('')
				})
				// 那年今日的高亮
				function oldDay(){
					var s=localStorage
					var key=Object.keys(s)
					key.forEach(function(item,index){
						let syear=item.slice(0,4)
						let smonth=item.slice(4,5)
						let sday=item.slice(5)
						$('.date>li').text()
						if($('.year>p').text()==syear&&$('.month>p').text()==smonth){
							nomalli.forEach(function(item,index){
								if(item==sday){
								console.log(item)
									$('.date>li').eq(Number(xq)+Number(item)-1)
									.css(
									{
										'background-color':'#FF0000',
										'border-radius': '10px'
									}
									)
								}
							})
						}
					})
				}
				// 页面加载完成后
				$(document).ready(function(){
					theDay()
					oldDay()
				})
				$(document).click(function(){
					// e.stopPropagation()
					$('.year>ul').slideUp()
					$('.month>ul').slideUp()
				})
			})
			
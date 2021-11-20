function onPageload(){
	function slide(element) {
		if(!element){
			throw Error('Element is not passed')
		}
		this.element = element
	}
	slide.prototype.show = function(){
		this.element.classList.add("shown")
		this.element.classList.remove("hidden")
	}
	const firstSlide = new slide(document.getElementById("first-slide"))
	setTimeout(() => firstSlide.show(), 400)
	setTimeout(() => document.getElementsByClassName("hh")[0].classList.add("shown"), 2000)
}

function toggleLight(){
	const body = document.getElementsByTagName('body')[0]
	const style = window.getComputedStyle(body)
	if(style.backgroundColor === "rgb(255, 255, 0)"){
		document.getElementById('dev').classList.remove('hidden')
		document.getElementById('bicycle').style.opacity = 0
		body.style.background = 'black'
	}else{
		document.getElementById('bicycle').style.opacity = 1
		document.getElementById('dev').classList.add('hidden')
		body.style.background = 'yellow'
	}
}
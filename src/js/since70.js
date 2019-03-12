var animateHTML = function() {
	var elems;
	var windowHeight;
	function init() {
		elems = window.document.querySelectorAll(".hidden");
		windowHeight = window.innerHeight;
		addEventHandlers();
		checkPosition();
	}
	function addEventHandlers() {
		window.addEventListener("scroll", checkPosition);
		window.addEventListener("resize", init);
	}
	function checkPosition() {
		for (var i = 0; i < elems.length; i++) {
			var positionFromTop = elems[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= -200) {
				if (elems[i].classList.contains("heading")) {
					elems[i].className = elems[i].className.replace("hidden", "fromTop");
				} else if (elems[i].classList.contains("paragraph-text")) {
					elems[i].className = elems[i].className.replace(
						"hidden",
						"slideLeft"
					);
				} else {
					elems[i].className = elems[i].className.replace(
						"hidden",
						"fadeIn-bubble"
					);
				}
			}
		}
	}
	return {
		init: init
	};
};
animateHTML().init();

var x, i, j, selElmnt, a, b, c;
x = window.document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	a = window.document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = window.document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		c = window.document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	var x,
		y,
		i,
		arrNo = [];
	x = window.document.getElementsByClassName("select-items");
	y = window.document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
window.document.addEventListener("click", closeAllSelect);

var wpcf7Elm = document.querySelector(".wpcf7");

var formHeading = window.document.querySelector(".form .heading");

var inputFields = window.document.querySelectorAll(".text-input");

var selectMenu = window.document.querySelector(".custom-select");

var submitButton = window.document.querySelector(".lets-talk");

var workButton = window.document.querySelector(".work-button");

wpcf7Elm.addEventListener(
	"wpcf7submit",
	function(event) {
		formHeading.innerHTML = "Thank You for Reaching Out!";

		for (var i = 0; i < inputFields.length; i++) {
			var input = inputFields[i];
			input.style.display = "none";
		}

		selectMenu.style.display = "none";
		submitButton.style.display = "none";
		workButton.style.display = "block";
	},
	false
);

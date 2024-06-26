// =========================================================
// Material Kit 2 - v3.0.4
// =========================================================

// Product Page: https://www.creative-tim.com/product/soft-ui-design-system
// Copyright 2021 Creative Tim (https://www.creative-tim.com)

// Coded by Creative Tim

// =========================================================

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  , popoverList = popoverTriggerList.map(function(e) {
    return new bootstrap.Popover(e)
})
  , tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  , tooltipList = tooltipTriggerList.map(function(e) {
    return new bootstrap.Tooltip(e)
});
function setAttributes(t, o) {
    Object.keys(o).forEach(function(e) {
        t.setAttribute(e, o[e])
    })
}
var popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))).map(function(e) {
    return new bootstrap.Popover(e)
})
  , tooltipList = (tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))).map(function(e) {
    return new bootstrap.Tooltip(e)
})
  , total = document.querySelectorAll(".nav-pills");
function getEventTarget(e) {
    return (e = e || window.event).target || e.srcElement
}
function copyCode(e) {
    var t, o = window.getSelection(), l = document.createRange(), n = e.nextElementSibling;
    l.selectNodeContents(n),
    o.removeAllRanges(),
    o.addRange(l),
    document.execCommand("copy");
    window.getSelection().removeAllRanges(),
    e.parentElement.querySelector(".alert") || ((t = document.createElement("div")).classList.add("alert", "alert-success", "position-absolute", "top-0", "border-0", "text-white", "w-25", "end-0", "start-0", "mt-2", "mx-auto", "py-2"),
    t.style.transform = "translate3d(0px, 0px, 0px)",
    t.style.opacity = "0",
    t.style.transition = ".35s ease",
    setTimeout(function() {
        t.style.transform = "translate3d(0px, 20px, 0px)",
        t.style.setProperty("opacity", "1", "important")
    }, 100),
    t.innerHTML = "Code successfully copied!",
    e.parentElement.appendChild(t),
    setTimeout(function() {
        t.style.transform = "translate3d(0px, 0px, 0px)",
        t.style.setProperty("opacity", "0", "important")
    }, 2e3),
    setTimeout(function() {
        e.parentElement.querySelector(".alert").remove()
    }, 2500))
}
function debounce(o, l, n) {
    var i;
    return function() {
        var e = this
          , t = arguments;
        clearTimeout(i),
        i = setTimeout(function() {
            i = null,
            n || o.apply(e, t)
        }, l),
        n && !i && o.apply(e, t)
    }
}
total.forEach(function(i, e) {
    var r = document.createElement("div")
      , t = i.querySelector("li:first-child .nav-link").cloneNode();
    t.innerHTML = "-",
    r.classList.add("moving-tab", "position-absolute", "nav-link"),
    r.appendChild(t),
    i.appendChild(r),
    i.getElementsByTagName("li").length;
    r.style.padding = "0px",
    r.style.width = i.querySelector("li:nth-child(1)").offsetWidth + "px",
    r.style.transform = "translate3d(0px, 0px, 0px)",
    r.style.transition = ".5s ease",
    i.onmouseover = function(e) {
        let n = getEventTarget(e).closest("li");
        if (n) {
            let o = Array.from(n.closest("ul").children)
              , l = o.indexOf(n) + 1;
            i.querySelector("li:nth-child(" + l + ") .nav-link").onclick = function() {
                r = i.querySelector(".moving-tab");
                let e = 0;
                if (i.classList.contains("flex-column")) {
                    for (var t = 1; t <= o.indexOf(n); t++)
                        e += i.querySelector("li:nth-child(" + t + ")").offsetHeight;
                    r.style.transform = "translate3d(0px," + e + "px, 0px)",
                    r.style.height = i.querySelector("li:nth-child(" + t + ")").offsetHeight
                } else {
                    for (t = 1; t <= o.indexOf(n); t++)
                        e += i.querySelector("li:nth-child(" + t + ")").offsetWidth;
                    r.style.transform = "translate3d(" + e + "px, 0px, 0px)",
                    r.style.width = i.querySelector("li:nth-child(" + l + ")").offsetWidth + "px"
                }
            }
        }
    }
}),
window.addEventListener("resize", function(e) {
    total.forEach(function(t, e) {
        t.querySelector(".moving-tab").remove();
        var o = document.createElement("div")
          , l = t.querySelector(".nav-link.active").cloneNode()
          , n = (l.innerHTML = "-",
        o.classList.add("moving-tab", "position-absolute", "nav-link"),
        o.appendChild(l),
        t.appendChild(o),
        o.style.padding = "0px",
        o.style.transition = ".5s ease",
        t.querySelector(".nav-link.active").parentElement);
        if (n) {
            var i = Array.from(n.closest("ul").children)
              , l = i.indexOf(n) + 1;
            let e = 0;
            if (t.classList.contains("flex-column")) {
                for (var r = 1; r <= i.indexOf(n); r++)
                    e += t.querySelector("li:nth-child(" + r + ")").offsetHeight;
                o.style.transform = "translate3d(0px," + e + "px, 0px)",
                o.style.width = t.querySelector("li:nth-child(" + l + ")").offsetWidth + "px",
                o.style.height = t.querySelector("li:nth-child(" + r + ")").offsetHeight
            } else {
                for (r = 1; r <= i.indexOf(n); r++)
                    e += t.querySelector("li:nth-child(" + r + ")").offsetWidth;
                o.style.transform = "translate3d(" + e + "px, 0px, 0px)",
                o.style.width = t.querySelector("li:nth-child(" + l + ")").offsetWidth + "px"
            }
        }
    }),
    window.innerWidth < 991 ? total.forEach(function(e, t) {
        e.classList.contains("flex-column") || e.classList.add("flex-column", "on-resize")
    }) : total.forEach(function(e, t) {
        e.classList.contains("on-resize") && e.classList.remove("flex-column", "on-resize")
    })
}),
window.onload = function() {
    for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++)
        e[t].addEventListener("focus", function(e) {
            this.parentElement.classList.add("is-focused")
        }, !1),
        e[t].onkeyup = function(e) {
            "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled")
        }
        ,
        e[t].addEventListener("focusout", function(e) {
            "" != this.value && this.parentElement.classList.add("is-filled"),
            this.parentElement.classList.remove("is-focused")
        }, !1);
    for (var o = document.querySelectorAll(".btn"), t = 0; t < o.length; t++)
        o[t].addEventListener("click", function(e) {
            var t = e.target
              , o = t.querySelector(".ripple");
            (o = document.createElement("span")).classList.add("ripple"),
            o.style.width = o.style.height = Math.max(t.offsetWidth, t.offsetHeight) + "px",
            t.appendChild(o),
            o.style.left = e.offsetX - o.offsetWidth / 2 + "px",
            o.style.top = e.offsetY - o.offsetHeight / 2 + "px",
            o.classList.add("ripple"),
            setTimeout(function() {
                o.parentElement.removeChild(o)
            }, 600)
        }, !1)
}
;

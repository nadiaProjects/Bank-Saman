
function cancelPayment() {
    document.getElementsByClassName("cancel")[0].click()
}

function startTimer(e, t) {
    colorCaution = t, document.getElementById("timer")
            .className = "timer-green TimeInput text-left", timer = e, defaultTimer = e, IdleDetect()
}

function restartTimer(e) {
    timer = e, defaultTimer = e
}

function IdleDetect() {
    return timer -= 1e3, setNewTime(), 0 == timer ? void cancelPayment() : void setTimeout(IdleDetect, 1e3)
}

function setNewTime() {
    3e5 > timer && (document.getElementById("timer")
            .className = "timer-orange TimeInput text-left"), 15e4 > timer && (document.getElementById("timer")
            .className = "timer-red TimeInput text-left");
    var e = Math.ceil(timer / 6e4) - 1
            , t = timer % 6e4 / 1e3;
    e = 0 > e ? 0 : e, document.getElementById("minute")
            .innerHTML = "0" + e, 10 > t ? document.getElementById("second")
            .innerHTML = "0" + t : document.getElementById("second")
            .innerHTML = t
}

function isEmail(e) {
    var t = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return t.test(e)
}

function checkMobile() {
    $(".divWaiting")
            .hide(), $("#btnPayProgreess")
            .hide(), $(".btn-payment")
            .show()
}

function isEmptyOrSpaces(e) {
    return null === e || null !== e.match(/^ *$/)
}
debugger
function isValid() {

    var e = !0
            , t = document.getElementById("PAN0")
            .value
            , n = document.getElementById("PAN1")
            .value
            , d = document.getElementById("PAN2")
            .value
            , m = document.getElementById("PAN3")
            .value
            , a = (document.getElementById("PAN4")
                    .value, document.getElementById("PIN")
                    .value)
            , l = document.getElementById("CVV")
            .value
            , u = document.getElementById("ExpDateYear")
            .value
            , o = document.getElementById("ExpDateMonth")
            .value
            , r = document.getElementById("EmailUser")
            .value;
            //    , g = document.getElementById("CellPhone")
            //.value;
    return isEmptyOrSpaces(t) ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت الزامی میباشد.", e = !1) : 4 != t.length ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت 4رقمی وارد نمایید.", e = !1) : isEmptyOrSpaces(n) ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت الزامی میباشد.", e = !1) : 4 != n.length ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت 4رقمی وارد نمایید.", e = !1) : isEmptyOrSpaces(d) ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت الزامی میباشد.", e = !1) : 4 != d.length ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت 4رقمی وارد نمایید.", e = !1) : isEmptyOrSpaces(m) ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت الزامی میباشد.", e = !1) : 4 != m.length ? (document.getElementById("cardnumber")
                    .textContent = "شماره کارت 4رقمی وارد نمایید.", e = !1) : document.getElementById("cardnumber")
            .textContent = "",
 isEmptyOrSpaces(a) ? (document.getElementById("pinval")
                    .textContent = "رمز عبور الزامي میباشد.", e = !1) : a.length > 3 && a.length < 13 ? document.getElementById("pinval")
            .textContent = "" : (document.getElementById("pinval")
                    .textContent = "رمز اینترنتی بین 4 الی 12 رقم می باشد.", e = !1),

 isEmptyOrSpaces(l) ? (document.getElementById("cvv2")
                    .textContent = "cvv الزامي میباشد.", e = !1) : l.length > 2 && l.length < 5 ? document.getElementById("cvv2")
            .textContent = "" : (document.getElementById("cvv2")
                    .textContent = "cvv بین 3 الی 4 رقم میباشد.", e = !1),
 isEmptyOrSpaces(o) ? (document.getElementById("month")
                    .textContent = "ماه الزامی میباشد.", e = !1) : 2 != o.length ? (document.getElementById("month")
                    .textContent = "ماه را دو رقمی وارد نمایید. مثال : 07.", e = !1) : o > 12 ? (document.getElementById("ExpDateMonth")
                    .style.border = "1px solid red", document.getElementById("ExpDateMonth")
                    .focus(), e = !1) : document.getElementById("month")
            .textContent = "",
 isEmptyOrSpaces(u) ? (document.getElementById("year")
                    .textContent = "سال الزامی میباشد.", e = !1) : 2 != u.length ? (document.getElementById("year")
                    .textContent = "سال را دو رقمی وارد نمایید.", e = !1) : o > 12 ? (document.getElementById("ExpDateMonth")
                    .style.border = "1px solid red", e = !1) : document.getElementById("year")
            .textContent = "",
    isEmptyOrSpaces(r) ||
     isEmail(r) ? document.getElementById("email").textContent = "" :
(document.getElementById("email").textContent = "فرمت ایمیل وارد شده صحیح نمیباشد.", e = !1),


//         isEmptyOrSpaces(g) || ValidatePhoneNumber(g) ?
//     document.getElementById("phone").textContent = "" :
//(document.getElementById("phone").textContent = "فرمت موبایل  وارد شده صحیح نمیباشد. مثال : 09121234567.", e = !1),



checkvalidatecard() || (e = !1), e && (document.getElementById("loading").style.display = "block", document.getElementById("btnPayProgreess").style.display = "inline-block",
                     document.getElementsByClassName("payment")[0].style.display = "none"), e
}
function ValidatePhoneNumber(phoneNumber) {
    var result = false;
    if (phoneNumber.length == 11) {
        var r = phoneNumber.substring(0, 2) == "09";
        result = phoneNumber.startsWith("0") && r;
    }
    else {
        result = false;
    }
    return result;

}
function IsInLoanAlgoritm(e) {
    return "639599" === e.substring(0, 6) || "505801" === e.substring(0, 6) ? !1 : !0
}

function isValidCard(e) {
    var t = e.length;
    if (0 === t || 19 === t) return !0;
    if (16 > t || 0 === parseInt(e.substr(1, 10), 10) || 0 === parseInt(e.substr(10, 6), 10)) return !1;
    if (!IsInLoanAlgoritm(e)) return !0;
    for (var n, d, m = 0, a = 0; 16 > a; a++) n = a % 2 === 0 ? 2 : 1, d = parseInt(e.substr(a, 1), 10) * n, m += d > 9 ? d - 9 : d;
    return m % 10 === 0
}

function is19DigitCard(e) {
    return e.length < 16 ? !1 : "627353" === e.substring(0, 6) ? !0 : !1
}

function isNumber(e) {
    e = e ? e : window.event;
    var t = e.which ? e.which : e.keyCode;
    return t > 31 && (48 > t || t > 57) ? !1 : !0
}

function checkMaxLnegth(e) {
    var t = e.target || e.srcElement
            , n = t.hasAttribute("maxlength") ? t.attributes.maxlength.value : e.target
            , d = t.value.length;
    e.keyCode && d >= n && autoTab(t)
}

function autoTab(t) {
    var n = t.hasAttribute("NextElement") ? t.attributes.NextElement.value : e.element;
    document.getElementById(n)
            .hasAttribute("NextElement") && (document.getElementById(n)
                    .focus(), document.getElementById(n)
                    .hasAttribute("disabled") && document.getElementById("PIN")
                    .focus())
}

function input(e) {
    var t = document.getElementById(selectedinput)
            , n = t.hasAttribute("maxlength") ? t.attributes.maxlength.value : e.tbInput
            , d = t.value.length;
    n > d ? (t.focus(), t.value = t.value + e.value, n == d + 1 && autoTab(t)) : d == n ? autoTab(t) : t.value = t.value + e.value, checkvalidatecard()
}

function checkvalidatecard() {
    var e = document.getElementById("PAN0")
            .value
            , t = document.getElementById("PAN1")
            .value
            , n = document.getElementById("PAN2")
            .value
            , d = document.getElementById("PAN3")
            .value
            , m = document.getElementById("PAN4")
            .value
            , a = document.getElementById("PAN4")
            , l = e + t + n + d + m
            , u = document.getElementById("validatorCard");
    return 16 == l.length ? (is19DigitCard(l) ? (a.disabled = !1, a.style.backgroundColor = "white") : (a.disabled = !0, a.style.backgroundColor = "#ccc"), isValidCard(l) ? !0 : (u.className = "alert alert-danger", u.innerHTML = "شماره کارت درست وارد نشده است.", !1)) : void 0
}

function delayByCheckValidateCard(e) {
    setTimeout(function () {
        checkvalidatecard()
    }, e)
}

function del(e) {
    var e = document.getElementById(selectedinput);
    e.value = e.value.substr(0, e.value.length - 1)
}

function Remove(e) {
    var e = document.getElementById(selectedinput);
    e.value = ""
}

function load() {
    for (var e = new Array; e.length < 10;) {
        var t = Math.round(9 * Math.random());
        contain(e, t) || e.push(t)
    }
    for (i = 0; i < 10; i++) {
        var n = document.getElementById("btn" + i);
        n.value = e[i]
    }
}

function contain(e, t) {
    for (var n = 0; n < e.length; n++)
        if (e[n] == t) return !0;
    return !1
}

function disableF5(e) {
    return 116 == (e.which || e.keyCode) ? !1 : void 0
}
var selectedinput;
document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("wrapheader")
            , t = document.getElementById("wrapsite")
            , n = document.getElementById("wrapBottom")
            , d = n.clientHeight
            , m = t.clientHeight
            , a = e.clientHeight
            , l = window.innerHeight
            , u = l - (a + m) - d;
    l - (m + d + a) > 0 && n.setAttribute("style", "position:absolute"), u > 0 && n.setAttribute("style", "margin-top:" + u + "px");
    var o = document.getElementById("PAN0");
    o && document.getElementById("PAN0")
            .focus(), selectedinput = "PAN0", load(), startTimer(6e5, !1);
    for (var r = (document.getElementById("PAN3"), document.getElementsByClassName("input")), c = 0; c < r.length; c++) r[c].onkeyup = function (e) {
        checkMaxLnegth(e)
    }, r[c].onkeypress = function (e) {
        delayByCheckValidateCard(100);
        var t = e.target || e.srcElement;
        return id = t.id, "EmailUser" != id ? isNumber(e) : void 0
    }, r[c].onfocus = function (e) {
        var t = e.target || e.srcElement;
        selectedinput = t.id
    }
}, !1);
var minute = 1
        , sec = 59
        , currentMinute = 1
        , currentSec = 10
        , timer = 6e5
        , defaultTimer = 6e5
        , colorCaution = !1;
window.addEventListener("keydown", function (e) {
    return 116 === e.keyCode ? (e.preventDefault(), !1) : void 0
});

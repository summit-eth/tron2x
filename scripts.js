var module,countdown=function(v){function A(a,b){var c=a.getTime();a.setMonth(a.getMonth()+b);return Math.round((a.getTime()-c)/864E5)}function w(a){var b=a.getTime(),c=new Date(b);c.setMonth(a.getMonth()+1);return Math.round((c.getTime()-b)/864E5)}function x(a,b){b=b instanceof Date||null!==b&&isFinite(b)?new Date(+b):new Date;if(!a)return b;var c=+a.value||0;if(c)return b.setTime(b.getTime()+c),b;(c=+a.milliseconds||0)&&b.setMilliseconds(b.getMilliseconds()+c);(c=+a.seconds||0)&&b.setSeconds(b.getSeconds()+
c);(c=+a.minutes||0)&&b.setMinutes(b.getMinutes()+c);(c=+a.hours||0)&&b.setHours(b.getHours()+c);(c=+a.weeks||0)&&(c*=7);(c+=+a.days||0)&&b.setDate(b.getDate()+c);(c=+a.months||0)&&b.setMonth(b.getMonth()+c);(c=+a.millennia||0)&&(c*=10);(c+=+a.centuries||0)&&(c*=10);(c+=+a.decades||0)&&(c*=10);(c+=+a.years||0)&&b.setFullYear(b.getFullYear()+c);return b}function D(a,b){return y(a)+(1===a?p[b]:q[b])}function n(){}function k(a,b,c,e,l,d){0<=a[c]&&(b+=a[c],delete a[c]);b/=l;if(1>=b+1)return 0;if(0<=a[e]){a[e]=
+(a[e]+b).toFixed(d);switch(e){case "seconds":if(60!==a.seconds||isNaN(a.minutes))break;a.minutes++;a.seconds=0;case "minutes":if(60!==a.minutes||isNaN(a.hours))break;a.hours++;a.minutes=0;case "hours":if(24!==a.hours||isNaN(a.days))break;a.days++;a.hours=0;case "days":if(7!==a.days||isNaN(a.weeks))break;a.weeks++;a.days=0;case "weeks":if(a.weeks!==w(a.refMonth)/7||isNaN(a.months))break;a.months++;a.weeks=0;case "months":if(12!==a.months||isNaN(a.years))break;a.years++;a.months=0;case "years":if(10!==
a.years||isNaN(a.decades))break;a.decades++;a.years=0;case "decades":if(10!==a.decades||isNaN(a.centuries))break;a.centuries++;a.decades=0;case "centuries":if(10!==a.centuries||isNaN(a.millennia))break;a.millennia++;a.centuries=0}return 0}return b}function B(a,b,c,e,l,d){var f=new Date;a.start=b=b||f;a.end=c=c||f;a.units=e;a.value=c.getTime()-b.getTime();0>a.value&&(f=c,c=b,b=f);a.refMonth=new Date(b.getFullYear(),b.getMonth(),15,12,0,0);try{a.millennia=0;a.centuries=0;a.decades=0;a.years=c.getFullYear()-
b.getFullYear();a.months=c.getMonth()-b.getMonth();a.weeks=0;a.days=c.getDate()-b.getDate();a.hours=c.getHours()-b.getHours();a.minutes=c.getMinutes()-b.getMinutes();a.seconds=c.getSeconds()-b.getSeconds();a.milliseconds=c.getMilliseconds()-b.getMilliseconds();var g;0>a.milliseconds?(g=s(-a.milliseconds/1E3),a.seconds-=g,a.milliseconds+=1E3*g):1E3<=a.milliseconds&&(a.seconds+=m(a.milliseconds/1E3),a.milliseconds%=1E3);0>a.seconds?(g=s(-a.seconds/60),a.minutes-=g,a.seconds+=60*g):60<=a.seconds&&(a.minutes+=
m(a.seconds/60),a.seconds%=60);0>a.minutes?(g=s(-a.minutes/60),a.hours-=g,a.minutes+=60*g):60<=a.minutes&&(a.hours+=m(a.minutes/60),a.minutes%=60);0>a.hours?(g=s(-a.hours/24),a.days-=g,a.hours+=24*g):24<=a.hours&&(a.days+=m(a.hours/24),a.hours%=24);for(;0>a.days;)a.months--,a.days+=A(a.refMonth,1);7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7);0>a.months?(g=s(-a.months/12),a.years-=g,a.months+=12*g):12<=a.months&&(a.years+=m(a.months/12),a.months%=12);10<=a.years&&(a.decades+=m(a.years/10),a.years%=
10,10<=a.decades&&(a.centuries+=m(a.decades/10),a.decades%=10,10<=a.centuries&&(a.millennia+=m(a.centuries/10),a.centuries%=10)));b=0;!(e&1024)||b>=l?(a.centuries+=10*a.millennia,delete a.millennia):a.millennia&&b++;!(e&512)||b>=l?(a.decades+=10*a.centuries,delete a.centuries):a.centuries&&b++;!(e&256)||b>=l?(a.years+=10*a.decades,delete a.decades):a.decades&&b++;!(e&128)||b>=l?(a.months+=12*a.years,delete a.years):a.years&&b++;!(e&64)||b>=l?(a.months&&(a.days+=A(a.refMonth,a.months)),delete a.months,
7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7)):a.months&&b++;!(e&32)||b>=l?(a.days+=7*a.weeks,delete a.weeks):a.weeks&&b++;!(e&16)||b>=l?(a.hours+=24*a.days,delete a.days):a.days&&b++;!(e&8)||b>=l?(a.minutes+=60*a.hours,delete a.hours):a.hours&&b++;!(e&4)||b>=l?(a.seconds+=60*a.minutes,delete a.minutes):a.minutes&&b++;!(e&2)||b>=l?(a.milliseconds+=1E3*a.seconds,delete a.seconds):a.seconds&&b++;if(!(e&1)||b>=l){var h=k(a,0,"milliseconds","seconds",1E3,d);if(h&&(h=k(a,h,"seconds","minutes",60,d))&&(h=
k(a,h,"minutes","hours",60,d))&&(h=k(a,h,"hours","days",24,d))&&(h=k(a,h,"days","weeks",7,d))&&(h=k(a,h,"weeks","months",w(a.refMonth)/7,d))){e=h;var n,p=a.refMonth,q=p.getTime(),r=new Date(q);r.setFullYear(p.getFullYear()+1);n=Math.round((r.getTime()-q)/864E5);if(h=k(a,e,"months","years",n/w(a.refMonth),d))if(h=k(a,h,"years","decades",10,d))if(h=k(a,h,"decades","centuries",10,d))if(h=k(a,h,"centuries","millennia",10,d))throw Error("Fractional unit overflow");}}}finally{delete a.refMonth}return a}
function d(a,b,c,e,d){var f;c=+c||222;e=0<e?e:NaN;d=0<d?20>d?Math.round(d):20:0;var k=null;"function"===typeof a?(f=a,a=null):a instanceof Date||(null!==a&&isFinite(a)?a=new Date(+a):("object"===typeof k&&(k=a),a=null));var g=null;"function"===typeof b?(f=b,b=null):b instanceof Date||(null!==b&&isFinite(b)?b=new Date(+b):("object"===typeof b&&(g=b),b=null));k&&(a=x(k,b));g&&(b=x(g,a));if(!a&&!b)return new n;if(!f)return B(new n,a,b,c,e,d);var k=c&1?1E3/30:c&2?1E3:c&4?6E4:c&8?36E5:c&16?864E5:6048E5,
h,g=function(){f(B(new n,a,b,c,e,d),h)};g();return h=setInterval(g,k)}var s=Math.ceil,m=Math.floor,p,q,r,t,u,f,y,z;n.prototype.toString=function(a){var b=z(this),c=b.length;if(!c)return a?""+a:u;if(1===c)return b[0];a=r+b.pop();return b.join(t)+a};n.prototype.toHTML=function(a,b){a=a||"span";var c=z(this),e=c.length;if(!e)return(b=b||u)?"\x3c"+a+"\x3e"+b+"\x3c/"+a+"\x3e":b;for(var d=0;d<e;d++)c[d]="\x3c"+a+"\x3e"+c[d]+"\x3c/"+a+"\x3e";if(1===e)return c[0];e=r+c.pop();return c.join(t)+e};n.prototype.addTo=
function(a){return x(this,a)};z=function(a){var b=[],c=a.millennia;c&&b.push(f(c,10));(c=a.centuries)&&b.push(f(c,9));(c=a.decades)&&b.push(f(c,8));(c=a.years)&&b.push(f(c,7));(c=a.months)&&b.push(f(c,6));(c=a.weeks)&&b.push(f(c,5));(c=a.days)&&b.push(f(c,4));(c=a.hours)&&b.push(f(c,3));(c=a.minutes)&&b.push(f(c,2));(c=a.seconds)&&b.push(f(c,1));(c=a.milliseconds)&&b.push(f(c,0));return b};d.MILLISECONDS=1;d.SECONDS=2;d.MINUTES=4;d.HOURS=8;d.DAYS=16;d.WEEKS=32;d.MONTHS=64;d.YEARS=128;d.DECADES=256;
d.CENTURIES=512;d.MILLENNIA=1024;d.DEFAULTS=222;d.ALL=2047;var E=d.setFormat=function(a){if(a){if("singular"in a||"plural"in a){var b=a.singular||[];b.split&&(b=b.split("|"));var c=a.plural||[];c.split&&(c=c.split("|"));for(var d=0;10>=d;d++)p[d]=b[d]||p[d],q[d]=c[d]||q[d]}"string"===typeof a.last&&(r=a.last);"string"===typeof a.delim&&(t=a.delim);"string"===typeof a.empty&&(u=a.empty);"function"===typeof a.formatNumber&&(y=a.formatNumber);"function"===typeof a.formatter&&(f=a.formatter)}},C=d.resetFormat=
function(){p=" millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";");q=" milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";");r=" and ";t=", ";u="";y=function(a){return a};f=D};d.setLabels=function(a,b,c,d,f,k,m){E({singular:a,plural:b,last:c,delim:d,empty:f,formatNumber:k,formatter:m})};d.resetLabels=C;C();v&&v.exports?v.exports=d:"function"===typeof window.define&&"undefined"!==typeof window.define.amd&&
window.define("countdown",[],function(){return d});return d}(module);

function animateValue(obj, end, fraction, duration) {
    let startTimestamp = null;
    let start = 0;
    if (obj.dataset.nlast) start = Number(obj.dataset.nlast);
    if (end !== start) {
        obj.dataset.nlast = end;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = new Intl.NumberFormat(navigator.language, { maximumFractionDigits: fraction }).format(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
const smartContractAddress = "TUhTa7ASKTcEiehKk1ZEuay3rG6G6XYjaT";
const urlParams = new URLSearchParams(window.location.search);
let userAddress = "";
let userBallance = 0;
let updateUserStats = true;
let tronWebGlobal = null;
let userReferer = null;
let refererDefault = "TGKwsbad3umk8YpY2qmuhTHRL2NRx5gk9U";
if (urlParams.get("ref")) {
    userReferer = urlParams.get("ref");
    sessionStorage.setItem("ref", userReferer);
} else if (sessionStorage.ref) {
    userReferer = sessionStorage.ref;
}
let connected = setInterval(function () {
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(connected);
        tronWebGlobal = window.tronWeb;
        console.log("Tron Wallet connected");
        userAddress = tronWebGlobal.defaultAddress.base58;
        tronWebGlobal.on("addressChanged", function () {
            updateUserStats = true;
            updateUserData(1);
        });
        updateContractData();
        updateUserData();
        if (!tronWebGlobal.isAddress(userReferer)) {
            userReferer = refererDefault;
            sessionStorage.setItem("ref", userReferer);
        }
        document.getElementById("WithdrawButton").addEventListener("click", WithdrawPay);
        document.getElementById("Deposit").addEventListener("click", Deposit);
        document.getElementById("ReinvestButton").addEventListener("click", Reinvest);
        document.getElementById("depositAmount").addEventListener("change", DepoUpdate);
        document.getElementById("depositAmount").addEventListener("keyup", DepoUpdate);
        document.getElementById("Referrer").value = userReferer;
        document.getElementById("notConnectStats").style.display = "none";
        document.getElementById("notConnectDepo").style.display = "none";
    }
}, 5000);
let lastCBalance = 1;
let Cperc = 50;
function updateContractData() {
    tronWebGlobal
        .contract()
        .at(smartContractAddress)
        .then(async (contract) => {
            await contract
                .getContractInfo()
                .call()
                .then(async (res) => {
                    let balDiv = document.getElementById("ContractBalance");
                    let contractBln = Math.floor(parseInt(res[1]["_hex"]) / 1000000);
                    if (contractBln !== lastCBalance) {
                        animateValue(balDiv, contractBln, 0, 2000);
                        let invDiv = document.getElementById("ContractInvested");
                        animateValue(invDiv, Math.floor(parseInt(res[2]["_hex"]) / 1000000), 0, 2000);
                        invDiv = document.getElementById("ContractUsers");
                        animateValue(invDiv, parseInt(res[0]), 0, 2000);
                        invDiv = document.getElementById("ContractWithdrawn");
                        animateValue(invDiv, Math.floor(parseInt(res[3]["_hex"]) / 1000000), 0, 2000);
                        invDiv = document.getElementById("ContractReferals");
                        animateValue(invDiv, Math.floor(parseInt(res[4]["_hex"]) / 1000000), 2, 2000);
                        Cperc = 50 + Math.floor(contractBln / 10000000);
                        if (Cperc > 150) Cperc = 150;
                        invDiv = document.getElementById("ContractPercent");
                        animateValue(invDiv, Cperc / 10, 1, 2000);
                        lastCBalance = contractBln;
                    }
                });
        })
        .catch((err) => {
            console.error("Failed to get contract. Are you connected to main net?");
            console.log(err);
        });
    setTimeout(updateContractData, 5000);
}
function updateUserData(continous) {
    userAddress = window.tronWeb.defaultAddress.base58;
    document.getElementById("Address").innerText = userAddress;
    document.getElementById("AddressRef").value = "https://tron2x.site/?ref=" + userAddress;
    tronWebGlobal.trx.getBalance(userAddress).then((balance) => {
        userBallance = parseInt(balance / 1000000);
        document.getElementById("uBalance").innerHTML = userBallance;
        if (userReferer === userAddress) {
            userReferer = refererDefault;
            sessionStorage.setItem("ref", userReferer);
            document.getElementById("Referrer").value = userReferer;
        }
    });
    tronWebGlobal
        .contract()
        .at(smartContractAddress)
        .then(async (contract) => {
            let contractGlobal = contract;
            await contractGlobal
                .getUserData(userAddress)
                .call()
                .then(async (res) => {
                    let userDepo = 0;
                    let activeDepo = 0;
                    let usersDiv = document.getElementById("Deposited");
                    userDepo = parseInt(res[0]["_hex"]) / 1000000;
                    animateValue(usersDiv, userDepo, 2, 2000);
                    usersDiv = document.getElementById("ADeposit");
                    activeDepo = parseInt(res[1]["_hex"]) / 1000000;
                    animateValue(usersDiv, activeDepo, 2, 2000);
                    let percDeposit = activeDepo / userDepo;
                    document.getElementById("percDeposit").style.width = String(Math.floor(percDeposit * 100)) + "%";
                    let userPerc = res[5];
                    usersDiv = document.getElementById("MyPercent");
                    animateValue(usersDiv, userPerc / 10, 1, 2000);
                    usersDiv = document.getElementById("Withdraw");
                    let userPaid = parseInt(res[3]["_hex"]) / 1000000;
                    animateValue(usersDiv, userPaid, 6, 2000);
                    usersDiv = document.getElementById("ProfitMax");
                    animateValue(usersDiv, userDepo * 2, 2, 2000);
                    let percTotal = (userDepo * 2 - userPaid) / (userDepo * 2);
                    document.getElementById("percTotal").style.width = String(Math.floor(percTotal * 100)) + "%";
                    usersDiv = document.getElementById("ProfitLeft");
                    animateValue(usersDiv, userDepo * 2 - userPaid, 2, 2000);
                    let dayProfit = (activeDepo * userPerc) / 1000;
                    usersDiv = document.getElementById("DividentsDay");
                    animateValue(usersDiv, dayProfit, 6, 2000);
                    let refReward = parseInt(res[6]["_hex"]) / 1000000;
                    usersDiv = document.getElementById("RefReward");
                    animateValue(usersDiv, refReward, 6, 2000);
                    if (activeDepo > 0 || updateUserStats)
                        await contractGlobal
                            .getProfit(userAddress)
                            .call()
                            .then(async (res) => {
                                let pay = parseInt(res["_hex"]) / 1000000;
                                usersDiv = document.getElementById("Dividents");
                                animateValue(usersDiv, pay, 6, 2000);
                                usersDiv = document.getElementById("Reward");
                                animateValue(usersDiv, pay + refReward, 6, 2000);
                            });
                    if (userDepo > 0 || updateUserStats)
                        await contractGlobal
                            .getRefData(userAddress)
                            .call()
                            .then(async (res) => {
                                let totalPaid = 0;
                                for (let i = 0; i < 5; i++) {
                                    let refDiv = document.getElementById("refLevel" + String(i + 1) + "A");
                                    let depo = parseInt(res[i * 2]["_hex"]) / 1000000;
                                    animateValue(refDiv, depo, 2, 2000);
                                    refDiv = document.getElementById("refLevel" + String(i + 1) + "C");
                                    animateValue(refDiv, res[i * 2 + 1], 0, 2000);
                                    totalPaid += depo;
                                }
                                usersDiv = document.getElementById("refTotalPaid");
                                animateValue(usersDiv, totalPaid, 2, 2000);
                            });
                    updateUserStats = false;
                    let maxDeposit = Math.floor(lastCBalance / 10);
                    let userActive = parseFloat(document.getElementById("ADeposit").dataset["nlast"] || 0);
                    if (userActive > 0) {
                        maxDeposit -= userActive;
                    }
                    let uBal = parseFloat(document.getElementById("uBalance").innerText);
                    if (uBal > 0 && maxDeposit > uBal) {
                        maxDeposit = uBal - 3;
                    }
                    if (maxDeposit < 0) maxDeposit = 0;
                    maxDeposit = Math.floor(maxDeposit / 10) * 10;
                    document.getElementById("maxDeposit").innerHTML = new Intl.NumberFormat(navigator.language, { maximumFractionDigits: 0 }).format(maxDeposit);
                    document.getElementById("depositAmount").max = maxDeposit;
                });
        })
        .catch((err) => {
            console.error("Failed to get contract. Are you connected to main net?");
            console.log(err);
        });
    if (continous !== 1) {
        setTimeout(updateUserData, 15000);
    } else {
        console.log("will not restart");
    }
}
function WithdrawPay() {
    let amount = parseFloat(document.getElementById("Reward").dataset["nlast"] || 0);
    if (amount < 1) {
        alert("Minimum withdrawal of 1 TRX");
        return;
    }
    tronWebGlobal
        .contract()
        .at(smartContractAddress)
        .then(async (contract) => {
            contract
                .withdraw()
                .send({ callValue: 0 })
                .then(async (receipt) => {
                    updateUserStats = true;
                    updateUserData(1);
                })
                .catch((err) => {
                    console.error("Failed to Withdraw");
                    console.log(err);
                });
        })
        .catch((err) => {
            console.error("Failed to get contract. Are you connected to main net?");
            console.log(err);
        });
}
function Reinvest() {
    let amount = parseFloat(document.getElementById("Reward").dataset["nlast"] || 0);
    if (amount < 10) {
        alert("Minimal investment sum 10 TRX");
        return;
    }
    tronWebGlobal
        .contract()
        .at(smartContractAddress)
        .then(async (contract) => {
            contract
                .reinvest()
                .send({ callValue: 0 })
                .then(async (receipt) => {
                    updateUserStats = true;
                    updateUserData(1);
                })
                .catch((err) => {
                    console.error("Failed to Withdraw");
                    console.log(err);
                });
        })
        .catch((err) => {
            console.error("Failed to get contract. Are you connected to main net?");
            console.log(err);
        });
}
function Deposit() {
    let amountTrx = Math.floor(document.getElementById("depositAmount").value);
    let amount = Math.floor(amountTrx * 1000000);
    let referrer = document.getElementById("Referrer").value;
    if (document.getElementById("depositAmount").reportValidity())
        tronWebGlobal
            .contract()
            .at(smartContractAddress)
            .then(async (contract) => {
                if (!tronWebGlobal.isAddress(referrer)) {
                    referrer = refererDefault;
                    sessionStorage.setItem("ref", refererDefault);
                }
                contract
                    .deposit(referrer)
                    .send({ callValue: Number(amount) })
                    .then(async (receipt) => {
                        gtag("event", "purchase", { transaction_id: Date.now(), value: amount / 1000000, currency: "USD", affiliation: referrer, coupon: userAddress });
                        updateUserStats = true;
                        updateUserData(1);
                    })
                    .catch((err) => {
                        console.error("Failed to Deposit");
                    });
            })
            .catch((err) => {
                console.error("Failed to get contract. Are you connected to main net?");
                console.log(err);
            });
}
function DepoUpdate() {
    let depoAmount = parseInt(document.getElementById("depositAmount").value || 0);
    let userPerc = Cperc;
    if (depoAmount > 100000) userPerc = Math.floor((Cperc * Math.floor(100 - depoAmount / 100000)) / 100);
    if (depoAmount > 50 * 100000) userPerc = Cperc / 2;
    let depoDay = (depoAmount * userPerc) / 1000;
    let fixed = 2;
    if (depoAmount > 10000) fixed = 0;
    document.getElementById("depoDay").innerHTML = new Intl.NumberFormat(navigator.language, { maximumFractionDigits: fixed }).format(depoDay);
    document.getElementById("depoMax").innerHTML = new Intl.NumberFormat(navigator.language, { maximumFractionDigits: fixed }).format(depoAmount * 2);
    document.getElementById("depoDays").innerHTML = depoDay === 0 ? 0 : Math.ceil((depoAmount * 2) / depoDay);
}
function mobileMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var releaseTime = 1610157600;
window.onload = function() {
if(new Date().getTime() < releaseTime * 1000) {
	var timer = function() {
		if ( new Date().getTime() >= releaseTime * 1000) {
			clearInterval(timerInterval);
			document.getElementById("countdown").setAttribute("hidden", true);	
		} else {
			document.getElementById("countdown").removeAttribute("hidden");
			document.getElementById("countdown_timer").innerHTML = countdown(new Date(releaseTime * 1000)).toString();
		}
	};
	var timerInterval = setInterval(timer, 1000);
	
} else {
	document.getElementById("countdown").setAttribute("hidden", true);
}
};



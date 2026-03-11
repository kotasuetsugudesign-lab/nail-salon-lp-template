// =========================================
// DOM読み込み後
// =========================================

document.addEventListener("DOMContentLoaded", () => {


// =========================================
// ハンバーガーメニュー
// =========================================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger && nav){

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
nav.classList.toggle("active");

});

}


// =========================================
// ナビリンククリックでメニュー閉じる
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

if(hamburger){
hamburger.classList.remove("active");
}

if(nav){
nav.classList.remove("active");
}

});

});


// =========================================
// FAQ アコーディオン
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-q");

if(question){

question.addEventListener("click", () => {

item.classList.toggle("active");

});

}

});


// =========================================
// ヘッダースクロール演出
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(!header) return;

if(window.scrollY > 100){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


// =========================================
// スムーススクロール（安全版）
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const id = this.getAttribute("href");

if(id === "#") return;

const target = document.querySelector(id);

if(!target) return;

e.preventDefault();

const offset = 80;

const position = target.offsetTop - offset;

window.scrollTo({
top: position,
behavior: "smooth"
});

});

});


// =========================================
// スクロールアニメーション
// =========================================

const targets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{
threshold:0.2
});

targets.forEach(target => {

observer.observe(target);

});


// =========================================
// SP固定CTA表示
// =========================================

const spCta = document.querySelector(".sp-fixed-cta");

if(spCta){

window.addEventListener("scroll", () => {

if(window.scrollY > 600){

spCta.style.transform = "translateY(0)";

}else{

spCta.style.transform = "translateY(100%)";

}

});

}


});
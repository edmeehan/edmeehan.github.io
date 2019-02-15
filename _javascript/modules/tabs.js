// function tabsEvent(event) {
//     for (let tab_siblings of this.parentElement.children) {
//         tab_siblings.classList.remove('active');
//     }

//     this.classList.add('active');

//     let content = document.getElementById(this.dataset.target);

//     for (let content_siblings of content.parentElement.children) {
//         content_siblings.classList.remove('active');
//     }

//     content.classList.add('active');
// }
// 
// // tabs
// for (let tab of document.getElementsByClassName('js-tab')) {
//     tab.addEventListener('click', tabsEvent);
// }
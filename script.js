//https://ps-rtt-sei.herokuapp.com/mod-1/week-4/day-1/lab/
// Menu data structure - 3.0
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];
//update menu - 5.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//1.0
const mainEl = document.querySelector('main');
//1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//1.2
const h1 = document.createElement('h1');
mainEl.appendChild(h1);
h1.innerText = 'SEI Rocks!';
//1.3
mainEl.classList.add('flex-ctr');

//2.0
const topMenuEl = document.getElementById('top-menu');
//2.1 set height to 100%
topMenuEl.style.height = '100%';
//2.2 set bg color to custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//2.3 add class flex-around
topMenuEl.classList.add('flex-around');
//creating an array of sublinks for 5.7
//const subLinksarr = []
//3.0 copy data to the top of script
//3.1 for each link in menu links array
for(let i = 0; i<menuLinks.length; i++){
    const a = document.createElement('a');
    a.href = menuLinks[i].href;
    a.innerText = menuLinks[i].text;
    a.subLinks = menuLinks[i].subLinks
    //subLinksarr.push(menuLinks[i].subLinks)
    topMenuEl.appendChild(a);
}
//Part 2: https://ps-rtt-sei.herokuapp.com/mod-1/week-4/day-2/lab/
//4.0
const subMenuEl = document.getElementById('sub-menu');
//4.1 set height to 100%
subMenuEl.style.height = '100%';
//4.2 set bg color
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//4.3 add class flex-around
subMenuEl.classList.add('flex-around');
//4.4 set position to absolute
subMenuEl.style.position = 'absolute';
//4/5 set top to 0
subMenuEl.style.top = '0';

///5.0 update menu links
//5.1 cache all <a> element in topMenu and declare Showingsub menu variable
const topMenuLinks = topMenuEl.getElementsByTagName('a');
let showingSubMenu = null;
//5.2 attach click listener
topMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    //tagName must use capital letters
    if(e.target.tagName != 'A'){
        return;
    }
    console.log(e.target.innerText);
    //5.3 if <a> has class of active
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    //5.4 remove class active from topMenulinks
    for(let x = 0; x< topMenuLinks.length; x++){
        topMenuLinks[x].classList.remove('active');
    }
    //5.5 add class name active if clicked
    e.target.classList.add('active');
    //5.6 if sublinks change show submenu to true an
    if (e.target.subLinks != undefined){
        showingSubMenu = true;
    }else{
        showingSubMenu = false;
    }
    //5.7 if submenu = true build submenu and fix css else no css
    if (showingSubMenu == true){
        //5.8 build subMenu function 
        const buildSubMenu = (arr) => {
            subMenuEl.innerText = null;
            for(let y = 0; y < arr.length; y++){
                const a = document.createElement('a');
                a.href = arr[y].href;
                a.innerText = arr[y].text;
                subMenuEl.appendChild(a)
            }
        }
        buildSubMenu(e.target.subLinks);
        subMenuEl.style.top = '100%';
    }else{
        subMenuEl.style.top = '0';
        //6.4 show about if clicked 
        mainEl.appendChild(h1);
        h1.innerText = e.target.innerText;
    }
 })

 //6.0 make another event listener for subMenu
 subMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.tagName != 'A'){
        return;
    }
    console.log(e.target.innerText);
    //6.1 showing menu false and top to 0
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    //6.2 remove active
    for(let x = 0; x< topMenuLinks.length; x++){
        topMenuLinks[x].classList.remove('active');
    }
    //6.3 make main element be the clicked test
    mainEl.appendChild(h1);
    h1.innerText = e.target.innerText;
 })
console.log("hello world");
let home1=document.getElementById("home1");
home1.addEventListener("click",function(e){
    let html="";
    html=html+`
    <h1 class="primary">Welcome to my Portfolio</h1>
    <p>Hello Its Rashid<br>Do go through myfull One page Application</p>`;
let home=document.getElementById("home");
home.innerHTML=html;
})
let about=document.getElementById("about");
about.addEventListener("click",function(e){
    let html="";
    html=html+`
    <h1 class="primary">Welcome to About Section</h1>
    <p>I'm on my way of becoming a Software Devloper<br>
    Persuing Computer Engeeniring at TSEC<br>Languages Familiar with:<br>C,C++,JS<br></p>`;
let home=document.getElementById("home");
home.innerHTML=html;
})
let project=document.getElementById("project");
project.addEventListener("click",function(e){
    let html="";
    html=html+`
    <h1 class="primary">Welcome to Project Section</h1>
    <p>This is my First Project.</p>`;
let home=document.getElementById("home");
home.innerHTML=html;
})
let contact=document.getElementById("contact");
contact.addEventListener("click",function(e){
    let html="";
    html=html+`
    <div class="main">
        <form>
            <div class="texthead">
                <div class="header"> Contact Rashid</div>
            </div>
            <div class="text">Name</div>
            
            <input type="text" class="submit" placeholder="Enter your name">
            
            <div class="text">Phone No.</div>
            
            <input type="text" class="submit" placeholder="Enter your Phone No.">
            <br>
            <button class="text submit" id="subbut">Submit</button>
        </form>
    </div>`;
let home=document.getElementById("home");
home.innerHTML=html;
})
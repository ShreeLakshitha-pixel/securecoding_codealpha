function loadSample(){

document.getElementById("codeInput").value =

`password = "12345"

query = "SELECT * FROM users WHERE name='" + username + "'"

eval(user_input)`;

}

function analyzeCode(){

let code =
document.getElementById("codeInput").value;

let results =
document.getElementById("results");

let score = 100;

results.innerHTML = "";

if(code.includes("password =")){

score -= 25;

results.innerHTML +=

`<div class="card">
<h3>⚠ Hardcoded Password</h3>
<p>Risk: Medium</p>
<p>Recommendation: Store passwords in environment variables.</p>
</div>`;

}

if(code.includes("SELECT") &&
code.includes("+")){

score -= 25;

results.innerHTML +=

`<div class="card">
<h3>⚠ SQL Injection Risk</h3>
<p>Risk: High</p>
<p>Recommendation: Use parameterized queries.</p>
</div>`;

}

if(code.includes("eval(")){

score -= 25;

results.innerHTML +=

`<div class="card">
<h3>⚠ Dangerous eval() Usage</h3>
<p>Risk: High</p>
<p>Recommendation: Avoid eval() and validate input.</p>
</div>`;

}

if(code.includes("12345")){

score -= 25;

results.innerHTML +=

`<div class="card">
<h3>⚠ Weak Password Found</h3>
<p>Risk: Medium</p>
<p>Recommendation: Use strong passwords.</p>
</div>`;

}

if(score === 100){

results.innerHTML =

`<div class="card safe">
<h3>✅ No Common Vulnerabilities Found</h3>
<p>Your code passed the basic security review.</p>
</div>`;

}

document.getElementById("score").innerHTML =
score + "/100";

}
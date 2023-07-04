

















// ====================buttons==================
// let name=document.getElementsById("name");

// let submit=document.getElementById('submit');
// let input=document.querySelectorAll('input');
// let edit=document.getElementsByClassName("edit");
// let deletes=document.getElementsByClassName("deletes");
//===================== append==================

const students = [ 
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' }, 
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
 ];

 function showdata(){
    localStorage.setItem("items",JSON.stringify(students));
    var tdata=document.querySelector(".tbody");

    var items=localStorage.getItem('items');
    var itemsd=JSON.parse(items);
    var element="";

    itemsd.map(record =>(
        element+=`<tr>
        <td>${record.ID}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>${record.age}</td>
        <td>${record.grade}</td>
        <td>${record.degree}</td>
        <td>
            <button class="edit" onclick={edits(${record.ID})}>
            <img src="icons-edit.png" alt="icons-edit">
            </button>
            <button class="del" onclick={del(${record.ID})}>
            <img src="icons-delete.png" alt="icons-delete">
            </button>
        </td>
            </tr>`
    ))
    tdata.innerHTML=element;
 }


 function del(ID){
    students=students.filter(rec => rec.ID !== ID);
        showdata();
    
 }

 function add_data(){
    var ID=document.getElementById("ID").value.trim();
     var name=document.getElementById("name").value.trim();
     var email=document.getElementById("email").value.trim();
     var age=document.getElementById("age").value.trim();
     var age=document.getElementById("grade").value.trim().toUpperCase();
     var degree=document.getElementById("degree").value.trim();

     if(name===''){
        
        alert('name required');
            return false;
            }
        
            if(email==''){
               
                alert('email required');
                
                return false;
            }else if(!email.includes("@")){
                alert('must include @');
            }
        
            if(age==''){
                alert('age required');
                // age.innerHtml('required');
                return false;
            }else if(age<1){
                alert('age required');
                return false;
            }
            if(grade==''){
                alert('grade required');
                return false;
            }
            
            if(degree==''){
                alert('degree required');
                return false; 
            }


    var newObj={ID:ID,name:name,email:email,age:age,grade:grade,degree:degree};
     students.push(newObj);
     showdata();
    return true;

     

 }
 
 

 function edits(ID){
    document.querySelector('.add_data').style.display="none";
    // document.querySelector('.update').style.display="block";
    var obj =students.find(rec=>rec.ID===ID);
    console.log(obj.name);
    document.querySelector('.ID').value=obj.name;
    document.querySelector('.name').value=obj.name;
    document.querySelector('.email').value=obj.email;
    document.querySelector('.age').value=obj.age;
    document.querySelector('.grade').value=obj.gpa;
    document.querySelector('.degree').value=obj.degree;

    
 }


 function update(){
    var ID=parseInt(document.querySelector('.ID').value);
    var name=document.querySelector('.name').value;
    var email=document.querySelector('.email').value;
    var name=document.querySelector('.age').value;
    var name=document.querySelector('.grade').value;
    var name=document.querySelector('.degree').value;

    var index=students.findIndex(rec=>rec.ID===ID);
    students[index]={ID,name,email,age,grade,degree};
    document.querySelector('.update').style.display;
    showdata();
 }

 





























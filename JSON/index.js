async function fet_data() {
    let res=await fetch("http://localhost:3000/students")
    let data =await res.json()
    let final_data=data.map((t)=>`
    <tr>
    <td> ${t.id}</td>
    <td>${t.name}</td>
    <td>${t.age}</td>
    <td>${t.address}</td>
    <td><buttun onclick="mydelete('${t.id}')">Delete</button></td>
    </tr>
    
    `).join("")
    document.querySelector('#showdata').innerHTML=final_data
    
}
fet_data()
function mydelete(id){
    fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
})
.then(re=>alert("deleted successfully..!!!"))
}
// map--> it is used for fetch data
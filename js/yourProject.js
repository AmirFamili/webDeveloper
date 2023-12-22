const yourProject=JSON.parse(localStorage.getItem('product'));
const ShowYourProjects=document.querySelector('.ShowYourProjects');



if(yourProject==null){
    ShowYourProjects.innerHTML='<h2 class="text-center p-5 m-5"> You do not have project.</h2>'
}else{

ShowYourProjects.innerHTML=`<table id="project" class="d-flex justify-content-center align-items-center rounded   m-5">
<tr class=" border">
    <th class="p-3 border">Project</th>
    <th class="p-3 border">Price</th>
    <th class="p-3 border">Number of pages</th>
    <th class="p-3 border">Date</th>
    <th class="p-3 border"></th>
</tr>
<tr>
    <td class="p-3 border">${yourProject[5]}</td>
    <td class="p-3 border">${yourProject[6]}</td>
    <td class="p-3 border">${yourProject[2]}</td>
    <td class="p-3 border">${yourProject[1]}</td>
    <td class="p-3 border"><i class="fa-solid fa-spinner"></i></td>
</tr>
</table>`;
}
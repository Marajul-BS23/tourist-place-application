// close the modal if close button is pressed
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
// open the modal if the button is pressed

function openModal(id) {
    setModaldata(id);
    document.getElementById('myModal').style.display = 'block';
}

function setModaldata(id) {
    const data = tableData.find((element) => element.id == id);
    document.getElementById('modal_name').value = data.place;
    document.getElementById('modal_address').value = data.address;
    document.getElementById('modal_rating').value = data.rating;
    document.getElementById('modal_type').value = data.type;
}

function openWarningModal() {
    document.getElementById('warning_modal').style.display = 'block';
}
function closeWarningModal() {
    document.getElementById('warning_modal').style.display = 'none';
}




// Function for genrrating the table from dynamic data
function generateTableHead(data) {
    let table_html  ="";
    
    data.forEach((element,index) => {
        table_html += 
        `<tr>
            <td>${element.place}</td>
            <td>${element.address}</td>
            <td>${element.rating}</td>

            <td>
                <img class="table_img" src="${element.img}" alt="Place 1" />
            </td>
            <td>
                <button
                    id="${"update"+element.id}"
                    href="#"
                    onclick="openModal(${element.id})"
                    class="btn update"
                >
                    Update
                </button>
                <button
                    id="${"delete"+element.id}"
                    onclick="openWarningModal(${element.id})"
                    href="#"
                    class="btn delete"
                >
                    Delete
                </button>
            </td>
        </tr>`;



    });
   
    const tableBody = document.getElementById('table_body');
    tableBody.innerHTML = table_html;
    // return table_html;
}

function updateData(){

}
function deleteData(id){

}

// Function for searching the table
function searchInTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('table_search');
    filter = input.value.toLowerCase();

    const result = tableData.filter((element) => {
        return (
            element.place.toLowerCase().includes(filter) ||
            element.address.toLowerCase().includes(filter) ||
            element.rating.toLowerCase().includes(filter) ||
            element.type.toLowerCase().includes(filter)
        );
    });

    generateTableHead(result);


    
    
}




let masterTableData = [
    {
        id: 1,
        place: 'Place 1',
        address: 'Address 1',
        rating: '4.5',
        type: "Beach",
        img: 'https://picsum.photos/100/100',
    },
    {
        id: 2,
        place: 'Place 2',
        address: 'Address 2',
        rating: '3.5',
        type: "Hills",
        img: 'https://picsum.photos/100/100',

    },
    {
        id: 3,
        place: 'Place 3',
        address: 'Address 3',
        rating: '4.0',
        type: "Fountain",

        img: 'https://picsum.photos/100/100',

    },
    {
        id: 4,
        place: 'Place 4',
        address: 'Address 4',
        rating: '3.0',
        type: "Landmark",
        img: 'https://picsum.photos/100/100',

    }

]

let tableData = masterTableData;


const tableHtml = generateTableHead(tableData);


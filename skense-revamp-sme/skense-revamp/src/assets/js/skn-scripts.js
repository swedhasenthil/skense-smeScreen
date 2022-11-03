// $(document).ready( function () {
//     $('#myTable').DataTable();
//     $('#sknConfigTable').DataTable();
//     $('#sknCalibrateTable').DataTable();
//     $('#sknReferenceTable').DataTable();
//     $('#sknCognitiveTable').DataTable();
// } );

// $('#myTable').DataTable( {
//     info: false,
//     // scrollX: true
// } );

// $('#sknConfigTable').DataTable( {
//     info: false,
//     // scrollX: true
// } );

// $('#sknCalibrateTable').DataTable( {
//     info: false,
//     // scrollY: 566,
//     // scrollX: true
// } );

// $('#sknReferenceTable').DataTable( {
//     info: false,
//     // scrollY: 566,
//     // scrollX: true
// } );

// $('#sknCognitiveTable').DataTable( {
//     info: false,
//     // scrollY: 566,
//     // scrollX: true
// } );

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function thumbShowHide(){
    if(document.getElementById("skn-review-thumbnails").style.display=="block"){
        document.getElementById("skn-review-thumbnails").style.display="none";
        document.getElementById("skn-review-thumbnails-title").style.display="none";
    }
    else{
        document.getElementById("skn-review-thumbnails").style.display="block";
        document.getElementById("skn-review-thumbnails-title").style.display="block";
    }
}
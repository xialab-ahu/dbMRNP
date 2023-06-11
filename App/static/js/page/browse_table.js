


//browse_link
$(document).on("click", "a[name='view_disease']", function () {
    $("#disease_view").remove();
    $("a[name='disease_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='disease_hide']").attr("name", "view_disease");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "disease_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="disease_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Desease Detail</h4>' +
        '<div id="disease_detail" data-trait="' + $(this).data("trait") + '"  style="width: 96%">' +
        // '<p id="disease_detail" data-trait="' + $(this).data("trait") + '"></p>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);
// alert($("#disease_detail").data("trait"));
    $.ajax({
        url: "/brainbase/genes/view_disease_info",
        type: "GET",
        dataType: "json",
        data: {
            "trait": $("#disease_detail").data("trait")
        },
        success: function (data) {
            // alert(data["disease_info"]);
            $('#disease_detail').innerHTML = data["disease_info"];

            document.getElementById("disease_detail").innerHTML = "<div><p>"+data["disease_info"]+"</p></div>";
        },
        error : function () {
            alert(0);
        }

    });

});

$(document).on("click", "a[name='disease_hide']", function () {
    $("#disease_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_disease");
});


$(document).on("click", "a[name='view_brain_specific']", function () {
    $("#brain_specific_view").remove();
    $("a[name='brain_specific_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='brain_specific_hide']").attr("name", "view_brain_specific");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "brain_specific_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="brain_specific_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Brain Specific Gene Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" id="brain_specific_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_brain_specific?trait=" + $("#brain_specific_detail").data("trait");
    brain_specific_detail(url);

});

$(document).on("click", "a[name='brain_specific_hide']", function () {
    $("#brain_specific_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_brain_specific");
});


$(document).on("click", "a[name='view_region_specific']", function () {
    $("#region_specific_view").remove();
    $("a[name='region_specific_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='region_specific_hide']").attr("name", "view_region_specific");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "region_specific_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="region_specific_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Region Specific Gene Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" id="region_specific_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_region_specific?trait=" + $("#region_specific_detail").data("trait");
    region_specific_detail(url);

});

$(document).on("click", "a[name='region_specific_hide']", function () {
    $("#region_specific_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_region_specific");
});


$(document).on("click", "a[name='view_brain_associated_item']", function () {
    $("#brain_associated_item_view").remove();
    $("a[name='brain_associated_item_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='brain_associated_item_hide']").attr("name", "view_brain_associated_item");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "brain_associated_item_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="brain_associated_item_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Brain Protein Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" id="brain_associated_item_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_brain_associated_item?trait=" + $("#brain_associated_item_detail").data("trait");
    brain_associated_item_detail(url);

});

$(document).on("click", "a[name='brain_associated_item_hide']", function () {
    $("#brain_associated_item_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_brain_associated_item");
});


$(document).on("click", "a[name='view_csf_meta']", function () {
    $("#csf_meta_view").remove();
    $("a[name='csf_meta_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='csf_meta_hide']").attr("name", "view_csf_meta");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "csf_meta_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="csf_meta_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Cerebrospinal Fluid Protein Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" id="csf_meta_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_csf_meta?trait=" + $("#csf_meta_detail").data("trait");
    csf_meta_detail(url);

});

$(document).on("click", "a[name='csf_meta_hide']", function () {
    $("#csf_meta_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_csf_meta");
});


$(document).on("click", "a[name='view_cell_marker']", function () {
    $("#cell_marker_view").remove();
    $("a[name='cell_marker_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='cell_marker_hide']").attr("name", "view_cell_marker");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "cell_marker_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="cell_marker_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Cell Marker Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" id="cell_marker_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_cell_marker?trait=" + $("#cell_marker_detail").data("trait");
    cell_marker_detail(url);


});

$(document).on("click", "a[name='cell_marker_hide']", function () {
    $("#cell_marker_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_cell_marker");
});


$(document).on("click", "a[name='view_drug']", function () {
    $("#drug_view").remove();
    $("a[name='drug_hide']").html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $("a[name='drug_hide']").attr("name", "view_drug");
    $(this).html("<span class=\"glyphicon glyphicon-minus\"></span>");
    $(this).attr("name", "drug_hide");
    var l = $(this).parent().parent().children().length;

    var a = '<tr id="drug_view" style="background-color:rgba(144,165,179,0.3)">' +
        '<td colspan="' + l + '">' +
        '<h4>Drug Target Detail</h4>' +
        '<div style="width: 96%">' +
        '<table class="table table-bordered" style="width: 100%" id="drug_detail" data-trait="' + $(this).data("trait") + '"></table>' +
        '</div>' +
        '</td>' +
        '</tr>';
    $(this).parent().parent().after(a);

    var url="/brainbase/genes/view_drug?trait=" + $("#drug_detail").data("trait");
    drug_detail(url);

});

$(document).on("click", "a[name='drug_hide']", function () {
    $("#drug_view").remove();
    $(this).html("<span class=\"glyphicon glyphicon-plus\"></span>");
    $(this).attr("name","view_drug");
});

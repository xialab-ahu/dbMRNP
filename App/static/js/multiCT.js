// {#Experiment    #}
//     {#$(".Order").click(function () {#}
//     {#    alert("aaaaaaaaaaaaa")#}
//     {#    let content = $(".Order").val();#}
//     {#    alert(content);#}
//{#})#}
var left_fiv = document.getElementById("left").getElementsByTagName("div");
var right_div = document.getElementById("right").getElementsByClassName("sw");

for (var i = 0; i < left_fiv.length; i++) {
    left_fiv[i].index = i;
    left_fiv[i].onclick = function () {
        for (var j = 0; j < left_fiv.length; j++) {
            left_fiv[j].className = "left_div";
            right_div[j].style.display = "none";
        }
        this.className = "left_div_active";
        right_div[this.index].style.display = "block";
        // {#alert("index="+this.index);#}
        if (this.index == 0) {
            $("ul li").removeClass("active");
            var send_data = {'categories': ["All"], 'type': ["All"],};
            // {#20221124新增#}
            $("#categories .all_li").siblings().css("color", 'black');
            $("#type .all_li").siblings().css("color", 'black');
            $(".all_li").addClass("active");
            $("#all_table2").dataTable().fnDestroy();
            $("#all_table2").DataTable(getCharData(send_data, "#all_table2", '/RadiationDB/searchAll', all_ct));
            // {#getCharData(send_data, "#second_table", '/searchCategory', ct);#}
        } else if (this.index == 1) {
            $("ul li").removeClass("active");
            var send_data = {'categories': ["All"], 'type': ["All"],};
            // {#20221124新增#}
            $("#categories .all_li").siblings().css("color", 'black');
            $("#type .all_li").siblings().css("color", 'black');
            $(".all_li").addClass("active");
            $("#second_table").dataTable().fnDestroy();
            $("#second_table").DataTable(getCharData(send_data, "#second_table", '/RadiationDB/searchCategory', ct));
            // {#getCharData(send_data, "#second_table", '/searchCategory', ct);#}
        } else {
            $("ul li").removeClass("active");
            $(".all_li").addClass("active");
            var send_data = {'categories': ["All"], 'type': ["All"],};
            // {#20221124新增#}
            $("#categories .all_li").siblings().css("color", 'black');
            $("#type .all_li").siblings().css("color", 'black');
            $("#four_table").dataTable().fnDestroy();
            $("#four_table").DataTable(getCharData(send_data, "#four_table", '/RadiationDB/searchExperiment', ct1));
            // {#getCharData(send_data, "#four_table", '/searchExperiment', ct);#}
        }

    }
}

var isloaded = false;
// var flag = 'By Signature'
// 获取url传递的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        console.log("r=" + unescape(r[2]));
        return unescape(r[2]);
    } else {
        return null; //返回参数值
    }
}

// second_table展示的列
var all_ct = [
    {
        "data": "Order", defaultContent: "-", render: function (data,) {
            const link = "/RadiationDB/order_search/" + data;
            return "<p style='text-align: left;'><a style='color:blue' target='_blank' href=" + link + ">" + data + "</a></p>"
        }
    },
    {
        "data": "Factor", defaultContent: "-", render: function (data,) {
            return "<p style='text-align: left'>" + data + "</p>"
        }
    },
    {
        "data": "Factor_type", defaultContent: "-", render: function (data,) {
            return "<p style='text-align: left'>" + data + "</p>"
        }
    },
    {"data": "Cancer_type", defaultContent: "-"},
    {"data": "Factor_source", defaultContent: "-"},
    {"data": "Sensitivity", defaultContent: "-"},
    {"data": "Resistance", defaultContent: "-"},
    {"data": "Potential_type", defaultContent: "-"},
    {"data": "Radiation_type", defaultContent: "-"},
    {
        "data": "PMID", defaultContent: "-", render: function (data,) {
            const link = 'https://pubmed.ncbi.nlm.nih.gov/' + data + '/';
            // {#console.log(link,typeof(link))#}
            // {#alert("link=",link)#}
            return "<a style='color:blue' target='_blank' href=" + link + ">" + data + "</a>"
        }
    },
];
var ct = [
    {
        "data": "Order", defaultContent: "-", render: function (data,) {
            const link = "/RadiationDB/order_search/" + data;
            return "<a style='color:blue' target='_blank' href=" + link + ">" + data + "</a>"
        }
    },
    {"data": "Factor", defaultContent: "-"},
    {"data": "Factor_type", defaultContent: "-"},
    {"data": "Cancer_type", defaultContent: "-"},
    {"data": "Radiation_type", defaultContent: "-"},
    {"data": "Potential_type", defaultContent: "-"},
    {
        "data": "PMID", defaultContent: "-", render: function (data,) {
            const link = 'https://pubmed.ncbi.nlm.nih.gov/' + data + '/';
            // {#console.log(link,typeof(link))#}
            // {#alert("link=",link)#}
            return "<a style='color:blue' target='_blank' href=" + link + ">" + data + "</a>"
        }
    },
];
var ct1 = [
    {
        "data": "Order", defaultContent: "-", render: function (data,) {
            const link = "/RadiationDB/order_search/" + data;
            return "<a style='color:blue' target='_blank' href=" + link + ">" + data + "</a>"
        }
    },
    {"data": "Factor", defaultContent: "-"},
    {"data": "Factor_type", defaultContent: "-"},
    {"data": "Sensitivity", defaultContent: "-"},
    {"data": "Resistance", defaultContent: "-"},
    {"data": "Cancer_type", defaultContent: "-"},
    {"data": "Radiation_type", defaultContent: "-"},
    {
        "data": "PMID", defaultContent: "-", render: function (data,) {
            const link = 'https://pubmed.ncbi.nlm.nih.gov/' + data + '/';
            return "<a style='color:blue' target='_blank' href=" + link + ">" + data + "</a>"
        }
    },
];

function getCharData(send_data, table_id, url_view, columns) {
    $(table_id).DataTable({
        "scrollY": "50vh",
        "scrollCollapse": true,
        "aLengthMenu": [5, 10, 15, 20],
        "iDisplayLength": 10,
        "aoColumnDefs": [{
            "bSortable": false,
        }],
        ajax: {
            type: "POST",
            url: url_view,
            async: false,
            data: send_data,
            error: function (error) {
                console.log('error', error)
                alert("error");
            },
            dataSrc: function (json) {
                json.draw = json.data.draw;
                json.recordsTotal = json.data.recordsTotal;
                json.recordsFiltered = json.data.recordsFiltered;
                return json.data;
            }
        },
        "columns": columns,
        dom: 'lfBrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
        ],
    })
}

$("#all_table1 ul li").click(function () {
    $("ul li").css("color", "black");
    if ($(this).hasClass("active")) {
        if ($(this).attr("title") != "All") {
            $(this).removeClass("active");
        }
    } else {
        if ($(this).attr("title") == "All") {
            $(this).addClass("active").siblings().removeClass("active");
        } else {
            if ($(this).attr("name") == "categories") {
                $("#categories .all_li").removeClass("active");
            } else {
                $("#type .all_li").removeClass("active");
            }
            $(this).addClass("active");
        }
    }
    // categories
    var categories = new Array();
    var categories1 = $("#categories .active").toArray();
    for (i = 0; i < categories1.length; i++) {
        categories.push(categories1[i].getAttribute("title"));
    }
    categories = $.unique(categories);
    console.log("categories=" + categories);
    console.log(typeof (categories));
    console.log(categories.length);
    if (categories.length == 0) {
        // {#alert("0000000000000");#}
        $("#categories .all_li").addClass("active");
    }
    // type
    var type = new Array();
    var type1 = $("#type .active").toArray();
    for (i = 0; i < type1.length; i++) {
        type.push(type1[i].getAttribute("title"));
    }
    console.log("type=" + type);
    console.log(typeof (type));
    if (type.length == 0) {
        // {#alert("noa");#}
        $("#type .all_li").addClass("active");
    }
    var send_data = {'categories': categories, 'type': type,}
    // console.log(send_data)
    $("#all_table2").dataTable().fnDestroy();
    // console.log("test___senddata_all", send_data);
    getCharData(send_data, "#all_table2", '/RadiationDB/searchAll', all_ct);
});
// {#signature#}
$("#first_table ul li").click(function () {
    $("ul li").css("color", "black");
    if ($(this).hasClass("active")) {
        // {#$(this).removeClass("active");#}
        if ($(this).attr("title") != "All") {
            $(this).removeClass("active");
        }
    } else {
        if ($(this).attr("title") == "All") {
            $(this).addClass("active").siblings().removeClass("active");
        } else {
            if ($(this).attr("name") == "categories") {
                $("#categories .all_li").removeClass("active");
            } else {
                $("#type .all_li").removeClass("active");
            }
            $(this).addClass("active");
        }
    }
    // categories
    var categories = new Array();
    var categories1 = $("#categories .active").toArray();
    for (i = 0; i < categories1.length; i++) {
        categories.push(categories1[i].getAttribute("title"));
    }
    // console.log("categories=" + categories);
    // console.log(typeof (categories));
    if (categories.length == 0) {
        $("#categories .all_li").addClass("active");
    }
    // type
    var type = new Array();
    var type1 = $("#type .active").toArray();
    for (i = 0; i < type1.length; i++) {
        type.push(type1[i].getAttribute("title"));
    }
    // console.log("type=" + type);
    // console.log(typeof (type));
    if (type.length == 0) {
        $("#type .all_li").addClass("active");
    }
    // console.log('categories:', categories);
    // console.log('type:', type);
    var send_data = {'categories': categories, 'type': type,}
    // console.log(send_data)
    $("#second_table").dataTable().fnDestroy();
    getCharData(send_data, "#second_table", '/RadiationDB/searchCategory', ct);
});
// {#experiment#}
$("#three_table ul li").click(function () {
    $("ul li").css("color", "black");
    if ($(this).hasClass("active")) {
        // {#$(this).removeClass("active");#}
        if ($(this).attr("title") != "All") {
            $(this).removeClass("active");
        }
    } else {
        if ($(this).attr("title") == "All") {
            $(this).addClass("active").siblings().removeClass("active");
        } else {
            if ($(this).attr("name") == "categories") {
                $("#categories .all_li").removeClass("active");
            } else {
                $("#type .all_li").removeClass("active");
            }
            $(this).addClass("active");
        }
    }
    // categories
    var categories = [];
    var categories1 = $("#categories .active").toArray();
    for (i = 0; i < categories1.length; i++) {
        categories.push(categories1[i].getAttribute("title"));
    }
    if (categories.length == 0) {
        $("#categories .all_li").addClass("active");
    }

    // type
    var type = [];
    var type1 = $("#type .active").toArray();
    for (i = 0; i < type1.length; i++) {
        type.push(type1[i].getAttribute("title"));
    }
    if (type.length == 0) {
        $("#type .all_li").addClass("active");
    }
    var send_data = {'categories': categories, 'type': type,}
    $("#four_table").dataTable().fnDestroy();
    $("#four_table").DataTable(getCharData(send_data, "#four_table", '/RadiationDB/searchExperiment', ct1));
});
$(document).ready(function () {
    // {#20221125新增#}
    $("ul li").addClass("over");
    $(".left_div").addClass("over");
    $(".left_div_active").addClass("over");
    var url = window.location.href;
    index = url.indexOf("flag");
    if (index != -1) {
        var page = "";
        var type_new = "";
        var dm = 0;
        page = getUrlParam("page").toString();
        // {#alert("page=" + page + "," + typeof (page));#}
        type_new = getUrlParam("type").toString();

        // {#首页search#}
        if (page == "All") {
            // {#alert("111:" + page);#}

            // {#alert(type_new);#}
            // {#alert("----------", type_new)#}
            if (type_new.indexOf("*") >= 0) {
                $("ul li").removeClass("active");
                type_new = type_new.split("*");
                var cncn = type_new[0];
                // {#$("." + cncn).addClass("active");#}
                $("." + cncn).css("color", "rgb(6, 160, 79)");
                cncn = cncn.replaceAll("_", " ");
                // {#cncn = cncn.replaceAll("-", ",");#}
                // {#alert(cncn);#}
                var fnfn = type_new[1];
                // {#$("." + fnfn).addClass("active");#}
                $("." + fnfn).css("color", "rgb(6, 160, 79)");
                fnfn = fnfn.replaceAll("_", " ");
                // {#fnfn = fnfn.replaceAll("-", ",");#}
                // {#alert(fnfn);#}
                dm = 1;
                var send_data = {'categories': [cncn], 'type': [fnfn]};
                console.log('---------------', send_data, cncn, fnfn);
                // {#$(".dm_c1 ul li").find(title = cncn).addClass("active").siblings().removeClass("active");#}
                // {#$(".dm_t1 ul li").find(title = cncn).addClass("active").siblings().removeClass("active");#}
                // {#$("#show_list").find("option[value='all']").attr("selected", true);#}

                // {#if ($("#categories ul li").hasClass(cncn)) {#}
                // {#console.log('包含'+ type_new +'这个class');#}
                // {#    $("." + cncn).addClass("active").siblings().removeClass("active");}#}
                // {#if ($("#type ul li").hasClass(fnfn)) {#}
                // {#console.log('包含'+ type_new +'这个class');#}
                // {#    $("." + fnfn).addClass("active").siblings().removeClass("active");}#}

            } else if (type_new != 'All') {
                // {#alert("home search!")#}
                if ($("ul li").hasClass(type_new)) {
                    // {#console.log('包含'+ type_new +'这个class');#}
                    '2022.10.27修改'
                    // {#$("."+type_new).css("color","rgb(6, 160, 79)");#}
                    // {#$("." + type_new).addClass("active").siblings().removeClass("active");#}
                    var nn = type_new;
                    type_new = $("." + type_new).attr("title");
                    // {#console.log("type_new", type_new)#}
                } else {
                    var not_exist = 1;
                    type_new = "All";
                }
            } else {
                // {#alert("yes")#}
                var send_data = {'categories': ["All"], 'type': ["All"],};
            }
            if (dm == 0) {
                // {#alert("dm=0");#}
                $("ul li").removeClass("active");
                // {#console.log("type_new=", type_new, typeof (type_new));#}
                if (type_new == 'Protein-coding gene' || type_new == 'miRNA' || type_new == 'LncRNA' || type_new == 'CircRNA' || type_new == 'Pseudogene' || type_new == 'Protein' || type_new == 'Radiosensitizer') {
                    var send_data = {'categories': ["All"], 'type': [type_new],};
                    '2022.10.27修改'
                    $("#type ." + nn).css("color", "rgb(6, 160, 79)");
                    $("#categories .all_li").css("color", "rgb(6, 160, 79)");
                    // {#alert("rna")#}
                    console.log(send_data, type_new);
                } else {
                    // {#alert("cancer type", type_new)#}
                    var send_data = {'categories': [type_new], 'type': ["All"],};
                    '2022.10.27修改'
                    $("#categories ." + nn).css("color", "rgb(6, 160, 79)");
                    $("#type .all_li").css("color", "rgb(6, 160, 79)");

                    console.log(send_data, type_new);
                }
                // {#getCharData(send_data, "#second_table", '/searchCategory', ct);#}
            }
            left_fiv[0].className = "left_div_active";
            left_fiv[1].className = "left_div";
            left_fiv[2].className = "left_div";
            right_div[0].style.display = "block";
            right_div[1].style.display = "none";
            right_div[2].style.display = "none";
            $("#all_table2").DataTable(getCharData(send_data, "#all_table2", '/RadiationDB/searchAll', all_ct));
            if (not_exist == 1) {
                alert("No such Cancer type or Factor!");
            }
        } else if (page == "signature") {
            left_fiv[0].className = "left_div";
            left_fiv[1].className = "left_div_active";
            left_fiv[2].className = "left_div";
            right_div[0].style.display = "none";
            right_div[1].style.display = "block";
            right_div[2].style.display = "none";
            if (index != -1) {
                $("ul li").removeClass("active");
                type_new = type_new.split("*");
                var cncn = type_new[0];
                // {#$("." + cncn).addClass("active");#}

                $("." + cncn).css("color", "rgb(6, 160, 79)");
                if (cncn == "all_li") {
                    cncn = "All";
                }
                cncn = cncn.replaceAll("_", " ");
                // {#cncn = cncn.replaceAll("-", ",");#}
                // {#alert(cncn);#}
                var fnfn = type_new[1];
                // {#$("." + fnfn).addClass("active");#}

                $("." + fnfn).css("color", "rgb(6, 160, 79)");
                if (fnfn == "all_li") {
                    fnfn = "All";
                }
                fnfn = fnfn.replaceAll("_", " ");
                // {#fnfn = fnfn.replaceAll("-", ",");#}
                // {#alert(fnfn);#}
                dm = 1;
                var send_data = {'categories': [cncn], 'type': [fnfn]};
                console.log('---------------', send_data, cncn, fnfn);
            } else {
                var send_data = {'categories': ["All"], 'type': ["All"],};
                // {#$("#categories .all_li").siblings().css('color','black');#}
                // {#$("#type .all_li").siblings().css('color','black');#}
            }
            $("#second_table").dataTable().fnDestroy();
            $("#second_table").DataTable(getCharData(send_data, "#second_table", '/RadiationDB/searchCategory', ct));
        } else {
            // {#alert("222:" + page);#}
            var send_data = {'categories': ["All"], 'type': ["All"],};
            left_fiv[0].className = "left_div";
            left_fiv[1].className = "left_div";
            left_fiv[2].className = "left_div_active";
            right_div[0].style.display = "none";
            right_div[1].style.display = "none";
            right_div[2].style.display = "block";
            // {#getCharData(send_data, "#fourtable", '/searchExperiment', ct);#}
            if (index != -1) {
                $("ul li").removeClass("active");
                type_new = type_new.split("*");
                var cncn = type_new[0];
                // {#$("." + cncn).addClass("active");#}

                $("." + cncn).css("color", "rgb(6, 160, 79)");
                if (cncn == "all_li") {
                    cncn = "All";
                }
                cncn = cncn.replaceAll("_", " ");
                // {#cncn = cncn.replaceAll("-", ",");#}
                // {#alert(cncn);#}
                var fnfn = type_new[1];
                // {#$("." + fnfn).addClass("active");#}

                $("." + fnfn).css("color", "rgb(6, 160, 79)");
                if (fnfn == "all_li") {
                    fnfn = "All";
                }
                fnfn = fnfn.replaceAll("_", " ");
                // {#fnfn = fnfn.replaceAll("-", ",");#}
                // {#alert(fnfn);#}
                dm = 1;
                var send_data = {'categories': [cncn], 'type': [fnfn]};
                console.log('---------------', send_data, cncn, fnfn);
            } else {
                var send_data = {'categories': ["All"], 'type': ["All"],};
            }
            $("#four_table").dataTable().fnDestroy();
            $("#four_table").DataTable(getCharData(send_data, "#four_table", '/RadiationDB/searchExperiment', ct1));
        }
        //
    } else {
        var send_data = {'categories': ["All"], 'type': ["All"],};
        left_fiv[0].className = "left_div_active";
        left_fiv[1].className = "left_div";
        left_fiv[2].className = "left_div";
        right_div[0].style.display = "block";
        right_div[1].style.display = "none";
        right_div[2].style.display = "none";
        $("#all_table2").dataTable().fnDestroy();
        $("#all_table2").DataTable(getCharData(send_data, "#all_table2", '/RadiationDB/searchAll', all_ct));
    }
})

// {#    other#}


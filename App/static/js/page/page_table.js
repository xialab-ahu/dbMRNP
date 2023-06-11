


    //page_detail
    var brain_specific_detail = (function (url) {
    $(document).ready(function () {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            success: function (data) {
                // alert($("#brain_specific_detail").data("trait")),
                $('#brain_specific_detail').DataTable({
                    data: data,
                    searching: false,
                    info:false,
                    paging:false,
                    columns: [
                        {
                            title: 'Gene Symbol',
                            data: 'geneId'

                        }, {
                            title: 'Type',
                            data: 'type'
                        }, {
                            title: 'τ-value <a class="lineageQA"\n' +
                            'data-html="<p>τ is valued between 0 and 1, where 0 represents housekeeping genes that are consistently expressed in different tissues, and 1 indicates tissue-specific genes that are exclusively expressed in only one tissue.</p>">' +
                            '<i class="glyphicon glyphicon-question-sign"></i></a>',
                            data: 'tau'
                        },
                        {
                            title: 'Max Value(TPM)',
                            data: 'maxValue'
                        }, {
                            title: 'Expression Brand',
                            data: 'expressionBrand'
                        }
                    ]
                });

            }
        })
    });

});

    var region_specific_detail = (function (url) {
    $(document).ready(function () {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            success: function (data) {
                $('#region_specific_detail').DataTable({
                    data: data,
                    searching: false,
                    info:false,
                    paging:false,
                    columns: [
                        {
                            title: 'Gene Symbol',
                            data: 'geneId'

                        }, {
                            title: 'Type',
                            data: 'type'
                        }, {
                            title: 'τ-value <a class="lineageQB"\n' +
                            'data-html="<p>τ is valued between 0 and 1, where 0 represents housekeeping genes that are consistently expressed in different tissues, and 1 indicates tissue-specific genes that are exclusively expressed in only one tissue.</p>">\n' +
                            '<i class="glyphicon glyphicon-question-sign"></i></a>',
                            data: 'tau'
                        }, {
                            title: 'Max Tissue',
                            data: 'maxTissue'
                        }, {
                            title: 'Max Value(TPM)',
                            data: 'maxValue'
                        }, {
                            title: 'Expression Brand',
                            data: 'expressionBrand'
                        }
                    ]
                });

            }
        })
    });

});

    var brain_associated_item_detail = (function (url) {
    $(document).ready(function () {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            success: function (data) {
                $('#brain_associated_item_detail').DataTable({
                    data: data,
                    searching: false,
                    info:false,
                    paging:false,
                    columns: [
                        {
                            // title: "Gene Symbol",
                            title: 'Gene Symbol',
                            data: 'geneName'
                            // orderable: false, //关闭排序图标
                            // sClass: "text-center"
                        },
                        {
                            title: "Uniprot ID",
                            data: 'uniprot_id',
                            render: function (data, type, row) {
                                return "<a href='https://www.uniprot.org/uniprot/" + row.uniprot_id + "'target=\'_blank\'>" + row.uniprot_id + "</a>"
                            }
                        },
                        {
                            title: "Gene ID",
                            data: 'geneEid',
                            render: function (data, type, row) {
                                return "<a href='http://asia.ensembl.org/Human/Search/Results?q=" + row.geneEid + "'target=\'_blank\'>" + row.geneEid + "</a>"
                            }
                        },
                        {
                            title: "Brain Region",
                            data: 'tissue'
                        },
                        {
                            title: "Cell Type",
                            data: 'cellType'
                        },
                        {
                            title: "Level",
                            data: 'level'
                        }
                        // {
                        //     title: "Reliability",
                        //     data: 'reliability'
                        // }
                    ]
                });

            }
        })
    })
});

    var csf_meta_detail = (function (url) {
    $(document).ready(function () {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            success: function (data) {
                $('#csf_meta_detail').DataTable({
                    data: data,
                    searching: false,
                    info:false,
                    paging:false,
                    columns: [
                        {
                            // title: "Gene Symbol",
                            title: 'Protein',
                            data: 'proteinName'
                            // orderable: false, //关闭排序图标
                            // sClass: "text-center"
                        },
                        {
                            title: "Gene Symbol",
                            data: 'geneId'

                        },

                        {
                            title: "Mean Fluorescence Intensity",
                            data: 'meanValue'
                        },
                        {
                            title: "Variance",
                            data: 'var'
                        }
                    ]
                });

            }
        })
    })
});

    function stringTran(str) {
        var str2=str;
        for (var i=0;i<str.length;i++){
            if (str[i]=="("){
                str2 = str2.replace("(", "LeftBracket");
            }
            if (str[i]==")"){
                str2 = str2.replace(")", "RightBracket");
            }
            if (str[i]=="\'"){
                str2 = str2.replace("\'", "SingleQuotes");
            }
        }

        return str2;
    }

    var drug_detail = (function (url) {
        $(document).ready(function () {
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    $('#drug_detail').DataTable({
                        data: data,
                        searching: true,
                        pageLength: 5,
                        // scrollX: false,
                        // iDisplayLength: 5,
                        // info:false,
                        // paging:false,
                        bLengthChange: false,
                        columns: [
                            {
                                title: "Drug",
                                data: 'drug',
                                render: function (data, type, row) {
                                    return '<a href="/brainbase/drugInfo/' + stringTran(row.drug) + '" target="_blank">' + row.drug + '</a>';
                                }
                            },
                            {
                                title: "Disease",
                                data: 'disease',
                                render: function (data, type, row) {
                                    return '<a href="/brainbase/diseaseInfo/' + row.disease + '" target="_blank">' + row.disease + '</a>';
                                }
                            },
                            {
                                title: "Target",
                                data: 'target'
                            },
                            // {
                            //     title: "Variant / Haplotype",
                            //     data: 'variantOrHaplotypes'
                            // },
                            // {
                            //     title: "Description",
                            //     data: 'description'
                            // },
                            {
                                title: "Source",
                                render: function (data, type, row) {
                                    var str = '';
                                    if (row.chembl != 'NA') {
                                        str = "<a href='" + row.chembl + "'target=\'_blank\'>ChEMBL</a><br>";
                                    }
                                    if (row.drugbank != 'NA') {
                                        str = str + "<a href='" + row.drugbank + "'target=\'_blank\'>DrugBank</a><br>";
                                    }
                                    if (row.cmap != 'NA') {
                                        str = str + "<a href='" + row.cmap + "'target=\'_blank\'>CMap</a><br>";
                                    }
                                    if (row.pharmgkb != 'NA') {
                                        str = str + "<a href='" + row.pharmgkb + "'target=\'_blank\'>PharmGKB</a><br>";
                                    }
                                    if (row.ctd != 'NA') {
                                        str = str + "<a href='" + row.ctd + "'target=\'_blank\'>CTD</a>";
                                    }
                                    if (row.chembl == 'NA' && row.drugbank == 'NA' && row.cmap == 'NA' && row.pharmgkb == 'NA' && row.ctd == 'NA') {
                                        str =
                                            "-";
                                    }
                                    return str;
                                }

                            },
                            {
                                title: "PMID",
                                data: 'pmid',
                                render: function (data, type, row) {
                                    if (row.pmid==null || row.pmid=="NA") {
                                        return "-";
                                    }else {
                                        var tt = row.pmid.split("; ");
                                        let index;
                                        var str = "";
                                        var pmid_length=0;
                                        for (index in tt) {
                                            pmid_length = pmid_length + 1;
                                            if (pmid_length % 5 == 0) {
                                                str = str + '<br>';
                                            }
                                            str = str + "<a href='https://pubmed.ncbi.nlm.nih.gov/" + tt[index] + "' target='_blank'>" + tt[index] + "</a>&nbsp;&nbsp;";

                                        }
                                        return str;
                                    }
                                }
                            }
                        ]
                    });

                }
            })
        })
    });



    var cell_marker_detail = (function (url) {
        $(document).ready(function () {
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    $('#cell_marker_detail').DataTable({
                        data: data,
                        searching: false,
                        info:false,
                        paging:false,
                        columns: [
                            {
                                // title: "Gene Symbol",
                                title: 'Cell Marker',
                                data: 'cellMarker'
                                // orderable: false, //关闭排序图标
                                // sClass: "text-center"
                            },
                            // {
                            //     title: "Cancer Type",
                            //     data: 'cancerType'
                            // },
                            {
                                title: "Cell Type",
                                data: 'cellName'
                            }, {
                                title: "Source",
                                data: 'markerResource'
                            }, {
                                title: "PMID",
                                data: 'pmid',
                                render: function (data, type, row) {
                                    return "<a href='https://www.ncbi.nlm.nih.gov/pubmed/?term=" + row.pmid + "'target=\'_blank\'>" + row.pmid + "</a>"
                                }
                            }
                        ]
                    });

                }
            })
        });

    });

    //snv table
    var snv_detail = (function (url) {
        $(document).ready(function () {
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    // alert($("#brain_specific_detail").data("trait")),
                    $('#snv_detail').DataTable({
                        data: data,
                        // scrollX: true,//不能加
                        pageLength: 5,
                        aLengthMenu: [5,10,20],//设置每页显示数据条数的下拉选项
                        // serverSide : false,
                        columns: [
                            {
                                title: "Sample ID",
                                data: 'sampleId'
                            },
                            {
                                title: "Glioma Grade",
                                data: 'grade'
                            },
                            {
                                title: "Chr",
                                data: 'chrom'
                            },
                            {
                                title: "Start Site",
                                data: 'start'
                            },
                            {
                                title: "End Site",
                                data: 'end'
                            },
                            {
                                title: "RET",
                                data: 'ref'
                            },
                            {
                                title: "ALT",
                                data: 'alt'
                            },
                            {
                                title: "Amino Acid Change",
                                data: 'aminoAcidAhange'
                            },
                            {
                                title: "Effect",
                                data: 'effect'
                            },
                            {
                                title: "Filter",
                                data: 'filter'
                            },
                            {
                                title: "DNA VAF",
                                data: 'dnaVaf'
                            }

                        ]
                    });

                }
            })
        });

    });


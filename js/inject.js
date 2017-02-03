var url_path="https://www.torrentleech.org/rss/download/";

chrome.storage.local.get("torrentleech.key", function(obj_key){
    var key = obj_key["torrentleech.key"];
    var a_links = $(".quickdownload a");
    $.each(a_links, function(index, a_link){
        var url = $(a_link).attr("href");
        var url_splited = url.split("/");
        var filename = $(url_splited).get(-1);
        var download_id = $(url_splited).get(-2);

        var new_href=url_path +  download_id + "/" + key + "/" + filename; 
        var new_a = $("<a>").attr("href", new_href).text("DD");
        $(a_link).after(new_a);
        //console.log("info", filename, download_id);
    });


    console.log("finish Inject")
});

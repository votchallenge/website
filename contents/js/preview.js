
function show_dataset(url, parent) {

    var container = $(parent);
console.log(container);
    var placeholder = $("<div>").addClass("alert alert-info").text("Loading preveiw, please wait ...");

    container.append(placeholder);

    $.ajax(url).done(function(data) {

        var parent_url = new URI(url);

        var gallery = $("<div>");

        var modal = $('<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel"></h4></div><div class="modal-body"></div></div></div></div>').hide();

        modal.modal({show: false});

        function configure_preview(sequence) {

            var relative_url_preview = URI(sequence.preview);
            var relative_url_thumbnail = URI(sequence.thumbnail);

            var src_preview = relative_url_preview.absoluteTo(parent_url);
            var src_thumbnail = relative_url_thumbnail.absoluteTo(parent_url);

            var preview = $("<img>").addClass("image sequence preview").attr({"title" : sequence["name"],  "alt" : sequence["name"], "src" : src_thumbnail.toString()});

            preview.hover(
                function() {
                    var url = $(this).attr("src").replace("_static", "_animated");
                    $(this).attr("src", src_preview.toString());
                },
                function() {
                    var url = $(this).attr("src").replace("_animated", "_static");
                    $(this).attr("src", src_thumbnail.toString());
                }
            );

            preview.click(function() {
                modal.find('.modal-title').text("Sequence " + sequence["name"]);

                var body = $("<div>").appendTo(modal.find('.modal-body').empty());

                body.append($("<img>").attr("src", src_thumbnail.toString()).addClass("modal-image"));

                body.append($("<p>").text("Size: " + sequence["width"] + "x" + sequence["height"] + " pixels"));
                body.append($("<p>").text("Length: " + sequence["length"] + " frames (at " + sequence["fps"] + " fps)"));

                var resources = $("<ul>").appendTo(body);

                var relative_url = URI(sequence.annotations.url);
                resources.append($("<li>").append($("<a>").attr("href", relative_url.absoluteTo(parent_url).toString()).text("Download annotations")));

                for (var k in sequence["channels"]) {
                    var relative_url = URI(sequence.channels[k].url);
                    resources.append($("<li>").append($("<a>").attr("href", relative_url.absoluteTo(parent_url).toString()).text("Download data for channel " + k)));
                }

                modal.modal('show');

            });

            return preview;
        }

        for (var k in data["sequences"]) {

            gallery.append(configure_preview(data["sequences"][k]));
        }

        container.empty().append(gallery).append(modal);

    }).error(function(e) {

        console.log(container);

        placeholder.remove();

        var message = $("<div>").addClass("alert alert-warning").text("Unable to load dataset preview.");

        container.append(message);

    });

}



$(function() {
    $(".gallery").each(function(i, element) {
        var container = $(element);
        if ($(element).data("votdataset") !== undefined) {
            show_dataset(container.data("votdataset"), container);
        }
    });


    $(".gallery img.preview").hover(
        function() {
            var url = $(this).attr("src").replace("_static", "_animated");
            $(this).attr("src", url);
        },
        function() {
            var url = $(this).attr("src").replace("_animated", "_static");
            $(this).attr("src", url);
        }
    );
});


function bintray_list(element, subject, repository, pkg, version) {

	version = typeof version !== 'undefined' ? version : '_latest';

	var path = subject + "/" + repository + "/" + pkg;

	$(function() {

		$.get("https://api.bintray.com/packages/" + path + "/versions/" + version,
			function(data) {

				var realversion = data.name;

				$.get("https://api.bintray.com/packages/" + path + "/versions/" + realversion + "/files",
					function(data) {

						var list = $("</ul>");

						for (var i in data) {
							list.append($("</li>").append("</a>").text(data[i].name).attr({"href" : data[i].path}));
						}

						$(element).empty().append(list);
					}
				);

			}
		);

	});

}



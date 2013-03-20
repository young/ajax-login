// application base class
// place helper functions in here
window.Application = {
	// synchronously load a template from templates directory
	getTemplate : function(name) {
		var self = this, url;
		self.assert(_.isUndefined(name) || name == "", "Template name is required"); // check for template name
		template = "<h1 class='red'>Failed to load template" + name + "</h1>";
		url = "templates/" + name;
		$.ajax({
			async : false,
			url : url,
			success : function(response) {
				template = response;
			}
		});
		return template;
	},
	
	// assert
	assert : function(test, message) {
		var self = this;
		
		if(test){
			console.log(message);
			return false;
		}
		return true;
	}
};
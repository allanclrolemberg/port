module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js' : ['_/components/js/*.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {	
				files: ['_/components/js/*.js'], //files to perform tasks on
				tasks: ['uglify'] //tasks to perform
			}, //scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html']
			} //html
		} //watch

	})
	grunt.registerTask('default', 'watch');//initconfig
} //exports
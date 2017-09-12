$(function(){

  $.ajax("../templates/novos-classicos-template-header.html").done(function(header){
    $("body").append(header);
    console.log($("#novos-classicos-template-header").html());



      window.App = {
        Models: {},
        Collections: {},
        Views: {}
      };

      App.Models.Header = Backbone.Model.extend({
        defaults: {}
      });

      App.Views.Header = Backbone.View.extend({
        tagName: 'header',
        template: _.template( $('#novos-classicos-template-header').html()),
        initialize: function(){
          // console.log(this.template(this.model.toJSON()));
          this.render();
        },
        render: function(){
          this.$el.html( this.template(this.model.toJSON()));
          return this;
        }
      });



      var headerModel = new App.Models.Header;
      var headerView = new App.Views.Header({model: headerModel });
      headerView.el;
      $(document.body).html(headerView.el);



  });



});

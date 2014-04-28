this["JST"] = this["JST"] || {};

this["JST"]["account/edit/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form role="form" class="form-horizontal" id="account-form" method="post">\n    <div class="row">\n        <div class="col-md-6 col-md-offset-3">\n            <div class="form-group">\n                <label for="first_name">' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'</label>\n                <input type="text" class="form-control" id="first_name" name="first_name" placeholder="' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="last_name">' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'</label>\n                <input type="text" class="form-control" id="last_name" name="last_name" placeholder="' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="email">' +
((__t = ( Lang.account_email)) == null ? '' : __t) +
'</label>\n                <input type="email" class="form-control" id="email" name="email" placeholder="' +
((__t = ( Lang.account_email)) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="password">' +
((__t = ( Lang.account_password )) == null ? '' : __t) +
'</label>\n                <input id="password" class="form-control" type="password" name="password" value="">\n                <span class="help-block">' +
((__t = ( Lang.account_password_keep )) == null ? '' : __t) +
'</span>\n            </div>\n\n            <div class="form-group">\n                <button type="submit" class="btn btn-primary save">' +
((__t = ( Lang.account_save )) == null ? '' : __t) +
'</button>\n            </div>\n\n        </div>\n    </div>\n</form>\n\n';

}
return __p
};

this["JST"]["account/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="holder"></div>\n<button class="btn btn-primary add-new"><i class="icon-plus-sign"></i> ' +
((__t = ( Lang.account_add_new )) == null ? '' : __t) +
'</button>';

}
return __p
};

this["JST"]["account/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" class="details">\n  <img src="" class="avatar img-thumbnail" width="100" height="100">\n  ' +
((__t = ( first_name )) == null ? '' : __t) +
' ' +
((__t = ( last_name )) == null ? '' : __t) +
'\n</a>\n';
 if (canDelete()) { ;
__p += '\n  <a href="#" class="delete" title="' +
((__t = ( Lang.account_delete )) == null ? '' : __t) +
'"><i class="icon-trash"></i></a>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["account/new/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form role="form" class="form-horizontal" id="account-form" method="post">\n    <div class="row">\n        <div class="col-md-6 col-md-offset-3">\n            <div class="form-group">\n                <label for="first_name">' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'</label>\n                <input type="text" class="form-control" id="first_name" name="first_name" placeholder="' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="last_name">' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'</label>\n                <input type="text" class="form-control" id="last_name" name="last_name" placeholder="' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="email">' +
((__t = ( Lang.account_email)) == null ? '' : __t) +
'</label>\n                <input type="email" class="form-control" id="email" name="email" placeholder="' +
((__t = ( Lang.account_email)) == null ? '' : __t) +
'">\n            </div>\n\n            <div class="form-group">\n                <label for="password">' +
((__t = ( Lang.account_password )) == null ? '' : __t) +
'</label>\n                <input id="password" class="form-control" type="password" name="password" value="">\n            </div>\n\n            <div class="form-group">\n                <label for="password_confirm">' +
((__t = ( Lang.account_password_confirm )) == null ? '' : __t) +
'</label>\n                <input id="password_confirm" class="form-control" type="password" name="password_confirm" value="">\n            </div>\n\n            <div class="form-group">\n                <button type="submit" class="btn btn-primary save">' +
((__t = ( Lang.account_add )) == null ? '' : __t) +
'</button>\n            </div>\n\n        </div>\n    </div>\n</form>\n';

}
return __p
};

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <nav class="col-xs-12">\n    <ul>\n      <li><a class="write" href="#"><i class="icon-plus"></i> ' +
((__t = ( Lang.write )) == null ? '' : __t) +
'</a></li>\n      <li><a class="posts" href="#post"><i class="icon-list"></i> ' +
((__t = ( Lang.posts )) == null ? '' : __t) +
'</a></li>\n      <li><a class="accounts" href="#accounts"><i class="icon-user"></i> ' +
((__t = ( Lang.accounts )) == null ? '' : __t) +
'</a></li>\n      <li><a href="' +
((__t = ( logoutUrl() )) == null ? '' : __t) +
'"><i class="icon-off"></i> ' +
((__t = ( Lang.logout )) == null ? '' : __t) +
'</a></li>\n    </ul>\n  </nav>\n</div>\n';

}
return __p
};

this["JST"]["post/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form role="form" class="post" id="post-form" method="post" action="/wardrobe/posts/edit/{{ $post->id }}">\n  <input type="hidden" name="publish_date" id="publish_date" value="">\n  <input type="hidden" name="active" id="active" class="js-active" value="1">\n\n  <div class="field pull-right" style="margin-top: -20px;">\n    <div class="btn-group pull-right">\n      <button class="btn btn-sm btn-primary publish">' +
((__t = ( submitBtnText() )) == null ? '' : __t) +
'</button>\n      <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">\n        <span class="caret"></span>\n        <span class="sr-only">Toggle Dropdown</span>\n      </button>\n      <ul class="dropdown-menu" role="menu">\n        <li><a href="#" class="js-status" data-action="publish">' +
((__t = ( Lang.post_publish )) == null ? '' : __t) +
'</a></li>\n        <li><a href="#" class="js-status" data-action="draft">' +
((__t = ( Lang.post_save )) == null ? '' : __t) +
'</a></li>\n        <li class="divider"></li>\n        <li><a href="' +
((__t = ( previewUrl() )) == null ? '' : __t) +
'" target="_blank" class="preview">' +
((__t = ( Lang.post_preview )) == null ? '' : __t) +
' <i class="icon-external-link"></i></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="title">' +
((__t = ( Lang.post_title )) == null ? '' : __t) +
'</label>\n    <input type="text" class="form-control input-lg" name="title" id="title" placeholder="' +
((__t = ( Lang.post_title )) == null ? '' : __t) +
'">\n  </div>\n  <div class="form-group">\n    <label for="slug">' +
((__t = ( Lang.post_slug )) == null ? '' : __t) +
'</label>\n    <input type="text" name="slug" id="slug" class="form-control" placeholder="' +
((__t = ( Lang.post_slug )) == null ? '' : __t) +
'">\n  </div>\n  <div class="form-group author">\n    <label for="js-user">' +
((__t = ( Lang.post_author )) == null ? '' : __t) +
'</label>\n    <select id="js-user" class="form-control" name="user_id"></select>\n  </div>\n  <div class="form-group">\n    <label for="date">' +
((__t = ( Lang.post_publish_date )) == null ? '' : __t) +
'</label>\n    <input type="text" name="date" class="form-control js-date" id="date" value="" placeholder="now">\n  </div>\n  <div class="form-group">\n    <label for="tags">' +
((__t = ( Lang.post_tags )) == null ? '' : __t) +
'</label>\n    <input type="text" id="js-tags" name="tags" class="tags" style="width: 100%" value="" placeholder="' +
((__t = ( Lang.post_tags )) == null ? '' : __t) +
'">\n  </div>\n  <div class="form-group">\n    <label for="link_url">' +
((__t = ( Lang.post_link )) == null ? '' : __t) +
'</label>\n    <input type="text" id="link_url" name="link_url" class="form-control" value="" placeholder="' +
((__t = ( Lang.post_link )) == null ? '' : __t) +
'">\n  </div>\n  <div class="content-area">\n    <textarea name="content" id="content" placeholder="' +
((__t = ( Lang.post_content )) == null ? '' : __t) +
'"></textarea>\n  </div>\n</form>\n\n<div id="film-form" style="display: none">\n  <form class="form-inline">\n    <label for="date">Video URL</label><br>\n    <input type="text" name="date" class="form-control js-film" id="film" value="" placeholder="http://youtube.com/">\n    <button class="btn btn-default js-submitfilm btn-sm">' +
((__t = ( Lang.post_publish_date_set )) == null ? '' : __t) +
'</button>\n  </form>\n</div>\n\n';

}
return __p
};

this["JST"]["post/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="well no-posts">\n  <h3>You do not have any drafts.</h3>\n  <p class="lead">\n    quotes go here.\n  </p>\n\n  <a href="#" class="btn btn-default btn-lg">Start Writing</a>\n</div>';

}
return __p
};

this["JST"]["post/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <ul class="nav nav-pills pull-right">\n    <li class="active js-filter" data-type="draft"><a href="#post/draft"><i class="icon-edit"></i> &nbsp; Drafts</a></li>\n    <li class="js-filter" data-type="scheduled"><a href="#post/scheduled"><i class="icon-calendar"></i> &nbsp; Scheduled</a></li>\n    <li class="js-filter" data-type="published"><a href="#post/published"><i class="icon-laptop"></i> &nbsp; Published</a></li>\n  </ul>\n  <h1>Your Posts </h1>\n</div>\n\n<form class="filter form-inline hidden-xs hide" role="form">\n  <div class="form-group">\n    <input type="text" class="form-control filter" id="js-filter" name="filter" placeholder="Filter">\n  </div>\n</form>\n<table class="table table-hover">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>' +
((__t = ( Lang.post_title )) == null ? '' : __t) +
'</th>\n\t\t\t<th>' +
((__t = ( Lang.post_published )) == null ? '' : __t) +
'</th>\n\t\t</tr>\n\t</thead>\n\t<tbody></tbody>\n</table>\n\n<div class="well no-posts hide">\n  <h3>You do not have any <span>draft</span> posts.</h3>\n  <p class="lead js-quote"></p>\n  <a href="#" class="btn btn-default btn-lg">Start Writing</a>\n</div>\n';

}
return __p
};

this["JST"]["post/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="title">\n  <div class="actions">\n    <a href="#" class="delete" title="' +
((__t = ( Lang.post_delete )) == null ? '' : __t) +
'"><i class="icon-trash"></i></a>\n    <a href="#" target="_blank" title="Preview" class="preview"><i class="icon-zoom-in"></i></a>\n  </div>\n  <a href="#" class="details">' +
((__t = ( title )) == null ? '' : __t) +
'</a> <em></em>\n</td>\n<td class="date js-format-date" data-date="' +
((__t = ( publish_date )) == null ? '' : __t) +
'">' +
((__t = ( publish_date )) == null ? '' : __t) +
'</td>\n';

}
return __p
};
(function(Backbone) {
  var methods, _sync;
  _sync = Backbone.sync;
  Backbone.sync = function(method, entity, options) {
    var sync;
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      beforeSend: _.bind(methods.beforeSend, entity),
      complete: _.bind(methods.complete, entity)
    });
    sync = _sync(method, entity, options);
    if (!entity._fetch && method === "read") {
      return entity._fetch = sync;
    }
  };
  return methods = {
    beforeSend: function() {
      return this.trigger("sync:start", this);
    },
    complete: function() {
      return this.trigger("sync:stop", this);
    }
  };
})(Backbone);

$.fn.avatar = function(email, size) {
  if (size == null) {
    size = 28;
  }
  return $(this).attr("src", '//www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + (size * 2));
};

$.fn.formatDates = function() {
  var $el;
  $el = $(this);
  return $el.each(function(index, param) {
    var format, item, originalDate, time;
    item = $(this);
    format = item.data("format");
    originalDate = item.data("date");
    if (typeof format === "undefined") {
      format = "MMM Do YYYY, hh:mma";
    }
    time = isNaN(originalDate) ? moment(originalDate, "YYYY-MM-DD HH:mm:ss") : moment.unix(originalDate);
    return item.text(time.local().format(format));
  });
};

$.fn.fillJSON = function(json) {
  var $el, key, val, _results;
  $el = $(this);
  _results = [];
  for (key in json) {
    val = json[key];
    if (key !== "active") {
      _results.push($el.find("[name='" + key + "']").val(val));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

$.fn.showAlert = function(title, msg, type) {
  var $el, html;
  $el = $(this);
  html = "<div class='alert alert-block alert-dismissable " + type + "'> <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button> <strong>" + title + "</strong> " + msg + " </div>";
  $el.html(html).fadeIn();
  return $el.find(".alert").delay(3000).fadeOut(400);
};

(function(Backbone) {
  return _.extend(Backbone.Marionette.Application.prototype, {
    navigate: function(route, options) {
      if (options == null) {
        options = {};
      }
      return Backbone.history.navigate(route, options);
    },
    getCurrentRoute: function() {
      var frag;
      frag = Backbone.history.fragment;
      if (_.isEmpty(frag)) {
        return null;
      } else {
        return frag;
      }
    },
    startHistory: function() {
      if (Backbone.history) {
        return Backbone.history.start();
      }
    },
    register: function(instance, id) {
      if (this._registry == null) {
        this._registry = {};
      }
      return this._registry[id] = instance;
    },
    unregister: function(instance, id) {
      return delete this._registry[id];
    },
    resetRegistry: function() {
      var controller, key, msg, oldCount, _ref;
      oldCount = this.getRegistrySize();
      _ref = this._registry;
      for (key in _ref) {
        controller = _ref[key];
        controller.region.close();
      }
      msg = "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize());
      if (this.getRegistrySize() > 0) {
        return console.warn(msg, this._registry);
      } else {
        return console.log(msg);
      }
    },
    getRegistrySize: function() {
      return _.size(this._registry);
    }
  });
})(Backbone);

Backbone.Marionette.Renderer.render = function(template, data) {
  var path;
  path = JST[template + ".html"];
  if (!path) {
    throw "Template " + template + " not found!";
  }
  return path(data);
};

_.mixin({
  stripTrailingSlash: function(url) {
    if (url.slice(-1) === '/') {
      return url.substr(0, url.length - 1);
    } else {
      return url;
    }
  }
});

var Storage;

Storage = (function() {
  function Storage(opts) {
    if (opts == null) {
      opts = {};
    }
    this.key = opts.id || "new";
  }

  Storage.prototype.getKey = function() {
    return "post-" + this.key;
  };

  Storage.prototype.put = function(data, ttl) {
    if (ttl == null) {
      ttl = 30000;
    }
    $.jStorage.set(this.getKey(), data, ttl);
    return $.jStorage.publish(this.getKey(), data);
  };

  Storage.prototype.get = function(default_val) {
    if (default_val == null) {
      default_val = {};
    }
    return $.jStorage.get(this.getKey(), default_val);
  };

  Storage.prototype.destroy = function() {
    return $.jStorage.deleteKey(this.getKey());
  };

  return Storage;

})();

this.Wardrobe = (function(Backbone, Marionette) {
  var App;
  App = new Backbone.Marionette.Application();
  App.on("initialize:before", function(options) {
    App.environment = $('meta[name=env]').attr("content");
    App.csrfToken = $("meta[name='token']").attr('content');
    this.currentUser = App.request("set:current:user", options.user);
    this.allUsers = App.request("set:all:users", options.users);
    this.apiUrl = _.stripTrailingSlash(options.api_url);
    this.adminUrl = _.stripTrailingSlash(options.admin_url);
    return this.blogUrl = _.stripTrailingSlash(options.blog_url);
  });
  App.reqres.setHandler("get:current:user", function() {
    return App.currentUser;
  });
  App.reqres.setHandler("get:all:users", function() {
    return App.allUsers;
  });
  App.reqres.setHandler("get:url:api", function() {
    return App.apiUrl;
  });
  App.reqres.setHandler("get:url:admin", function() {
    return App.adminUrl;
  });
  App.reqres.setHandler("get:url:blog", function() {
    return App.blogUrl;
  });
  App.addRegions({
    headerRegion: "#header-region",
    topnavRegion: "#top-region",
    mainRegion: "#main-region",
    footerRegion: "footer-region"
  });
  App.addInitializer(function() {
    return App.module("HeaderApp").start();
  });
  App.reqres.setHandler("default:region", function() {
    return App.mainRegion;
  });
  App.commands.setHandler("register:instance", function(instance, id) {
    if (App.environment === "dev") {
      return App.register(instance, id);
    }
  });
  App.commands.setHandler("unregister:instance", function(instance, id) {
    if (App.environment === "dev") {
      return App.unregister(instance, id);
    }
  });
  App.on("initialize:after", function() {
    if (Backbone.history) {
      return Backbone.history.start();
    }
  });
  return App;
})(Backbone, Marionette);

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return App.commands.setHandler("when:fetched", function(entities, callback) {
    var xhrs;
    xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
    return $.when.apply($, xhrs).done(function() {
      return callback();
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      return Collection.__super__.constructor.apply(this, arguments);
    }

    Collection.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Collection.prototype.defaultErrorHandler = function(model, error) {
      switch (error.status) {
        case 401:
          return document.location.href = "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Collection.prototype.sync = function(method, model, options) {
      options.headers = _.extend({
        "X-CSRF-Token": App.csrfToken
      }, options.headers);
      return Backbone.sync(method, model, options);
    };

    return Collection;

  })(Backbone.Collection);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      this.saveError = __bind(this.saveError, this);
      this.saveSuccess = __bind(this.saveSuccess, this);
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Model.prototype.defaultErrorHandler = function(model, error, test) {
      switch (error.status) {
        case 500:
          return $("#js-alert").showAlert(Lang.error, Lang.error_fivehundred, "alert-error");
        case 401:
          return document.location.href = "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      this.set({
        _destroy: true
      });
      return Model.__super__.destroy.call(this, options);
    };

    Model.prototype.isDestroyed = function() {
      return this.get("_destroy");
    };

    Model.prototype.save = function(data, options) {
      var isNew;
      if (options == null) {
        options = {};
      }
      isNew = this.isNew();
      _.defaults(options, {
        wait: true,
        success: _.bind(this.saveSuccess, this, isNew, options.collection),
        error: _.bind(this.saveError, this)
      });
      this.unset("_errors");
      return Model.__super__.save.call(this, data, options);
    };

    Model.prototype.saveSuccess = function(isNew, collection) {
      if (isNew) {
        if (collection) {
          collection.add(this);
        }
        if (collection) {
          collection.trigger("model:created", this);
        }
        return this.trigger("created", this);
      } else {
        if (collection == null) {
          collection = this.collection;
        }
        if (collection) {
          collection.trigger("model:updated", this);
        }
        return this.trigger("updated", this);
      }
    };

    Model.prototype.saveError = function(model, xhr, options) {
      if (xhr.status === 400) {
        return this.set({
          _errors: $.parseJSON(xhr.responseText)
        });
      }
    };

    Model.prototype.sync = function(method, model, options) {
      options.headers = _.extend({
        "X-CSRF-Token": App.csrfToken
      }, options.headers);
      return Backbone.sync(method, model, options);
    };

    return Model;

  })(Backbone.Model);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Post = (function(_super) {
    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/post";
    };

    return Post;

  })(App.Entities.Model);
  Entities.PostCollection = (function(_super) {
    __extends(PostCollection, _super);

    function PostCollection() {
      return PostCollection.__super__.constructor.apply(this, arguments);
    }

    PostCollection.prototype.model = Entities.Post;

    PostCollection.prototype.url = function() {
      return App.request("get:url:api") + "/post";
    };

    return PostCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var post;
      post = new Entities.PostCollection;
      post.fetch({
        reset: true
      });
      return post;
    },
    getPost: function(id) {
      var post;
      post = new Entities.Post({
        id: id
      });
      post.fetch();
      return post;
    },
    newPost: function() {
      return new Entities.Post;
    }
  };
  App.reqres.setHandler("post:entities", function() {
    return API.getAll();
  });
  App.reqres.setHandler("post:entity", function(id) {
    return API.getPost(id);
  });
  return App.reqres.setHandler("new:post:entity", function() {
    return API.newPost();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Tag = (function(_super) {
    __extends(Tag, _super);

    function Tag() {
      return Tag.__super__.constructor.apply(this, arguments);
    }

    Tag.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/tag";
    };

    return Tag;

  })(App.Entities.Model);
  Entities.TagCollection = (function(_super) {
    __extends(TagCollection, _super);

    function TagCollection() {
      return TagCollection.__super__.constructor.apply(this, arguments);
    }

    TagCollection.prototype.model = Entities.Tag;

    TagCollection.prototype.url = function() {
      return App.request("get:url:api") + "/tag";
    };

    return TagCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function(cb) {
      var tags;
      tags = new Entities.TagCollection;
      tags.fetch({
        reset: true,
        success: function(collection, response, options) {
          if (cb) {
            return cb(tags);
          }
        },
        error: function() {
          throw new Error("Tags not fetched");
        }
      });
      return tags;
    }
  };
  return App.reqres.setHandler("tag:entities", function(cb) {
    return API.getAll(cb);
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/user";
    };

    return User;

  })(App.Entities.Model);
  Entities.UsersCollection = (function(_super) {
    __extends(UsersCollection, _super);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = Entities.User;

    UsersCollection.prototype.url = function() {
      return App.request("get:url:api") + "/user";
    };

    return UsersCollection;

  })(App.Entities.Collection);
  API = {
    setCurrentUser: function(currentUser) {
      return new Entities.User(currentUser);
    },
    setAllUsers: function(users) {
      return new Entities.UsersCollection(users);
    },
    getUser: function(id) {
      var user;
      user = new Entities.User({
        id: id
      });
      user.fetch();
      return user;
    },
    getUserEntities: function(cb) {
      var users;
      users = new Entities.UsersCollection;
      return users.fetch({
        success: function() {
          return cb(users);
        }
      });
    },
    newUser: function() {
      return new Entities.User;
    }
  };
  App.reqres.setHandler("set:current:user", function(currentUser) {
    return API.setCurrentUser(currentUser);
  });
  App.reqres.setHandler("set:all:users", function(users) {
    return API.setAllUsers(users);
  });
  App.reqres.setHandler("user:entities", function(cb) {
    return API.getUserEntities(cb);
  });
  App.reqres.setHandler("user:entity", function(id) {
    return API.getUser(id);
  });
  return App.reqres.setHandler("new:user:entity", function() {
    return API.newUser();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

this.Wardrobe.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
  return Controllers.Base = (function(_super) {
    __extends(Base, _super);

    function Base(options) {
      if (options == null) {
        options = {};
      }
      this.region = options.region || App.request("default:region");
      Base.__super__.constructor.call(this, options);
      this._instance_id = _.uniqueId("controller");
      App.execute("register:instance", this, this._instance_id);
    }

    Base.prototype.close = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      delete this.region;
      delete this.options;
      Base.__super__.close.call(this, args);
      return App.execute("unregister:instance", this, this._instance_id);
    };

    Base.prototype.show = function(view) {
      this.listenTo(view, "close", this.close);
      return this.region.show(view);
    };

    return Base;

  })(Marionette.Controller);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CollectionView = (function(_super) {
    __extends(CollectionView, _super);

    function CollectionView() {
      return CollectionView.__super__.constructor.apply(this, arguments);
    }

    CollectionView.prototype.itemViewEventPrefix = "childview";

    return CollectionView;

  })(Marionette.CollectionView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CompositeView = (function(_super) {
    __extends(CompositeView, _super);

    function CompositeView() {
      return CompositeView.__super__.constructor.apply(this, arguments);
    }

    CompositeView.prototype.itemViewEventPrefix = "childview";

    return CompositeView;

  })(Marionette.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.ItemView = (function(_super) {
    __extends(ItemView, _super);

    function ItemView() {
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.fillJSON = function(data) {
      var _ref, _ref1;
      if (data == null) {
        data = {};
      }
      if ((_ref = this.model) != null ? _ref.isNew() : void 0) {
        return this.$('form').fillJSON(data);
      } else {
        return this.$('form').fillJSON(((_ref1 = this.model) != null ? _ref1.toJSON() : void 0) || data);
      }
    };

    ItemView.prototype.changeErrors = function(model, errors, options) {
      if (_.isEmpty(errors)) {
        return this.removeErrors();
      } else {
        return this.addErrors(errors);
      }
    };

    ItemView.prototype.addErrors = function(errors) {
      var error, name, _results;
      if (errors == null) {
        errors = {};
      }
      $("#js-errors").removeClass("hide").find("span").html("" + Lang.post_errors + " <ul></ul>");
      _results = [];
      for (name in errors) {
        error = errors[name];
        _results.push(this.addError(error));
      }
      return _results;
    };

    ItemView.prototype.addError = function(error) {
      var msg;
      msg = $("<li>").text(error);
      return $("#js-errors span ul").append(msg);
    };

    ItemView.prototype.removeErrors = function() {
      return $("#js-errors").addClass("hide");
    };

    return ItemView;

  })(Marionette.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.Layout = (function(_super) {
    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    return Layout;

  })(Marionette.Layout);
});

var __slice = [].slice;

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  var _remove;
  _remove = Marionette.View.prototype.remove;
  return _.extend(Marionette.View.prototype, {
    remove: function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (App.environment === "dev") {
        console.log("removing", this);
      }
      if ((_ref = this.model) != null ? typeof _ref.isDestroyed === "function" ? _ref.isDestroyed() : void 0 : void 0) {
        return this.$el.fadeOut(400, (function(_this) {
          return function() {
            return _remove.apply(_this, args);
          };
        })(this));
      } else {
        return _remove.apply(this, args);
      }
    }
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp", function(AccountApp, App, Backbone, Marionette, $, _) {
  var API;
  AccountApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "accounts": "list",
      "account/new": "new",
      "account/edit/:id": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    list: function() {
      return new AccountApp.List.Controller;
    },
    "new": function() {
      return new AccountApp.New.Controller({
        region: App.mainRegion
      });
    },
    edit: function(id, account) {
      return new AccountApp.Edit.Controller({
        region: App.mainRegion,
        id: id,
        account: account
      });
    }
  };
  App.vent.on("account:clicked", function() {
    App.navigate("/accounts");
    return API.list();
  });
  App.vent.on("account:new:clicked", function() {
    App.navigate("/account/new");
    return API["new"]();
  });
  App.vent.on("account:edit:clicked", function(account) {
    App.navigate("/account/edit/" + account.id);
    return API.edit(account.id, account);
  });
  App.vent.on("account:created account:updated", function() {
    $("#js-alert").showAlert("Success!", "Account was successfully saved.", "alert-success");
    App.navigate("accounts");
    return API.list();
  });
  return App.addInitializer(function() {
    return new AccountApp.Router({
      controller: API
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var account, id;
      account = options.account, id = options.id;
      account || (account = App.request("user:entity", id));
      this.listenTo(account, "updated", function() {
        return App.vent.trigger("account:updated", account);
      });
      return App.execute("when:fetched", account, (function(_this) {
        return function() {
          var view;
          view = _this.getEditView(account);
          return _this.show(view);
        };
      })(this));
    };

    Controller.prototype.getEditView = function(account) {
      return new Edit.User({
        model: account
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.template = "account/edit/templates/form";

    User.prototype.className = "span12";

    User.prototype.events = {
      "click .save": "save"
    };

    User.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    User.prototype.onRender = function() {
      return this.fillJSON();
    };

    User.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = {
        first_name: this.$('#first_name').val(),
        last_name: this.$('#last_name').val(),
        email: this.$('#email').val(),
        password: this.$('#password').val(),
        active: 1
      };
      return this.model.save(data);
    };

    return User;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var users, view;
      users = App.request("get:all:users");
      view = this.getListView(users);
      this.show(view);
      return this.listenTo(view, "childview:account:delete:clicked", function(child, args) {
        var confirmMsg, model;
        model = args.model;
        confirmMsg = Lang.account_delete_confirm.replace("##first_name##", _.escape(model.get("first_name"))).replace("##last_name##", _.escape(model.get("last_name")));
        if (confirm(confirmMsg)) {
          return model.destroy();
        } else {
          return false;
        }
      });
    };

    Controller.prototype.getListView = function(users) {
      return new List.Accounts({
        collection: users
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.AccountItem = (function(_super) {
    __extends(AccountItem, _super);

    function AccountItem() {
      return AccountItem.__super__.constructor.apply(this, arguments);
    }

    AccountItem.prototype.template = "account/list/templates/item";

    AccountItem.prototype.className = "account";

    AccountItem.prototype.triggers = {
      "click .delete": "account:delete:clicked"
    };

    AccountItem.prototype.events = {
      "click .details": "edit"
    };

    AccountItem.prototype.templateHelpers = function() {
      return {
        canDelete: function() {
          var me;
          me = App.request("get:current:user");
          if (me.id !== this.id) {
            return true;
          } else {
            return false;
          }
        }
      };
    };

    AccountItem.prototype.onShow = function() {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(this.model.get("email"), $avEl.attr("width"));
    };

    AccountItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:edit:clicked", this.model);
    };

    return AccountItem;

  })(App.Views.ItemView);
  return List.Accounts = (function(_super) {
    __extends(Accounts, _super);

    function Accounts() {
      return Accounts.__super__.constructor.apply(this, arguments);
    }

    Accounts.prototype.template = "account/list/templates/grid";

    Accounts.prototype.itemView = List.AccountItem;

    Accounts.prototype.itemViewContainer = ".holder";

    Accounts.prototype.className = "accounts";

    Accounts.prototype.events = {
      "click .add-new": "new"
    };

    Accounts.prototype["new"] = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:new:clicked");
    };

    return Accounts;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var user, view;
      user = App.request("new:user:entity");
      this.listenTo(user, "created", function() {
        return App.vent.trigger("account:created", user);
      });
      view = this.getNewView(user);
      return this.show(view);
    };

    Controller.prototype.getNewView = function(user) {
      return new New.User({
        model: user,
        collection: App.request("get:all:users")
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.template = "account/new/templates/form";

    User.prototype.className = "span12";

    User.prototype.events = {
      "click .save": "save"
    };

    User.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    User.prototype.onRender = function() {
      return this.fillJSON();
    };

    User.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = {
        first_name: this.$('#first_name').val(),
        last_name: this.$('#last_name').val(),
        email: this.$('#email').val(),
        password: this.$('#password').val(),
        active: 1
      };
      return this.model.save(data, {
        collection: this.collection
      });
    };

    return User;

  })(App.Views.ItemView);
});

this.Wardrobe.module("DropzoneApp", function(DropzoneApp, App, Backbone, Marionette, $, _) {
  var API;
  API = {
    setupDropzone: function() {
      var myDropzone;
      myDropzone = new Dropzone(document.body, {
        url: App.request("get:url:api") + "/dropzone",
        method: "POST",
        clickable: false
      });
      myDropzone.on("drop", function(file) {
        return App.vent.trigger("post:new");
      });
      myDropzone.on("error", function(file, message, xhr) {
        var msg;
        msg = $.parseJSON(message);
        return $("#js-alert").showAlert("Error!", msg.error.message, "alert-error");
      });
      return myDropzone.on("success", function(file, contents) {
        return App.vent.trigger("post:new:seed", contents);
      });
    }
  };
  return DropzoneApp.on("start", function() {
    return API.setupDropzone();
  });
});

this.Wardrobe.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  var API;
  this.startWithParent = false;
  API = {
    list: function() {
      return new HeaderApp.List.Controller({
        region: App.headerRegion
      });
    }
  };
  return HeaderApp.on("start", function() {
    return API.list();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var listView;
      listView = this.getListView();
      return this.show(listView);
    };

    Controller.prototype.getListView = function() {
      return new List.Header;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Header = (function(_super) {
    __extends(Header, _super);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.template = "header/list/templates/header";

    Header.prototype.className = "container";

    Header.prototype.events = {
      "click .write": "newPost",
      "click .accounts": "accounts"
    };

    Header.prototype.onRender = function() {
      return this.generateAvatar(App.request("get:current:user"));
    };

    Header.prototype.templateHelpers = {
      logoutUrl: function() {
        return "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Header.prototype.generateAvatar = function(user) {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(user.get("email"), $avEl.attr("width"));
    };

    Header.prototype.accounts = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:clicked");
    };

    Header.prototype.newPost = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:new:clicked");
    };

    return Header;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.PostView = (function(_super) {
    __extends(PostView, _super);

    function PostView() {
      return PostView.__super__.constructor.apply(this, arguments);
    }

    PostView.prototype.template = "post/_base/templates/form";

    PostView.prototype.className = "col-md-12";

    PostView.prototype.initialize = function(opts) {
      App.vent.on("post:new:seed", (function(_this) {
        return function(contents) {
          return _this.fillForm(contents);
        };
      })(this));
      this.tagsShown = false;
      return this.storage = opts.storage;
    };

    PostView.prototype.events = {
      "click .publish": "save",
      "click .js-toggle": "toggleDetails",
      "click .icon-tags": "toggleTags",
      "click .icon-user": "showUsers",
      "click .icon-ellipsis-horizontal": "insertReadMore",
      "click .js-status": "setStatus",
      "keyup #title": "localStorage",
      "change #js-user": "localStorage"
    };

    PostView.prototype.insertReadMore = function() {
      if (this.editor.codemirror.getValue().match(/!-- more/g)) {
        return this.$("#js-errors").show().find("span").html(Lang.post_more_added);
      } else {
        this.$(".icon-ellipsis-horizontal").addClass("disabled");
        return this.insert('<!-- more -->');
      }
    };

    PostView.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    PostView.prototype.templateHelpers = {
      submitBtnText: function() {
        if ((this.active != null) || this.active === "1") {
          return Lang.post_publish;
        } else {
          return Lang.post_save;
        }
      },
      previewUrl: function() {
        var id;
        id = this.id ? this.id : "new";
        return "" + (App.request("get:url:blog")) + "/post/preview/" + id;
      }
    };

    PostView.prototype.onShow = function() {
      this.setUpEditor();
      this.setupUsers();
      this.setupFilm();
      this.localStorage();
      this._triggerActive();
      if (this.model.isNew()) {
        this.$('.js-toggle').trigger("click");
        $('#title').slugIt({
          output: "#slug"
        });
      }
      return App.request("tag:entities", (function(_this) {
        return function(tags) {
          return _this.setUpTags(tags);
        };
      })(this));
    };

    PostView.prototype._triggerActive = function() {
      if (this.model.isNew()) {
        return this;
      }
      if (this.model.get("active")) {
        return this.$(".js-active[value=1]").trigger("click");
      } else {
        return $(".js-active[value=0]").trigger("click");
      }
    };

    PostView.prototype.setUpEditor = function() {
      var toolbar;
      toolbar = ['bold', 'italic', '|', 'quote', 'unordered-list', 'ordered-list', 'ellipsis-horizontal', '|', 'link', 'image', 'code', 'film', '|', 'undo', 'redo'];
      this.editor = new Editor({
        element: document.getElementById("content"),
        toolbar: toolbar
      });
      this.imageUpload(this.editor);
      return this.editor.codemirror.on("change", (function(_this) {
        return function(cm, change) {
          return _this.localStorage();
        };
      })(this));
    };

    PostView.prototype.localStorage = function() {
      return this.storage.put({
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('input[type=radio]:checked').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        user_id: this.$("#js-user").val(),
        publish_date: this.$("#publish_date").val()
      });
    };

    PostView.prototype.setupUsers = function() {
      var $userSelect, stored, user, users;
      $userSelect = this.$("#js-user");
      users = App.request("get:all:users");
      users.each(function(item) {
        return $userSelect.append($("<option></option>").val(item.id).html(item.get("first_name") + " " + item.get("last_name")));
      });
      if (this.model.isNew()) {
        user = App.request("get:current:user");
        stored = this.storage.get();
        if (stored != null ? stored.user_id : void 0) {
          return $userSelect.val(stored.user_id);
        } else {
          return $userSelect.val(user.id);
        }
      } else {
        return $userSelect.val(this.model.get("user_id"));
      }
    };

    PostView.prototype.setUpTags = function(tags) {
      return this.$("#js-tags").selectize({
        persist: true,
        delimiter: ',',
        maxItems: null,
        options: this.generateTagOptions(tags),
        render: {
          item: function(item) {
            return "<div><i class='icon-tag'></i> " + item.text + "</div>";
          },
          option: function(item) {
            return "<div><i class='icon-tag'></i> " + item.text + "</div>";
          }
        },
        create: function(input) {
          return {
            value: input,
            text: input
          };
        }
      });
    };

    PostView.prototype.generateTagOptions = function(tags) {
      var opts, tag;
      opts = (function() {
        var _i, _len, _ref, _results;
        _ref = tags.pluck("tag");
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (tag !== "") {
            _results.push({
              value: tag,
              text: tag
            });
          }
        }
        return _results;
      })();
      return this.customTags(opts);
    };

    PostView.prototype.customTags = function(opts) {
      var tag, val, _i, _len, _ref;
      val = $("#js-tags").val();
      if (val !== "") {
        _ref = val.split(",");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (tag !== "") {
            opts.push({
              value: tag,
              text: tag
            });
          }
        }
      }
      return opts;
    };

    PostView.prototype.toggleTags = function(e) {
      if (this.tagsShown) {
        this.$('.editor-toolbar').removeClass("open");
        this.$('.editor-toolbar a, .editor-toolbar i').show();
        this.$(".tags-bar").addClass("hide");
      } else {
        this.$('.editor-toolbar').addClass("open");
        this.$('.editor-toolbar a, .editor-toolbar i').hide();
        this.$('.icon-tags').show();
        this.$(".tags-bar").removeClass("hide");
        this.$("js-tags").focus();
      }
      return this.tagsShown = !this.tagsShown;
    };

    PostView.prototype.setupFilm = function() {
      return this.$(".icon-film").qtip({
        show: {
          event: "click"
        },
        content: {
          text: $("#film-form").html()
        },
        position: {
          at: "right center",
          my: "left center",
          viewport: $(window),
          effect: false
        },
        events: {
          render: (function(_this) {
            return function(event, api) {
              return $(".js-submitfilm").click(function(e) {
                var filmInput, filmUrl;
                e.preventDefault();
                filmInput = $(e.currentTarget).parent().find('input');
                filmUrl = filmInput.val();
                _this.attachFilm(filmUrl);
                filmInput.val('');
                return $('.icon-film').qtip("hide");
              });
            };
          })(this)
        },
        hide: "unfocus"
      });
    };

    PostView.prototype.attachFilm = function(filmUrl) {
      if (filmUrl.match(/youtube.com/g)) {
        return this.bulidYoutubeIframe(filmUrl);
      } else if (filmUrl.match(/vimeo.com/g)) {
        return this.buildVimeoIframe(filmUrl);
      } else {

      }
    };

    PostView.prototype.bulidYoutubeIframe = function(filmUrl) {
      var filmIframe;
      filmUrl = filmUrl.replace(/https?:\/\//, '//');
      filmUrl = filmUrl.replace(/watch\?v=/, 'embed/');
      filmIframe = '<iframe width="560" height="315" src="' + filmUrl + '" frameborder="0" allowfullscreen></iframe>';
      return this.insert(filmIframe);
    };

    PostView.prototype.buildVimeoIframe = function(originalFilmUrl) {
      var filmIframe, filmUrl;
      filmUrl = originalFilmUrl.replace(/https?:\/\/vimeo.com\//, '//player.vimeo.com/video/');
      filmIframe = '<iframe src="' + filmUrl + '?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      return this.insert(filmIframe);
    };

    PostView.prototype.insert = function(string) {
      return this.editor.codemirror.replaceSelection(string);
    };

    PostView.prototype.save = function(e) {
      e.preventDefault();
      return this.processFormSubmit({
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('#active').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        link_url: this.$("#link_url").val(),
        user_id: this.$("#js-user").val(),
        publish_date: this.$("#publish_date").val()
      });
    };

    PostView.prototype.processFormSubmit = function(data) {
      return this.model.save(data, {
        collection: this.collection
      });
    };

    PostView.prototype.collapse = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "up").addClass("icon-chevron-sign-right").removeClass("icon-chevron-sign-down");
      return this.$(".details").addClass("hide");
    };

    PostView.prototype.expand = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "down").addClass("icon-chevron-sign-down").removeClass("icon-chevron-sign-right");
      return this.$(".details").removeClass("hide");
    };

    PostView.prototype.toggleDetails = function(e) {
      this.$toggle = $(e.currentTarget);
      if (this.$toggle.data("dir") === "up") {
        return this.expand(this.$toggle);
      } else {
        return this.collapse(this.$toggle);
      }
    };

    PostView.prototype.setStatus = function(e) {
      e.preventDefault();
      this.localStorage();
      if ($(e.currentTarget).data('action') === "publish") {
        this.$(".publish").text(Lang.post_publish);
        return this.$(".js-active").val(1);
      } else {
        this.$(".publish").text(Lang.post_save);
        return this.$(".js-active").val(0);
      }
    };

    PostView.prototype.imageUpload = function(editor) {
      var options;
      options = {
        uploadUrl: App.request("get:url:api") + "/dropzone/image",
        allowedTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"],
        progressText: "![Uploading file...]()",
        urlText: "![file]({filename})",
        errorText: "Error uploading file"
      };
      return inlineAttach.attachToCodeMirror(editor.codemirror, options);
    };

    return PostView;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, post;
      post = options.post, id = options.id;
      post || (post = App.request("post:entity", id));
      this.storage = new Storage({
        id: post.id
      });
      this.listenTo(post, "updated", (function(_this) {
        return function() {
          _this.storage.destroy();
          return App.vent.trigger("post:updated", post);
        };
      })(this));
      return App.execute("when:fetched", post, (function(_this) {
        return function() {
          var view;
          view = _this.getEditView(post);
          return _this.show(view);
        };
      })(this));
    };

    Controller.prototype.getEditView = function(post) {
      return new Edit.Post({
        model: post,
        storage: this.storage
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Post = (function(_super) {
    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      this.fillJSON();
      this._setDate();
      this._setActive();
      return this._setTags();
    };

    Post.prototype._setDate = function() {
      var date, publishDate;
      publishDate = this.model.get("publish_date");
      if (_.isObject(publishDate)) {
        publishDate = publishDate.date;
      }
      date = moment.utc(publishDate, "YYYY-MM-DDTHH:mm:ss");
      this.$(".js-date").val(date.format("MMM Do YYYY, hh:mma"));
      return this.$("#publish_date").val(date.format("MMM Do, YYYY h:mm A"));
    };

    Post.prototype._setActive = function() {
      if (parseInt(this.model.get("active")) === 1) {
        this.$(".publish").text(Lang.post_publish);
        return this.$('input:radio[name="active"]').filter('[value="1"]').attr('checked', true);
      } else {
        this.$(".publish").text(Lang.post_save);
        return this.$('input:radio[name="active"]').filter('[value="0"]').attr('checked', true);
      }
    };

    Post.prototype._setTags = function() {
      var tags;
      tags = _.pluck(this.model.get("tags"), "tag");
      return this.$("#js-tags").val(tags);
    };

    return Post;

  })(App.Views.PostView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var post;
      post = App.request("post:entities");
      return App.execute("when:fetched", post, (function(_this) {
        return function() {
          var view;
          view = _this.getListView(post);
          _this.show(view);
          return _this.listenTo(view, "childview:post:delete:clicked", function(child, args) {
            var model;
            model = args.model;
            if (confirm(Lang.post_delete_confirm.replace("##post##", _.escape(model.get("title"))))) {
              return model.destroy();
            } else {
              return false;
            }
          });
        };
      })(this));
    };

    Controller.prototype.getListView = function(post) {
      return new List.Posts({
        collection: post
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.PostItem = (function(_super) {
    __extends(PostItem, _super);

    function PostItem() {
      return PostItem.__super__.constructor.apply(this, arguments);
    }

    PostItem.prototype.template = "post/list/templates/item";

    PostItem.prototype.tagName = "tr";

    PostItem.prototype.attributes = function() {
      if (this.model.get("active") === "1" && this.model.get("publish_date") > moment().format('YYYY-MM-DD HH:mm:ss')) {
        return {
          "class": "post-item scheduled post-" + this.model.id
        };
      } else if (this.model.get("active") === "1") {
        return {
          "class": "post-item active post-" + this.model.id
        };
      } else {
        return {
          "class": "post-item draft post-" + this.model.id
        };
      }
    };

    PostItem.prototype.triggers = {
      "click .delete": "post:delete:clicked"
    };

    PostItem.prototype.events = {
      "click .details": "edit",
      "click .preview": "preview"
    };

    PostItem.prototype.onShow = function() {
      var $emEl, allUsers, user;
      allUsers = App.request("get:all:users");
      $emEl = this.$("em");
      if (allUsers.length === 1) {
        $emEl.hide();
      } else {
        user = this.model.get("user");
        $emEl.text("by " + user.first_name + " " + user.last_name);
      }
      return this.$('.js-format-date').formatDates();
    };

    PostItem.prototype.templateHelpers = {
      status: function() {
        if (parseInt(this.active) === 1 && this.publish_date > moment().format('YYYY-MM-DD HH:mm:ss')) {
          return Lang.post_scheduled;
        } else if (parseInt(this.active) === 1) {
          return Lang.post_active;
        } else {
          return Lang.post_draft;
        }
      }
    };

    PostItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:item:clicked", this.model);
    };

    PostItem.prototype.preview = function(e) {
      var storage;
      e.preventDefault();
      storage = new Storage({
        id: this.model.id
      });
      storage.put(this.model.toJSON());
      return window.open("" + (App.request("get:url:blog")) + "/post/preview/" + this.model.id, '_blank');
    };

    return PostItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {
    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = "post/list/templates/empty";

    Empty.prototype.tagName = "tr";

    return Empty;

  })(App.Views.ItemView);
  return List.Posts = (function(_super) {
    __extends(Posts, _super);

    function Posts() {
      return Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.prototype.template = "post/list/templates/grid";

    Posts.prototype.itemView = List.PostItem;

    Posts.prototype.emptyView = List.Empty;

    Posts.prototype.itemViewContainer = "tbody";

    Posts.prototype.events = {
      "click .js-filter": "filterPosts",
      "keyup #js-filter": "search"
    };

    Posts.prototype.onCompositeCollectionRendered = function() {
      return this.doFilter("draft");
    };

    Posts.prototype.showEmpty = function(type) {
      var quotes;
      if (!this.$("td:visible").length) {
        quotes = ['"The scariest moment is always just before you start." ― Stephen King', '"There is nothing to writing. All you do is sit down at a typewriter and bleed." ― Ernest Hemingway', '"Start writing, no matter what. The water does not flow until the faucet is turned on." ―  Louis L\'Amour', '"All you have to do is write one true sentence. Write the truest sentence that you know." ― Ernest Hemingway', '"Being a writer is a very peculiar sort of a job: it\'s always you versus a blank sheet of paper (or a blank screen) and quite often the blank piece of paper wins." ― Neil Gaiman'];
        this.$(".js-quote").text(quotes[_.random(quotes.length - 1)]);
        this.$("table").addClass("hide");
        return this.$(".no-posts").removeClass("hide").find('span').text(type);
      }
    };

    Posts.prototype.hideAll = function() {
      return this.$el.find(".post-item").hide();
    };

    Posts.prototype.filterPosts = function(e) {
      var $item, type;
      e.preventDefault();
      this.$("table").removeClass("hide");
      this.$(".no-posts").addClass("hide");
      $item = $(e.currentTarget);
      type = $item.data("type");
      this.$(".page-header").find(".active").removeClass("active");
      $item.addClass("active");
      return this.doFilter(type);
    };

    Posts.prototype.doFilter = function(type) {
      this.hideAll();
      this.$("tr." + type).show();
      if (this.$("tr." + type).length === 0) {
        return this.showEmpty(type);
      }
    };

    Posts.prototype.search = function(e) {
      return this.handleFilter();
    };

    Posts.prototype.handleFilter = function() {
      var filter;
      this.hideAll();
      filter = this.$("#js-filter").val();
      if (filter === "") {
        return this.$el.find(".post-item").show();
      }
      return this.collection.filter((function(_this) {
        return function(post) {
          return _this.isMatch(post, filter);
        };
      })(this));
    };

    Posts.prototype.isMatch = function(post, filter) {
      var foundId, pattern;
      pattern = new RegExp(filter, "gi");
      foundId = pattern.test(post.get("title"));
      if (foundId) {
        return this.$el.find(".post-" + post.id).show();
      }
    };

    return Posts;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var post, view;
      post = App.request("new:post:entity");
      this.storage = new Storage;
      this.listenTo(post, "created", (function(_this) {
        return function() {
          _this.storage.destroy();
          return App.vent.trigger("post:created", post);
        };
      })(this));
      view = this.getNewView(post);
      return this.show(view);
    };

    Controller.prototype.getNewView = function(post) {
      return new New.Post({
        model: post,
        storage: this.storage
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Post = (function(_super) {
    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      this.fillJSON($.jStorage.get("post-new"));
      this.$(".publish").text(Lang.post_publish);
      return this.$("#date").attr("placeholder", moment().format("MMM Do, YYYY [9am]"));
    };

    Post.prototype.fillForm = function(contents) {
      this.$("#slug").val(contents.fields.slug);
      this.$("#title").val(contents.fields.title);
      this.editor.codemirror.setValue(contents.content);
      this.$("#publish_date").val(contents.fields.date);
      if (contents.fields.tags.length > 0) {
        return $("#js-tags").val(contents.fields.tags.join());
      }
    };

    return Post;

  })(App.Views.PostView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp", function(PostApp, App, Backbone, Marionette, $, _) {
  var API;
  PostApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "": "add",
      "post": "list",
      "post/add": "add",
      "post/edit/:id": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    list: function() {
      this.setActive();
      return new PostApp.List.Controller;
    },
    add: function() {
      this.setActive(".write");
      return new PostApp.New.Controller;
    },
    edit: function(id, item) {
      this.setActive();
      return new PostApp.Edit.Controller({
        id: id,
        post: item
      });
    },
    setActive: function(type) {
      if (type == null) {
        type = ".posts";
      }
      return $('ul.nav li').removeClass("active").find(type).parent().addClass("active");
    }
  };
  App.vent.on("post:load", function() {
    App.navigate("post");
    return API.list();
  });
  App.vent.on("post:created post:updated", function(item) {
    $("#js-alert").showAlert(Lang.post_success, Lang.post_saved, "alert-success");
    App.navigate("post/edit/" + item.id);
    return API.edit(item.id, item);
  });
  App.vent.on("post:new:clicked post:new", function() {
    App.navigate("/", {
      trigger: false
    });
    return API.add();
  });
  App.vent.on("post:item:clicked", function(item) {
    App.navigate("post/edit/" + item.id);
    return API.edit(item.id, item);
  });
  return App.addInitializer(function() {
    return new PostApp.Router({
      controller: API
    });
  });
});

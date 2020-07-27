const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },

  //taking in string and length
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + "";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(""));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  //next help to take out p tags in item description
  stripTags: function (input) {
    //it is looking for anything that has the < > carrots and replacing them with '' nothing
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },

  //taking in story user, loops through all stories, which user is logged in need to know the story id and the button is a floating button
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    //checking story users id and converting to a string then seeing if it equal to logged in users id
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      //if the item has the floating class then it will had these styles etc
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"> </i></a>  `;
      }
    } else {
      return "";
    }
  },

  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' Value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp(">" + selected + "</option>"),
        ' selected="selected"$&'
      );
  },
};

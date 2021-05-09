/* ==========================================================================
Handles the user popovers that appear when hovering a user image
========================================================================== */
"use strict";

function getUserPopovers() {
  $('*[data-user-popover]').each(async function () {
    //Getting current profile
    var e = $(this);
    var userRef = $(this).attr('data-user-popover');

    //Icons
    var pointIcon = feather.icons.target.toSvg();
    var likeIcon = feather.icons['thumbs-up'].toSvg();
     var commentIcon = feather.icons['message-circle'].toSvg();
    var moreIcon = feather.icons['arrow-right-circle'].toSvg();

    //Cover Photo
    var coverPhoto = "assets/img/demo/cover.jpeg";

    await db.collection("profiles").doc(userRef)
    .get().then(async function(doc){
      var docData = doc.data();
      e.webuiPopover({
        trigger: 'hover',
        placement: 'auto',
        width: 300,
        padding: false,
        offsetLeft: 0,
        offsetTop: 20,
        animation: 'pop',
        cache: false,
        content: function content() {
          var destroyLoader = setTimeout(function () {
            $('.loader-overlay').removeClass('is-active');
          }, 280);
          var html = 
          "<div class='profile-popover-block'><div class='loader-overlay is-active'><div class='loader is-loading'></div></div><div class='profile-popover-wrapper'><div class='popover-cover'><img src='" + coverPhoto + "'><div class='popover-avatar'><img class='avatar' src='" + docData.photoURL + "'></div></div><div class='popover-meta'><span class='user-meta'><span class='username'>"+docData.profileName+"</span></span><!--<span class='job-title'>"+docData.profileName+"</span>--><div class='common-friends'>" + pointIcon + "<div class='text'>"+docData.totalPoints+" Points</div></div><div class='user-location'>" + likeIcon + "<div class='text'>"+docData.totalLikes+" Likes</div></div><div class='user-location'>" + commentIcon + "<div class='text'>"+docData.totalComments+" Comments</div></div></div></div><div class='popover-actions' style='justify-content:center;'><a href='profile-details.html?profileID="+userRef+"'><span class='job-title' style='color:tomato;text-align:center;font-size:13px;font-weight:500;'>View Profile</span></a></div></div>";
          return html;
          return destroyLoader;
        }
      });
    });
  });
}
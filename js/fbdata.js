function getUserFBData()
{

        window.fbAsyncInit = function()
        {
               FB.init({
               appId      : '1476331239284134',//'1458993534351238',
               //channelUrl : '//localhost:8888/channel.html', // Channel File
               channelUrl : '//liisp.uncc.edu/channel.html', // Channel File
               cookie : true,
               status : true,
               xfbml      : true,
               version    : 'v2.0'
               });
               FB.getLoginStatus(function(response)
               {
                  if (response.status === 'connected')
                  {
	
                        FB.api('/me/', function(response)
                        {
                           if (response.email)
                           {
                                   userData['user_email'] = response.email;
                                   //alert(userData.email);
                                   //code
                           }
                           if (typeof response.birthday!= 'undefined')
                           {
                                   userData['user_birthday'] = response.birthday;
                                   //alert(userData.user_birthday);
                                   console.log("birthday" + response.birthday);
                           }
                           if (response.relationship_status)
                           {
                                   userData['user_relationships'] = response.relationship_status;
                                   //alert(userData.user_education);
                                   //code
                                    console.log("relationship" + response.relationship_status);
                           }
                           if (response.education)
                           {
                                for(ed in response.education)
                                {
                                        var school = response.education[ed].school;
                                        var schoolName = school.name;
                                         userData['user_education'] = schoolName;
                                        // alert(schoolName);
                                         console.log("education" + response.education);
                                }
                           }
            
                            if (response.location && !response.error)
                            {
                                    userData['user_location'] = response.location.name;
                                    
                                    console.log("location" + response.location.name);
                                    
                            }
                            if (response.hometown && !response.error)
                            {
                                    userData['user_hometown'] = response.hometown.name;
                                    console.log("home town" + response.hometown.name);
                            }

	                })
                        FB.api('/me/likes', function(response)
                        {
                                if (response && !response.error)
                                {
                                        userData['user_likes'] = response.data[0].name;
                                        //alert(response.data[0].name);
                                        console.log(response.data);
                                }		
                        })
                        FB.api('/me/check-ins', function(response)
                        {
                                if (response && !response.error)
                                {
                                        //userData['user_checkins'] = response.data[0].name;
                                        //alert(response.data[0].name);
                                        console.log(response.data);
                                }
                                
                        })	
                        FB.api('/me/events', function(response)
                        {
                                if (response && !response.error)
                                {
                                        userData['user_events'] = response.data[0].name;
                                        //alert(response.data[0].name);
                                        console.log(response.data);
                                }		
                        })
                        FB.api('/me/friendlists', function(response)
                        {
                                if (response.data.length>0 && !response.error)
                                {
                                        userData['user_friendlists'] = response.data[0].name;
                                        //alert(response.data[3].name);
                                        //code
                                        console.log(response.data);
                                }		
                        })
                        FB.api('/me/albums', function(response)
                        {
                                if (response.data.length>0 && !response.error)
                                {
                                        userData['user_photos'] = response.data[0].name;
                                        //alert(response.data[1].privacy);
                                        //code
                                        console.log("photos"+response.data[0]);
                                }		
                        })
                
                        FB.api('/me/statuses', function(response)
                        {
                                if (response.data.length>0 && !response.error)
                                {
                                        userData['user_status'] = response.data[0].message;
                                        //alert("yeehaa");			
                                        console.log(response.data);
                                }		
                        })
                
                        FB.api('/me/friends', function(response)
                        {
                                if (response && !response.error)
                                {
                                        //userData['user_status'] = response.data[0].message;
                                        //alert("yeehaa");			
                                        console.log(response.data);
                                }		
                        })		
	
                  }
                  else
                  {
                     FB.login(function(){}, {scope: "email,read_stream,user_events,user_about_me,user_website,read_friendlists,user_birthday,"+
                                         "user_hometown,user_location,user_likes,friends_birthday,user_status,"+
                                         "user_education_history,user_work_history,"+
                                         "user_relationship_details,user_religion_politics,"+
                                         "user_relationships,user_photos,user_groups,friends_events,friends_hometown,user_friends"
                    });
                  }
               });
      };

      (function(d, s, id)
      {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id))
            return;
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/es_LA/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

 }
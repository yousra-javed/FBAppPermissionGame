 function getAppPermissionData()
 {
   var data = {
    "1": {


        "name": "Fortune Cookies",
        "executed": false,
        "img": "imgs/apps/fortuneCookies.png",
        "description": "This application enables you to check your daily fortune and horoscope.",
	"plength": 20,
        "permissions": {
            "p1": {
                "name": "user_events",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Events you are attending",
                "required": true
            },
            "p2": {
                "name": "user_email",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Your primary  email address",
                "required": true
            },
            "p3": {
                "name": "user_birthday",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Your birthday",
                "required": true
            },
            "p4": {
                "name": "user_likes",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Pages you have liked",
                "required": true
            },
            "p5": {
                "name": "user_location",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your current location",
                "required": true
            },
            "p6": {
                "name": "user_photos",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Photos you have uploaded, or have been tagged in",
                "required": true
            },
            "p7": {
                "name": "user_relationships",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size":1,
                "description": "Your family and personal relationships",
                "required": true
            },
            "p8": {
                "name": "user_status",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your status  messages",
                "required": true
            },
            "p9": {
                "name": "user_checkins",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your check-ins",
                "required": true
            },
            "p10": {
                "name": "friends_birthday",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Your friends' birthday",
                "required": true
            },
            "p11": {
                "name": "friends_likes",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Pages your friends' have liked",
                "required": true
            },
            "p12": {
                "name": "friends_location",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your friends' current location",
                "required": true
            },
            "p13": {
                "name": "friends_photos",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your friends' photos",
                "required": true
            },
            "p14": {
                "name": "friends_status",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your friends' status messages",
                "required": true
            },
            "p15": {
                "name": "friends_work_history",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Your friends' work history",
                "required": true
            },
            "p16": {
                "name": "friends_checkins",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Your friends' check-ins",
                "required": true
            },
            "p17": {
                "name": "friends_events",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "Events your friends are attending",
                "required": true
            },

            "p18": {
                "name": "read_stream",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Posts in your News Feed",
                "required": false
            },
            "p19": {
                "name": "publish_actions",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Post content, comments, and likes to your stream and to the streams of your friends",
                "required": false
            },
            "p20": {
                "name": "user_friendlists",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "Friend lists you have created",
                "required": false
            }
        }
    },

    "2": {


        "name": "Schoolfeed",
        "executed": false,
        "img": "imgs/apps/schoolFeed.png",
        "description": "This application enables you to reconnect with your high school friends.",
	"plength": 14,
        "permissions": {
            "p1": {
                "name": "user_photos",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "the photos you have uploaded, and photos you have been tagged in",
                "required": true
            },
            "p2": {
                "name": "user_likes",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "list of all the pages you have liked",
                "required": true
            },
            "p3": {
                "name": "user_email",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your primary email address",
                "required": true
            },
            "p4": {
                "name": "user_birthday",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your birthday",
                "required": true
            },
            "p5": {
                "name": "user_education_history",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your education history",
                "required": true
            },
            "p6": {
                "name": "user_hometown",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your hometown",
                "required": true
            },
            "p7": {
                "name": "user_location",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "your current city as the location property",
                "required": true
            },
            "p8": {
                "name": "friends_education_history",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your friends education history as the education property",
                "required": true
            },
            "p9": {
                "name": "friends_birthday",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your friends birthday",
                "required": true
            },
            "p10": {
                "name": "friends_hometown",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 1,
                "description": "your friends hometown",
                "required": true
            },
            "p11": {
                "name": "friends_photos",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "your friends photos which you can see",
                "required": true
            },
            "p12": {
                "name": "read_stream",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "access all the posts in your News Feed",
                "required": false
            },
            "p13": {
                "name": "publish_actions",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": "post content, comments, and likes to your stream and to the streams of your friends",
                "required": false
            },
            "p14": {
                "name": "user_friendlists",
                "accepted": true,
                "box": null,
                "inTruck": false,
                "size": 2,
                "description": " access any friend lists you have created",
                "required": false
            }
        }
    }

};
 
return data;
}
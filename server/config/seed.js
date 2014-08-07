/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Note = require('../api/note/note.model');

function populateNotes(user1, user2){
  console.log(user1._id);
    Note.find({}).remove(function(){
      Note.create(
        {_user: user1._id, note: '3 type of learning. Cognitive, Assocative, and Autonomous.', labels:[{label:'books'}, {label:'the first 40 hours'}, {label:'learning'}]},
        {_user: user1._id, note: '3 type of learning. Cognitive, Assocative, and Autonomous.', labels:[{label:'books'}, {label:'the first 40 hours'}, {label:'learning'}]},
        {_user: user1._id, note: '1. Choose a lovable project', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '2. Focus your energy on one skill at a time', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '3. Define your target performance level', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '4. Deconstruct the skills into subskills', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '5. Obtain critical tools', labels:[{label: 'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '6. Eliminate Barriers to practice.', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '7. Make dedicated time to practice', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '8. Create fast feedback loops', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '9. Practice by the clock in short bursts', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '10. Emphasize quantity and speed.', labels:[{label:'learning'}, {label:'10 principle of skill acquisition'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '1. Significant prepractice effort', labels:[{label:'learning'}, {label:'barriers to practice'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '2. Intermittent resource availability', labels:[{label:'learning'}, {label:'barriers to practice'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '3. Environment distractions', labels:[{label:'learning'}, {label:'barriers to practice'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: '4. Emotional Blocks', labels:[{label:'learning'}, {label:'barriers to practice'}, {label:'the first 40 hours'}]},
        {_user: user1._id, note: 'Leaders must manage their energy. Mobilize, Focus, Invest, Channel, Renew energy in others', labels:[ {label:'leadership'}, {label:'power of full engagement'}]},
        {_user: user1._id, note: '4 Sources of energy: Physical, Emotional, Mental, and Spiritual', labels:[ {label:'leadership'}, {label:'power of full engagement'}]},
        {_user: user1._id, note: '1. Positive energy rituals are the key to full engagement and sustained performance.', labels:[ {label:'leadership'}, {label:'power of full engagement'}]},
        {_user: user2._id, note:'Always catch event at the top level in the DOM', labels:[{label:'jquery'}, {label:'dev'},{label:'coding'}]},
        function(err){
        if(err) console.log('err', err);
        console.log('finished populating notes');
      });
    });

}

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function(err, user1, user2) {
      populateNotes(user1, user2);
      console.log('finished populating users');
    }
  );
});



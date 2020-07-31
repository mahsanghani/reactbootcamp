`
a. return new state based on the incoming action.type
b. Create another action creator to handle decrementing the number
c. add an else if() to this reducer to handle the decrement action

# Challenge:
1. Enable the ability to double and halve the count.
2. If halving, round down instead of letting your count become a decimal.

# Challenge:
Do it again, from scratch!
1. Action creators for increment, decrement, double, and halve
2. Reducer to handle these actions 👆🏻

# Challenge: 
1. implement an action creator called `removeFavoriteThing` 
which takes the string of the favorite thing you want to remove from the array and removes it

# Challenge:
1. Implement an action creator and reducer case to handle setting the title of our YouTube video

# Challenge:
1. Bring in all the action creators we've made so far and dispatch them, just to make sure things are working

# Challenge:
Create a new state property to hold the currently-logged-in user info. I.e. if our app wanted to allow a user to log in, we would likely want to keep track of some info from the logged in user. For this challenge, you'll save a user with these properties:
{
     firstName: ___,
     lastName: ___,
     id: ___,
     email: ___
}

This will require 
1. Creating a new file to hold our new Redux stuff re: the user (e.g. user.js),
2. Creating a new action creator (e.g. "setUserDetails"),
3. Creating a new reducer, and 
4. Adding that reducer to our rootReducer with combineReducers
`

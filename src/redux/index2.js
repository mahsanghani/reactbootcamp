const redux = require("redux");

const action = {
    type: "INCREMENT",
};

function increment(amount) {
    return {
        type: "INCREMENT",
        payload: amount,
    };
}

function decrement(amount) {
    return {
        type: "DECREMENT",
        payload: amount,
    };
}

function double(amount) {
    return {
        type: "DOUBLE",
        payload: amount,
    };
}

function half(amount) {
    return {
        type: "HALF",
        payload: amount,
    };
}

function changeCount(amount) {
    return {
        type: "CHANGE_COUNT",
        payload: amount,
    };
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing,
    };
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing,
    };
}

function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title,
    };
}

function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO",
    };
}

function downvoteVideo() {
    return {
        type: "DOWNVOTE_VIDEO",
    };
}

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0,
        },
    },
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload,
            };
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                // favoriteThings: state.favoriteThings.push(action.payload)
                favoriteThings: [...state.favoriteThings, action.payload],
            };
        case "REMOVE_FAVORITE_THING": {
            const arrCopy = [...state.favoriteThings];

            const updatedArr = state.favoriteThings.filter(
                (thing) => thing.toLowerCase() !== action.payload.toLowerCase()
            );
            return {
                ...state,
                favoriteThings: updatedArr,
            };
        }
        case "SET_YOUTUBE_TITLE":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload,
                },
            };
        case "UPVOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + 1,
                    },
                },
            };
        case "DOWNVOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        down: state.youtubeVideo.votes.down + 1,
                    },
                },
            };
        default:
            return state;
    }
}

function reducer2(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        case "DOUBLE":
            return state * action.payload;
        case "HALVE":
            return Math.round(state / action.payload);
        default:
            return state;
    }
}

function reducer3(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                count: state.count - 1,
            };
        case "DOUBLE":
            return {
                count: state.count * 2,
            };
        case "HALF":
            return {
                count: Math.round(state.count / 2),
            };
        default:
            return state;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DOUBLE" });
store.dispatch({ type: "HALF" });

store.dispatch(increment(1));
store.dispatch(decrement(2));
store.dispatch(double(3));
store.dispatch(half(4));

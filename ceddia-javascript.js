function HelloWorld() {
    return (
        <div>
            <Hello /> <World />!
        </div>
    );
}

// Wrapping the returned JSX inside parentheses isn’t strictly necessary, 
// but if you leave off the parens, the opening tag must be on the same line as the
// return, which looks a bit awkward:

function HelloWorld() {
    return <div>
        <Hello /> <World />!
    </div>;
}


function HelloWorld() {
    return
    <div>
        <Hello /> <World />! -> this will fail
    </div>;
}

// feel free to format your JSX however you like, but if it’s on multiple lines, I recommend wrapping
// it in parentheses.







// Here's a normal function component:
function LikeButton() {
    return (
        <i className="fa fa-heart like-button" />
    );
}
// It can be rewritten as an
// anonymous function and stored in a
// (constant) variable:

const LikeButton = function () {
    return (
        <i className="fa fa-heart like-button" />
    );
}


// The anonymous function can be
// turned into an arrow function:
const LikeButton = () => {
    return (
        <i className="fa fa-heart like-button" />
    );
}

// It can be simplified by removing
// the braces and the `return`:
const LikeButton = () => (
    <i className="fa fa-heart like-button" />
);

// And if it's really simple,
// you can even write it on one line:
const Hi = () => <span>Hi</span>;

// Notice how there’s no return in the last couple versions: when an arrow function only contains one
// expression, it can be written without braces. And when it’s written without braces, the single expression
// is implicitly returned.

// Personally, I tend
// to write function when the component is a bit larger, and use a const () => (...) when it’s only
// a couple lines. Some people prefer to write arrow functions everywhere. Use what you like.

// ----------------------------------------------


// forEach iterates over the children and returns nothing, whereas map returns an array made
// up of the values you return from the function you provide.

// MAPPING A LIST OF TWEETS 

function TweetList({ list }) {
    return (
        <>
            {list.map((item, id) => (
                <Tweet key={id} tweet={item} />
            ))}
        </>
    )
}

const tweets = [{
    message: "Something about cats."
},
{
    message: "Something about DOGS."
}
]

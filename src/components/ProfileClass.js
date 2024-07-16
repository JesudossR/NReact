import React from "react";
class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "name",
                location: "location",
            },
        };
    }
    //first constructor then render then componentdidmount----
    //after setstate or each and every render the render will occurs ->then DOM update-> then componentdidupadte->componentwillunmount
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/JesudossR");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    //    this.timer=setInterval(() => {
    //             console.log("reneder");
    //         },1000);
    }
    componentDidUpdate(curCount,prevCount) {
        if (curCount !== prevCount) {
            //this way we need to do for each and every update 
            // the thing we do in useEffect of function component will be acheived over this.
        }
        //when ever the setstate changes it will be rendered
    }
    componentWillUnmount() {
       // clearInterval(this.timer);
        //used to unmount or clean up
        //unmount will happen when we moved to another component
    }
    render() {
        const { count2 } = this.state;// destructure
        return (
            <div>
                <h2>helo profile class</h2>
                <img src={this?.state?.userInfo?.avatar_url} />
                <h1>{this?.state?.userInfo?.name}</h1>
                <h1>{this?.state?.userInfo?.id}</h1>

                {/* <h1>{count2}</h1>
                <button onClick={() => { this.setState({ count: 1, count2: 1,})}}>click</button> */}
            </div>
        ); 
    }
}
export default ProfileClass;
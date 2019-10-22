import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { init, getRooms } from "../../actions/gameActions";

class Game extends React.Component {
  componentDidMount() {
    this.props.init();
    this.props.getRooms();
  }
  //   const [user, setUser] = useState();

  //   useEffect(() => {
  //     const auth = `Token ${localStorage.getItem("key")}`
  //     console.log(auth)
  //     axios
  //       .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
  //       .then(res => {
  //         console.log(res.data);
  //         setUser(localStorage.setItem("token", res.data));
  //       })
  //       .catch(err => err.response);
  //   }, []);

  render() {
    return <h1>Hello World</h1>;
  }
}

const mapStateToProps = ({
  error,
  uuid,
  name,
  title,
  description,
  players,
  rooms
}) => ({
  error,
  uuid,
  name,
  title,
  description,
  players,
  rooms
});

export default withRouter(
  connect(
    mapStateToProps,
    { init, getRooms }
  )(Game)
);

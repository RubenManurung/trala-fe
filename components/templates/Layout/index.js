import Header from "@components/organisms/Header";
import Navbar from "@components/organisms/Navbar";
import Footer from "@components/organisms/Footer";
import { connect } from "react-redux";
import actions from "@redux/actions";

const Index = (props) => {
  const { SignIn, token, deauthenticate, children } = props;

  return (
    <>
      <Header />
      <Navbar SignIn={SignIn} token={token} deauthenticate={deauthenticate} />
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  if (state?.signInReducers?.data?.accessToken) {
    return {
      token: state.signInReducers.data.accessToken.token,
    };
  } else {
    return {
      token: "",
    };
  }
};

export default connect(mapStateToProps, actions)(Index);

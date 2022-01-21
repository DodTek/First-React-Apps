import logo from "./GloboLogo.png";

function Header({ subtitle, title }) {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
}

// const Header = () => (
//   <header className="row">
//     <div className="col-md-5">
//       <img src={logo} className="logo" alt="logo" />
//     </div>
//     <div className="col-md-7 mt-5 subtitle">
//       Providing houses all over the world
//     </div>
//   </header>
// );

// class Header extends Component {
//   render() {
//     return (
//       <header className="row">
//         <div className="col-md-5">
//           <img src={logo} className="logo" alt="logo" />
//         </div>
//         <div className="col-md-7 mt-5 subtitle">{this.props.subtitle}</div>
//       </header>
//     );
//   }
// }

export default Header;

import "./Navigation.scss";

export const Navigation = (): JSX.Element => {
  const NavigationTab = (props: { name: string }): JSX.Element => {
    const icons: Record<string, JSX.Element> = {
      discover: <i className="material-icons">person_search</i>,
      profile: <i className="material-icons">person</i>,
      contact: <i className="material-icons">phone</i>,
      login: <i className="material-icons">login</i>,
      logout: <i className="material-icons">logout</i>,
      connections: <i className="material-icons">group</i>,
    };

    return (
      <div
        className={"NavigationTab"}
        onClick={() => window.location.assign(`/${props.name.toLowerCase()}`)}
      >
        <p>
          {icons[`${props.name.toLowerCase()}`]}
          {props.name}
        </p>
      </div>
    );
  };

  return (
    <div className={"Navigation"}>
      {["Discover", "Profile", "Connections", "Login", "Logout"].map(
        (button) => {
          return <NavigationTab key={button} name={button} />;
        }
      )}
    </div>
  );
};

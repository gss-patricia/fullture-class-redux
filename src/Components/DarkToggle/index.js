import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../Constants";

const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1>Teste Tema Dark</h1>
      <p>
        Use Dark Theme
        <input
          type="checkbox"
          checked={darkThemeEnabled}
          onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
        />
      </p>
    </>
  );
};

export default DarkThemeToggle;

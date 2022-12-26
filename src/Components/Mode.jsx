import { React } from "react";
import { useLocation } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

export default function Mode({onChange, theme, toggle, background}) {
  const location = useLocation();

  function handleChange(){
    onChange()
  }
  function toggleNext(){
    console.log("Before: ",background)
    toggle()
    console.log("After: ",background)
  }



  return (
    <div className="mode-container">
      {theme ? (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleChange}
          >
            <WbSunnyIcon className="bounce" />
            <span className="mode-container-tooltiptext">Click Me for<br />Dark Mode</span>
          </div>
        </div>
      ) : (
        <div class="mode-container-tooltip">
          <div
            className="mode-container-icon"
            onClick={handleChange}
          >
            <DarkModeIcon className="bounce" />
            <span className="mode-container-tooltiptext">Click Me for<br />Light Mode</span>
          </div>
        </div>
      )}
      { location.pathname === "/" ? (
        background===0? (
          <div class="mode-container-tooltip2 extra-padding">
            <div
              className="mode-container-icon"
              onClick={toggleNext}
            >
              <LooksOneIcon />
              <span className="mode-container-tooltiptext2">Click Me for<br/>Background 2</span>
            </div>
          </div>
        ) : (
          <div class="mode-container-tooltip2 extra-padding">
            <div
              className="mode-container-icon"
              onClick={toggleNext}
            >
              <LooksTwoIcon />
              <span className="mode-container-tooltiptext2">Click Me for<br/>Background 1</span>
            </div>
          </div>
        )
      ) : ( "" )
    }
    </div>
  );
}

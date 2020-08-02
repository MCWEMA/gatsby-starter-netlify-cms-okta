<ul
  sx={{
    listStyle: "none",
    background: "darkorange",
    margin: 0,
    padding: 0,
  }}
>
  {menuLinks.map((link) => (
    <li
      sx={{
        color: "white",
        backgroundColor: "darkorange",
        display: "block",
        float: "left",
        padding: "1rem",
        position: "relative",
        transitionDuration: "0.5s",
        ":hover": {
          backgroundColor: "red",
          cursor: "pointer",
        },
        ":hover > ul, :focus-within > ul ": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
      }}
      key={link.name}
    >
      <a
        sx={{
          color: "white",
          textDecoration: "none",
        }}
        href={link.link}
        aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
      >
        {link.name}
      </a>
      {link.subMenu && link.subMenu.length > 0 ? (
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            backgroundColor: "darkorange",
            visibility: "hidden",
            opacity: "0",
            display: "none",
            minWidth: "8rem",
            position: "absolute",
            transition: "all 0.5s ease",
            marginTop: "1rem",
            left: "0",
            ":hover": {
              visibility: "visible",
              opacity: "1",
              display: "block",
            },
          }}
          aria-label="submenu"
        >
          {link.subMenu.map((subLink) => (
            <li
              sx={{
                clear: "both",
                width: "100%",
                padding: "1rem",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
              key={subLink.name}
            >
              <a
                sx={{
                  color: "white",
                  textDecoration: "none",
                }}
                href={subLink.link}
              >
                {subLink.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  ))}
</ul>
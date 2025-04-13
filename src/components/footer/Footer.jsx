import React from "react";
import './Footer.css';


export const Footer = () => {
    return (
        <footer style={{ fontSize: "0.75rem", textAlign: "center", padding: "1rem", color: "#888" }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Kian Miridoozini. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            <a
              href="https://storyset.com/work"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Work illustrations by Storyset
            </a>
          </p>
        </footer>
      );
}

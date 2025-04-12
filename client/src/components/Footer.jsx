import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Karansri123",
      label: "GitHub",
      colorClass: "hover:text-black",
      iconPath:
        "M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.051c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.603-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z",
    },
    {
      href: "https://www.linkedin.com/in/karan9455/",
      label: "LinkedIn",
      colorClass: "hover:text-blue-700",
      iconPath:
        "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.72v2.1h.05c.52-1 1.78-2.1 3.68-2.1 3.94 0 4.66 2.6 4.66 6V24h-4v-8.28c0-1.97-.03-4.5-2.74-4.5-2.75 0-3.17 2.14-3.17 4.35V24h-4V8.5z",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-gray-100 text-gray-600 mt-20 py-6 px-4"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Text2Image logo"
            className="w-8 sm:w-10 lg:w-12 object-contain"
            width="48"
            height="48"
            loading="lazy"
          />
          <p className="text-sm hidden sm:block">
            © {year} Text2Image. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`${link.colorClass} transition`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={link.iconPath} />
              </svg>
            </a>
          ))}
        </div>
        <button
          onClick={scrollToTop}
          className="text-xs text-gray-500 hover:text-black transition border border-gray-300 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          aria-label="Back to top"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

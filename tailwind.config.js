module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      height: {
        15: "57px",
      },
      zIndex: {
        2: "2",
      },
      padding: {
        66: "66px",
      },
      screens: {
        xs: "450px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "sm-max": { max: "600px" },
        "md-max": { max: "960px" },
        "lg-max": { max: "1280px" },
        "xl-max": { max: "1920px" },
      },
      spacing: {
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      backgroundImage: {
        // logo: "url('/src/assets/logo/logo_360.png')",
        background: "#1E1E1E",
        container: "#18181A",
        inves_header_background:
          "linear-gradient(to bottom, #000411, #0d3663, #000411)",
        inves_body_background:
          "linear-gradient(to right, #000411, #0d3663, #000411)",
        inves_nav_background: "linear-gradient(to bottom, #0d3663, #000411)",
        lizard_box_background:
          "linear-gradient(to right, #000411, #0d3663, #000411)",
        button_background: "linear-gradient(to bottom, #000411, #0d3663)",
        reward_background: "linear-gradient(to right, #0d3663, #000411)",
      },
      colors: {
        primary: "#54E6B6",
        secondary: "rgba(231, 231, 232, 0.46)",
        title: "#E7E7E8",
        textsecondary: "rgba(231, 231, 232, 0.65)",
        blacktext: "rgba(24, 24, 26, 0.9)",
        table_border: "rgba(231, 231, 232, 0.21)",
        footer_text: "rgba(255, 255, 255, 0.42)",
        error: "#E02828",
        success: "#00AA06",
        warning: "#F1B800",
        pinkB: "#061934",
        white: "#ffffff",
        blue_gray: "#8E92B8",
        blackmenu: "#1E2135",
        councilbg: "#1E2135",
        fontdisccolor: "#AEACD2",
        btncolor: "#017AFF",
        pricecolorinc:"#0FFF50",
        pricecolordec:"#C70039",
      },
      fontSize: {
        tit: "42px",
        baseft: "16px",
        smalltext: "8px",
        xxl: ['22px', '30px']
      },
    },
  },
  plugins: [],
};

import React, { CSSProperties } from "react";

export const Introduction = () => {
  const images = [
    "scope.png",
    "storybook.png",
    "styleguide.png",
    "wellbeing.png"
  ];

  return (
    <>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Software Engineer/Designer</h1>
        <p style={styles.subtitle}>
          Passionate about how design affects user’s interactions and
          understanding, specifically through minimalist style.
        </p>
      </div>

      <div style={styles.imageWrapper}>
        <img
          style={styles.image}
          src={require(`../../../data/images/${
            images[Math.floor(Math.random() * images.length)]
          }`)}
          alt={"title"}
        />
      </div>
    </>
  );
};

interface IntroductionStyles {
  wrapper: CSSProperties;
  title: CSSProperties;
  subtitle: CSSProperties;
  imageWrapper: CSSProperties;
  image: CSSProperties;
}

const styles: IntroductionStyles = {
  wrapper: {
    textAlign: "center"
  },
  title: {
    fontSize: 50,
    color: "#333",
    fontWeight: 400
  },
  subtitle: {
    lineHeight: "28px",
    fontSize: 20,
    textAlign: "center",
    color: "#496274",
    fontWeight: 300
  },
  imageWrapper: {
    marginTop: 75,
    display: "flex",
    justifyContent: "center"
  },
  image: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
  }
};

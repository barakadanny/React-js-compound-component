import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};

const CardImage = ({ src }: { src: string }) => {
  return <img src={src} alt="Card Image" />;
};

const CardName = ({ children }: { children: React.ReactNode }) => {
  return <h1>{children}</h1>;
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};

const CardPrice = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};

const CardSummary = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};

// Compound component
Card.Image = CardImage;
Card.Name = CardName;
Card.Description = CardDescription;
Card.Price = CardPrice;
Card.Summary = CardSummary;

export default Card;

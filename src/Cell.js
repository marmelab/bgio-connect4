import React from "react";
import styled from "@emotion/styled";

const styles = {
  cell: {
    display: "flex",
    padding: 5,
    alignItems: "stretch",
    flex: -1,
  },
  disc: {
    display: "flex",
    flex: -1,
    borderRadius: 20,
    height: 40,
    width: 40,
  },
};

const Container = styled.div(styles.cell);
const Disc = styled.div(styles.disc, (props) => ({
  backgroundColor:
    props.color === 0 ? "white" : props.color === 1 ? "red" : "yellow",
}));

const Cell = ({ color }) => (
  <Container>
    <Disc color={color} />
  </Container>
);

export default Cell;

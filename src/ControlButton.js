import React from "react";
import styled from "@emotion/styled";

const styles = {
  placeholder: {
    display: "flex",
    flex: 1,
    height: 40,
    width: 40,
  },
  button: {
    display: "flex",
    margin: 0,
  },
};

const Placeholder = styled.div(styles.placeholder);
const Button = styled.button(styles.button);

const ControlButton = ({ moves, enabled, column }) => {
  const dropDisc = () => {
    moves.clickColumn(column);
  };

  return !enabled ? (
    <Placeholder />
  ) : (
    <Placeholder>
      <Button text={String(column + 1)} onClick={dropDisc} />
    </Placeholder>
  );
};

export default ControlButton;

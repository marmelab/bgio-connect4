import React from "react";
import styled from "@emotion/styled";
import { isColumnFull } from "./BoardModel";

import Cell from "./Cell";
import ControlButton from "./ControlButton";

const styles = {
  container: {
    display: "flex",
    flex: 0,
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    display: "flex",
    flex: 1,
  },
  table: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "steelblue",
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
};

const Container = styled.div(styles.container);
const Header = styled.div(styles.header);
const Table = styled.div(styles.table);
const Row = styled.div(styles.row);

export const ConnectFourBoard = ({ G, ctx, moves }) => (
  <Container>
    <Header>
      {G.cells.map((cell, x) => (
        <ControlButton
          enabled={!isColumnFull(G.cells, x)}
          column={x}
          moves={moves}
          key={`dropdisc-controlbutton-${x}`}
          style={styles.button}
        />
      ))}
    </Header>
    <Table>
      {G.cells.map((column, x) => (
        <Row key={`column-${x}`}>
          {column.map((cell, y) => (
            <Cell color={cell} key={`cell-${x}-${y}`} />
          ))}
        </Row>
      ))}
    </Table>
    {ctx.gameover ? (
      ctx.gameover.winner !== undefined ? (
        <div id="winner">Winner: {ctx.gameover.winner}</div>
      ) : (
        <div id="winner">Draw!</div>
      )
    ) : null}
  </Container>
);

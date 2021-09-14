import {
  greenBright, redBright, whiteBright, yellowBright,
} from 'chalk';
import { bold } from 'kleur';
// @ts-ignore
import cliui from 'cliui';

const ui = cliui();

const cliDefaultFont = (text: string) => `${whiteBright(bold(text))}`;
const cliSuccessFont = (text: string) => `${greenBright(bold(text))}`;
const cliErrorFont = (text: string) => `${redBright(bold(text))}`;
const cliInfoFont = (text: string) => `${yellowBright(bold(text))}`;

const divWrapper = (text: string) => {
  ui.div(
    {
      text,
      padding: [1, 0, 0, 1],
    },
  );
  // eslint-disable-next-line no-console
  console.log(`${ui.toString()}`);
  ui.resetOutput();
};

export {
  divWrapper,
  cliDefaultFont,
  cliSuccessFont,
  cliErrorFont,
  cliInfoFont,
};

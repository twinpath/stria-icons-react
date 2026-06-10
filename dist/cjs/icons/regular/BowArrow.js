var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BowArrow_exports = {};
__export(BowArrow_exports, {
  default: () => BowArrow_default
});
module.exports = __toCommonJS(BowArrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BowArrowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M145.744 286.676L179.748 252.799L80.111 153.419C113.99 128.917 154.495 115.542 197 115.542C231.003 115.542 263.757 124.042 292.76 139.918L327.764 105.041C288.885 80.79 244.005 67.539 197 67.539C141.618 67.539 89.112 85.79 45.857 119.167L38.607 111.917C32.356 105.666 22.23 105.666 15.979 111.917L4.728 123.167C-1.523 129.417 -1.523 139.543 4.728 145.793L145.744 286.676ZM493.283 0.286L364.644 26.037C352.392 28.412 347.767 43.663 356.643 52.413L391.147 86.915L140.493 337.178L90.738 320.677C88.737 320.052 78.361 317.052 69.735 325.678L5.978 389.306C-4.773 400.057 -0.398 418.433 14.104 423.183L69.735 441.809L88.237 497.312C91.238 506.312 99.489 511.437 107.864 511.437C112.99 511.437 118.241 509.437 122.241 505.437L185.998 441.809C191.499 436.308 193.374 428.183 190.999 420.808L174.372 371.18L425.025 120.792L459.529 155.169C468.405 164.169 483.532 159.419 486.032 147.168L511.66 18.787C514.036 7.036 503.534 -1.714 493.283 0.286ZM116.24 454.935L101.364 410.182L56.484 395.306L89.487 362.43L134.242 377.305L149.244 422.058L116.24 454.935ZM455.654 94.916L417.025 56.289L465.28 46.663L455.654 94.916ZM407.148 183.92L372.144 218.797C388.271 248.049 397.022 280.925 397.022 315.302C397.022 357.804 383.646 398.182 359.143 431.933L258.882 331.928L225.003 365.805L366.769 507.312C373.02 513.563 383.146 513.563 389.396 507.312L400.648 496.062C406.898 489.811 406.898 479.686 400.648 473.435L393.397 466.185C426.776 423.058 445.028 370.68 445.028 315.302C445.028 268.05 431.651 222.922 407.148 183.92Z" })
  }
));
BowArrowRegular.displayName = "BowArrowRegular";
var BowArrow_default = BowArrowRegular;

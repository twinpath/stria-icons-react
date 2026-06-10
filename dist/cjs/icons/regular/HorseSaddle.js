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
var HorseSaddle_exports = {};
__export(HorseSaddle_exports, {
  default: () => HorseSaddle_default
});
module.exports = __toCommonJS(HorseSaddle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HorseSaddleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 80C455.125 80 448 87.125 448 96S455.125 112 464 112S480 104.875 480 96S472.875 80 464 80ZM576 102.491C576 92.955 571.05 79.121 565 71.75L543.25 45.25C559.25 39.875 572.375 26.5 575.875 9.625C576.25 7.25 575.625 4.875 574.125 3C572.625 1.125 570.375 0 567.875 0H432C363.625 0 306.25 48 291.625 112H176C139.25 112 104.875 130.125 84 160.375C37.375 162.5 0 200.875 0 248V296C0 309.255 10.745 320 24 320H24C37.255 320 48 309.255 48 296V248C48 234.75 54.875 223.625 64.75 216.25C64.625 218.5 58 264 96.125 302.625L83.25 346.375C79.5 359.625 79.125 373.75 82.125 387.25L106.25 487.5C109.75 501.875 122.625 512 137.375 512H212.125C222 512 231.25 507.375 237.375 499.625C243.375 491.875 245.5 481.75 243.125 472.125L217.625 371.375L227 345L288 358.5V480C288 497.6 302.4 512 320 512H400C417.6 512 432 497.6 432 480V324.375C452 301.875 463.375 272.875 464 242.75C464 241.875 464.125 234.375 464.125 234.375C477.375 238.75 491.75 238.75 505 234.25L536 223.625C560 215.5 576 192.875 576 167.625V102.491ZM224 295.125L196.25 289L167.5 369L191.5 464H150L128.875 376.125C127.625 370.75 127.75 365.25 129.25 360L152 283.25C126.375 272.875 110.25 247.375 112.125 219.75C113.875 192.25 133.25 169 160 162.25V176C160 216.125 187.125 249.75 224 260.25V295.125ZM208 176V160H288V176C288 198.125 270.125 216 248 216C225.875 216 208 198.125 208 176ZM520.5 178.25L489.5 188.75C483.75 190.75 477.375 189.25 473 185L448 160H416V240C416 265.125 404.125 288.625 384 303.625V464H336V320L272 305.75V260.25C308.875 249.75 336 216.125 336 176V144C336 91 379 48 432 48H483.375L528 102.25V167.625C528.125 172.375 525 176.625 520.5 178.25Z" })
  }
));
HorseSaddleRegular.displayName = "HorseSaddleRegular";
var HorseSaddle_default = HorseSaddleRegular;

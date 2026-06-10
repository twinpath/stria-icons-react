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
var CommentQuote_exports = {};
__export(CommentQuote_exports, {
  default: () => CommentQuote_default
});
module.exports = __toCommonJS(CommentQuote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentQuoteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M183.998 143.999C153.123 143.999 127.998 169.124 127.998 199.999S153.123 255.999 183.998 255.999C199.674 255.999 213.822 249.483 223.998 239.065V263.999C223.998 294.874 198.873 319.999 167.998 319.999H159.998C155.576 319.999 151.998 323.593 151.998 327.999S155.576 335.999 159.998 335.999H167.998C207.701 335.999 239.998 303.686 239.998 263.999V199.999C239.998 169.124 214.873 143.999 183.998 143.999ZM183.998 239.999C161.936 239.999 143.998 222.061 143.998 199.999S161.936 159.999 183.998 159.999S223.998 177.936 223.998 199.999S206.061 239.999 183.998 239.999ZM327.998 143.999C297.123 143.999 271.998 169.124 271.998 199.999S297.123 255.999 327.998 255.999C343.674 255.999 357.822 249.483 367.998 239.065V263.999C367.998 294.874 342.873 319.999 311.998 319.999H303.998C299.576 319.999 295.998 323.593 295.998 327.999S299.576 335.999 303.998 335.999H311.998C351.701 335.999 383.998 303.686 383.998 263.999V199.999C383.998 169.124 358.873 143.999 327.998 143.999ZM327.998 239.999C305.936 239.999 287.998 222.061 287.998 199.999S305.936 159.999 327.998 159.999S367.998 177.936 367.998 199.999S350.061 239.999 327.998 239.999ZM256 31.999C114.594 31.999 0 125.093 0 239.999C0 289.593 21.406 334.999 57 370.702C44.5 421.093 2.688 465.999 2.188 466.499C0 468.796 -0.594 472.202 0.688 475.202C2 478.202 4.812 479.999 8 479.999C74.313 479.999 124 448.202 148.594 428.593C181.312 440.905 217.594 447.999 256 447.999C397.406 447.999 512 354.905 512 239.999S397.406 31.999 256 31.999ZM256 431.999C220.879 431.999 186.641 425.815 154.23 413.616L145.723 410.417L138.617 416.085C118.418 432.186 78.477 458.116 25.957 463.139C40.395 444.846 63.375 411.46 72.531 374.553L74.703 365.796L68.332 359.405C34.098 325.065 16 283.772 16 239.999C16 134.132 123.664 47.999 256 47.999S496 134.132 496 239.999S388.336 431.999 256 431.999Z" })
  }
));
CommentQuoteThin.displayName = "CommentQuoteThin";
var CommentQuote_default = CommentQuoteThin;

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
var ChessClockFlip_exports = {};
__export(ChessClockFlip_exports, {
  default: () => ChessClockFlip_default
});
module.exports = __toCommonJS(ChessClockFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessClockFlipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 304C352 365.855 402.145 416 464 416S576 365.855 576 304S525.855 192 464 192S352 242.145 352 304ZM368 304C368 251.064 411.066 208 464 208S560 251.064 560 304C560 356.934 516.934 400 464 400S368 356.934 368 304ZM176 192C114.145 192 64 242.145 64 304S114.145 416 176 416S288 365.855 288 304S237.855 192 176 192ZM176 400C123.066 400 80 356.934 80 304C80 251.064 123.066 208 176 208S272 251.064 272 304C272 356.934 228.934 400 176 400ZM0 192L0 416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V192C640 156.652 611.348 128 576 128H472V48H536C540.406 48 544 44.422 544 40S540.406 32 536 32H392C387.594 32 384 35.578 384 40S387.594 48 392 48H456V128H64C28.652 128 0 156.652 0 192ZM16 192C16 165.533 37.531 144 64 144H576C602.469 144 624 165.533 624 192V416C624 442.467 602.469 464 576 464H64C37.531 464 16 442.467 16 416V192ZM256 88C256 83.578 252.406 80 248 80H104C99.594 80 96 83.578 96 88S99.594 96 104 96H248C252.406 96 256 92.422 256 88ZM456 240V304C456 308.422 459.594 312 464 312S472 308.422 472 304V240C472 235.578 468.406 232 464 232S456 235.578 456 240ZM215.594 253.094L170.344 298.344C167.219 301.469 167.219 306.531 170.344 309.656C171.906 311.219 173.938 312 176 312S180.094 311.219 181.656 309.656L226.906 264.406C230.031 261.281 230.031 256.219 226.906 253.094S218.719 249.969 215.594 253.094Z" })
  }
));
ChessClockFlipThin.displayName = "ChessClockFlipThin";
var ChessClockFlip_default = ChessClockFlipThin;

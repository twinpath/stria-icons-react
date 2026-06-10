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
var ChessClock_exports = {};
__export(ChessClock_exports, {
  default: () => ChessClock_default
});
module.exports = __toCommonJS(ChessClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessClockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 192C114.145 192 64 242.145 64 304S114.145 416 176 416S288 365.855 288 304S237.855 192 176 192ZM176 400C123.066 400 80 356.934 80 304C80 251.064 123.066 208 176 208S272 251.064 272 304C272 356.934 228.934 400 176 400ZM464 192C402.145 192 352 242.145 352 304S402.145 416 464 416S576 365.855 576 304S525.855 192 464 192ZM464 400C411.066 400 368 356.934 368 304C368 251.064 411.066 208 464 208S560 251.064 560 304C560 356.934 516.934 400 464 400ZM576 128H184V48H248C252.406 48 256 44.422 256 40S252.406 32 248 32H104C99.594 32 96 35.578 96 40S99.594 48 104 48H168V128H64C28.652 128 0 156.652 0 192V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V192C640 156.652 611.348 128 576 128ZM624 416C624 442.467 602.469 464 576 464H64C37.531 464 16 442.467 16 416V192C16 165.533 37.531 144 64 144H576C602.469 144 624 165.533 624 192V416ZM392 96H536C540.406 96 544 92.422 544 88S540.406 80 536 80H392C387.594 80 384 83.578 384 88S387.594 96 392 96ZM176 232C171.594 232 168 235.578 168 240V304C168 308.422 171.594 312 176 312S184 308.422 184 304V240C184 235.578 180.406 232 176 232ZM503.594 253.094L458.344 298.344C455.219 301.469 455.219 306.531 458.344 309.656C459.906 311.219 461.938 312 464 312S468.094 311.219 469.656 309.656L514.906 264.406C518.031 261.281 518.031 256.219 514.906 253.094S506.719 249.969 503.594 253.094Z" })
  }
));
ChessClockThin.displayName = "ChessClockThin";
var ChessClock_default = ChessClockThin;

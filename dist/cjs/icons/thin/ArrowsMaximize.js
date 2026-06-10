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
var ArrowsMaximize_exports = {};
__export(ArrowsMaximize_exports, {
  default: () => ArrowsMaximize_default
});
module.exports = __toCommonJS(ArrowsMaximize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsMaximizeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 184V59.312L235.312 256L432.002 452.688V328C432.002 323.578 435.582 320 440 320C444.424 320 448 323.578 448 328V472C448 476.426 444.416 480 440 480H296C291.559 480 288 476.406 288 472C288 467.582 291.58 464 296 464H420.688L224 267.312L27.312 464H152C156.42 464 160 467.582 160 472C160 476.406 156.439 480 152 480H8C3.576 480 0 476.418 0 472V328C0 323.574 3.58 320 8 320C12.418 320 15.998 323.578 15.998 328V452.688L212.688 256L15.998 59.312V184C15.998 188.422 12.418 192 8 192C3.576 192 0 188.422 0 184V40C0 35.574 3.584 32 8 32H152C156.441 32 160 35.594 160 40C160 44.418 156.42 48 152 48H27.312L224 244.688L420.688 48H296C291.58 48 288 44.418 288 40C288 35.59 291.561 32 296 32H440C444.424 32 448 35.578 448 40V184C448 188.422 444.42 192 440 192C435.582 192 432.002 188.422 432.002 184Z" })
  }
));
ArrowsMaximizeThin.displayName = "ArrowsMaximizeThin";
var ArrowsMaximize_default = ArrowsMaximizeThin;

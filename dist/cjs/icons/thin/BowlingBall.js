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
var BowlingBall_exports = {};
__export(BowlingBall_exports, {
  default: () => BowlingBall_default
});
module.exports = __toCommonJS(BowlingBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BowlingBallThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M143.918 136C121.826 136 103.918 153.908 103.918 176S121.826 216 143.918 216S183.918 198.092 183.918 176S166.01 136 143.918 136ZM143.918 200C130.686 200 119.918 189.232 119.918 176C119.918 162.766 130.686 152 143.918 152C157.152 152 167.918 162.766 167.918 176C167.918 189.232 157.152 200 143.918 200ZM239.918 72C217.826 72 199.918 89.908 199.918 112S217.826 152 239.918 152S279.918 134.092 279.918 112S262.01 72 239.918 72ZM239.918 136C226.686 136 215.918 125.232 215.918 112C215.918 98.766 226.686 88 239.918 88C253.152 88 263.918 98.766 263.918 112C263.918 125.232 253.152 136 239.918 136ZM239.918 168C217.826 168 199.918 185.908 199.918 208S217.826 248 239.918 248S279.918 230.092 279.918 208S262.01 168 239.918 168ZM239.918 232C226.686 232 215.918 221.232 215.918 208C215.918 194.766 226.686 184 239.918 184C253.152 184 263.918 194.766 263.918 208C263.918 221.232 253.152 232 239.918 232ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
BowlingBallThin.displayName = "BowlingBallThin";
var BowlingBall_default = BowlingBallThin;

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
var Snooze_exports = {};
__export(Snooze_exports, {
  default: () => Snooze_default
});
module.exports = __toCommonJS(Snooze_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnoozeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.998 224H39.996C26.746 224 15.996 234.75 15.996 248S26.746 272 39.996 272H152.622L4.652 473.812C-0.691 481.094 -1.504 490.781 2.59 498.844C6.684 506.906 14.965 512 23.996 512H183.998C197.248 512 207.998 501.25 207.998 488S197.248 464 183.998 464H71.372L219.342 262.188C224.685 254.906 225.498 245.219 221.404 237.156C217.31 229.094 209.029 224 199.998 224ZM445.469 237.281C441.406 229.125 433.094 224 424 224H327.999C314.749 224 303.999 234.75 303.999 248S314.749 272 327.999 272H375.999L308.811 361.594C303.342 368.875 302.467 378.594 306.53 386.719C310.592 394.875 318.905 400 327.999 400H416C429.25 400 440 389.25 440 376S429.25 352 416 352H375.999L443.187 262.406C448.656 255.125 449.531 245.406 445.469 237.281ZM311.999 152C311.999 138.75 301.249 128 287.998 128H247.998L315.186 38.406C320.655 31.125 321.53 21.406 317.467 13.281C313.405 5.125 305.092 0 295.999 0H199.998C186.748 0 175.998 10.75 175.998 24S186.748 48 199.998 48H247.998L180.81 137.594C175.341 144.875 174.466 154.594 178.529 162.719C182.591 170.875 190.904 176 199.998 176H287.998C301.249 176 311.999 165.25 311.999 152Z" })
  }
));
SnoozeRegular.displayName = "SnoozeRegular";
var Snooze_default = SnoozeRegular;

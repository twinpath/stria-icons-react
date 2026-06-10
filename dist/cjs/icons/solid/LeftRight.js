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
var LeftRight_exports = {};
__export(LeftRight_exports, {
  default: () => LeftRight_default
});
module.exports = __toCommonJS(LeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.992 273.592L391.992 377.592C385.008 384.076 374.82 385.811 366.07 381.998S351.664 369.545 351.664 359.998V303.998H159.664V360C159.664 369.547 154.008 378.188 145.258 382C136.508 385.812 126.32 384.078 119.336 377.594L7.336 273.594C-2.445 264.5 -2.445 247.5 7.336 238.406L119.336 134.406C126.32 127.922 136.508 126.187 145.258 130C154.008 133.812 159.664 142.453 159.664 152V207.998H351.664V151.998C351.664 142.451 357.32 133.811 366.07 129.998S385.008 127.92 391.992 134.404L503.992 238.404C513.773 247.498 513.773 264.498 503.992 273.592Z" })
  }
));
LeftRightSolid.displayName = "LeftRightSolid";
var LeftRight_default = LeftRightSolid;

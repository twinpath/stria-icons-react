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
var Braille_exports = {};
__export(Braille_exports, {
  default: () => Braille_default
});
module.exports = __toCommonJS(Braille_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrailleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 240C222.375 240 208 254.375 208 272S222.375 304 240 304S272 289.625 272 272S257.625 240 240 240ZM80 48C44.625 48 16 76.625 16 112S44.625 176 80 176S144 147.375 144 112S115.375 48 80 48ZM240 400C222.375 400 208 414.375 208 432S222.375 464 240 464S272 449.625 272 432S257.625 400 240 400ZM592 144C609.625 144 624 129.625 624 112S609.625 80 592 80S560 94.375 560 112S574.375 144 592 144ZM80 208C44.625 208 16 236.625 16 272S44.625 336 80 336S144 307.375 144 272S115.375 208 80 208ZM80 400C62.375 400 48 414.375 48 432S62.375 464 80 464S112 449.625 112 432S97.625 400 80 400ZM432 240C414.375 240 400 254.375 400 272S414.375 304 432 304S464 289.625 464 272S449.625 240 432 240ZM592 240C574.375 240 560 254.375 560 272S574.375 304 592 304S624 289.625 624 272S609.625 240 592 240ZM240 48C204.625 48 176 76.625 176 112S204.625 176 240 176S304 147.375 304 112S275.375 48 240 48ZM592 400C574.375 400 560 414.375 560 432S574.375 464 592 464S624 449.625 624 432S609.625 400 592 400ZM432 48C396.625 48 368 76.625 368 112S396.625 176 432 176S496 147.375 496 112S467.375 48 432 48ZM432 400C414.375 400 400 414.375 400 432S414.375 464 432 464S464 449.625 464 432S449.625 400 432 400Z" })
  }
));
BrailleSolid.displayName = "BrailleSolid";
var Braille_default = BrailleSolid;

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
var GunSquirt_exports = {};
__export(GunSquirt_exports, {
  default: () => GunSquirt_default
});
module.exports = __toCommonJS(GunSquirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunSquirtRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 128H544C544 92.652 515.346 64 480 64H128V56C128 42.742 117.254 32 104 32S80 42.742 80 56V65.613C34.637 73.266 0 112.461 0 160C0 207.938 35.236 247.328 81.158 254.504L33.25 439.211C27.41 459.648 42.76 480 64.02 480H167.863C182.15 480 194.705 470.531 198.629 456.793L220.59 376H272V392C272 405.254 282.746 416 296 416S320 405.254 320 392V312C320 298.742 309.254 288 296 288S272 298.742 272 312V328H233.637L253.207 256H480C515.346 256 544 227.348 544 192H560C568.836 192 576 184.836 576 176V144C576 135.164 568.836 128 560 128ZM155.631 432H84.709L130.359 256H203.467L155.631 432ZM496 192C496 200.824 488.822 208 480 208H96C69.533 208 48 186.469 48 160S69.533 112 96 112H480C488.822 112 496 119.176 496 128V192ZM448 144H96C87.156 144 80 151.156 80 160S87.156 176 96 176H448C456.844 176 464 168.844 464 160S456.844 144 448 144Z" })
  }
));
GunSquirtRegular.displayName = "GunSquirtRegular";
var GunSquirt_default = GunSquirtRegular;

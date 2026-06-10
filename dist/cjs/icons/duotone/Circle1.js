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
var Circle1_exports = {};
__export(Circle1_exports, {
  default: () => Circle1_default
});
module.exports = __toCommonJS(Circle1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle1Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM320 384H192C178.75 384 168 373.25 168 360S178.75 336 192 336H232V196.844L217.312 206.625C206.266 213.938 191.359 210.969 184.031 199.969C176.672 188.938 179.656 174.031 190.688 166.688L242.688 132.031C250.078 127.094 259.547 126.656 267.328 130.844C275.125 135.031 280 143.156 280 152V336H320C333.25 336 344 346.75 344 360S333.25 384 320 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 360C344 373.25 333.25 384 320 384H192C178.75 384 168 373.25 168 360S178.75 336 192 336H232V196.844L217.312 206.625C206.266 213.938 191.359 210.969 184.031 199.969C176.672 188.938 179.656 174.031 190.688 166.688L242.688 132.031C250.078 127.094 259.547 126.656 267.328 130.844C275.125 135.031 280 143.156 280 152V336H320C333.25 336 344 346.75 344 360Z" })
    ]
  }
));
Circle1Duotone.displayName = "Circle1Duotone";
var Circle1_default = Circle1Duotone;

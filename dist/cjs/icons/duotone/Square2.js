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
var Square2_exports = {};
__export(Square2_exports, {
  default: () => Square2_default
});
module.exports = __toCommonJS(Square2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square2Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM296 384H152C142.078 384 133.188 377.906 129.609 368.625C126.031 359.375 128.531 348.875 135.875 342.219L244.313 243.906C251.359 236.969 255.625 226.906 255.625 216.25S251.359 195.531 243.625 187.938C227.391 172 200.875 172 184.609 187.938L173.594 198.719C164.141 208.062 148.969 207.875 139.656 198.406C130.375 188.938 130.531 173.719 140 164.469L151 153.687C185.797 119.5 242.453 119.5 277.25 153.687C294.25 170.375 303.625 192.594 303.625 216.25S294.25 262.125 277.25 278.812L214.188 336H296C309.25 336 320 346.75 320 360S309.25 384 296 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.003 360C320.003 373.25 309.253 384 296.003 384H152.003C142.082 384 133.191 377.906 129.613 368.625C126.035 359.375 128.535 348.875 135.878 342.219L244.316 243.906C251.363 236.969 255.628 226.906 255.628 216.25S251.363 195.531 243.628 187.938C227.394 172 200.878 172 184.613 187.938L173.597 198.719C164.144 208.062 148.972 207.875 139.66 198.406C130.378 188.938 130.535 173.719 140.003 164.469L151.003 153.687C185.8 119.5 242.457 119.5 277.253 153.687C294.253 170.375 303.628 192.594 303.628 216.25S294.253 262.125 277.253 278.812L214.191 336H296.003C309.253 336 320.003 346.75 320.003 360Z" })
    ]
  }
));
Square2Duotone.displayName = "Square2Duotone";
var Square2_default = Square2Duotone;

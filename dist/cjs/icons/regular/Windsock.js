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
var Windsock_exports = {};
__export(Windsock_exports, {
  default: () => Windsock_default
});
module.exports = __toCommonJS(Windsock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindsockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.527 122.693L166.527 56.025C164.307 55.563 162.1 55.342 159.934 55.342C142.717 55.342 128 69.324 128 87.354V104H48V24C48 10.744 37.254 0 24 0S0 10.744 0 24V488C0 501.254 10.746 512 24 512S48 501.254 48 488V312H128V328.646C128 346.674 142.719 360.658 159.934 360.658C162.1 360.658 164.305 360.436 166.527 359.973L486.527 293.307C501.365 290.215 512 277.137 512 261.979V154.02C512 138.863 501.365 125.785 486.527 122.693ZM128 264H48V152H128V264ZM368 147.029V268.969L272 288.969V127.029L368 147.029ZM176 107.029L224 117.029V298.969L176 308.969V107.029ZM464 248.969L416 258.969V157.029L464 167.029V248.969Z" })
  }
));
WindsockRegular.displayName = "WindsockRegular";
var Windsock_default = WindsockRegular;

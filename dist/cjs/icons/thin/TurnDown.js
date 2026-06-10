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
var TurnDown_exports = {};
__export(TurnDown_exports, {
  default: () => TurnDown_default
});
module.exports = __toCommonJS(TurnDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurnDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M317.926 367.254C313.833 357.848 304.739 352.005 294.24 352.005H199.993V71.998C199.993 32.312 167.682 0 127.995 0H8C3.594 0 0 3.594 0 8S3.594 16 8 16H127.995C158.869 16 183.993 41.124 183.993 71.998V352.005H89.747C79.247 352.005 70.154 357.848 66.06 367.254C62.123 376.254 63.873 386.379 70.622 393.66L172.9 503.75C177.775 509 184.712 512 191.993 512C199.274 512 206.211 509 211.117 503.75L313.364 393.66C320.114 386.379 321.864 376.254 317.926 367.254ZM301.614 382.785L199.399 492.876C195.649 496.875 188.306 496.875 184.618 492.876L82.372 382.785C78.903 379.067 80.06 375.16 80.716 373.66C82.247 370.098 85.622 368.004 89.747 368.004H294.24C298.364 368.004 301.739 370.098 303.27 373.66C303.927 375.16 305.083 379.067 301.614 382.785Z" })
  }
));
TurnDownThin.displayName = "TurnDownThin";
var TurnDown_default = TurnDownThin;

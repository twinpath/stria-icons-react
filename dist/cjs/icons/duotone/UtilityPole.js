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
var UtilityPole_exports = {};
__export(UtilityPole_exports, {
  default: () => UtilityPole_default
});
module.exports = __toCommonJS(UtilityPole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UtilityPoleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 56C128 42.744 117.254 32 104 32S80 42.744 80 56V64H128V56ZM24 32C10.746 32 0 42.744 0 56V64H48V56C48 42.744 37.254 32 24 32ZM83.156 128L224 221.896V183.438L140.844 128H83.156ZM488 32C474.746 32 464 42.744 464 56V64H512V56C512 42.744 501.254 32 488 32ZM408 32C394.746 32 384 42.744 384 56V64H432V56C432 42.744 421.254 32 408 32ZM288 183.438V221.896L428.844 128H371.156L288 183.438Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64V96C512 113.672 497.674 128 480 128H288V512H224V128H32C14.326 128 0 113.672 0 96V64H224V16C224 7.162 231.164 0 240 0H272C280.836 0 288 7.162 288 16V64H512Z" })
    ]
  }
));
UtilityPoleDuotone.displayName = "UtilityPoleDuotone";
var UtilityPole_default = UtilityPoleDuotone;

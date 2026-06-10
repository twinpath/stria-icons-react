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
var LitecoinSign_exports = {};
__export(LitecoinSign_exports, {
  default: () => LitecoinSign_default
});
module.exports = __toCommonJS(LitecoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LitecoinSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.241 264.797C5.257 278.844 18.069 288.016 31.991 288.016C34.897 288.016 37.866 287.609 40.804 286.766L64.001 280.139V213.58L23.21 225.234C6.225 230.094 -3.618 247.797 1.241 264.797ZM286.764 183.203C281.905 166.219 264.233 156.328 247.202 161.234L144.003 190.721V257.279L264.796 222.766C281.78 217.906 291.624 200.203 286.764 183.203Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.996 440C383.996 462.092 366.088 480 343.996 480H104C81.908 480 64 462.092 64 440V72C64 49.906 81.906 32 104 32C126.092 32 143.998 49.906 143.998 72V400H343.996C366.088 400 383.996 417.908 383.996 440Z" })
    ]
  }
));
LitecoinSignDuotone.displayName = "LitecoinSignDuotone";
var LitecoinSign_default = LitecoinSignDuotone;

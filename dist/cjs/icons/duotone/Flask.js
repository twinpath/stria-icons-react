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
var Flask_exports = {};
__export(Flask_exports, {
  default: () => Flask_default
});
module.exports = __toCommonJS(Flask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.23 403.5L319.992 215V64H327.992C341.238 64 351.988 53.25 351.988 40V24C351.988 10.75 341.238 0 327.992 0H120.007C106.761 0 96.011 10.75 96.011 24V40C96.011 53.25 106.761 64 120.007 64H128.007V215L10.769 403.5C-18.481 450.625 15.269 512 70.886 512H377.113C432.73 512 466.48 450.5 437.23 403.5ZM377.113 448H70.886C65.351 448 62.321 441.813 65.117 437.301L192.007 233.277V64H255.992V233.277L382.894 437.316C385.689 441.818 382.562 448 377.113 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M138.011 320H309.871L382.835 437.316C385.628 441.816 382.503 448 377.054 448H70.828C65.292 448 62.261 441.812 65.058 437.301L138.011 320Z" })
    ]
  }
));
FlaskDuotone.displayName = "FlaskDuotone";
var Flask_default = FlaskDuotone;
